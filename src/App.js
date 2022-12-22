import React from 'react';
import { Menu } from './components/menu/menu';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/Home';
import { DashboardPage } from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';
import { MainOrder } from './components/MainOrder/MainOrder';

export function App() {
	return (
		<>
			<Menu />
			{/* <MainOrder /> */}
			<Routes>
				<Route path='/*' element={<HomePage />} />
				<Route path='/dashboard' element={<DashboardPage />} />
				<Route path='/setting' element={<Settings />} />
			</Routes>
		</>
	);
}
