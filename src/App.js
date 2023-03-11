import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import {Login}  from "./components/Login";
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import Order from "./components/Order";
import Cart from './components/Cart'

function App() {
  
  return (
    <div className="App">
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="order" element={<Order />} />
              <Route path="profile" element={<Profile />} />
              <Route path="cart" element={<Cart />} />
            </Route>
            <Route path="/dashboard" element={<Profile />}></Route>
          </Routes>
        </Router>
      </React.StrictMode>
    </div>
  );
}

export default App;
