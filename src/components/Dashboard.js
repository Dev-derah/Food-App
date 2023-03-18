import "../css/Dashboard.css";
import profileImage from "../images/profile-img.png"
import FoodCard from "./FoodCard";
import Sidebar from "./Sidebar";
import { AvailableMeals } from "../Data/data";
import { Outlet } from "react-router-dom";


function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard">
        <div className="dashboard-header">
          <div>
            <p>Good morning, Oghenevwede!</p>
            <p>What delicious meal are you craving today?</p>
          </div>
          <div>
            <img src={profileImage} alt="profile-pic" />
          </div>
        </div>
        <div className="dashboard-main">
          {AvailableMeals.map((meal) => {
            return (
              <FoodCard
                foodName={meal.MealName}
                foodImage={meal.MealImage}
                foodDescription={meal.MealDescription}
                foodPrice={meal.MealPrice}
                key={meal.id.toString()}
                id={meal.id}
                meal={meal}
              />
            );
          })}
        </div>
      </div>
      <Outlet/>
    </div>
  );
}

export default Dashboard;
