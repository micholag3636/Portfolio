import React from 'react'
import "./Nav.css"
import {Route, BrowserRouter as Router, Link, NavLink} from "react-router-dom"

function Nav() {
    return (
        <div>

<div id="menu">
                        <ul>
                        <Link className="link" to="/">       <li>HOME</li> </Link>   
                        <Link className="link" to="portfolio">     <li>PORTFOLIO</li>  </Link>  
                        <Link  className="link" to="about">   <li>ABOUT</li> </Link>  
                        <Link className="link" to="contact">       <li>CONTACT</li> </Link>  
                         


                        </ul>


                    </div>
            
        </div>
    )
}

export default Nav
