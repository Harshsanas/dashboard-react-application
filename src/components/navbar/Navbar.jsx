import React from "react";
import "./navbar.css";
import image6 from "../../assets/images6.jpg";


export default function Navbar({ toggleSidebar, selectedItem }) {
  return (
    <div className="navbar-container">
      <div>
        <button className="toggle-button" onClick={toggleSidebar}>
          ☰
        </button>
        <span className="navbar-title">{selectedItem}</span>
      </div>
      <div className="navbar-icons">
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for something"
          />
          <i className="bi bi-search search-icon"></i>
        </div>
        <button className="icon-button">
          <i className="bi bi-gear navbar-icon"></i>
        </button>
        <button className="icon-button">
          <i className="bi bi-bell navbar-bell-icon"></i>
        </button>
        <img src={image6} alt="Profile" className="profile-picture" />
      </div>
    </div>
  );
}
