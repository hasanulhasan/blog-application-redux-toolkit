import React from 'react';
import { useDispatch } from 'react-redux';
import { sortSelected } from '../../features/Filter/FilterSlice';

const Sort = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar-content">
      <h4>Sort</h4>
      <select onChange={(e) => dispatch(sortSelected(e.target.value))} name="sort" id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500">
        <option value="default">Default</option>
        <option value="newest">Newest</option>
        <option value="most_liked">Most Liked</option>
      </select>
    </div>
  );
};

export default Sort;