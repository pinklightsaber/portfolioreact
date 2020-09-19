import React from 'react';
import Slide from 'react-reveal/Slide';
import MediaQuery from "react-responsive";
import Datos from './datos';
import Form from './form';

import './scss/contact.scss';

function Contact (){
    return (
        <main id="Contact">
            <section className="contact">
            <div className="title">
                <h1 className="big">HI</h1>
                <h1 className="text-secondary">Contáctame</h1>
            </div>
                
            <Slide bottom>
                <Form/>
            </Slide>
                <MediaQuery maxDeviceWidth={768}>
                
              <Datos/>
              </MediaQuery>
                
            </section>
        </main>
    )
}

export default Contact;