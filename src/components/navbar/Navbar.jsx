import React from "react";
import "./navbar.css";

export default function Navbar({ toggleSidebar, selectedItem }) {
  return (
    <div className="navbar-container">
      <button className="toggle-button" onClick={toggleSidebar}>
        ☰
      </button>
      <span className="navbar-title">{selectedItem}</span>
      <input type="text" className="search-bar" placeholder="Search..." />
      <div className="navbar-icons">
        <button className="icon-button">
          <i className="bi bi-gear"></i>
        </button>
        <button className="icon-button">
          <i className="bi bi-bell"></i>
        </button>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="profile-picture"
        />
      </div>
    </div>
  );
}
