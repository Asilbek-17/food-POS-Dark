import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import SettingItem from '../SettingItem/SettingItem';
import "./SettingList.scss";

const settingListData = [
  {
    id:Math.random() * 10000,
    title:"Appearance",
    text:"Dark and Light mode, Font size",
    isActive:false
  },
  {
    id:Math.random() * 10000,
    title:"Your Restaurant",
    text:"Dark and Light mode, Font size",
    isActive:true
  },
  {
    id:Math.random() * 10000,
    title:"Products Management",
    text:"Manage your product, pricing, etc",
    isActive:false
  },
  {
    id:Math.random() * 10000,
    title:"Notifications",
    text:"Customize your notifications",
    isActive:false
  },
  {
    id:Math.random() * 10000,
    title:"Security",
    text:"Configure Password, PIN, etc",
    isActive:false
  },
  {
    id:Math.random() * 10000,
    title:"About Us",
    text:"Find out more about Posly",
    isActive:false
  },
]

function SettingList() {
  const [data,setData] = useState(settingListData);
  function handleItemClick(id){
    const copyData = [...data];
    const foundSettings = copyData.find(setting => setting.id === id);
    const currentActiveSetting = copyData.find(setting => setting.isActive);
    currentActiveSetting.isActive = false;
    foundSettings.isActive = !foundSettings.isActive;
    setData(copyData);
  }
  return (
    <ul className="settings-list bg-dark-100">
        {data.map(setting => (
          <SettingItem data-id={setting.id} isActive={setting.isActive} key={setting.id} title={setting.title} text={setting.text} onClick={evt => {
            handleItemClick(Number(evt.target.dataset.id));
          }} />
        ))}
    </ul>
  )
}

export default SettingList