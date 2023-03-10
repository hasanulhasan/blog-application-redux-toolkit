import axios from "../../Utils/axios"

export const getRelatedPosts = async ({ tags, id }) => {

  const limit = 4;
  let queryString =
    tags?.length > 0 ? tags.map((tag) => `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}` : `id_ne=${id}&_limit=${limit}`;

  const res = await axios.get(`/blogs?${queryString}`);
  return res.data;
}