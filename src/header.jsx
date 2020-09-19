import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { Link as Newlink } from "react-scroll";




  


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
                   Inicio
                </Link>
                 
            </li>
            <li className="menu-nav__item">
              <Link to="/about" className="menu-nav__link" onClick={ this.toggleClass }>
                  Acerca de
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

            </ul>

          </nav>
      <nav className="nav" id="nav-desktop">
        
        <ul className="menu-desktop" >
        <li className="menu-desktop__name">
            
                <span>Carol</span>
                <span className="menu-desktop__name--last">
                  Torres
                </span>
       
          </li>
          <li className="menu-desktop__item">
             
              <Newlink
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                delay={0}>Inicio</Newlink>
              
          </li>
          <li className="menu-desktop__item">
            
            <Newlink
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                delay={0}>Acerca de</Newlink>
            
          </li>
          
          <li className="menu-desktop__item">
            
            <Newlink
                activeClass="active"
                to="Project"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                delay={0}>Proyectos</Newlink>
            
          </li>
            <li className="menu-desktop__item">
          
            <Newlink
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                delay={0}>Contactame</Newlink>
              
            </li>
            

          </ul>

        </nav>
          
      </div>
    );
  }
}

export default Header;

