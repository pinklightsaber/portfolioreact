import React from 'react';
import './scss/about.scss';

function About (){
    return(
        <main>
        <section className="about">
            <div className="about__bio-image">
                <div className="about__bio">
                <h2 className="text-secondary">SKILLS</h2>
               
                </div> 
            </div>
            <div className="jobs">
                <div className="jobs__job">
                    <h2 className="text-secondary">MAQUETAMIENTO</h2>
                    <h3>Maquetamiento</h3>
                    <h6>HTML+CSS+JS/JQUERY</h6>
                    <p>Servicios de landing pages para construir web con comportamiento dinámico.
                    </p>
                    <p>También herramientas como Bootstrap</p>
                </div>
                <div className="jobs__job">
                    <h2 className="text-secondary"> WEB ADMINISTRABLES</h2>
                    <h3>Web administrable</h3>
                    <h6>WORDPRESS & PRESTASHOP</h6>
                    <p>Para gestionar web y crear sitios administrables o e-commerce.</p>
                </div>
                <div className="jobs__job">
                    <h2 className="text-secondary"> REACT APP</h2>
                    <h3>React App</h3>
                    <h6>React JS</h6>
                    <p>Para construir interfaces interactivas con distintas funcionalidades</p>
                </div>
                <div className="jobs__job">
                    <h2 className="text-secondary"> WEB APP</h2>
                    <h3>APP WEB</h3>
                    <h6>NODEJS/EXPRESS/MONGODB</h6>
                    <p>Para construir aplicacions web con NODEJS/EXPRESS. Conexión a DB de Mongo Atlas. Para el front templates PUG.</p>
                </div>

                <div className="jobs__job">
                    <h2 className="text-secondary"> MOBILE APP</h2>
                    <h3>Mobile APP</h3>
                    <h6>React Native</h6>
                    <p>Para construir aplicacions web con NODEJS/EXPRESS. Conexión a DB de Mongo Atlas</p>
                </div>

                <div className="jobs__job">
                    <h2 className="text-secondary"> DISEÑO</h2>
                    <h3>DISEÑO</h3>
                    <h6>PS, AI, XD</h6>
                    <p>Creación de diseño digital, mockup, etc</p>
                </div>

            </div>
        </section>
        </main>
    )
}

export default About;