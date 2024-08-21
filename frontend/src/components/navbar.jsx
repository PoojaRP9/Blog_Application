// Navbar.js

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';
import './home.css';

const Navbar = () => {
    const { setIsLoggedIn } = useContext(AppContext);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Assuming user data is stored in localStorage as JSON
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.username) {
            setUsername(user.username);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <div className="container-fluid">
            <div className="navbar-brand">Navbar scroll</div>
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            <a className="nav-link" href="#">Explore</a>
            <a className="nav-link" href="#">Notification</a>
            <a className="nav-link" href="#">Messages</a>
            <a className="nav-link" href="/profile">Profile</a>
            <a className="nav-link disabled" aria-disabled="true">Link</a>
            <a className="btn btn-danger nav-link" href="/post">Post</a>
            <button onClick={handleLogout} className="btn btn-danger nav-link">Logout</button>
            <div>
            {/* {Array.isArray(posts) && posts.length > 0 ? (
                posts.map(post => ( */}
                {/* { Array.isArray(user)} && 
                    <div className="profile-info">
                        {/* <img src="/path/to/profile-pic.jpg" alt="Profile" /> Replace with actual image path */}
                        {/* <span>{user.username}</span>
                    </div> */}
                 */
            </div>
        </div>
    );
};

export default Navbar;
