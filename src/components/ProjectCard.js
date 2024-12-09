import React from 'react'
import "../components/ProjectCard.css"
import "./Bulb.css"

function ProjectCard({ img_src, title, text }) {
    return (
    <div className="project-card">
        <div className="project-card-img">
            <img src={img_src} alt="brand-logo" ></img>
            <div className="card-overlay">
                <p>{text} </p>
            </div>
        </div>
        <h4>{title}</h4>
    </div>
    )
}

export default ProjectCard