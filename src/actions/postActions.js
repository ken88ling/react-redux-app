import { FETCH_POSTS, NEW_POST } from "./types";

//cleaner way

export const fetchPosts = () => dispatch => {
  console.log("post Actions");

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
