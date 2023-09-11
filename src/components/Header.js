import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const  Header = () => {
  return (
    <>
      <header className = "header-top-strip py-2">
        <div className = "cantainer -xxl">
            <div className = "row">
                <div className = "col">
                  <p className = "d-flex justify-content-center text-white mb-0"> Profitez de la meilleur IPTV Premium</p>
                </div>
            </div>
        </div>
      </header>
      {/* <header className = "header-main py-2">
        <div className = "cantainer-header ">         
          <div className = "menu ">
            <div className="logo">
            <img src="./image/goiptv.png" alt=''/>
            </div>
            <div className = "nav">
              <NavLink className="na" to="/">Home</NavLink>
              <NavLink className="na" to="/Nospacks">Nos packs</NavLink>
              <NavLink className="na" to="/Contact">Contact</NavLink>
              <NavLink className="na" to="/About">About</NavLink>
            </div>
          </div>
        </div>
      </header> */}

      
    </>
  )
}

export default Header