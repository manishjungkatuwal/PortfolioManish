import React, {useState} from 'react'
import './aboutme.css'
import CloudPractioner from "../../assets/certificates/cloudprac.png"
import FrontEnd from "../../assets/certificates/front-end.png"
import HTMLCSS from "../../assets/certificates/htmlcss.png"
import JS from "../../assets/certificates/javascript.png"
import ReactCert from "../../assets/certificates/react.png"
import VC from "../../assets/certificates/versioncontrol.png"
import {ArrowBigLeft, ArrowBigRight} from "lucide-react"

const images = [CloudPractioner, ReactCert, FrontEnd, HTMLCSS, JS, VC];

const aboutme = () => {

    let [imageIndex, setImageIndex] = useState(0);

    const handleLeftArrowClick = () => {
        setImageIndex(index => {
            if(index ===0) return images.length-1
            return index-1
        })
    };
      
    const handleRightArrowClick = () => {
        setImageIndex(index => {
            if(index === images.length-1) return 0
            return index+1
        })
    };



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
        <h1>My Certificates</h1>
        <div className="certification">
            <div className="certification-slide" 
            style={{width: "100%", height: "100%", display: "flex", overflow: "hidden", margin: "0 auto"}}>
                {images.map(url => (
                    <img key={url} src={url} 
                    style={{ translate: `${-100*imageIndex}%`}}/>
                ))}
            </div>
            <button onClick={handleLeftArrowClick} className='certification-btn-l'><ArrowBigLeft/></button>
            <button onClick={handleRightArrowClick} className='certification-btn-r'><ArrowBigRight/></button>
        </div>
    </div>
  )
}

export default aboutme