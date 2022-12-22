import React from 'react'
import "./info-item.scss";
import { TopArrow, BottomArrow } from '../../assets/images/Icon/icon';

function InfoItem({ Image, data, growth, type }) {
  return (
    <li className="info-item">
      <div className="info-top">
        <Image />
        <span className={growth >= 0 ? "text-success-100" : "text-danger-100"}>
          {growth}%
        </span>
        {growth >= 0 ? <TopArrow /> : <BottomArrow />}
      </div>
      <h3 className='info-title text-light-100 mb-0 text-center'>
        {data}
      </h3>
      <p className="info-type text-light-200">
        {type}
      </p>
    </li>
  )
}

export default InfoItem