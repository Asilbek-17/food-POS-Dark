import React from 'react'
import CategoryList from '../CategoryList/CategoryList';
import FoodList from '../FoodList/FoodList';
import "./categories.scss";


function Categories() {
  return (
    <section className="categories bg-dark-100">
        <div className="container">
            <h3 className="categories-title mt-0 text-light-100">Products Management</h3>
            <CategoryList />
            <FoodList />
        </div>
    </section>
  )
}

export default Categories;