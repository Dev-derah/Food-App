import React from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import "../css/Modal.css";
import  addItem  from '../features/orderSlice';
const Modal = (props) => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const navigate = useNavigate();
  const [orderAmount, setOrderAmount] = useState(0)
  function ChangeAmount(operation) {
    if(operation === "subtract" && orderAmount>0){
      setOrderAmount(orderAmount-1)
    }
    else if(operation === 'add'){
      setOrderAmount(orderAmount+1)
    }
    else{
      setOrderAmount(0)
    }
    
  };
  
  function handleBackClick(){
    navigate('/dashboard');
    props.setOpenModal(false);
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
        <img
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
            <button
              className="add-order-btn"
              onClick={() => dispatch(addItem({
                id: 1,
                name:'food',
                price:3000
              }))}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal