import React,{useState} from "react";
import "../css/Dashboard.css";
import profileImage from "../images/profile-img.png"
import FoodCard from "./FoodCard";
import Sidebar from "./Sidebar";
import Modal from './Modal'
import { AvailableMeals } from "../Data/data";


function Dashboard() {

  const [OpenModal, setOpenModal] = useState(false);
  const [SelectedMeal, setSelectedMeal] = useState({
    id: "",
    MealName: "",
    MealPrice: "",
    MealImage: "",
  });
  
  
  return (
    <div className="dashboard-container">
      <Sidebar/>
      <div className="dashboard">
        {OpenModal && (
          <Modal
            selectedMeal={SelectedMeal}
            setOpenModal={(OpenModal) => setOpenModal(OpenModal)}
          ></Modal>
        )}
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
                selectedMeal={SelectedMeal}
                setSelectedMeal={setSelectedMeal}
                setOpenModal={(OpenModal) => setOpenModal(OpenModal)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
