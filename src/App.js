import React from 'react';
import { Menu } from './components/menu/menu';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/Home';
import { DashboardPage } from './pages/Dashboard/Dashboard';
import { SettingPage } from './pages/Setting/Setting';

export function App() {
	return (
		<>
			<Menu />
			<Routes>
				<Route path='/*' element={<HomePage />} />
				<Route path='/dashboard' element={<DashboardPage />} />
				<Route path='/setting' element={<SettingPage />} />
			</Routes>
		</>
	);
}
