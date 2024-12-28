import React, { useState } from "react";
import './user.css'

const users = [
  {
    id: 1,
    name: "Livia Bator",
    role: "CEO",
    img: "https://via.placeholder.com/80",
  },
  {
    id: 2,
    name: "Randy Press",
    role: "Director",
    img: "https://via.placeholder.com/80",
  },
  {
    id: 3,
    name: "Workman",
    role: "Designer",
    img: "https://via.placeholder.com/80",
  },
  {
    id: 4,
    name: "Workman",
    role: "Designer",
    img: "https://via.placeholder.com/80",
  },
  {
    id: 5,
    name: "Workman",
    role: "Designer",
    img: "https://via.placeholder.com/80",
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

  return (
    <div className="app">
      <div className="slider-container">
        <button className="arrow left-arrow" onClick={prevSlide}>
          ◀
        </button>
        <div className="slider">
          {visibleUsers.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.img} alt={user.name} className="avatar" />
              <h4>{user.name}</h4>
              <p>{user.role}</p>
            </div>
          ))}
        </div>
        <button className="arrow right-arrow" onClick={nextSlide}>
          ▶
        </button>
      </div>

      <div className="send-section">
        <input
          type="number"
          placeholder="Write Amount"
          className="amount-input"
        />
        <button className="send-button">Send</button>
      </div>
    </div>
  );
}

export default User;
