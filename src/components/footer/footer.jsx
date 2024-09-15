import React from 'react'
import './footer.css'
import LinkedIn from "../../assets/LinkedIn.png"
import Instagram from '../../assets/Instagram.png'
import Github from '../../assets/Github.png'

const footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="socials">
            <img src={LinkedIn} alt='LinkedIn Icon'/>
            <img src={Github} alt='Github Icon'/>
            <img src={Instagram} alt='Instagram Icon'/>
        </div>
        <p>
            "Thank you for viewing my profile." - Manish Katuwal
        </p>
    </div>
  )
}

export default footer