import React from 'react'
import MenuImg from "../../assets/images/Image 3.jpg";
import FoodItem from '../FoodItem/FoodItem';
import "./food-list.scss";
import CustomButton from '../CustomButton/CustomButton';

function FoodList() {
  const food = {
    title: "Spicy seasoned seafood noodles",
    price: 2.29,
    bowls: 20,
    image: MenuImg
  }

  const menu = Array(12).fill(food);

  return (
    <>
      <ul className="food-list">
        <li className="food-item empty">

          <CustomButton className="add-btn">
            + <br />
            Add new dish
          </CustomButton>
        </li>
        {menu.map(item => <FoodItem {...item} />)}

      </ul>
      
    </>
  )
}

export default FoodList