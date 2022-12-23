import React from 'react'
import "./info-list.scss";
import { Revenue,DishOrdered,Customer } from '../../assets/images/Icon/icon';
import InfoItem from '../InfoItem/InfoItem';

const infos = [
    {
      id:1,
      growth:37.40,
      data:"$10,243.00",
      Image:Revenue,
      type:"Total Revenue"
    },
    {
      id:2,
      growth:-12.40,
      data:"23,456",
      Image:DishOrdered,
      type:"Total Dish Ordered"
    },
    {
      id:3,
      growth:2.40,
      data:"1,234",
      Image:Customer,
      type:"Total Customer"
    },
]

function InfoList() {
  return (
    <ul className="info-list">
      {infos.map(info => (
        <InfoItem key={info.id} {...info} />
      ))}
    </ul>
  )
}

export default InfoList