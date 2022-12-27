import React from 'react';
import { Menu } from './components/menu/menu';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/Home';
import { Dashboard } from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';

export function App() {
	return (
		<>
			<Menu />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/home/*' element={<HomePage />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/setting/*' element={<Settings />}/>
			</Routes>
		</>
	);
}
