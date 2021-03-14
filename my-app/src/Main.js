import React from 'react'
import "./Main.css"
import "./logo.svg"
import Nav from "./Nav.js"

function Main() {
    return (
        <div>
        <div className="main">

            <div id="box1"></div>

            <div id="box2">
                <div id="text">
                    MICHAEL<br/>OLA

                </div>

            </div>
            <div id="box3">
                <div id="container">
                    <div id="logo">
                        <img src="https://o.remove.bg/downloads/8d044222-473c-4273-8fa5-78348f5d009e/Screenshot__121_-removebg-preview.png" />


                    </div>
                  <Nav/>


                    


                </div>
                </div>




        </div>
            
        </div>
    )
}

export default Main
