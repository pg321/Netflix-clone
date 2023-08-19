import React, { useState, useEffect } from 'react'
import './Nav.css';
import { useNavigate } from 'react-router-dom';

function Nav() {
const [show, handleShow] = useState(false);
const Navigate = useNavigate();

const transitionNavBar = () => {
  if(window.scrollY > 100) {
    handleShow(true);
  } else {
    handleShow(false);
  }
}

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, []);


  return (
    //string interpolation and render the nav__black only when show variable is true
    <div className={`nav ${show && 'nav__black'}`}> 
      <div className="nav__contents">
        <img 
          onClick={() => Navigate("/")}
          className='nav__logo'
          src="https://pngimg.com/uploads/netflix/netflix_PNG32.png" alt=""
        />
        <img 
          onClick={() => Navigate("/profile")}
          className='nav__avatar'
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt=""
        />
      </div>
    </div>
  )
}

export default Nav