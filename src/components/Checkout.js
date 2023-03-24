import React from 'react'
import Modal from './Modal'
import '../css/Checkout.css'
import { PatternFormat } from "react-number-format";

const Checkout = () => {

  return (
    <>
      <Modal>
        <div className="checkout__container">
          <h3 className="checkout__header">Checkout</h3>
          <form className="checkout__form">
            <PatternFormat
              className="checkout__input"
              placeholder="Card Number"
              format="#### #### #### ####"
            />
            <div className="exp-wrapper">
              <input
                autoComplete="off"
                className="exp"
                id="month"
                maxLength="2"
                pattern="[0-9]*"
                inputMode="numerical"
                placeholder="MM"
                type="text"
                data-pattern-validate
              />
              <input
                autoComplete="off"
                className="exp"
                id="year"
                maxLength="2"
                pattern="[0-9]*"
                inputMode="numerical"
                placeholder="YY"
                type="text"
                data-pattern-validate
              />
            </div>
            <input
              className="checkout__input"
              placeholder="CVV"
              inputMode="numerical"
              maxLength="3"
            />
            <input
              className="checkout__input"
              placeholder="Card Pin"
              type={"password"}
              maxLength="4"
              inputMode="numerical"
            />
            <button className="makePayment__btn" type="button">
              Make Payment
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default Checkout