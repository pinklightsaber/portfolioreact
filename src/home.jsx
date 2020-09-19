import React from 'react';
import Slide from 'react-reveal/Slide';

function Home(){
    return(
      <main id="Home">
        <section className="home">
        
            
            <div className="home__img">
            <svg viewBox="0 0 100 100">
              <defs >
                <path id="circle" fill="pink" stroke="pink"
                  d="
                    M 50, 50
                    m -37, 0
                    a 37,37 0 1,1 74,0
                    a 37,37 0 1,1 -74,0"/>
                    <linearGradient id="grad">
                      <stop stop-color="#40185a"/>
                      <stop stop-color="#806187" offset="100%"/>
                    </linearGradient> 
              </defs>
            
              <text>
                <textPath  fill="url(#grad)"xlinkHref="#circle">
                web developer ✩ programmer ✩ designer
                </textPath>
              </text>
            </svg>
            <img alt=""></img>
          
            
            
              <br/>
              <Slide bottom>
              <div className="home_h1">
              <h1 className="home__name">
                <span>Carol</span>
                <span className="home__name--last">
                  Torres
                </span>
                
              </h1>
            
                <p>
                front end 
                
                </p>
                <p>
                mern stack
                
                </p>
                <p>
                javascript developer
                </p>
               
              
                
            </div>

              </Slide>
            
            </div>
            <div className="wave">
              <svg viewBox="0 0 1440 320" preserveAspectRatio="none" >
                <path d="M0,288L30,293.3C60,299,120,309,180,309.3C240,309,300,299,360,266.7C420,235,480,181,540,138.7C600,96,660,64,720,48C780,32,840,32,900,58.7C960,85,1020,139,1080,138.7C1140,139,1200,85,1260,96C1320,107,1380,181,1410,218.7L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">

                </path></svg></div>
           
            
              
           
            
          </section>
          
      </main>
    )
}

export default Home;