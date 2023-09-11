import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react';
const PrivacyPolicy = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <>
      <header className = "header-main">
        <div className = "cantainer-header ">         
          <div className = "menuP ">
            <div className="logo">
            <img src="./image/goiptv.png" alt=''/>
            </div>
            <div className = "nav">
              <NavLink className="na text-white" to="/">Home</NavLink>
              <NavLink className="na text-white" to="/Nospacks">Nos packs</NavLink>
              <NavLink className="na text-white" to="/Contact">Contact</NavLink>
              <NavLink className="na text-white" to="/About">About</NavLink>
            </div>
          </div>
        </div>
      </header>
      <div>PrivacyPolicy</div>
    </>
  )
}

export default PrivacyPolicy