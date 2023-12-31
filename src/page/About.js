import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useEffect } from 'react';


const About = ({scroll}) => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  const header = document.querySelector('.headerEvent')

  if(scroll >= 28) {
      header?.classList.add('header_scrolled')
  }else {
      header?.classList.remove('header_scrolled')

  }


  return (
    <>
      <header className = "header-main  headerEvent">
        <div className = "cantainer-header ">         
          <div className = "menuP ">
            <div className="logo">
            <img src="./image/technopro.png" alt=''/>
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
      <section className="policy-wrapper">
        <div className="main-terms">
            <div className="terms">
              <div className='me-2'>
              <Link to="/" className="text-black"><i class="fas fa-home"></i>  Home</Link> > About Us
              </div>
              <div className='container-title'>
                  <h2>About Us</h2>
              </div>

              <div className='container-policy'>
                  <p>
                    <h3>We Are Your Favourite, Online Store.</h3>
                    <p>Watch your favorites Channels, movies , TV series etc in HD, FHD and 4k format, with Best TV Shows of all time Updated Frequently and Frequently updated Movies with High Quality</p>
                    <p>+18500 worldwide & sport channels in your Buy IPTV plan, you can watch your favorite sport event in best possible picture quality. Buy IPTV Service includes VIP Sport channels all arround the world.</p>
                    <p>Supported devices include Samsung, LG Smart TVs, PC, Macbook, Android TVs, Android Boxes MAG, Openbox, Apple TV, iPad, iPhone, STB Emulator, Enigma 2, Nividia shield box, Amazon Firestick and more…</p>
                  </p>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default About