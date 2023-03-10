import React from 'react';
import { Link } from 'react-router-dom';
import PostTags from './PostTags';

const Post = ({ post }) => {
  const { id, title, description, image, likes, isSaved, createdAt, tags } = post;
  return (
    <div className="lws-card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>{likes}</p>
        </div>
        <Link to={`/blogs/${id}`} className="lws-postTitle"> {title} </Link>
        <div className="lws-tags">
          {
            tags.map(tag => <PostTags tag={tag} />)
          }
        </div>
        {/* <!-- Show this element if post is saved --> */}
        {
          isSaved &&
          <div className="flex gap-2 mt-4">
            <span className="lws-badge"> Saved </span>
          </div>
        }
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
};

export default Post;