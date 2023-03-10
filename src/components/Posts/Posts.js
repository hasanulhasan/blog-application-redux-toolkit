import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../features/Posts/PostsSlice';
import Loading from '../../Utils/Loading';
import Post from './Post';

const Posts = () => {
  const { posts, isLoading, isError, error } = useSelector(state => state.posts);
  const dispatch = useDispatch();
  // console.log(posts)
  const { isSave, sort } = useSelector(state => state.filter)

  useEffect(() => {
    dispatch(fetchPosts(isSave))
  }, [dispatch, isSave])

  //decide for rendering
  let content;
  if (isLoading) content = <Loading />
  if (isLoading && isError) {
    content = <div>{error}</div>
  }
  if (!isError && !isLoading && posts?.length === 0) {
    content = <div>Post was not found</div>
  }
  if (!isError && !isLoading && posts?.length > 0) {

    content = posts
      .filter(post => {
        if (sort === 'newest') {
          return post
        }
        else if (sort === 'most_liked') {
          return post
        }
        else {
          return post
        }
      })
      .map(post => <Post key={post.id} post={post} />)
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {/* <!-- single post --> */}
      {content}
      {/* <!-- Single Post Ends --> */}
    </main>
  );
};

export default Posts;