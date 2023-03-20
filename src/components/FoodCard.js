import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/features/productSlice";

function FoodCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const toggleModal = useSelector((state) => state);
  return (
    <div className="card-container">
      <div className="card-top">
        <img src={props.foodImage} alt="food" className="card-img" />
        <p>{props.foodName}</p>
        <p className="food-description">{props.foodDescription}</p>
      </div>
      <div className="card-bottom">
        <p>N {props.foodPrice}</p>
        <p
          className="addCart-btn"
          onClick={(e) => {
            dispatch(
              addProduct({
                id: props.meal.id,
                MealName: props.meal.MealName,
                MealDescription: props.meal.MealDescription,
                MealPrice: props.meal.MealPrice,
                MealImage: props.meal.MealImage,
              })
            );
            navigate(`product/${props.id}`);
          }}
        >
          Add to cart
        </p>
      </div>
    </div>
  );
}

export default FoodCard;
