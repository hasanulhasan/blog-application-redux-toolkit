import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPost } from '../../features/Post/PostSlice';
import updateSave from '../../Thank/updateSave';
import PostTags from '../Posts/PostTags';

const PostGrid = ({ post }) => {
  const dispatch = useDispatch();
  const { id, title, description, image, likes, isSaved, createdAt, tags } = post;

  const handleSave = (doId, currentStatus) => {
    dispatch(updateSave(doId, currentStatus));
  }

  return (
    <main className="post">
      <img src={image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {
            tags.map(tag => <PostTags tag={tag} />)
          }
        </div>
        <div className="btn-group">
          {/* <!-- handle like on button click --> */}
          <button className="like-btn" id="lws-singleLinks">
            <i className="fa-regular fa-thumbs-up"></i> {likes}
          </button>
          {/* <!-- handle save on button click --> */}
          {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
          {
            isSaved === true ? <button className="active save-btn" id="lws-singleSavedBtn">
              <i className="fa-regular fa-bookmark"></i> Saved
            </button> :
              <button onClick={() => handleSave(id, isSaved)} className="save-btn" id="lws-singleSavedBtn">
                <i className="fa-regular fa-bookmark"></i> Save
              </button>
          }
        </div>
        <div className="mt-6">
          <p>
            {description}
          </p>
        </div>
      </div>
    </main>
  );
};

export default PostGrid;