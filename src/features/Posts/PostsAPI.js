import axios from "../../Utils/axios"

export const getPosts = async (isSave) => {
  let queryString = '';
  if (isSave !== '') {
    queryString = `isSaved=${isSave}`
  }
  const res = await axios.get(`/blogs/?${queryString}`);
  return res.data;
}