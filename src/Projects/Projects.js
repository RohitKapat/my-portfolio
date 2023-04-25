import React from 'react';
import './Projects.css';
import './Projects.jpg';
import Fade from 'react-reveal/Fade'

const Projects = () => {
  return (
    <Fade bottom duration={1500}>
    <div className='project-body'>
    <div className='project-title'>Projects</div>
    <div className='btn3'><button>See More</button></div>
    </div>
    </Fade>
  )
}

export default Projects;