import React, { useState } from 'react';
import Navbar from './navbar';
import axios from 'axios';
const BASEURL = 'http://localhost:8000';
function Post(){
    const [formData, setFormData] = useState({
        title: '',
        content: ''
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
          const response = await axios.post(`${BASEURL}/post`, formData,{headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`
}});
          
          console.log('Signup successful:', response.data);
        } catch (error) {
          
          console.error('post publish:', error.response ? error.response.data : error.message);
        }
      };
    return(
        <>
        <div className="App" >
        <Navbar />
        <div className="container compose__container mt-5">
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <h1 className="blog-heading ">Compose</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input className="form-control" type="text" name="title"
            value={formData.title}
                onChange={handleChange}
                required></input>
          </div>
          <div className="form-group">
            <label>Post</label>
            <textarea className="form-control" name="content" rows="5" cols="30"
            value={formData.content}
                onChange={handleChange}
                required></textarea>
          </div>
          <button className="btn btn-primary mt-2" type="submit" name="button">Publish</button>
          <a href="/" className="btn btn-danger mt-2">Cancel</a>
        </form>
      </div>
    </div>

  </div>
  </div>
  </>
 
    )
}
export default Post;