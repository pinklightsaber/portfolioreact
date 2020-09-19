import React from 'react';
import Slide from 'react-reveal/Slide';
import MediaQuery from "react-responsive";


import {FaLaptopCode} from 'react-icons/fa';
import {FaFileCode} from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaPagelines} from 'react-icons/fa';




import './scss/about.scss';


 



function About (props){
    return(
        <main id="About">
           
            <section className="about">
            <div className="about__bio-image">
                <div className="about__bio title">
                    <h1 className="big">S</h1>
                    <h2 className="text-secondary">SKILLS</h2>
               
                </div> 
            </div>
            
            <div className="jobs">
          
            <Slide right>
                <div className="jobs__job">
                    <div className="jobs__job-1">
                        <h1><FaFileCode/></h1>
                        
                    </div>
                   <div>
                        <h2 className="text-secondary">MAQUETAMIENTO</h2>
                        <h6>HTML+CSS+JS/JQUERY</h6>
                        <p>Servicios de landing pages para construir web con comportamiento dinámico.
                        También herramientas como Bootstrap</p>
                   </div>
                    
                </div>
            </Slide>
            <Slide left>
                <div className="jobs__job">
                    <MediaQuery maxDeviceWidth={768}>
                    <div className="jobs__job-1">
                            <h1><FaLaptopCode/></h1>
                            
                        </div>
                    </MediaQuery>
                    <div>
                        <h2 className="text-secondary"> WEB ADMINISTRABLES</h2>
                        <h6>WORDPRESS & PRESTASHOP</h6>
                        <p>Para gestionar web y crear sitios administrables o e-commerce.</p>
                    </div>
                    <MediaQuery minWidth={768}>
                        <div className="jobs__job-1">
                            <h1><FaLaptopCode/></h1>
                            
                        </div>
                    </MediaQuery>
                    
                    
                </div>
                </Slide>
                <Slide right>
                <div className="jobs__job">
                <div className="jobs__job-1">
                    <h1><FaReact/></h1>
                    
                    </div>
                    <div>
                        <h2 className="text-secondary"> REACT APP</h2>
                        <h6>React JS</h6>
                        <p>Para construir interfaces interactivas con distintas funcionalidades</p>
                    </div>
                    
                </div>
                </Slide>
                <Slide left>
                <div className="jobs__job">
                <MediaQuery maxDeviceWidth={768}>
                <div className="jobs__job-1">
                    <h1><FaNodeJs/></h1>
                    
                </div>
                </MediaQuery>
                <div>
                    <h2 className="text-secondary"> WEB APP</h2>
                    <h6>NODEJS/EXPRESS/MONGODB</h6>
                    <p>Para construir aplicacions web con NODEJS/EXPRESS. Conexión a DB de Mongo Atlas. Para el front templates PUG.</p>
                </div>
                <MediaQuery minWidth={768}>
                <div className="jobs__job-1">
                    <h1><FaNodeJs/></h1>
                    
                </div>
                </MediaQuery>
                
                </div>
                </Slide>
                <Slide right>
                <div className="jobs__job">
                <div className="jobs__job-1">
                    <h1><FaMobileAlt/></h1>
                    
                </div> 
                <div>
                    <h2 className="text-secondary"> MOBILE APP</h2>
                    <h6>React Native</h6>
                    <p>Para construir aplicacions web con NODEJS/EXPRESS. Conexión a DB de Mongo Atlas</p>
                </div>
                </div>
                </Slide>
                <Slide left>
                <div className="jobs__job">
                      <MediaQuery maxDeviceWidth={768}>
                      <div className="jobs__job-1">
                        <h1><FaPagelines/></h1>
                        
                    </div>  
                      </MediaQuery>
                    <div>
                        <h2 className="text-secondary"> DISEÑO</h2>
                        <h6>PS, AI, XD</h6>
                        <p>Creación de diseño digital, mockup, etc</p>
                    </div>
                    <MediaQuery minWidth={768}>
                    <div className="jobs__job-1">
                        <h1><FaPagelines/></h1>
                        
                    </div>  


                    </MediaQuery>
                   
                </div>
                
                </Slide>
                

            </div>
        </section>
            
        
        </main>
    )
}

export default About;