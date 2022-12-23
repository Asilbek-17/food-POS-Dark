import React from 'react'
import foodImg from "../../assets/images/Image 3.jpg"
import { TopArrow } from '../../assets/images/Icon/icon';
import "./most.scss";

const items = [
    {
        id: 1,
        img: foodImg,
        text: "Spicy seasoned seafood noodles",
        amount: 120
    },
    {
        id: 2,
        img: foodImg,
        text: "Spicy seasoned seafood noodles",
        amount: 120
    },
    {
        id: 3,
        img: foodImg,
        text: "Spicy seasoned seafood noodles",
        amount: 120
    },

    {
        id: 4,
        img: foodImg,
        text: "Spicy seasoned seafood noodles",
        amount: 120
    }
]

function MostOrdered() {
    return (
        <div className='most-ordered'>
            <div className="d-flex items-center justify-between p-24">
                <h3 className="text-light-100">Most Ordered</h3>
                <button className="most-btn">
                    <TopArrow />
                    Today
                </button>
            </div>
            <ul className="most-list">
                {
                    items.map(item => (
                        <li key={item.id} className="most-item">
                            <img className='rounded' src={item.img} alt="food" />
                            <div className='most-wrapper'>
                                <h3 className='text-light-100'>{item.text}</h3>
                                <p className='text-light-300'>{item.amount}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <button className="text-danger-100 most-ordered-btn">
                View all
            </button>
        </div>
    )
}

export default MostOrdered