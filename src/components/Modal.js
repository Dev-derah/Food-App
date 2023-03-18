import React from 'react'
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { toggleModal } from '../features/modalSlice';


const Modal = (props) => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
      
  
  function handleBackClick() {
        navigate("/dashboard");
        dispatch(toggleModal)
      }
  return (
    <div className="modal">
      <div className="modal__content">
        <button
          className="cancel-container"
          type="button"
          onClick={() => handleBackClick()}
        >
          {"< "}Back
        </button>
        {props.children}
        {/* <img
          src={props.selectedMeal.MealImage}
          alt="food"
          className="modal-img"
        />
        <h3 className="order-name">{props.selectedMeal.MealName}</h3>
        <p className="order-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          malesuada convallis arcu vel eleifend. Vivamus est justo, aliquet non
          consectetur eget, eleifend vitae ipsum. Donec et dolor rutrum,
          pellentesque ligula at, porta leo. Phasellus at lacus eget ex
        </p>
        <div className="order-details-conatiner">
          <h4>N{props.selectedMeal.MealPrice}</h4>
          <h4>10-20 Mins</h4>
          <h4>10 Pcs Available</h4>
        </div>

        <div className="order-details-conatiner">
          <div className="order-controls">
            <button
              style={
                orderAmount === 1
                  ? { backgroundColor: "lightgrey" }
                  : { backgroundColor: "rgb(243, 195, 149)" }
              }
              className="control-btn subtract"
              onClick={() => ChangeAmount("subtract")}
            >
              -
            </button>
            <p className="order-quantity">{orderAmount}</p>
            <button
              className="control-btn add"
              onClick={() => ChangeAmount("add")}
            >
              +
            </button>
          </div>

          <div>
            <button className="add-order-btn" onClick={() => addToCart()}>
              Add to cart
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Modal