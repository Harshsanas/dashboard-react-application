import React from "react";
import User from "./User";
import "./dashboard.css";
import CustomLineChart from "./CustomLineChart";
import CustomBarChart from "./CustomBarChart";
import CustomPieChart from "./CustomPieChart";
import RecentTransaction from "./RecentTransaction";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="row">
        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-center">
            <span className="label-heading">My Cards</span>
            <span className="see-label">See all</span>
          </div>
          <div className="card-container">
            <div className="cards-container">
              <div className="credit-card dark-theme">
                <div className="card-balance">
                  <span>Balance</span>
                  <h3>$5,756</h3>
                </div>
                <div className="card-details">
                  <div>
                    <span>CARD HOLDER</span>
                    <h4>Eddy Cusuma</h4>
                  </div>
                  <div>
                    <span>VALID THRU</span>
                    <h4>12/22</h4>
                  </div>
                </div>
                <div className="card-footer">
                  <h4>3778 **** **** 1234</h4>
                  <div className="chip-icon"></div>
                </div>
              </div>
              <div className="credit-card light-theme">
                <div className="card-balance">
                  <span>Balance</span>
                  <h3>$5,756</h3>
                </div>
                <div className="card-details">
                  <div>
                    <span>CARD HOLDER</span>
                    <h4>Eddy Cusuma</h4>
                  </div>
                  <div>
                    <span>VALID THRU</span>
                    <h4>12/22</h4>
                  </div>
                </div>
                <div className="card-footer">
                  <h4>3778 **** **** 1234</h4>
                  <div className="chip-icon"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <span className="label-heading">Recent Transaction</span>
          <div className="card-container">
            <RecentTransaction />
          </div>
        </div>
        <div className="col-md-8 main-container">
          <span className="label-heading">Weekly Activity</span>
          <div className="card-container">
            <CustomBarChart />
          </div>
        </div>
        <div className="col-md-4 main-container">
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
