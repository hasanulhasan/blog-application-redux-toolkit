import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isSaved } from '../../features/Filter/FilterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  // const { isSave } = useSelector(state => state.filter);
  // const [checkValue, setCheckValue] = useState();
  // console.log(checkValue);

  return (
    <div className="sidebar-content">
      <h4>Filter</h4>
      <form className="radio-group">
        {/* <!-- handle filter on button click --> */}
        <div onClick={() => dispatch(isSaved('false'))}>
          <input type="radio" name="filter" id="lws-all" checked className="radio" />
          <label for="lws-all">All</label>
        </div>
        <div onClick={() => dispatch(isSaved('true'))}>
          <input type="radio" name="filter" id="lws-saved" className="radio" />
          <label for="lws-saved">Saved</label>
        </div>
      </form>
    </div>
  );
};

export default Filter;