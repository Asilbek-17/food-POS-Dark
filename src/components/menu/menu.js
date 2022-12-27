import {
	Logo,
	Home,
	Dashboard,
	Setting,
	Discount,
	LogOut,
	Message,
	Notification,
} from '../../assets/images/Icon/icon';
import './menu.scss';
import { NavLink } from 'react-router-dom';

export function Menu() {
	return (
		<>
			<ul className='stie-list'>
				<li className='site-item'>
					<a href='#!' className='menu-logo'>
						{<Logo />}
					</a>
				</li>
				<li className='site-item'>
					<NavLink
						to={'/home'}
						className={({ isActive }) =>
							isActive ? 'menu-link active' : 'menu-link'
						}
					>
						<span className='icon-span'> {<Home />} </span>
					</NavLink>
				</li>
				<li className='site-item'>
					<NavLink
						to={'/discount'}
						className={({ isActive }) =>
							isActive ? 'menu-link active' : 'menu-link'
						}
					>
						<span className='icon-span'> {<Discount />} </span>
					</NavLink>
				</li>
				<li className='site-item'>
					<NavLink
						to={'/dashboard'}
						className={({ isActive }) =>
							isActive ? 'menu-link active' : 'menu-link'
						}
					>
						<span className='icon-span'> {<Dashboard />} </span>
					</NavLink>
				</li>
				<li className='site-item'>
					<NavLink
						to={'/message'}
						className={({ isActive }) =>
							isActive ? 'menu-link active' : 'menu-link'
						}
					>
						<span className='icon-span'> {<Message />} </span>
					</NavLink>
				</li>
				<li className='site-item'>
					<NavLink
						to={'/notification'}
						className={({ isActive }) =>
							isActive ? 'menu-link active' : 'menu-link'
						}
					>
						<span className='icon-span'> {<Notification />} </span>
					</NavLink>
				</li>
				<li className='site-item'>
					<NavLink
						to={'/setting'}
						className={({ isActive }) =>
							isActive ? 'menu-link active' : 'menu-link'
						}
					>
						<span className='icon-span'> {<Setting />} </span>
					</NavLink>
				</li>
				<li className='site-item'>
					<NavLink
						to={'/logout'}
						className={({ isActive }) =>
							isActive ? 'menu-link active' : 'menu-link'
						}
					>
						<span className='icon-span'> {<LogOut />} </span>
					</NavLink>
				</li>
			</ul>
		</>
	);
}
