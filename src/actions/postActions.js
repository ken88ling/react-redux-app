import { FETCH_POSTS, NEW_POST } from "./types";

//cleaner way

export const createPost = postData => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};

export const fetchPosts = () => dispatch => {
  console.log("post action called");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(postsData =>
      dispatch({
        type: FETCH_POSTS,
        payload: postsData
      })
    );
};

// export function fetchPosts() {
//   return function(dispatch) {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(res => res.json())
//       .then(posts =>
//         dispatch({
//           type: FETCH_POSTS,
//           payload: posts
//         })
//       );
//   };
// }
