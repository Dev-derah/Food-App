import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home-body">
      <nav className="navbar">
        <div className="brand">
          <img src={logo} className="brand-logo" alt="logo" />
          <p className="brand-name">Lilies</p>
        </div>

        <div className="nav-links">
          <ul>
            <Link to={"/"} className="link-tag">
              <li className="nav-link" id="home-link">
                Home
              </li>
            </Link>
            <Link to={"/login"} className="link-tag">
              <li className="nav-link" id="login-link">
                Login
              </li>
            </Link>
            <Link to={"/signup"} className="link-tag">
              <li className="nav-link" id="signup-link">
                Sign Up
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Home;
