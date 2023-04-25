import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from './NavBar/NavBar';
import DevInfo from './DevInfo/DevInfo';
import About from './About/About';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div className='body'>
    <App />
    <NavBar />
    <DevInfo />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
  </React.StrictMode>
);

