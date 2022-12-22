import './category.scss';
import { NavLink } from 'react-router-dom';

export function MainCategory() {
	return (
		<ul className='category-list'>
			<li className='category-item'>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'category-link activeCategory' : 'category-link'
					}
					to={'/'}
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
					to={'grill'}
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
