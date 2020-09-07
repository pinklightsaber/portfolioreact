import React from 'react';

import VisibilityIcon from '@material-ui/icons/Visibility';
import GitHubIcon from '@material-ui/icons/GitHub';
import './scss/projects.scss';




function Project(){
    return(
        <main>
            <section className="projects">
                <div className="projects__bio-image">
                    <div className="projects__bio">
                        <h2 className="text-secondary">PROYECTOS</h2>
                       
                    </div>
                    </div>
                    <div className="projects__items">
                        <div className="projects_item">
                            <img src="img/project-1.jpg" alt="My Projects"></img>
                            <div className="projects__btns">
                                <a href="#!" className="projects__btn">
                                    <VisibilityIcon/>Overview
                                </a>
                                <a href="#!" className="projects__btn">
                                    <GitHubIcon/>Github
                                </a>
                            </div>
                        </div>
                        <div className="projects_item">
                            <img src="img/project-2.jpg" alt="My Projects"></img>
                            <div className="projects__btns">
                                <a href="#!" className="projects__btn">
                                    <VisibilityIcon/>
                                </a>
                                <a href="#!" className="projects__btn">
                                    <GitHubIcon/>
                                </a>
                            </div>
                        </div>
                        <div className="projects_item">
                            <img src="img/project-3.jpg" alt="My Projects"></img>
                            <div className="projects__btns">
                                <a href="#!" className="projects__btn">
                                    <VisibilityIcon/>
                                </a>
                                <a href="#!" className="projects__btn">
                                    <GitHubIcon/>
                                </a>
                            </div>
                        </div>
                        <div className="projects_item">
                            <img src="img/project-4.jpg" alt="My Projects"></img>
                            <div className="projects__btns">
                                <a href="#!" className="projects__btn">
                                    <VisibilityIcon/>
                                </a>
                                <a href="#!" className="projects__btn">
                                    <GitHubIcon/>
                                </a>
                            </div>
                        </div>
                        <div className="projects_item">
                            <img src="img/project-5.jpg" alt="My Projects"></img>
                            <div className="projects__btns">
                                <a href="#!" className="projects__btn">
                                    <VisibilityIcon/>
                                </a>
                                <a href="#!" className="projects__btn">
                                    <GitHubIcon/>
                                </a>
                            </div>
                        </div>
                    </div>
                
            </section>
        </main>
    )
}

export default Project;