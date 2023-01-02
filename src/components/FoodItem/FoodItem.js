import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import "./food.scss";

function FoodItem({bowls, id, image, price,name, isEdit,setId, setIsEdit}) {
  return (
    <li className="food-item">
        <img src={`http://localhost:5000/${image}`} alt="A beautiful and lovely food" className="food-img rounded" />
        <h3 className="food-name text-light-100 text-center mb-0" title='Spicy seasoned seafood noodles'>{name}</h3>
        <div className="food-info">
            <p className="food-price text-light-200">${price}</p> 
            <p className="food-separator"></p> 
            <p className="food-bowls text-light-200">{bowls} Bowls</p>
        </div>
        <CustomButton className="edit-btn" onClick={()=> {
          setIsEdit(prevState => !prevState);
          setId(id);
        }}>
          Edit dish
        </CustomButton>
    </li>
  )
}

export default FoodItem