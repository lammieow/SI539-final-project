import React from 'react'
import "../../App.css";
import SubscriptionSection from '../SubscriptionSection';
import ContactIcon from '../../assets/ContactIcon.png'

function Contact() {
    return (
        <div>
            <div className="contact-texts">
                <h1 id="contact-h1">Contact Us</h1>
                <div className="contact-wrap">
                    <div className="contact-logo">
                        <img src={ContactIcon} alt="/" className="contact-logo" />
                    </div>
                    <div className="contact-reason">
                        <h2>Why should you contact us?</h2>
                        <ul>
                            <li>Partner with us! </li>
                            <li>Ask about our upcoming events.</li>
                            <li>Have an idea for a project? Share with us!</li>
                            <li>Connect with our team.</li>
                        </ul>
                        <h3>Direct all your inquires to <a href="mailto:t4sg-broad@umich.edu">t4sg-broad@umich.edu</a>
                        </h3>
                    </div>
                </div>
            </div>
            <SubscriptionSection />
        </div>
    )
}

export default Contact