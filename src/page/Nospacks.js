import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const Nospacks = ({scroll}) => {

  const [checkedOption , setChekEdOption] = useState(0)

  const  navigate = useNavigate()
  
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


      <section className="pack" id='pack'>
          <div className = "wrapper" >
                  <div className = "container">
                    <h4 className="month">1 Month</h4>
                    <h2 className="price">14.99$</h2>
                    <p className="conn">1 connection</p>
                    <div className = "container_body">
                      <ul className="icons">
                        <li className="icon"><i class="fas fa-check"></i>+18 000 Channels</li>
                        <li className="icon"><i class="fas fa-check"></i>+40.000 VOD</li>
                        <li className="icon"><i class="fas fa-check"></i>+10000 movies</li>
                        <li className="icon"><i class="fas fa-check"></i>+5000 Serie</li>
                        <li className="icon"><i class="fas fa-check"></i>%99.99 Uptime</li>
                        <li className="icon"><i class="fas fa-check"></i>Without Freezing</li>
                        <li className="icon"><i class="fas fa-check"></i>Android,PC,SmartTv</li>
                        <li className="icon"><i class="fas fa-check"></i>M3U MAG Enigma2</li>
                        <li className="icon"><i class="fas fa-check"></i>24/7 Support</li> 
                      </ul>
                    </div>
                  
                    <div className = "buttonn" onClick={() =>   setTimeout(() => {
                          navigate('/checkout' ,{ state:14.99})
                      }, 500 ) } >
                      <span  className='text-white' to="Checkout" >Get Started</span>
                    </div>
 
                  </div>

                  <div className = "container container_scale">
                    <h4 className="month">3 Month</h4>
                    <h2 className="price">24.99$</h2>
                    <p className="conn">1 connection</p>
                    <div className = "container_body">
                      <ul className="icons">
                        <li className="icon"><i class="fas fa-check"></i>+18 000 Channels</li>
                        <li className="icon"><i class="fas fa-check"></i>+40.000 VOD</li>
                        <li className="icon"><i class="fas fa-check"></i>+10000 movies</li>
                        <li className="icon"><i class="fas fa-check"></i>+5000 Serie</li>
                        <li className="icon"><i class="fas fa-check"></i>%99.99 Uptime</li>
                        <li className="icon"><i class="fas fa-check"></i>Without Freezing</li>
                        <li className="icon"><i class="fas fa-check"></i>Android,PC,SmartTv</li>
                        <li className="icon"><i class="fas fa-check"></i>M3U MAG Enigma2</li>
                        <li className="icon"><i class="fas fa-check"></i>24/7 Support</li> 
                      </ul>
                    </div>
                  
                    <div className = "buttonn"onClick={() =>   setTimeout(() => {
                          navigate('/checkout' ,{ state:24.99})
                      }, 500 ) } >
                      <span  className='text-white'  >Get started</span>
                    </div>
 
                  </div>

                  <div className = "container container_scale">
                    <div className="banner"> 
                      <i>Most popular</i>
                    </div>
                    <h4 className="month">6 Month</h4>
                    <h2 className="price">44.99$</h2>
                    <p className="conn">1 connection</p>
                    <div className = "container_body">
                      <ul className="icons">
                        <li className="icon"><i class="fas fa-check"></i>+18 000 Channels</li>
                        <li className="icon"><i class="fas fa-check"></i>+40.000 VOD</li>
                        <li className="icon"><i class="fas fa-check"></i>+10000 movies</li>
                        <li className="icon"><i class="fas fa-check"></i>+5000 Serie</li>
                        <li className="icon"><i class="fas fa-check"></i>%99.99 Uptime</li>
                        <li className="icon"><i class="fas fa-check"></i>Without Freezing</li>
                        <li className="icon"><i class="fas fa-check"></i>Android,PC,SmartTv</li>
                        <li className="icon"><i class="fas fa-check"></i>M3U MAG Enigma2</li>
                        <li className="icon"><i class="fas fa-check"></i>24/7 Support</li> 
                      </ul>
                    </div>
                  
                    <div className = "buttonn" 
                    
                    >
                      <span onClick={() =>   setTimeout(() => {
                          navigate('/checkout' ,{ state:44.99})
                      }, 500 ) } className='text-white' >Get started</span>
                    </div>
 
                  </div>

                  <div className = "container">
                    <h4 className="month">12 Month</h4>
                    <h2 className="price">74.99$</h2>
                    <p className="conn">1 connection</p>
                    <div className = "container_body">
                      <ul className="icons">
                        <li className="icon"><i class="fas fa-check"></i>+18 000 Channels</li>
                        <li className="icon"><i class="fas fa-check"></i>+40.000 VOD</li>
                        <li className="icon"><i class="fas fa-check"></i>+10000 movies</li>
                        <li className="icon"><i class="fas fa-check"></i>+5000 Serie</li>
                        <li className="icon"><i class="fas fa-check"></i>%99.99 Uptime</li>
                        <li className="icon"><i class="fas fa-check"></i>Without Freezing</li>
                        <li className="icon"><i class="fas fa-check"></i>Android,PC,SmartTv</li>
                        <li className="icon"><i class="fas fa-check"></i>M3U MAG Enigma2</li>
                        <li className="icon"><i class="fas fa-check"></i>24/7 Support</li> 
                      </ul>
                    </div>
                  
                    <div className = "buttonn" onClick={() =>   setTimeout(() => {
                          navigate('/checkout' ,{ state:74.99})
                      }, 500 ) } >
                      <span  className='text-white' >Get started</span>
                    </div>
 
                  </div>

                  
                
          </div>
      </section>
    </>
  )
}

export default Nospacks