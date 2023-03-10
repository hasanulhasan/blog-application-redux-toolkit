import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PostGrid from '../components/SinglePost/PostGrid';
import RelatedPostList from '../components/SinglePost/RelatedPostList';
import { fetchPost } from '../features/Post/PostSlice';
import Loading from '../Utils/Loading';

const Post = () => {
  const { post, isLoading, isError, error } = useSelector(state => state.post);

  const dispatch = useDispatch();
  const { postId } = useParams();

  useEffect(() => {
    dispatch(fetchPost(postId))
  }, [dispatch, postId])

  const { id, tags } = post;

  let content = null;
  if (isLoading) content = <Loading />
  if (!isLoading && isError) {
    content = <div>{error}</div>
  }
  if (!isLoading && !isError && post?.id === 0) {
    content = <div>No post was found</div>
  }

  if (!isLoading && !isError && post?.id > 0) {
    content = <>
      {/* <!-- detailed post  --> */}
      <PostGrid post={post} />
      {/* <!-- detailed post ends --> */}
      {/* <!-- related posts --> */}
      <RelatedPostList currentPostId={id} tags={tags} />
      {/* <!-- related posts ends --> */}
    </>
  }


  return (
    <body>
      {/* <!-- Go Home / Go Back --> */}
      <div className="container mt-8">
        <Link to='/' className="inline-block text-gray-600 home-btn" id="lws-goHome"><i
          className="mr-2 fa-solid fa-house"></i>Go Home</Link>
      </div>
      <section className="post-page-container">
        {content}
      </section>
    </body>
  );
};

export default Post;