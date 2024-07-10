import { useState } from 'react'
import exampleImage from '../assets/home.jpeg'; 
// const BASEURL = 'http://localhost:8000'
// import './App.css'
// import Todolist from "./Todolist"

function signup() {
  
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // Add form submission logic here (e.g., API call)
    };
  
    return (
        <>
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
        <button type="submit">Signup</button>
      </form>
    </div>
    
    <div className="col">
            <img src={exampleImage} alt="Example" />
          </div>
    
    </div>
    </div>
         </>
        )
      }
      
      export default signup