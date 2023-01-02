import React from 'react'
import "./settings.scss";
import HeaderItem from '../../components/HeaderItem/HeaderItem';
import SettingList from '../../components/SettingList/SettingList';
import Categories from '../../components/Categories/Categories';
import FoodList from '../../components/FoodList/FoodList';
import { Route, Routes } from 'react-router-dom';

function Settings() {
  return (
    <section className='main-section'>
      <div className="container">
        <div className="main-wrapper">
          <section className='settings'>
            <HeaderItem title='Settings' />
            <div className="settings-wrapper">
              <SettingList />
              <div className='settings-inner'>
                <Routes>
                  <Route path='management' element={<><Categories/><FoodList /></>}>
                    <Route path="hot dishes" index element={<FoodList />} />
                    <Route path='*' element={<FoodList />} />
                  </Route>
                  <Route path='*' element={<></>} />
                </Routes>
              </div>

            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Settings