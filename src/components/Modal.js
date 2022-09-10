import React from 'react'

const Modal = (props) => {
  console.log()
  return (
    <div className="modal">
      <div className="modal__content">
        <img
          src={props.selectedMeal.MealImage}
          alt="food"
          className="modal-img"
        />
        <h3>{props.selectedMeal.MealName}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          malesuada convallis arcu vel eleifend. Vivamus est justo, aliquet non
          consectetur eget, eleifend vitae ipsum. Donec et dolor rutrum,
          pellentesque ligula at, porta leo. Phasellus at lacus eget ex
        </p>
        <div>
          <h4>N{props.selectedMeal.MealPrice}</h4>
          <h4>10-20 Mins</h4>
          <h4>10 Pcs Available</h4>
        </div>

        <div>
          <div>
            <button>+</button>
            <p>1</p>
            <button>-</button>
          </div>

          <div>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal