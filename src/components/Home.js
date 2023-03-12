import React from "react";
import logo from "../images/logo.svg";
import noodles from "../images/noodles.png";
import appStoreBadge from "../images/AppStoreBadge.svg";
import googleplayBadge from "../images/GooglePlayBadge.svg";
import burger from "../images/burger.png";
import spag from "../images/spag.png";
import meatBalls from "../images/meat-balls.png";
import social1 from "../images/Social-Icons.svg";
import social2 from "../images/Social-Icons-1.svg";
import social3 from "../images/Social-Icons-2.svg";

import { Link } from "react-router-dom";
import "../css/Home.css";

const Home = () => {
  const special_meals = [
    {
      meal: "Stir fry Pasta",
      meal_description: "Stir fry pasta yada yada yada because of Sesan",
      meal_image: spag ,
    },
    {
      meal_image: meatBalls ,
      meal: "Meat Balls",
      meal_description: "Stir fry pasta yada yada yada because of Sesan",
    },
    {
      meal_image: burger ,
      meal: "Burger Meal",
      meal_description: "Stir fry pasta yada yada yada because of Sesan",
    },
  ];
  return (
    <div className="home-body">
      <div className="main-container">
        <nav className="navbar">
          <div className="brand">
            <img src={logo} className="brand-logo" alt="logo" loading="lazy" />
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
        {/* header */}
        <header className="header">
          <div className="header-left">
            <h2 className="jumbotron">
              Order <span>food </span>anytime, anywhere
            </h2>
            <p className="jumbotron-subtext">
              Browse from our list of specials to place your order and have food
              delivered to you in no time. Affordable, tasty and fast!
            </p>
            <div className="download-btns">
              <div className="cta-btn">
                <img src={googleplayBadge} alt="google-play-badge" />
              </div>
              <div className="cta-btn">
                <img src={appStoreBadge} alt="app-store-badge" />
              </div>
            </div>
          </div>
          <div className="header-img-container">
            <img src={noodles} alt="noodles" className="header-img" />
          </div>
        </header>

        {/* main */}
        <main>
          <div className="main-content">
            <h1 className="main-header">Special Meals of the day!</h1>
            <p className="main-subtext">
              Check our sepecials of the day and get discounts on all our meals
              and swift delivery to what ever location within Ilorin.
            </p>
            <div className="meals-container">
              {special_meals.map((meal, index) => {
                return (
                  <div className="special-meal">
                    <img src={meal.meal_image} alt="food" loading="lazy" />
                    <h3>{meal.meal}</h3>
                    <p>{meal.meal_description}</p>
                  </div>
                );
              })}
              <div></div>
            </div>
          </div>

          <div className="mailist-section">
            <div className="mailist-left">
              <h2 className="mailist-header">Get notified when we update!</h2>
              <p className="mailist-subtext">
                Get notified when we add new items to our specials menu, update
                our price list of have promos!
              </p>
            </div>
            <div>
              <input
                type="text"
                placeholder="gregphillips@gmail.com"
                className="email"
              ></input>
              <button className="email-btn">Get notified</button>
            </div>
          </div>
        </main>
      </div>
      <footer id="footer">
        <div className="footer-top">
          <div className="footer-item">
            <h4 className="footer-header">Company</h4>
            <ul className="items-container">
              <li className="item">About Us</li>
              <li className="item">Careers</li>
              <li className="item">Contact Us</li>
            </ul>
          </div>

          <div className="footer-item">
            <h4 className="footer-header">Support</h4>
            <ul className="items-container">
              <li className="item">Help Center</li>
              <li className="item">Safety Center</li>
            </ul>
          </div>

          <div className="footer-item">
            <h4 className="footer-header">Legal</h4>
            <ul className="items-container">
              <li className="item">Cookies Policy</li>
              <li className="item">Privacy Policy</li>
              <li className="item">Terms of Service</li>
              <li className="item">Dispute resolution</li>
            </ul>
          </div>

          <div className="footer-item">
            <h4 className="footer-header">Install</h4>
            <ul className="items-container">
              <li className="item">
                <img src={googleplayBadge} alt="appstorebadge" />
              </li>
              <li className="item">
                <img src={appStoreBadge} alt="playstorebadge" />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2021 LILIES, All rights reserved</p>
          <div className="socials">
            <img src={social1} alt="instagram" className="soial-icon" />
            <img src={social2} alt="twitter" className="soial-icon" />
            <img src={social3} alt="youtube" className="soial-icon" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
