import React from 'react'
import "../css/Form.css"
import { useNavigate } from "react-router-dom";

 const Login = () => {
  const navigate = useNavigate();
    const handleSubmit = (event) => {
      console.log(event.value)
      event.preventDefault();
      navigate("/dashboard");
    };
  return (
    <div>
      <main className="form-page">
        <div className="img-section" id="login"></div>
        <div className="form-section">
          <h3 className="form-header">Welcome Back!</h3>
          <form onSubmit={handleSubmit}>
            <input placeholder="Your Email address"></input>
            <input placeholder="Your Password"></input>
            <button className="submit-button" type="submit">Login</button>
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
export default Login;