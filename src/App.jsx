import React from 'react';

import Header from './header';

import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';



import { BrowserRouter as Router, Route, Switch, HashRouter} from 'react-router-dom';
// import ScrollHandler from './Scroll';

import './scss/App.scss';

function App() {
  return ( 
    <div>

        <HashRouter>
          <Header/>
          <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/contact" component={Contact}/>
              <Footer/>
          </div>
          <div className="contentdesktop">
            <Router>
              <Switch>
                <Route>
                  <Home/>
                  <About/>
                  <Projects/>
                  <Contact/>
                  <Footer/>
                </Route>
              </Switch>
            </Router>
          </div>
          
          

          
        </HashRouter>
        
            
       
    </div>
    
  
  );
}


export default App;
