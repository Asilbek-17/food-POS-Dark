import React, { useContext } from 'react'
import "./category-item.scss";
import { Link, NavLink } from 'react-router-dom';
import { FoodContext } from "../../context/FoodContext";
import axios from "axios";

function CategoryItem({ text, category_id }) {
  const { setMenuItems } = useContext(FoodContext);
  
  return (
    <li className="category-item">
      <NavLink to={text.toLowerCase()} onClick={async()=>{
        const categoryMenuItems = await axios.get(`http://localhost:5000/food/${category_id}`);
        setMenuItems(categoryMenuItems.data);
      }} className={({isActive}) => (
        isActive ? "category-btn text-danger-100 active" : "category-btn text-light-100"
      <NavLink to={text.toLowerCase()} className={({isActive}) => (
        isActive ? "category-btn text-danger-100 active1" : "category-btn text-light-100"
      )}>
        {text}
      </NavLink>
    </li>
  )
}

export default CategoryItem