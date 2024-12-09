import React from 'react';
import ProjectCard from '../ProjectCard';
import MBCupbroad from "../../assets/M&BImage.png";
import BBooks from "../../assets/B&BImage.png";
import AAdvising from "../../assets/AAImage.png";
import Lapeer from "../../assets/LapeerImage.png";
import DetroitPartner from "../../assets/DetroitPartnershipImage.png";
import Braid from "../../assets/BraidImage.png";
import "../../App.css"

function Projects() {
  return (
    <><div className="main-h1-container">
      <h1>Our Projects</h1>
    </div>
      <div className="projects-container">
        <h2>2024-2025</h2>
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
      </div>
      <div className="projects-container">
        <h2>2023-2024</h2>
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
      </div>

    </>
  )
}

export default Projects