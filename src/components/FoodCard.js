import React from 'react'

function FoodCard(props) {
  return (
    <div className="card-container">
      <div className="card-top">
        <img src={props.foodImage} alt="food" className="card-img" />
        <p>{props.foodName}</p>
        <p className='food-description'>{props.foodDescription}</p>
      </div>
      <div className="card-bottom">
        <p>{props.foodPrice}</p>
        <p className="addCart-btn">Add to cart</p>
      </div>
    </div>
  );
}

export default FoodCard