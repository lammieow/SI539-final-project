import React from 'react';
import "../../App.css";
import HeroSection from "../HeroSection";
import AboutImage from "../../assets/AboutImage.png";
import MissionIcon from "../../assets/MissionIcon.png"
import CollaborationIcon from "../../assets/CollaborationIcon.png";
import WorkshopIcon from "../../assets/WorkshopIcon.png";
import NetworkingIcon from "../../assets/NetworkingIcon.png";
import BestPracticesIcon from "../../assets/PracticesIcon.png";
import MBCupbroad from "../../assets/M&BImage.png";
import BBooks from "../../assets/B&BImage.png";
import AAdvising from "../../assets/AAImage.png";
import Lapeer from "../../assets/LapeerImage.png";
import DetroitPartner from "../../assets/DetroitPartnershipImage.png";
import Braid from "../../assets/BraidImage.png";
import SubscriptionSection from '../SubscriptionSection';
import ProjectCard from "../ProjectCard"
import ScrollAni from '../ScrollAni';



function Home() {
    return (
        <>
            <HeroSection />
            <div className="body-container">
                <div className="about-container">
                    <div className="about-image">
                        <img src={AboutImage} />
                    </div>
                    <div className="about-text">
                        <h2>About Us</h2>
                        <p id="highlighted">At Tech 4 Social Good (T4SG), we create spaces for students of all majors and backgrounds to engage with the social, cultural, and political dimensions of technological development. </p>
                        <br />
                        <p>We believe that technology should serve society equitably, and we advocate for curriculum changes that inspire students to think critically about technology’s diverse implications</p>
                        <br />
                        <p>We work directly with communities to address real-world challenges, developing strategies that are both impactful and context-sensitive.</p>
                        <br />
                        <p>
                            If you're interested in shaping technology’s role in fostering a more just society, T4SG is your platform for creating that impact.
                        </p>
                    </div>
                </div>
                <div className="mission">
                    <div className="mission-container">
                        <div className="mission-title">
                            <img src={MissionIcon} alt="" />
                            <h2>Mission Statement</h2>
                        </div>
                        <div className="mission-texts">
                            <div className="text-ani">
                                <div className="mission-highlighted-background">
                                <ScrollAni/>
                                </div>
                            </div>
                            <p>Through partnerships with community-focused organizations, we support students in creating positive change—even in small but meaningful ways. T4SG offers workshops, discussions, and events that bring people together to explore how technology intersects with identity, background, and societal structures. Whether you’re STEM-focused or from a non-STEM background, our community empowers you to dive into the societal impacts of technology and take action, with support to pursue your ideas and challenge norms around technology’s place in our lives.</p>
                        </div>
                    </div>
                </div>
                <div className="impact-container">
                    <h2>How We Make an Impact</h2>
                    <div className="activities">
                        <div className="activity-item">
                            <div className="activity-icon">
                                <img src={CollaborationIcon} alt="" />
                            </div>
                            <div className="activity-texts">
                                <h4>Collaborative Client Projects</h4>
                                <p>Partner with local organizations and nonprofits to design and develop tech solutions that address real-world social challenges.</p>
                            </div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-icon">
                                <img src={WorkshopIcon} alt="" />
                            </div>
                            <div className="activity-texts">
                                <h4>Skill-Building Workshops</h4>
                                <p>Host hands-on sessions on topics like UI/UX design, coding, and data analysis to empower members with essential skills.</p>
                            </div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-icon">
                                <img src={NetworkingIcon} alt="" />
                            </div>
                            <div className="activity-texts">
                                <h4>Networking and Grow Together</h4>
                                <p>Connect members with industry leaders, alumni, and peers through guest talks, career panels, and project showcases.</p>
                            </div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-icon">
                                <img src={BestPracticesIcon} alt="" />
                            </div>
                            <div className="activity-texts">
                                <h4>Best Practices in CS Development</h4>
                                <p>Emphasize industry-standard methodologies, such as agile development, user-centered design, and code quality assurance, in all our projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects-container">
                    <h2>Our Projects</h2>
                    <div className="project-cards">
                        <ProjectCard
                            img_src={MBCupbroad}
                            title={"Maize & Blue Cupboard Website"}
                            text={"We helped UofM Maize and Blue Cupboard build their official website."}
                        />
                        <ProjectCard
                            img_src={AAdvising}
                            title={"Maize & Blue Cupboard Website"}
                            text={"Ann Arbor Advising wanted a redesign using SquareSpace."}
                        />
                        <ProjectCard
                            img_src={BBooks}
                            title={"Ballet&Books Information System"}
                            text={"Ballet&books came to us to connect with the clients better"}
                        />
                        <ProjectCard
                            img_src={DetroitPartner}
                            title={"Detroit Technology Partnership Mapping System"}
                            text={"Lorem ipsum dolor sit amet consect. Urna eget integer placerat quis sodales aliquam."}
                        />
                        <ProjectCard
                            img_src={Lapeer}
                            title={"Lapper County Pumping Department"}
                            text={"Lorem ipsum dolor sit amet consect. Urna eget integer placerat quis sodales aliquam."}
                        />
                        <ProjectCard
                            img_src={Braid}
                            title={"Maize & Blue Cupboard Website"}
                            text={"Lorem ipsum dolor sit amet consect. Urna eget integer placerat quis sodales aliquam."}
                        />
                    </div>
                    <button className="primary-button" id="view-more-projects">View more projects</button>
                </div>
            </div>
            <SubscriptionSection />
        </>

    );
}

export default Home;