import React from 'react'
import LogoText from "../assets/Logo_Text.png"
import "../components/Footer.css"

function Footer() {
    return (
        <footer>
        <div className="footer-container">
            <div className="logo-contributions">
                <img src={LogoText} alt="logo"></img>
                <p>©2024 Tech for Social Good, All Rights Reserved.</p>
                <p>Icons from The Noun Project</p>     
            </div>
            <div className="footer-links-container">
                <h4>Quick Links</h4>
                <div className="footer-links">
                    <a href=''>Our Projects</a>
                    <a href=''>Our Events</a>
                    <a href=''>Contact Us</a>
                </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer