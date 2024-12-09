import React from 'react'
import "./SubscriptionSection.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function SubscriptionSection() {
    return (
        <>
            <div className="subscription-container">
                <div className="social-texts">
                    <h2>Keep up with us! Follow our social media</h2>
                
                </div>
                <div className="social-links">
                    <a className="social-button" href="https://www.instagram.com/t4sg_umich/?hl=en"><InstagramIcon/></a>
                    <a className="social-button" href="https://github.com/tech4socialgood"><GitHubIcon/></a>
                </div>
                <div className="newsletter-form">
                    <h3>Subscribe to our newsletter</h3>
                    <form className='email-subscribe' action="">
                        <div className="email-form">
                            <input className = "textbox" type="text" placeholder='Email address' name="mail" required></input>
                        </div>
                        <div className="subcribe">
                            <input className='primary-button' type="submit" value="Subscribe"></input>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SubscriptionSection