import React from 'react';
import Slide from 'react-reveal/Pulse';

import Carousel from "react-elastic-carousel";

import VisibilityIcon from '@material-ui/icons/Visibility';
import GitHubIcon from '@material-ui/icons/GitHub';
import './scss/projects.scss';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];


function Project(){
    return(
        <main id="Project">

            <section className="projects">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#cec3c6" fill-opacity="1" 
                d="M0,64L26.7,53.3C53.3,43,107,21,160,21.3C213.3,21,267,43,320,42.7C373.3,43,427,21,480,26.7C533.3,32,587,64,640,80C693.3,96,747,96,800,106.7C853.3,117,907,139,960,154.7C1013.3,171,1067,181,1120,160C1173.3,139,1227,85,1280,80C1333.3,75,1387,117,1413,138.7L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z">

                </path>
            </svg>
                <div className="projects__bio-image">
                    <div className="projects__bio title">
                        <h1 className="big">P</h1>
                        <h1 className="text-secondary">PROYECTOS</h1>
                       
                    </div>
                </div>
                <Slide bottom>
                    <div className="projects__items">
                  
                    <Carousel breakPoints={breakPoints}>
                    
                        <div className="projects__item">
                            <img src={require('./assets/proyecto1.JPG')} alt="My Projects"></img>
                            <div className="projects__btns">
                                <a href="#!" className="projects__btn">
                                    <VisibilityIcon/>Preview
                                </a>
                                <a href="#!" className="projects__btn">
                                    <GitHubIcon/>Github
                                </a>
                            </div>
                        </div>
                        <div className="projects__item">
                            <img src={require('./assets/proyecto1.JPG')} alt="My Projects"></img>
                            <div className="projects__btns">
                                <a href="#!" className="projects__btn">
                                    <VisibilityIcon/>Preview
                                </a>
                                <a href="#!" className="projects__btn">
                                    <GitHubIcon/>Github
                                </a>
                            </div>
                        </div>
                        
                        <div className="projects__item">
                            <img src={require('./assets/proyecto1.JPG')} alt="My Projects"></img>
                            <div className="projects__btns">
                                <a href="#!" className="projects__btn">
                                    <VisibilityIcon/>Preview
                                </a>
                                <a href="#!" className="projects__btn">
                                    <GitHubIcon/>Github
                                </a>
                            </div>
                        </div>
                        
                        <div className="projects__item">
                            <img src={require('./assets/proyecto1.JPG')} alt="My Projects"></img>
                            <div className="projects__btns">
                                <a href="#!" className="projects__btn">
                                    <VisibilityIcon/>Preview
                                </a>
                                <a href="#!" className="projects__btn">
                                    <GitHubIcon/>Github
                                </a>
                            </div>
                        </div>
                        
                        <div className="projects__item">
                            <img src={require('./assets/proyecto1.JPG')} alt="My Projects"></img>
                            <div className="projects__btns">
                                <a href="#!" className="projects__btn">
                                    <VisibilityIcon/>Preview
                                </a>
                                <a href="#!" className="projects__btn">
                                    <GitHubIcon/>Github
                                </a>
                            </div>
                        </div>
                        
                        </Carousel>
                        
                    </div>
                    </Slide>
                
            </section>
        </main>
    )
}

export default Project;