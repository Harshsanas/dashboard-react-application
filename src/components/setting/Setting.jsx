import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./setting.css";
import Profile from "./Profile";

export default function Setting() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="card shadow-sm m-4">
      <div className="card-header bg-white border-bottom-0">
        <div className="tabs d-flex justify-content-start">
          <button
            className={`tab btn ${activeTab === "general" ? "active" : ""}`}
            onClick={() => setActiveTab("general")}
          >
            Edit Profile
          </button>
          <button
            className={`tab btn ${activeTab === "account" ? "active" : ""}`}
            onClick={() => setActiveTab("account")}
          >
            Preferences
          </button>
          <button
            className={`tab btn ${activeTab === "privacy" ? "active" : ""}`}
            onClick={() => setActiveTab("privacy")}
          >
            Security
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="tab-content">
          {activeTab === "general" && <Profile />}
          {activeTab === "account" && (
            <div>Preferences settings content goes here.</div>
          )}
          {activeTab === "privacy" && (
            <div>Security settings content goes here.</div>
          )}
        </div>
      </div>
    </div>
  );
}
