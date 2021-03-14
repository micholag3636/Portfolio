import Main from "./Main.js"
import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import Nav from "./Nav.js"
import Portfolio from "./Portfolio.js"
import About from "./About.js"
import Contact from "./Contact.js"


function App() {
  return (
    <div className="App">
      
      <Router>
       

        <Route exact path="/">

      <Main/>
      </Route>

      <Switch>

      <Route exact path="/portfolio">


     
      <div id="logo">
                        <img src="https://o.remove.bg/downloads/8d044222-473c-4273-8fa5-78348f5d009e/Screenshot__121_-removebg-preview.png" />
                        </div>


               
                 
      
        <Nav />

<Portfolio />
</Route>


<Route exact path="/About">



<div id="logo">
                        <img src="https://o.remove.bg/downloads/8d044222-473c-4273-8fa5-78348f5d009e/Screenshot__121_-removebg-preview.png" />
                        </div>


               
                 

        <Nav />

<About />
</Route>


<Route exact path="/contact">



                    <div id="logo">
                        <img src="https://o.remove.bg/downloads/8d044222-473c-4273-8fa5-78348f5d009e/Screenshot__121_-removebg-preview.png" />
                        </div>


               
                 




        <Nav/>

<Contact />
</Route>


      

      </Switch>

      









      </Router>
     
      
    </div>
  );
}

export default App;
