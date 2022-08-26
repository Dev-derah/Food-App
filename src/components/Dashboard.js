import React from "react";
import "../css/Dashboard.css";
import logo from "../images/logo.svg";
import homeIcon from "../images/home.svg";
import calenderIcon from "../images/calendar.svg"
import userIcon from "../images/user-circle.svg"
import vector from "../images/Vector.svg"

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
            <li className="nav-item home-nav">
              <span>
                <img src={homeIcon} alt="home-Icon"></img>
              </span>
              Dashboard
            </li>
            <li className="nav-item">
              <span>
                <img src={userIcon} alt="user-icon"></img>
              </span>
              Your Profile
            </li>
            <li className="nav-item">
              <span>
                <img src={calenderIcon} alt="calender-icon"></img>
              </span>
              Orders
            </li>
            <li className="nav-item">
              <span>
                <img src={vector} alt="badge"></img>
              </span>
              Your Cart
            </li>
          </ul>
        </div>
      </div>
      <div className="dashboard"></div>
    </div>
  );
}

export default Dashboard;
