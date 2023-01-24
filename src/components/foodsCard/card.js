import React, { useContext } from 'react';
// import dish2 from '../../assets/images/Image2.jpg';
// import dish1 from '../../assets/images/Images.jpg';
// import dish3 from '../../assets/images/Image 3.jpg';
// import dish4 from '../../assets/images/Image 4.jpg';
// import dish5 from '../../assets/images/Image 5.jpg';
// import dish6 from '../../assets/images/Image 6.jpg';
// import dish7 from '../../assets/images/Image 7.jpg';
// import dish8 from '../../assets/images/Image 8.jpg';
// import dish9 from '../../assets/images/Image 9.jpg';
import "./card.scss"
import { FoodContext } from '../../context/FoodContext';

export const CardFoods = () => {
	const {menuItems} = useContext(FoodContext)

	return menuItems.map((item) => {
		return (
			<li className='mainFood-item'>
				<img width={140} height={140} className='mainFood-img' src={'http://localhost:5001/' + item.image} alt={item.name} />
                <h4 className='mainFood-title'>{item.name}</h4>
                <p className='mainFood-text'>{item.price}$</p>
                <p className='mainFood-text2'>{item.bowls} Bowls</p>
			</li>
		);
	});
};
