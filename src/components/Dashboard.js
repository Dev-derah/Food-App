import React from "react";
import "../css/Dashboard.css";
import logo from "../images/logo.svg";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="brand">
          <img src={logo} alt="logo" />
          <p>Lilies</p>
        </div>
        <div className="nav-items">
          <ul>
            <li className="nav-item">Dashboard</li>
            <li className="nav-item">Your Profile</li>
            <li className="nav-item">Orders</li>
            <li className="nav-item">Your Cart</li>
          </ul>
        </div>
      </div>
      <div className="dashboard"></div>
    </div>
  );
}

export default Dashboard;
