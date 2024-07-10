import React from 'react';
import { Link } from 'react-router-dom';
import exampleImage from '../assets/home.jpeg'; 
// import './App.css'; // Ensure you have your CSS imported

function Home() {
  return (
    <>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <img src={exampleImage} alt="Example" />
          </div>
          <div className="col">
            <h1>Login</h1>
            <form className="login-form">
              <div className="form-group">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="login-button">Login</button>
            </form>
            <div className="or-divider">
              <hr /> <span>OR</span> <hr />
            </div>
            <div>
              <label>Don't have an account-</label>
              &nbsp; <Link to="/signup">Sign Up Here</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
