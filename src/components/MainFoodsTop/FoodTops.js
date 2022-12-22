import React from 'react'
import "./FoodTop.scss"

export const FoodTops = () => {
  return (
    <div className='food-top'>
        <h3 className='foodTop-title'>Choose Dishes</h3>
        <select className='foodTop-select'>
            <option value="" selected>Dine In</option>
        </select>
    </div>
  )
}
