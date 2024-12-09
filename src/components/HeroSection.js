import React from 'react';
import "./HeroSection.css";

import BannerImage from "../assets/BannerImage.png";
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div className='hero-container'>
            <div className="hero-texts">
                <h2>University of Michigan</h2>
                <h1>Tech 4 Social Good</h1>
                <p>We build the Community with the Community</p>
                <Link to="/Contact">
                <button className="primary-button" id="hero-button">Contact Us</button>
                </Link>
            </div>
            <img src={BannerImage} alt="Group of students working together" />
            
        </div>
    )
}

export default HeroSection;