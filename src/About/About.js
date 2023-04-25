import React from 'react';
import profile2 from './profile2.jpg';
import './About.css';
import Fade from 'react-reveal/Fade'
const About = () => {
  return (

   <Fade bottom duration={1800}> 
 <div className='abt'>
            <div class="aboutMe">
                    <div class="aboutContainer">
                        <div class="col1">
                            <div class="aboutImage">
                                <img src={profile2} alt='img2'/>
                            </div>
                        </div>

                    <div class="col2">
                        <div class="title">
                            <h1>About Me</h1>
                        </div>
                        <div class="paragraph">
                            <p>Hello!
                            
                            I'm Rohit Kapat, student at Heritage Institute of Technology pursuing Electronics and communication Engineering.

                            I have interest in Web Development, UI/UX Designing & Graphics designing.

                            </p>
                        </div>
                        <div className="para2"><h3>Education</h3></div>
                        <div className='list-edu'>
                        <ul>
                            <li>Schooling: Asian International School, Howrah</li>
                            <li>Bachelor's Degree: Heritage Institute Of Technology, Kolkata</li>
                        </ul>
                        </div>

                        <div className='btn4'>
                        <button>Learn More</button>
                        </div>
                    </div>
            </div>
        </div>


            <div class="skills">
                
            </div>
</div>
</Fade>
  )
}

export default About;