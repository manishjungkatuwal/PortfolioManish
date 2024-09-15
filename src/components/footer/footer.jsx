import React from 'react'
import './footer.css'
import LinkedIn from "../../assets/LinkedIn.png"
import Instagram from '../../assets/Instagram.png'
import Github from '../../assets/Github.png'

const footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="socials">
            <a href="https://www.linkedin.com/in/manish-katuwal/"><img src={LinkedIn} alt='LinkedIn Icon'/></a>
            <a href="https://github.com/manishjungkatuwal"><img src={Github} alt='Github Icon'/></a>
            <a href="https://www.instagram.com/manish_katuwal/"><img src={Instagram} alt='Instagram Icon'/></a>
        </div>
        <p>
            "Thank you for viewing my profile." - Manish Katuwal
        </p>
    </div>
  )
}

export default footer