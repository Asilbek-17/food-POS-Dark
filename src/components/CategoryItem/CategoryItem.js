import React from 'react'
import "./category-item.scss";
import { Link, NavLink } from 'react-router-dom';

function CategoryItem({ text }) {
  return (
    <li className="category-item">
      <NavLink to={text.toLowerCase()} className={({isActive}) => (
        isActive ? "category-btn text-danger-100 active1" : "category-btn text-light-100"
      )}>
        {text}
      </NavLink>
    </li>
  )
}

export default CategoryItem