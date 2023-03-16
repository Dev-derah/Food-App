import React from 'react'
import { useSelector } from "react-redux";
import "../css/Sidebar.css";
import logo from "../images/logo.svg";
import homeIcon from "../images/home.svg";
import calenderIcon from "../images/calendar.svg";
import userIcon from "../images/user-circle.svg";
import vector from "../images/Vector.svg";
const Sidebar = () => {
      const orders = useSelector((state) => state.order.order);
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="brand">
          <img src={logo} alt="logo" />
          <p>Lilies</p>
        </div>
        <div className="nav-items">
          <ul>
            <li className="nav-item home-nav">
              <span className="sidebar-icon">
                <img src={homeIcon} alt="home-Icon"></img>
              </span>
              Dashboard
            </li>
            <li className="nav-item">
              <span className="sidebar-icon">
                <img src={userIcon} alt="user-icon"></img>
              </span>
              Your Profile
            </li>
            <li className="nav-item">
              <span className="sidebar-icon">
                <img src={calenderIcon} alt="calender-icon"></img>
              </span>
              Orders
              <span className="orders-count-container">
                <p className="orders-count">{orders.length}</p>
              </span>
            </li>
            <li className="nav-item">
              <span className="sidebar-icon">
                <img src={vector} alt="badge"></img>
              </span>
              Your Cart
              <span className="cart-count-container">
                <p className=" cart-count">{orders.length}</p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar