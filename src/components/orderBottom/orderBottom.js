import React from 'react';
import "./orderBottom.scss"

export const OrderBottom = ({openModal}) => {
	return (
		<div className='order-bottom'>
			<p className='orderBottom-text'>
				Discount <span className='orderBottom-span'>$0</span>
			</p>
			<p className='orderBottom-text'>
				Sub total <span className='orderBottom-span'> $ 21,03</span>
			</p>
            <button className='orderBottom-btn' onClick={openModal}>Continue to Payment</button>
		</div>
	);
};
