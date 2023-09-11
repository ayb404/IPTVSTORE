import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { useEffect } from 'react';

const Contact = ({scroll}) => {

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
      <header className = "header-main headerEvent">
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
              <Link to="/" className="text-black"><i class="fas fa-home"></i> Home</Link> > About Us
              </div>
              <div className='container-title py-md-5'>
                  <h2>Contact Us</h2>
              </div>

              <div className='container-form'>
                  <form className='form'>
                    <fieldset>
                    <input name="Full Name" type="text" className="form-control" id="FullName" placeholder="Full Name" required=""/>
                    <input  type="email" placeholder="E-mail Address" className="form-control" />
                    <input type="text" placeholder="Subject" className="form-control"/>
                    <textarea rows="6" type="text" placeholder="Your Message" rows ="6" className="form-control" />
                    </fieldset>
                    <button className="butt">Send Message</button>
                  </form>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Contact