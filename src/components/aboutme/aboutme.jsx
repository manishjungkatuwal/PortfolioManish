import React from 'react'
import './aboutme.css'

const aboutme = () => {
  return (
    <div className='aboutme' id='aboutme'>
        <div className="summary" >
            <h1>Summary</h1>
            <p>
            Solution-driven web developer adept at contributing 
            to highly collaborative work environment and finding 
            solutions. Proven experience developing interactive 
            websites using React, CSS, Django, Express, 
            PostgreSQL, Jira, AWS, and Azure Services. In-depth 
            knowledge of best practices for web design, UI/UX, 
            and version control.
            </p>
        </div>
        <div className="education">
            <h1>Education</h1>
            <table>
                <tbody>
                    <tr className='education-one'>
                        <td>University of Louisiana at Monroe</td>
                        <td>Jan 2021 - May 2025</td>
                    </tr>
                    <tr className='education-two'>
                        <td>Bachelor's in Computer Science,</td>
                    </tr>
                    <tr className='education-three'>
                        <td>Minor in Mathematics</td>
                    </tr>
                    <tr className='education-four'>
                        <td>GPA: 3.775/4</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <table>
                <tbody>
                    <tr>
                        <td className='skills-topics'>Programming Languages:</td>
                        <td className='skills-points'>Java</td>
                        <td className='skills-points'>Python</td>
                        <td className='skills-points'>JavaScript</td>
                        <td className='skills-points'>TypeScript</td>
                        <td className='skills-points'>C++</td>
                    </tr>
                    
                    <tr>
                        <td className='skills-topics'>Web-development Tools:</td>
                        <td className='skills-points'>React</td>
                        <td className='skills-points'>Angular</td>
                        <td className='skills-points'>Django</td>
                        <td className='skills-points'>CSS</td>
                        <td className='skills-points'>Figma</td>
                    </tr>
                    
                    <tr>
                        <td className='skills-topics'>Cloud Technologies:</td>
                        <td className='skills-points'>AWS</td>
                        <td className='skills-points'>Azure</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                    <tr>
                        <td className='skills-topics'>Database Management systems:</td>
                        <td className='skills-points'>MySQL</td>
                        <td className='skills-points'>PostgreSQL</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                    <tr>
                        <td className='skills-topics'>Project Managemement Tools:</td>
                        <td className='skills-points'>Jira</td>
                        <td className='skills-points'>Github</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="certification">
            
        </div>
    </div>
  )
}

export default aboutme