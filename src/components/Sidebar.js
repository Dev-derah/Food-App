import React from 'react'
import "../css/Sidebar.css";
import logo from "../images/logo.svg";
import NavItems from './NavItems';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="brand">
          <img src={logo} alt="logo" />
          <p>Lilies</p>
        </div>
       <NavItems/>
      </div>
    </div>
  );
}

export default Sidebar