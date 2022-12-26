import React from 'react';
import "./orderHead.scss"

export const OrederHead = () => {
  return (
    <div className='mainOrder-top'>
        <h4 className='mainOrder-title'>Orders #34562</h4>
        <div className="mainOrder-boxBtn">
            {/* <button className='oreder-button activeOrderBtn'>Dine In</button>
            <button className='oreder-button'>To Go</button>
            <button className='oreder-button'>Delivery</button> */}
            <label className='order-label'>
            <input className='radion-inp' type="radio" name="order-radio"/>
            <span className='order-inp-span'>Dine In</span>
            </label>
            <label className='order-label'>
            <input className='radion-inp' type="radio" name="order-radio"/>
            <span className='order-inp-span '>To Go</span>
            </label>
            <label className='order-label'>
            <input className='radion-inp' type="radio" name="order-radio"/>
            <span className='order-inp-span '>Delivery</span>
            </label>
        </div>
        <div className="mainOrder-boxText">
            <p className='mainOrder-text1'>Item</p>
            <p className='mainOrder-text2'>Qty</p>
            <p className='mainOrder-text3'>Price</p>
        </div>
    </div>
  )
}
