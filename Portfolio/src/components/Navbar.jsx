import React, { useState, useEffect } from 'react';
import './Nav.css';
import './Dark.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Dark from './Dark.jsx';

function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li><a href='https://mail.google.com/mail/?view=cm&fs=1&to=ukimanimaran@gmail.com'><i className="fas fa-envelope"></i> ukimanimaran@gmail.com</a></li>
        <li><a href='#about'><i className="fa-solid fa-file"></i> Works</a></li>
        <li><a href='#projects'><i className="fa-regular fa-folder-open"></i> Resume</a></li>
        <li><a href='#contact'><i className="fa-solid fa-cubes"></i> Shelf</a></li>
        <li><Dark /></li>
      </ul>
    </div>
  );
}

export default Navbar;
