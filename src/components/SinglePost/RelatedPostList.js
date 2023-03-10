import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedPosts } from '../../features/RelatedPosts/RelatedPostsSlice';

import Loading from '../../Utils/Loading';
import SingleRelatedPost from './SingleRelatedPost';

const RelatedPostList = ({ currentPostId, tags }) => {

  const dispatch = useDispatch();
  const { relatedPosts, isLoading, isError, error } = useSelector(state => state.relatedPosts)

  useEffect(() => {
    dispatch(fetchRelatedPosts({ tags, id: currentPostId }))
  }, [dispatch, tags, currentPostId])

  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <div>{error}</div>
  }
  if (!isLoading && !isError && relatedPosts?.length === 0) {
    content = <div className="col-span-12">No posts was found</div>
  }
  if (!isLoading && !isError && relatedPosts?.length > 0) {
    content = relatedPosts.map(post => <SingleRelatedPost key={post.id} post={post} />)
  }


  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
      <div className="space-y-4 related-post-container">
        {/* <!-- related post  --> */}
        {content}
        {/* <!-- related post ends --> */}
      </div>
    </aside>
  );
};

export default RelatedPostList;