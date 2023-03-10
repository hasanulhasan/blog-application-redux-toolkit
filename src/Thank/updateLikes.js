import { fetchPost } from "../features/Post/PostSlice";


const updateLikes = (doId, likes) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/blogs/${doId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        likes: likes + 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const post = await response.json();
    dispatch(fetchPost(post.id));
  }
}

export default updateLikes;