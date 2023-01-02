import './category.scss';
import { NavLink } from 'react-router-dom';

export function MainCategory() {
	return (
		<ul className='mainCategory-list'>
			<li className='category-item'>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'category-link activeCategory' : 'category-link'
					}
					to={'hotdishes'}
				>
					Hot Dishes
				</NavLink>
			</li>
			<li className='category-item'>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'category-link activeCategory' : 'category-link'
					}
					to={'coldDishes'}
				>
					Cold Dishes
				</NavLink>
			</li>
			<li className='category-item'>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'category-link activeCategory' : 'category-link'
					}
					to={'soup'}
				>
					Soup
				</NavLink>
			</li>
			<li className='category-item'>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'category-link activeCategory' : 'category-link'
					}
					to={'gril'}
				>
					Grill
				</NavLink>
			</li>
			<li className='category-item'>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'category-link activeCategory' : 'category-link'
					}
					to={'appetizer'}
				>
					Appetizer
				</NavLink>
			</li>
			<li className='category-item'>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'category-link activeCategory' : 'category-link'
					}
					to={'dessert'}
				>
					Dessert
				</NavLink>
			</li>
		</ul>
	);
}
