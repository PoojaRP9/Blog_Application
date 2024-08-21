import React from 'react';
import { useNavigate } from 'react-router-dom';
import exampleImage from '../assets/bg.jpg';

import './Profile.css';
import Navbar from './navbar';

const Profile = () => { 

    return(
        <>
        <div className="container-fluid">
        <div>
            <Navbar />
            </div>
            <div className="profile-container">
            <div className="edit-profile-icon">
                    <i className="fas fa-pencil-alt"></i>
                </div>
                <div className="profile">
                <div className="edit-profile-icon">
                    <i className="fas fa-pencil-alt"></i>
                </div>
                    <div className="profile-img">
                        <img src="https://via.placeholder.com/150" alt="Profile" />
                        <div className="plus-icon">+</div>
                    </div>
                    <div className="profile-detail">
                        <div>post</div>
                        <div>followers</div>
                        <div>following</div>
                    </div>
                </div>
                <div className="profile-username">
                    <div>username</div>
                    <div>description</div>
                </div>
                <div className="edit-profile-icon">
                    <i className="fas fa-pencil-alt"></i>
                </div>
            </div>
        </div>
        </>
    );
};

export default Profile;
