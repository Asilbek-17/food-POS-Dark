import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import "./food.scss";

function FoodItem({image,title,price,bowls}) {
  return (
    <li className="food-item">
        <img src={image} alt="A beautiful and lovely food" className="food-img rounded" />
        <h3 className="food-name text-light-100 text-center mb-0" title='Spicy seasoned seafood noodles'>{title}</h3>
        <div className="food-info">
            <p className="food-price text-light-200">${price}</p> 
            <p className="food-separator"></p> 
            <p className="food-bowls text-light-200">{bowls} Bowls</p>
        </div>
        <CustomButton className="edit-btn">
          Edit dish
        </CustomButton>
    </li>
  )
}

export default FoodItem