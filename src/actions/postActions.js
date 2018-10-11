import { FETCH_POSTS, NEW_POST } from "./types";

//cleaner way

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
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
