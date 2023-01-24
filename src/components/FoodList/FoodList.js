import React, { useContext, useMemo, useState } from 'react'
import axios from "axios";
import FoodItem from '../FoodItem/FoodItem';
import CustomButton from '../CustomButton/CustomButton';
import "./food-list.scss";
import { FoodContext } from "../../context/FoodContext";
import { useRef } from "react";
import { useEffect } from "react";

function FoodList() {
  const { menuItems, setMenuItems } = useContext(FoodContext);
  const [categories, setCategories] = useState([]);
  const [dialogState, setDialogState] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [itemId, setItemId] = useState(0);
  const foodImageRef = useRef();
  const foodNameRef = useRef();
  const foodPriceRef = useRef();
  const foodBowlsRef = useRef();
  const categoryRef = useRef();
  const handleFormSubmit = async (e, id) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", foodNameRef.current.value);
    formData.append("price", foodPriceRef.current.value);
    formData.append("bowls", foodBowlsRef.current.value);
    formData.append("category_id", Number(categoryRef.current.value));
    formData.append("food_img", foodImageRef.current.files[0]);
    if(isEdit){
      await axios.put(`http://localhost:5001/food/${itemId}`,formData);
    }else{
      await axios.post(`http://localhost:5001/food`, formData);
    }
    const foods = await axios.get("http://localhost:5001/food/1");
    setMenuItems(foods.data);
    setDialogState(false);
    setIsEdit(false);
  }

  useMemo(async()=>{
    const categoryItems = await axios.get("http://localhost:5001/category");
    setCategories(categoryItems.data);
  },[]);

  useEffect(()=>{
    if(itemId !== 0){
      const item = menuItems.find(item => item.id === itemId);
      foodNameRef.current.value = item.name;
      foodPriceRef.current.value = item.price;
      foodBowlsRef.current.value = item.bowls;
      foodImageRef.current.required = false;

    }
  },[itemId, menuItems]);

  return (
    <>
      <ul className="food-list">
        <li className="food-item empty" onClick={() => setDialogState(prevState => !prevState)}>

          <CustomButton className="add-btn">
            + <br />
            Add new dish
          </CustomButton>
        </li>
        {menuItems.map(item => <FoodItem key={item.id} {...item} isEdit={isEdit} setId={setItemId} setIsEdit={setIsEdit} />)}

      </ul>

      <dialog open={dialogState || isEdit}>
        <form action="#" onSubmit={handleFormSubmit} className="dialog-form">
          <input ref={foodImageRef} type="file" name="food_img" id="foodImg" required />
          <input ref={foodNameRef} type="text" name="food_name" id="foodName" required />
          <input ref={foodPriceRef} type="number" name="food_price" id="foodPrice" required />
          <input ref={foodBowlsRef} type="number" name="food_bowls" id="foodBowls" required />
          <select ref={categoryRef} name="food_category" id="foodCategory">
            {categories?.map(category => {
              if (category.id === 1) return <option defaultValue={true} value={category.id} key={category.id} data-id={category.id}>{category.name.toLowerCase()}</option>       
              return <option value={category.id} key={category.id} data-id={category.id}>{category.name.toLowerCase()}</option>
            })}
          </select>
          <button type="submit">Submit</button>
        </form>
      </dialog>

    </>
  )
}

export default FoodList