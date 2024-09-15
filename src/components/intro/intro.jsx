import React from 'react';
import './intro.css';
import Profile from "../../assets/ManishProfile.png";

const intro = () => {
  return (
    <div className='intro' id='intro'>
        <div className="intro-left">
            <span className="intro-hello">Hello, </span>
            <span className="intro-text">I'm{" "}   
                <span className="intro-name">
                    <span className="intro-nametag">
                    Manish Katuwal
                    </span> <br/>
                    Web Developer
                </span>
            </span>
            <p className="intro-para">
                Solution-driven web developer 
                <br/>adept at contributing to 
                <br/>highly collaborative work environment and finding solutions.
            </p>
        </div>
        <img src={Profile} alt='Picture of Manish'/>
        <hr style={{color:"#183740", height: "4px", border: "none"}}/>
    </div>
  )
}

export default intro