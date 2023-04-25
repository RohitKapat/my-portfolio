import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div className='contact-container'>
    <div className='row'>
        <div className='contact-left'>
            <h1 className='contact-title'>Contact Me</h1>
            <p className='para'>rohitkapat2001@gmail.com</p>
            <p className='para'>8334076979</p>
            <button className='btn'>Download CV</button>
        </div>
        <div className='contact-right'>
            <form>
                <input type ='text' name='Name' placeholder='Your Name' required></input>
                <input type ='email' name='email' placeholder='Your Email' required></input>
                <textarea name='Message' rows='6' placeholder='Your Message'></textarea>
                <button type='submit' className='btn2'>Submit</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Contact;