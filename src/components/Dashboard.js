import React from "react";
import "../css/Dashboard.css";
import logo from "../images/logo.svg";
import homeIcon from "../images/home.svg";
import calenderIcon from "../images/calendar.svg"
import userIcon from "../images/user-circle.svg"
import vector from "../images/Vector.svg"
import profileImage from "../images/profile-img.png"
import FoodCard from "./FoodCard";
import burger from "../images/burger.png";
import spag from "../images/spag.png";
import meatBalls from "../images/meat-balls.png";

function Dashboard() {
    const AvailableMeals = [
      {
        MealName: "Beef Burger",
        MealDescription: "The in-house pasta and chicken by chef Moose",
        MealPrice: "N 1,000.00",
        MealImage: burger,
      },
      {
        MealName: "Stir Fry Pasta",
        MealDescription: "The in-house pasta and chicken by chef Moose",
        MealPrice: "N 1,000.00",
        MealImage: spag,
      },
      {
        MealName: "Meatballs",
        MealDescription: "The in-house pasta and chicken by chef Moose",
        MealPrice: "N 1,000.00",
        MealImage: meatBalls,
      },
      {
        MealName: "Meatballs",
        MealDescription: "The in-house pasta and chicken by chef Moose",
        MealPrice: "N 1,000.00",
        MealImage: spag,
      },
      {
        MealName: "Meatballs",
        MealDescription: "The in-house pasta and chicken by chef Moose",
        MealPrice: "N 1,000.00",
        MealImage: burger,
      },
      {
        MealName: "Meatballs",
        MealDescription: "The in-house pasta and chicken by chef Moose",
        MealPrice: "N 1,000.00",
        MealImage: meatBalls,
        }
    ];
  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
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
      </div>

      <div className="dashboard">
        <div className="dashboard-header">
          <div>
            <p>Good morning, Oghenevwede!</p>
            <p>What delicious meal are you craving today?</p>
          </div>
          <div>
            <img src={profileImage} alt="profile-pic"/>
          </div>
        </div>
              <div className="dashboard-main">
                  
          {AvailableMeals.map((meal, index) => {
            return (
              <FoodCard
                foodName={meal.MealName}
                foodImage={meal.MealImage}
                    foodDescription={meal.MealDescription}
                    foodPrice={meal.MealPrice}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
