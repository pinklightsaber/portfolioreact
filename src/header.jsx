import React, { Component } from 'react';
import { Link} from 'react-router-dom';



  


class Header extends Component {
  toggleClass = () => {
    const oldStyle = document.getElementById('nav').className;
    const newClassName = oldStyle === 'open' ? '' : 'open'
    document.getElementById('nav').className =  newClassName;
    document.getElementById('menu-btn__burger').className =  newClassName;
    document.getElementById('menu-nav').className =  newClassName;
    document.getElementById('menu-nav').children.className = newClassName;
    
  }


  render() {
    return (
      <div>
       
        <div id="menu-btn" onClick={this.toggleClass}>
            <span  id="menu-btn__burger" ></span>
        </div>
            <nav className="nav" id="nav">
        
          <ul id="menu-nav" >
            <li className="menu-nav__item">
                <Link to="/" className="menu-nav__link" onClick={ this.toggleClass }>
                   Home
                </Link>
                
            </li>
            <li className="menu-nav__item">
              <Link to="/about" className="menu-nav__link" onClick={ this.toggleClass }>
                  About
              </Link>
              
            </li>
            <li className="menu-nav__item">
              <Link to="/projects" className="menu-nav__link" onClick={ this.toggleClass }>
                  proyectos
              </Link>
              
            </li>
              <li className="menu-nav__item">
              <Link to="/contact" className="menu-nav__link" onClick={this.toggleClass}>
                Contactame
              </Link>
                
              </li>
            
              
      <div>

   
  </div>

              
            </ul>
      

        
     
            
          </nav>
          
      </div>
    );
  }
}

export default Header;

