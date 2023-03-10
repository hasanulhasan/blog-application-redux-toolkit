import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRelatedPosts } from "./RelatedPostsAPI";

const initialState = {
  relatedPosts: [],
  isLoading: false,
  isError: false,
  error: ''
}

export const fetchRelatedPosts = createAsyncThunk('relatedPosts/fetchPost', async ({ tags, id }) => {
  const relatedPosts = await getRelatedPosts({ tags, id });
  return relatedPosts;
})

const PostsSlice = createSlice({
  name: 'relatedPosts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRelatedPosts.pending, (state) => {
      state.isError = false;
      state.isLoading = true
    }).addCase(fetchRelatedPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.relatedPosts = action.payload;
    }).addCase(fetchRelatedPosts.rejected, (state, action) => {
      state.isLoading = true;
      state.relatedPosts = [];
      state.isError = true;
      state.error = action.error?.message
    })
  }
})

export default PostsSlice.reducer;