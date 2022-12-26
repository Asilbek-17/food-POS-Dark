import React from 'react';
import { Menu } from './components/menu/menu';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/Home';
import { Dashboard } from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';

export function App() {
	return (
		<>
			<Menu />
			<Routes>
				<Route index element={<HomePage />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/settings' element={<Settings />} />
			</Routes>
		</>
	);
}
