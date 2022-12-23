import React from 'react'
import ReportList from '../ReportList/ReportList'
import { FilterIcon } from '../../assets/images/Icon/icon';
import "./order-report.scss";

function OrderReport() {
    return (
        <section className="report">
            <div className="report-inner">
                <h3 className="report-title text-light-100">
                    Order Report
                </h3>
                <button className='filter-order text-light-100'>
                    <FilterIcon />
                    Filter Order
                </button>
            </div>
            <ul className="order-categories">
                <li className="order-category">
                    Customer
                </li>
                <li className="order-category">
                    Menu
                </li>
                <li className="order-category">
                    Total Payment
                </li>
                <li className="order-category">
                    Status
                </li>
            </ul>
            <ReportList />
        </section>
    )
}

export default OrderReport