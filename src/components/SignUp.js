import React from 'react'

const SignUp = () => {
  return (
    <div>
      <main className="form-page">
        <div className="img-section" id="signup"></div>
        <div className="form-section">
          <h3 header>Welcome to Lilies!</h3>
          <form>
            <input placeholder="Your First Name"></input>
            <input placeholder="Your Email address"></input>
            <input placeholder="Your Password"></input>
            <button className='submit-button'>SIGN UP</button>
          </form>
          <div className="form-footer">
            <p>
              Already have an account. <span>LOGIN</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUp