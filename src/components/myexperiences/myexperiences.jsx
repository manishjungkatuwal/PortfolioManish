import React from 'react'
import './myexperiences.css'

const myexperiences = () => {
  return (
    <div className='myexperiences' id='myexperiences'>
        <h1>My Experiences</h1>
        <div className="list">
            <div className="internship">
                <h1>Internship: Application Developer Intern</h1>
                <h3>DXC Technology, New Orleans, Louisiana</h3>
                <p>
                Collaborated in an Agile team of 12 to develop a 
                web application for rapid prototyping using 
                Generative AI and the Lang Chain framework, cutting 
                prototyping time from 6 weeks to 3. As a Front-End 
                developer, I designed the UI/UX, implemented MSAL 
                authentication, and contributed to back-end 
                technologies, delivering a responsive web app in 
                8 weeks. Leveraged Microsoft Azure services, 
                including Blob storage, Cosmo DB, and PostgreSQL, 
                and implemented logging and monitoring with 
                MS Sentinels.
                </p>
            </div>
            <div className="project">
                <h1>Project: ULM Pre-Medical Advisory Committee </h1>
                <p>
                Collaborated in a team of five to develop a 
                comprehensive website for ULM PMAC, designed to 
                help students monitor their application progress 
                and eliminate the need for committee members to 
                manually track application statuses. Utilized 
                React.js on the front end to create a user-friendly 
                interface and seamless experience, while 
                implementing the back end with Express.js and 
                integrating Sequelize as the ORM to interact with 
                a PostgreSQL database.
                </p>
            </div>
        </div>
    </div>
  )
}

export default myexperiences