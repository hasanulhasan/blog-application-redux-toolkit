import { fetchPost } from "../features/Post/PostSlice";


const updateSave = (doId, currentStatus) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/blogs/${doId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        isSaved: !currentStatus
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const post = await response.json();
    console.log('kaj hoice', post)

    dispatch(fetchPost(post.id));
  }
}

export default updateSave;