import React from 'react';
import { Cash, CreditCardIcon, Paypal } from '../../assets/images/Icon/icon';
import './Modal.scss';

export const Modal = ({ modalIsOpen, openModal }) => {
	function modalFormSubmit(evt) {
		evt.preventDefault();
	}

	function modalInputSubmit(evt) {
		console.log(evt.target.value);
	}

	return (
		<div className={'main-modal ' + modalIsOpen}>
			<div className='modal-head'>
				<h5 className='modalHead-title'>Payment</h5>
				<p className='modalHead-text'>3 payment method available</p>
			</div>
			<div className='modal-body'>
				<h5 className='modalBody-title'>Payment Method</h5>
				<div className='modal-btnBox'>
					<label className='payment-modal'>
						<input className='radion-inp2 ' type='radio' name='paymetn-radio' />
						<span className='payment-span'>
							<CreditCardIcon />
							<span className='payment-span-tetx'>Credit Card</span>
						</span>
					</label>
					<label className='payment-modal'>
						<input className='radion-inp2 ' type='radio' name='paymetn-radio' />
						<span className='payment-span'>
							<Paypal />
							<span className='payment-span-tetx'>Paypal</span>
						</span>
					</label>
					<label className='payment-modal'>
						<input className='radion-inp2 ' type='radio' name='paymetn-radio' />
						<span className='payment-span'>
							<Cash />
							<span className='payment-span-tetx'>Cash</span>
						</span>
					</label>
				</div>
			</div>
			<form onSubmit={modalFormSubmit}>
				<label className='modal-label'>
					<p className='label-text'>Cardholder Name</p>
					<input className='modal-inp'/>
				</label>
				<label className='modal-label'>
					<p className='label-text'>Card Number</p>
					<input className='modal-inp' type={'number'} />
				</label>
				<div className='modalForm-box1'>
					<label className='modal-label2'>
						<p className='label-text'>Expiration Date</p>
						<input className='modalForm-inp1' type='text' />
					</label>
					<label className='modal-label2'>
						<p className='label-text'>CVV</p>
						<input className='modalForm-inp' type='password' />
					</label>
				</div>
				<div className='modalForm-box2'>
					<label className='modal-label2'>
						<p className='label-text'>Order Type</p>
						<select className='modal-select'>
							<option value='' selected>
								Dine In
							</option>
						</select>
					</label>
					<label className='modal-label2'>
						<p className='label-text'>Table no.</p>
						<input className='modalForm-inp' type='number' />
					</label>
				</div>
				<div className='modal-bottom'>
					<button className='modalBtn-exit' onClick={openModal} type='button'>
						Cancel
					</button>
					<button className='modalBtn-confirm' type='submit'>
						Confirm Payment
					</button>
				</div>
			</form>
		</div>
	);
};
