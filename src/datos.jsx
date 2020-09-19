import React from 'react';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import RoomIcon from '@material-ui/icons/Room';

import './scss/contact.scss';


function Datos(){
    return(

        <div className="contact__list">
            <div className="contact__email">
                <AlternateEmailIcon/>
                <span>caroldenissetorres@gmail.com</span>
                    
                
            </div>
            <div className="contact__phone">
                <PhoneAndroidIcon/>
                <span>+56 9 79778088</span>
                    
                
            </div>
            <div className="contact__address">
                <RoomIcon/>
                <span>En el campo</span>
            
                    
                
            </div>
            </div>
    )
}


export default Datos;