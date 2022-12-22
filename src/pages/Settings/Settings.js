import React from 'react'
import "./settings.scss";
import HeaderItem from '../../components/HeaderItem/HeaderItem';
import SettingList from '../../components/SettingList/SettingList';
import Categories from '../../components/Categories/Categories';
import FoodList from '../../components/FoodList/FoodList';

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
                <Categories />
                <FoodList />
              </div>
              
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Settings