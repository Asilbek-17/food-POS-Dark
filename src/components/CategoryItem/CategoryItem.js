import React from 'react'
import "./category-item.scss";

function CategoryItem({ text }) {
  return (
    <li className="category-item">
      <button className="category-btn text-light-100">
        {text}
      </button>
    </li>
  )
}

export default CategoryItem