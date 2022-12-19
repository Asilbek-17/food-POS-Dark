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


export function Menu() {
	return (
		<ul className='stie-list'>
			<li className='site-item'>
				<a to={"/"} className='logo-link' href="#!">
					{<Logo />}
				</a>
			</li>
			<li className='site-item'>
				<a className='menu-link active' href='#!'>
					<span className='icon-span'> {<Home />} </span>
				</a>
			</li>
			<li className='site-item'>
				<a className='menu-link' href='#!'>
					<span className='icon-span'> {<Discount />} </span>
				</a>
			</li>
			<li className='site-item'>
				<a className='menu-link' href='#!'>
					<span className='icon-span'> {<Dashboard />} </span>
				</a>
			</li>
			<li className='site-item'>
				<a className='menu-link' href='#!'>
					<span className='icon-span'> {<Message />} </span>
				</a>
			</li>
			<li className='site-item'>
				<a className='menu-link' href='#!'>
					<span className='icon-span'> {<Notification />} </span>
				</a>
			</li>
			<li className='site-item'>
				<a className='menu-link' href='#!'>
					<span className='icon-span'> {<Setting />} </span>
				</a>
			</li>
			<li className='site-item'>
				<a className='menu-link' href='#!'>
					<span className='icon-span'> {<LogOut />} </span>
				</a>
			</li>
		</ul>
	);
}
