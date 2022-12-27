import React, { useState } from 'react'
import SettingItem from '../SettingItem/SettingItem';
import "./SettingList.scss";
import { useNavigate } from 'react-router-dom';

console.log(crypto.randomUUID());

const settingListData = [
  {
    id:crypto.randomUUID(),
    title:"Appearance",
    text:"Dark and Light mode, Font size",
    isActive:false,
    link:"appearance"
  },
  {
    id:crypto.randomUUID(),
    title:"Your Restaurant",
    text:"Dark and Light mode, Font size",
    isActive:false,
    link:"restaurant",
  },
  {
    id:crypto.randomUUID(),
    title:"Products Management",
    text:"Manage your product, pricing, etc",
    isActive:false,
    link:"management"
  },
  {
    id:crypto.randomUUID(),
    title:"Notifications",
    text:"Customize your notifications",
    isActive:false,
    link:"notifications"
  },
  {
    id:crypto.randomUUID(),
    title:"Security",
    text:"Configure Password, PIN, etc",
    isActive:false,
    link:"security"
  },
  {
    id:crypto.randomUUID(),
    title:"About Us",
    text:"Find out more about Posly",
    isActive:false,
    link:"about"
  },
]

function SettingList() {
  const [data,setData] = useState(settingListData);
  const navigate = useNavigate();
  return (
    <ul className="settings-list bg-dark-100">
        {data.map(setting => (
          <SettingItem data-id={setting.id} url={setting.link} key={setting.id} title={setting.title} text={setting.text}
          />
        ))}
    </ul>
  )
}

export default SettingList