import React from 'react';
import { useSelector } from 'react-redux';

const Categories = () => {
  const cats = useSelector((state) => state.cats);
  return (
    <div>
      {cats.map((cat) => (
        <div className="cat-container" key={cat.id}>
          <h3>{cat.name}</h3>
          <p>{cat.status}</p>
        </div>
      ))}
    </div>

  );
};

export default Categories;
