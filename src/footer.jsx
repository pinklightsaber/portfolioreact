import React from 'react';

// icons
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer(){
    return(
        <footer>
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
            </div>
        
        Copyright 2020</footer>
    )
}

export default Footer;