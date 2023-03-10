import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPosts } from "./PostsAPI"

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: ''
}

export const fetchPosts = createAsyncThunk('posts/fetchPost', async (isSave) => {
  const posts = await getPosts(isSave);
  return posts;
})

const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isError = false;
      state.isLoading = true
    }).addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    }).addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = true;
      state.posts = [];
      state.isError = true;
      state.error = action.error?.message
    })
  }
})

export default PostsSlice.reducer;