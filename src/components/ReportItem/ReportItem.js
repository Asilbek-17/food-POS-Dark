import React from 'react'
import "./report-item.scss";

function ReportItem({ userName, userOrder, payment, image, state }) {
  const stateClassName = {
    completed: "bg-success-200 text-success-100",
    preparing: "bg-purplish-100 text-purplish-200",
    pending: "bg-warning-200 text-warning-100"
  }
  return (
    <li className="report-item">
      <div className="report-item-inner">
        <div className='report-item-user'>
          <img src={image} alt="user profile pic" className="report-img" />
          <h3 className="report-user text-light-400 mt-0 margin-bottom-0">
            {userName}
          </h3>
        </div>
        <p className="report-menu text-light-400 mt-0 margin-bottom-0">
          {userOrder}
        </p>
        <p className="report-payment text-light-400 mt-0 margin-bottom-0">
          {payment}
        </p>
      </div>

      <button className={stateClassName[state]}>{state}</button>
    </li>
  )
}

export default ReportItem