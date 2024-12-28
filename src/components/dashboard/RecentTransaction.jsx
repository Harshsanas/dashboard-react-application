import React from "react";
import './dashboard.css'

export default function RecentTransaction() {
  const transactions = [
    {
      icon: "bi bi-credit-card",
      description: "Deposit from my Card",
      date: "28 January 2021",
      amount: "-$850",
      amountClass: "text-danger",
    },
    {
      icon: "bi bi-paypal",
      description: "Deposit Paypal",
      date: "25 January 2021",
      amount: "+$2,500",
      amountClass: "text-success", 
    },
    {
      icon: "bi bi-person-circle",
      description: "Jemi Wilson",
      date: "21 January 2021",
      amount: "+$5,400",
      amountClass: "text-success",
    },
  ];

  return (
    <div className="recent-transactions">
      {transactions.map((transaction, index) => (
        <div key={index} className="transaction d-flex align-items-center mb-3">
          <div className="icon-container me-3">
            <i className={`${transaction.icon} fs-3`}></i>
          </div>
          <div className="details flex-grow-1">
            <div className="description fw-bold">{transaction.description}</div>
            <div className="date text-muted">{transaction.date}</div>
          </div>
          <div className={`amount ${transaction.amountClass} fw-bold`}>
            {transaction.amount}
          </div>
        </div>
      ))}
    </div>
  );
}
