import React from 'react';
import './order.scss';
import dish2 from '../../assets/images/Image2.jpg';
import dish1 from '../../assets/images/Images.jpg';
import dish3 from '../../assets/images/Image 3.jpg';
import dish4 from '../../assets/images/Image 4.jpg';
import dish5 from '../../assets/images/Image 5.jpg';
import dish6 from '../../assets/images/Image 6.jpg';
import dish7 from '../../assets/images/Image 7.jpg';
import dish8 from '../../assets/images/Image 8.jpg';
import dish9 from '../../assets/images/Image 9.jpg';
import { DeleteIcon } from '../../assets/images/Icon/icon';

export const OrderBody = () => {
	const hotDishes = [
		{
			id: 1,
			foodImg: dish1,
			foodName: 'Spicy seasoned seafood noodles',
			foodPrice: '$ 2.29',
			isAvailable: '20 Bowls available',
		},

		{
			id: 2,
			foodImg: dish2,
			foodName: 'Salted Pasta with mushroom sauce',
			foodPrice: '$ 2.69',
			isAvailable: '11 Bowls available',
		},

		{
			id: 3,
			foodImg: dish3,
			foodName: 'Beef dumpling in hot and sour soup',
			foodPrice: '$ 2.99',
			isAvailable: '16 Bowls available',
		},

		{
			id: 4,
			foodImg: dish4,
			foodName: 'Healthy noodle with spinach leaf',
			foodPrice: '$ 3.29',
			isAvailable: '22 Bowls available',
		},
		{
			id: 1,
			foodImg: dish5,
			foodName: 'Spicy seasoned seafood noodles',
			foodPrice: '$ 2.29',
			isAvailable: '20 Bowls available',
		},

		{
			id: 2,
			foodImg: dish6,
			foodName: 'Salted Pasta with mushroom sauce',
			foodPrice: '$ 2.69',
			isAvailable: '11 Bowls available',
		},
		{
			id: 5,
			foodImg: dish7,
			foodName: 'Hot spicy fried rice with omelet',
			foodPrice: '$ 3.49',
			isAvailable: '13 Bowls available',
		},
		{
			id: 6,
			foodImg: dish8,
			foodName: 'Spicy instant noodle with special omelette',
			foodPrice: '$ 3.59',
			isAvailable: '17 Bowls available',
		},
		{
			id: 7,
			foodImg: dish9,
			foodName: 'Parmesan Spinach Mushroom Pasta Skillet',
			foodPrice: '$ 4.25',
			isAvailable: '20 Bowls available',
		},
		{
			id: 8,
			foodImg: dish4,
			foodName: 'Garlic Mushrooms',
			foodPrice: '$ 5.60',
			isAvailable: '12 Bowls available',
		},
		{
			id: 9,
			foodImg: dish5,
			foodName: 'Baked Honey Cilantro Lime Salmon',
			foodPrice: '$ 10.30',
			isAvailable: '5 Bowls available',
		},
	];
	return hotDishes.map((item) => {
		return (
			<li key={item.id} className='order-item'>
				<div className='order-item-top'>
					<p className='orderBody-text'>
						Spicy seasoned sea...
						<span className='orderBody-span'>{item.foodPrice}</span>
					</p>
					<input className='num-inp' type='text' />
					<input
						className='text-inp'
						type='text'
						placeholder='Please, just a little bit spicy only.'
					/>
				</div>
				<div className='order-item-bottom'>
					<p className='order-item-bottom-text'>{item.foodPrice}</p>
					<button className='order-deleteBtn'> {<DeleteIcon />} </button>
				</div>
			</li>
		);
	});
};
