import React from 'react';
import { CardFoods } from '../../components/foodsCard/card';
import './HotDishes.scss';

export const HotDishes = () => {
	return (
		<ul className='foods-list'>
			<CardFoods />
		</ul>
	);
};
