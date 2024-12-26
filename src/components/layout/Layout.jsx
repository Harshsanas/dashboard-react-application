import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import './layout.css'
import Sidebar from "../sidebar/Sidebar";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="layout-container">
      <Sidebar isOpen={isSidebarOpen} setSelectedItem={setSelectedItem} />
      <div
        className={`layout-content ${
          isSidebarOpen ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        <Navbar toggleSidebar={toggleSidebar} selectedItem={selectedItem} />
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
