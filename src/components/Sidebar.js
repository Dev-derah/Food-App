import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import "../css/Sidebar.css";
import logo from "../images/logo.svg";
import homeIcon from "../images/home.svg";
import calenderIcon from "../images/order.svg";
import userIcon from "../images/profile.svg";
import cartIcon from "../images/cart.svg";
import logout from "../images/logout.svg";
const Sidebar = () => {
    const navigate = useNavigate()
      const cart = useSelector((state) => state.cart.cart);
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="brand">
          <img src={logo} alt="logo" />
          <p>Lilies</p>
        </div>
        <div className="nav-items">
          <ul>
            <NavLink
              className={({ isActive }) => (isActive ? "active " : "nav-item")}
              to="/dashboard"
              end
            >
              <span className="sidebar-icon">
                <img src={homeIcon} alt="home-Icon" />
              </span>
              <p className="navName">Dashboard</p>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active " : "nav-item")}
              to="/dashboard/profile"
            >
              <span className="sidebar-icon">
                <img src={userIcon} alt="user-icon" />
              </span>
              <p className="navName">Your Profile</p>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "nav-item")}
              onClick={() => navigate("/dashboard/order")}
              to="/dashboard/order"
            >
              <span className="sidebar-icon">
                <img src={calenderIcon} alt="calender-icon"></img>
              </span>
              <p className="navName">Orders</p>
              <span className="orders-count-container">
                <p className="orders-count">0</p>
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/cart"
              className={({ isActive }) => (isActive ? "active " : "nav-item")}
              onClick={() => navigate("/dashboard/cart")}
            >
              <span className="sidebar-icon">
                <img src={cartIcon} alt="badge" id="cartIcon" />
              </span>
              <p className="navName">Your Cart</p>
              <span className="cart-count-container">
                <p className=" cart-count">{cart.length}</p>
              </span>
            </NavLink>
            <li id='logout'>
              <img src={logout} alt='logout'/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar