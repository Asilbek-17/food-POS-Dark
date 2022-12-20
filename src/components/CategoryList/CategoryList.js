import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem';
import "./category-list.scss";

// fake data
const categories = ["Hot Dishes","Cold Dishes","Soup", "Grill","Appelizer","Dessert"];
function CategoryList() {
  return (
    <ul className="category-list">
        {categories.map(category => (
            <CategoryItem key={Math.random() * 10000} text={category} />
        ))}
    </ul>
  )
}

export default CategoryList