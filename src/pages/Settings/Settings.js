import React from 'react'
import "./settings.scss";
import HeaderItem from '../../components/HeaderItem/HeaderItem';
import { Menu } from '../../components/menu/menu';
import SettingList from '../../components/SettingList/SettingList';
import Categories from '../../components/Categories/Categories';
import FoodList from '../../components/FoodList/FoodList';
import CustomButton from '../../components/CustomButton/CustomButton';

function Settings() {
  return (
    <section className='main-section'>
      <div className="container">
        <div className="main-wrapper">
          {/* <Menu /> */}
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