import React, { useState } from "react";
import "./user.css";
import image1 from "../../assets/images1.jpg";
import image2 from "../../assets/images2.jpg";
import image3 from "../../assets/images3.jpg";
import image4 from "../../assets/images4.jpg";
import image5 from "../../assets/images5.jpg";

const users = [
  {
    id: 1,
    name: "Livia Bator",
    role: "CEO",
    img: image1,
  },
  {
    id: 2,
    name: "Randy Press",
    role: "Director",
    img: image2,
  },
  {
    id: 3,
    name: "Workman",
    role: "Designer",
    img: image3,
  },
  {
    id: 4,
    name: "Workman",
    role: "Designer",
    img: image4,
  },
  {
    id: 5,
    name: "Workman",
    role: "Designer",
    img: image5,
  },
];

function User() {
  const [visibleUsers, setVisibleUsers] = useState(users.slice(0, 3));

  const nextSlide = () => {
    setVisibleUsers((prev) => {
      const startIndex = users.indexOf(prev[0]);
      const nextIndex = (startIndex + 1) % users.length;
      return users.slice(nextIndex, nextIndex + 3);
    });
  };

  const prevSlide = () => {
    setVisibleUsers((prev) => {
      const startIndex = users.indexOf(prev[0]);
      const prevIndex = (startIndex - 1 + users.length) % users.length;
      return users.slice(prevIndex, prevIndex + 3);
    });
  };

  const startIndex = users.indexOf(visibleUsers[0]);
  const endIndex = startIndex + visibleUsers.length - 1;

  return (
    <div className="app">
      <div className="slider-container">
        {startIndex > 0 && (
          <button className="arrow left-arrow" onClick={prevSlide}>
            <i className="bi bi-chevron-left"></i>
          </button>
        )}{" "}
        <div className="slider">
          {visibleUsers.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.img} alt={user.name} className="avatar" />
              <h4>{user.name}</h4>
              <p>{user.role}</p>
            </div>
          ))}
        </div>
        {endIndex < users.length - 1 && (
          <button className="arrow right-arrow" onClick={nextSlide}>
            <i className="bi bi-chevron-right"></i>
          </button>
        )}
      </div>
      <div className="send-section">
        <label className="label-amount">Write Amount</label>
        <div className="input-container">
          <input
            className="amount-input"
            type="number"
            placeholder="Enter amount"
          />
          <button className="send-button">
            Send <i className="bi bi-send"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;
