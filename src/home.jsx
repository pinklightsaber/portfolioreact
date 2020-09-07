import React from 'react';




function Home(){
    return(
      <main>
        <section className="home">
        
            <h1 className="home__name">
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
                      <stop stop-color="#F2636F"/>
                      <stop stop-color="#F26666" offset="100%"/>
                    </linearGradient> 
              </defs>
              <text>
                <textPath  fill="url(#grad)"xlinkHref="#circle">
                web developer ✩ programmer ✩
                </textPath>
              </text>
            </svg>
            <img ></img>
            </div>
            
            
              <br/>
              <span>Carol</span>
              <span className="home__name--last">
                Torres
              </span>
            </h1>
           
            
          </section>
          
      </main>
    )
}

export default Home;