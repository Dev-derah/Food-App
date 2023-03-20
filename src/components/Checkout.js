import React from 'react'
import Modal from './Modal'
import '../css/Checkout.css'

const Checkout = () => {
  return (
    <>
      <Modal>
        <div className="checkout__container">
          <h3 className='checkout__header'>Checkout</h3>
          <form className="checkout__form">
            <input className="checkout__input" placeholder="Card Number" type={'number'}/>
            <input className="checkout__input" placeholder="Exp Date" />
            <input className="checkout__input" placeholder="CVV" type={'number'} maxLength='3' />
            <input className="checkout__input" placeholder="Card Pin" />
            <button className='makePayment__btn' type='button'>Make Payment</button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default Checkout