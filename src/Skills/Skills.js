import React from 'react';
import './Skills.css';
import Fade from 'react-reveal/Fade'
const Skills = () => {
  return (
    <div className='skills-body'>
        <div className='skills-header'>
           Skills
        </div>
        <Fade bottom duration={1500}>
        <div className='skill-list'>
        
            <div className='grids'>
                <h2>UI/UX Designer</h2>
                <p>I'm a Google certified UI/UX Designer. I seek to provide users with an interface with which they can resonate and have a seemless expereience.</p>
                <button>Learn More</button>            
                </div>

            <div className='grids'>
            <h2>Web Developer</h2>
            <p>I'm a Front-End Web Developer. I'm acquianted with HTML, CSS, Javascript, React.JS.</p>
            <button>Learn More</button> 
            </div>

            <div className='grids'>
            <h2>Graphics Designer</h2>
            <p>I'm in the field of Graphics designing for past 5 Years. I have worked with many clients including YouTubers, Famous Twitter acoounts, etc. </p>
            <button>Learn More</button> 
            </div>
            
        </div>
        </Fade>

    </div>
  )
}

export default Skills;