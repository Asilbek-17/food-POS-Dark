import React, { useState } from 'react'
import { useEffect } from "react";
import axios from "axios";
import CategoryItem from '../CategoryItem/CategoryItem';
import "./category-list.scss";

// fake data
function CategoryList() {
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    const getCategories = async ()=>{
      const categoryItems = await axios.get("http://localhost:5000/category");
      console.log(categoryItems.data);
      setCategories(categoryItems.data); 
    }
    getCategories()
  },[]);
  return (
    <ul className="category-list">
        {categories.map(category => (
            <CategoryItem key={crypto.randomUUID()} category_id={category.id} text={category.name} />
        ))}
    </ul>
  )
}

export default CategoryList