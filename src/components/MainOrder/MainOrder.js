import React from 'react';
import { OrderBody } from '../orderBody/orderBody';
import { OrderBottom } from '../orderBottom/orderBottom';
import { OrederHead } from '../orderHead/orederHead';
import "./MainOrder.scss"

export const MainOrder = () => {
	return (
		<div className='main-order'>
			<OrederHead />
			<ul className='oreder-list'>
				<OrderBody />
			</ul>
			<OrderBottom />
		</div>
	);
};
