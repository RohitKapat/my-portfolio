import React from 'react';
import './DevInfo.css';
import profilepic from './profilepic.jpg';
const DevInfo = () => {
  return (
    <div>
        <div className="main">
            <div className="infoContainer">
                    <div className="devInfo">
                        <p className="hi">Hi, I'm Rohit Kapat</p>
                        <div className="skill">
                            <h2 className="Ui">UI/UX Designer, </h2>
                            <h2 className='Web'>Web Developer</h2> 
                        </div>
                        <div className="buttons">
                            <button>About Me</button>
                        </div>
                    </div>

                <div className="devPic">
                    <img src={profilepic} alt="Profile Pic"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DevInfo;