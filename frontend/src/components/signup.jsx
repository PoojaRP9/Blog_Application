import React, { useState } from 'react';
import axios from 'axios';
import exampleImage from '../assets/home.jpeg'; 

const BASEURL = 'http://localhost:8000';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const response = await axios.post(`${BASEURL}/signup`, formData);
      
      console.log('Signup successful:', response.data);
    } catch (error) {
      
      console.error('Signup failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col">
          <h2>Signup Page</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Contact:</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Signup</button>
          </form>
        </div>
        <div className="col">
          <img src={exampleImage} alt="Example" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
