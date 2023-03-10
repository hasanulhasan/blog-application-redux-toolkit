import axios from "../../Utils/axios"

export const getPost = async (id) => {
  const res = await axios.get(`/blogs/${id}`);
  return res.data;
}