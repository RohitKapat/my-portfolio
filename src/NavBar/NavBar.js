import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
          <div className="nav">
          <nav>
          <div className="nav-left">
              <h2>Rohit Kapat</h2>
              </div>
          <div className="nav-right">

              <ul>
                  <li><a href>Home</a></li>
                  <li><a href>About Me</a></li>
                  <li><a href>Contact</a></li>
                  <li><a href>My Projects</a></li>
              </ul>
          </div>
          </nav>
      </div>
</div>
  )
}

export default NavBar;