import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar({ isOpen, setSelectedItem }) {
  const [selected, setSelected] = useState("Dashboard");

  const handleItemClick = (item) => {
    setSelected(item);
    setSelectedItem(item);
  };

  return (
    <div className={`sidebar-container ${isOpen ? "open" : "closed"}`}>
      <h4 className="sidebar-title">Assignment</h4>
      <ul className="sidebar-list">
        <li
          className={`sidebar-item ${
            selected === "Dashboard" ? "active-item" : ""
          }`}
        >
          <Link
            to="/"
            className="sidebar-link"
            onClick={() => handleItemClick("Dashboard")}
          >
            <i className="bi bi-house-door-fill sidebar-icon"></i> Dashboard
          </Link>
        </li>
        <li
          className={`sidebar-item ${
            selected === "Transaction" ? "active-item" : ""
          } disabled-item`}
        >
          <i className="bi bi-wallet2 sidebar-icon"></i> Transaction
        </li>
        <li
          className={`sidebar-item ${
            selected === "Accounts" ? "active-item" : ""
          } disabled-item`}
        >
          <i className="bi bi-person-fill sidebar-icon"></i> Accounts
        </li>
        <li
          className={`sidebar-item ${
            selected === "Investments" ? "active-item" : ""
          } disabled-item`}
        >
          <i className="bi bi-bar-chart sidebar-icon"></i> Investments
        </li>
        <li
          className={`sidebar-item ${
            selected === "Credit Cards" ? "active-item" : ""
          } disabled-item`}
        >
          <i className="bi bi-credit-card sidebar-icon"></i> Credit Cards
        </li>
        <li
          className={`sidebar-item ${
            selected === "Loans" ? "active-item" : ""
          } disabled-item`}
        >
          <i className="bi bi-bank sidebar-icon"></i> Loans
        </li>
        <li
          className={`sidebar-item ${
            selected === "Services" ? "active-item" : ""
          } disabled-item`}
        >
          <i className="bi bi-tools sidebar-icon"></i> Services
        </li>
        <li
          className={`sidebar-item ${
            selected === "My Privileges" ? "active-item" : ""
          } disabled-item`}
        >
          <i className="bi bi-stars sidebar-icon"></i> My Privileges
        </li>
        <li
          className={`sidebar-item ${
            selected === "Setting" ? "active-item" : ""
          }`}
        >
          <Link
            to="/setting"
            className="sidebar-link"
            onClick={() => handleItemClick("Setting")}
          >
            <i className="bi bi-gear-fill sidebar-icon"></i> Setting
          </Link>
        </li>
      </ul>
    </div>
  );
}
