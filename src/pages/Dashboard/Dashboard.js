import React from 'react'
import HeaderItem from '../../components/HeaderItem/HeaderItem';
import InfoList from '../../components/InfoList/InfoList';
import "./dashboard.scss";
import OrderReport from '../../components/OrderReport/OrderReport';
import Diagram from "../../assets/images/diagram.svg";
import MostOrdered from '../../components/MostOrdered/MostOrdered';
import { TopArrow } from '../../assets/images/Icon/icon';

export const Dashboard = () => {
  return (
    <section className='dashboard'>
      <div className="container">
        <div className="dashboard-wrapper">
          <div className="dashboard-inner">
            <HeaderItem title='Dashboard' text='Tuesday 2 Feb, 2021' />
            <InfoList />
            <OrderReport />
          </div>
          <div className="dashboard-outer">
            <MostOrdered />
            <div className="diagram">
              <div className="d-flex items-center justify-between border-1">
                <h3 className="text-light-100">Most Ordered</h3>
                <button className="most-btn">
                  <TopArrow />
                  Today
                </button>
              </div>
              <img className='diagram-img' src={Diagram} alt="" />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
