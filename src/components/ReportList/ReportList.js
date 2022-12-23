import React from 'react'
import ReportItem from '../ReportItem/ReportItem';
import "./report-list.scss";
import ErenJaegarImg from "../../assets/images/ErenJaegar.svg";

const reportData = [
    {
        id:1,
        userName: "Eren Jaegar",
        userOrder: "Spicy seasoned seafood noodies",
        payment: 125,
        state: "completed",
        image:ErenJaegarImg
    },
    {
        id:2,
        userName: "Eren Jaegar",
        userOrder: "Spicy seasoned seafood noodies",
        payment: 125,
        state: "preparing",
        image:ErenJaegarImg
    },
]

function ReportList() {
    return (
        <ul className="report-list">
            
            {
                reportData.map(report => (
                    <ReportItem key={report.id} {...report} />
                ))
            }
        </ul>
    )
}

export default ReportList