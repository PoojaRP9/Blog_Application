// otp verify email
// user profile name, age, photo, gender, contact,hobbies
// password update , and change
// profile update
// blog title. category of blog, 
// text area should be a editor
// blog like, comment, follow, contact us


import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import exampleImage from '../assets/home.jpeg';
import './home.css';
import Navbar from './navbar';
import { AppContext } from '../AppContext';

const BASEURL = 'http://localhost:8000'; // Adjust the base URL if needed

function Home() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { setIsLoggedIn, isLoggedIn } = useContext(AppContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  useEffect(() => {
    axios.get(`${BASEURL}/post`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASEURL}/login`, formData);
      localStorage.setItem('token', response.data.token);
      setIsLoggedIn(true);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="container-fluid">
        <div>
          <Navbar />
          </div>
          <div className="main">
            
              <h4 className="post">Most Recent Blogs</h4>
              <div className="row">
                {Array.isArray(posts) && posts.length > 0 ? (
                  posts.map(post => (
                    <div className="card mt-5 " key={post._id}>
                      <div className="card-body ">
                        <h6 className="card-name">{post.user.username}</h6>
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.content}</p>
                        <a href="#" className="post-btn btn-primary home__post-btn">Read more</a>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No posts available</p>
                )}
              </div>
            </div>
          
        </div>
        
      ) : (
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col">
              <img src={exampleImage} alt="Example" />
            </div>
            <div className="col">
              <h1>Login</h1>
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="login-button">Login</button>
                <button type="reset">Forget Password</button>
              </form>
              <div className="or-divider">
                <hr /> <span>OR</span> <hr />
              </div>
              <div>
                <label>Don't have an account?</label>
                &nbsp; <Link to="/signup">Sign Up Here</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
