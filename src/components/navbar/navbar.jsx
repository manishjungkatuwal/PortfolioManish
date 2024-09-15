import React, {useState} from "react";
import "./navbar.css";
import LogoM from "../../assets/logoM.png"
import {FaBars, FaTimes} from 'react-icons/fa'

const navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href='/' onClick={toggleMenu}>
          <img src={LogoM} alt="Logo of the website. Letter M."/>
        </a>
      </div>
      <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
        <ul>
          
          <li><a href='#intro' onClick={toggleMenu}>Home</a></li>
          <li><a href='#aboutme' onClick={toggleMenu}>About me</a></li>
          <li><a href='#myexperiences' onClick={toggleMenu}>My Experiences</a></li>
          <li><a href='#footer' onClick={toggleMenu}>Contact me</a></li>
        </ul>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </div>
  )};

export default navbar;
