import React from 'react';
import MediaQuery from "react-responsive";

import Datos from './datos';
// icons
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer(){
    return(
        <footer>
        
        
            <MediaQuery minWidth={768}>
         <Datos/>
         </MediaQuery>
         <img alt=""></img>
        
        <div className="social-icons">
              <a href="#!">
                <TwitterIcon/>
                
              </a>
              <a href="#!">
                <LinkedInIcon/>
                
              </a>
              <a href="#!">
                <GitHubIcon/>
              </a>
              <p>©2020</p>
            </div>
            
          
            
            </footer>
    )
}

export default Footer;