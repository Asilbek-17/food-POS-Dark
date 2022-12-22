import React from 'react';
import "./order.scss"

export const OrderBody = () => {
	return (
		<li className='order-item'>
			<div className='order-item-top'>
				<p className='orderBody-text'>
					Spicy seasoned sea...
					<span className='orderBody-span'>$ 2.29</span>
				</p>
                <input className='num-inp' type="text" />
			</div>
			<div className='order-item-bottom'></div>
		</li>
	);
};
