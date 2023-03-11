import React from 'react'
import "../css/Form.css"

export const Login = () => {
  return (
    <div>
      <main className='form-page'>
        <div className="img-section" id='login'></div>
        <div className="form-section">
          <h3 className='header'>Welcome Back!</h3>
          <form>
            <input placeholder="Your Email address"></input>
            <input placeholder="Your Password"></input>
            <button className='submit-button'>Login</button>
          </form>
          <div className="form-footer">
            <p>Create an account</p>
            <p>Forgot Passoword</p>
          </div>
        </div>
      </main>
    </div>
  );
}
