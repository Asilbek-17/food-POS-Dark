import React from 'react'
import "./settings.scss";
import HeaderItem from '../../components/HeaderItem/HeaderItem';
import { Menu } from '../../components/menu/menu';
import SettingList from '../../components/SettingList/SettingList';
import Categories from '../../components/Categories/Categories';

function Settings() {
  return (
    <section className='main-section'>
      <div className="container">
        <div className="main-wrapper">
          <Menu />
          <section className='settings'>
            <HeaderItem title='Settings' />
            <div className="settings-wrapper">
              <SettingList />
              <Categories />
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Settings