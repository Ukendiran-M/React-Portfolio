import React from 'react'
import './Side.css'

function Sidebar() {
  return (
    <div className='Sidebar'>
      <ul className='side'>
        <li><a href='https://www.linkedin.com/in/ukendiran/'><i className="fab fa-linkedin"></i></a></li>
        <li><a href='https://github.com/Ukendiran-M/'><i className="fab fa-github"></i></a></li>
        <li><a href='https://www.instagram.com/ukiiieeee/'><i className="fab fa-instagram"></i></a></li>
        <li><a href='https://x.com/Ukie_svg/'><i className="fa-brands fa-x-twitter"></i></a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
