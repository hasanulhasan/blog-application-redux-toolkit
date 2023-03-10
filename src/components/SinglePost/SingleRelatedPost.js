import React from 'react';
import { Link } from 'react-router-dom';
import PostTags from '../Posts/PostTags';

const SingleRelatedPost = ({ post }) => {
  const { id, title, description, image, likes, isSaved, createdAt, tags } = post;
  return (
    <div className="card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link to={`/blogs/${id}`} className="text-lg post-title lws-RelatedPostTitle">
          {title}
        </Link>
        <div className="mb-0 tags">
          {
            tags.map(tag => <PostTags tag={tag} />)
          }
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default SingleRelatedPost;