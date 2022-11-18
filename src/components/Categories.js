import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const cats = useSelector((state) => state.cats);
  return (
    <div>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
      <p>{cats}</p>
    </div>

  );
};

export default Categories;
