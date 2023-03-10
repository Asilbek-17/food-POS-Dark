import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainCategory } from '../../components/categoryLinks/category';
import { FoodTops } from '../../components/MainFoodsTop/FoodTops';
import { MainHeader } from '../../components/mainHeader/mainHeader';
import { MainOrder } from '../../components/MainOrder/MainOrder';
import { Menu } from '../../components/menu/menu';
import { Appetizer } from '../Appetizer/Appetizer';
import { ColdDishes } from '../ColdDishes/ColdDishes';
import { Dessert } from '../Dessert/Dessert';
import { Grill } from '../Grill/Grill';
import { HotDishes } from '../HotDishes/HotDishes';
import { Soup } from '../Soup/Soup';
import './Home.scss';

export const HomePage = () => {
	return (
		<div className='home-page'>
			<div className='containerPage'>
				<div className='relative-box'>
					<MainHeader />
					<MainCategory />
					<FoodTops />
					<MainOrder />
				</div>
				<Routes>
					<Route path='hotdishes' element={<HotDishes />} />
					<Route path='coldDishes' element={<ColdDishes />} />
					<Route path='soup' element={<Soup />} />
					<Route path='grill' element={<Grill />} />
					<Route path='appetizer' element={<Appetizer />} />
					<Route path='dessert' element={<Dessert />} />
				</Routes>
			</div>
		</div>
	);
};
