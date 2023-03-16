import React from "react";
import { useNavigate } from "react-router-dom";

function FoodCard(props) {
  // const [SelectedMeal, setSelectedMeal] = useState([])
  const navigate = useNavigate();
 
    return (
      <div className="card-container">
        <div className="card-top">
          <img src={props.foodImage} alt="food" className="card-img" />
          <p>{props.foodName}</p>
          <p className="food-description">{props.foodDescription}</p>
        </div>
        <div className="card-bottom">
          <p>{props.foodPrice}</p>
          <p className="addCart-btn" onClick={(e) => {
            props.setOpenModal(true);
            navigate(`product/${props.id}`)
            props.setSelectedMeal({
              id: props.meal.id,
              MealName: props.meal.MealName,
              MealDescription: props.meal.MealDescription,
              MealPrice: props.meal.MealPrice,
              MealImage: props.meal.MealImage,
            });
          }}>
            
            Add to cart
          </p>
        </div>
      </div>
    );
}

export default FoodCard