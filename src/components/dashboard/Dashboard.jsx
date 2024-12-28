import React from "react";
import User from "./User";
import "./dashboard.css";
import CustomLineChart from "./CustomLineChart";
import CustomBarChart from "./CustomBarChart";
import CustomPieChart from "./CustomPieChart";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="row">
        <div className="col-md-8 main-container">
          <span className="label-heading">My Cards</span>
          <div className="card-container"></div>
        </div>
        <div className="col-md-4 main-container">
          <span className="label-heading">Recent Transaction</span>
          <div className="card-container"></div>
        </div>
        <div className="col-md-6 main-container">
          <span className="label-heading">Weekly Activity</span>
          <div className="card-container">
            <CustomBarChart />
          </div>
        </div>
        <div className="col-md-6 main-container">
          <span className="label-heading">Expense Statistic</span>
          <div className="card-container">
            <CustomPieChart />
          </div>
        </div>
        <div className="col-md-6 main-container">
          <span className="label-heading">Quick Transfer</span>
          <div className="card-container">
            <User />
          </div>
        </div>
        <div className="col-md-6 main-container">
          <span className="label-heading">Balance History</span>
          <div className="card-container pie-chart-container">
            <CustomLineChart />
          </div>
        </div>
      </div>
    </div>
  );
}
