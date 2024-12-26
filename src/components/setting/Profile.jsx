import React from "react";
import "./setting.css";

export default function Profile() {
  return (
    <div className="form-container">
      <div className="row">
        <div className="col-md-2 image-column">
          <label htmlFor="file-upload" className="image-upload-label">
            <div className="profile-image">
              <span className="edit-icon">+</span>
            </div>
          </label>
          <input type="file" id="file-upload" className="image-input" />
        </div>
        <div className="col-md-4 input-column">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your full name" />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Date of Birth</label>
          <input type="date" />
          <label>Permanent Address</label>
          <input type="text" placeholder="Enter permanent address" />
          <label>Postal Code</label>
          <input type="text" placeholder="Enter postal code" />
        </div>
        <div className="col-md-4 input-column">
          <label>User Name</label>
          <input type="text" placeholder="Enter your username" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <label>Present Address</label>
          <input type="text" placeholder="Enter present address" />
          <label>City</label>
          <input type="text" placeholder="Enter city" />
          <label>Country</label>
          <input type="text" placeholder="Enter country" />
          <div className="save-button-container">
            <button className="save-button">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
