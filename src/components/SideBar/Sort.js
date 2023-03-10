import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Sort = () => {
  const dispatch = useDispatch();
  // const { sort } = useSelector(state => state.filter);


  return (
    <div className="sidebar-content">
      <h4>Sort</h4>
      <select name="sort" id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500">
        <option value="">Default</option>
        <option value="newest">Newest</option>
        <option value="most_liked">Most Liked</option>
      </select>
    </div>
  );
};

export default Sort;