import React, { useEffect, useState } from 'react';
import { Modal } from '../MainModal/Modal';
import { OrderBody } from '../orderBody/orderBody';
import { OrderBottom } from '../orderBottom/orderBottom';
import { OrederHead } from '../orderHead/orederHead';
import './MainOrder.scss';

export const MainOrder = () => {
	const [modalIsOpen, setIsOpen] = useState(localStorage.getItem('modal') || 'close');

	useEffect(() => {
		localStorage.setItem('modal', modalIsOpen)
	}, [modalIsOpen])

	function openModal() {
		if(modalIsOpen === 'close') {
			setIsOpen('open')
		} else {
			setIsOpen('close')
		}
	}


	return (
		<>
			<Modal modalIsOpen={modalIsOpen} openModal={openModal}/>
			<div className='main-order'>
				<OrederHead />
				<ul className='oreder-list'>
					<OrderBody />
				</ul>
				<OrderBottom openModal={openModal}/>
			</div>
		</>
	);
};
