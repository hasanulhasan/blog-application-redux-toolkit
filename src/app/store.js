import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/Posts/PostsSlice'
import postReducer from '../features/Post/PostSlice'
import relatedPostsReducer from '../features/RelatedPosts/RelatedPostsSlice'
import filterReducer from '../features/Filter/FilterSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: postReducer,
    relatedPosts: relatedPostsReducer,
    filter: filterReducer
  },
});
