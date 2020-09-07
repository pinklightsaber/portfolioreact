import React from 'react';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import RoomIcon from '@material-ui/icons/Room';
import Form from './test';

import './scss/contact.scss';

function Contact (){
    return (
        <main>
            <section className="contact">
                <h2>Contactame</h2>

                <Form/>

                <div className="contact__list">
                    <div className="contact__email">
                        <AlternateEmailIcon/>Email
                        <div className="text-secondary">
                            email@email.com
                        </div>
                    </div>
                    <div className="contact__phone">
                        <PhoneAndroidIcon/>Número
                        <div className="text-secondary">
                            +56979778088
                        </div>
                    </div>
                    <div className="contact__address">
                        <RoomIcon/>Dirección
                        <div className="text-secondary">
                            En el campo
                        </div>
                    </div>
                </div>
                
            </section>
        </main>
    )
}

export default Contact;