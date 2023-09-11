import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { NavLink, useNavigate } from 'react-router-dom';
import Scroll, { ScrollLink }  from 'react-scroll';



const Home = ({scroll}) => {
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
      <section className = "home-wrapper-1">
        <div className = "cantainer-xxl">
            <div className = "banner-text">
                <div className = "col">
                  <div className = "main-banner position-relative">
                    <header className = "header-main ">
                      <div className = "cantainer-header ">         
                        <div className = "menu headerEvent " style={{position:"absolute"}}>
                          <div className="logo">
                          <img src="./image/technopro.png" alt='' className='mt-3'/>
                          </div>
                          <div className = "nav">
                            <NavLink className="na text-white" to="/">Home</NavLink>
                            <Link className="na text-white " to="pack" spy={true} duration={500}>Nos packs</Link>
                            <NavLink className="na text-white" to="/Contact">Contact</NavLink>
                            <NavLink className="na text-white" to="/About">About</NavLink>
                          </div>
                        </div>
                      </div>
                    </header>
                    <img className="iptv" src="./image/main.png" alt="main-banner" />
                    <div className = "main-banner-content position-absolute">
                      <h4 className="">// Starting at 24.99 for 3 month</h4>
                      <h5>The  Best  IPTV  Provider </h5>
                      <p>Everything you will EVER need to see IPTV <pre></pre> 
                      and Manage your IPTV SERVER</p>
                      <Link className="button" to="pack" spy={true} duration={500}>Get Started</Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </section>
      <section className = "home-wrapper-2">
        <div className = "cantainer-xxl">
            <div className = "row">
                <div className = "col">
                  <div className ="servies row d-flex align-items-centre justify-content-center">
                    <h5>Choose your IPTV plan</h5>
                    <p className="d-flex align-items-centre justify-content-center">Enjoy the best Premium IPTV in the world. Order your IPTV subscriptions online, compatible with Android BOX, SMART TV, enigma2, Mag Device, or even on your Laptop with VLC Player.</p>
                    <img src="./image/iptvservice.png" alt="main-banner" />

                  </div>
                </div>
            </div>
          </div>
      </section>
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
      <div className="channel">
        <img src="./image/iptvchannel.png" alt=''/>
      </div>
      <section className="wrapper-comment"> 
          <div className="decor1">
            <h2>How it works</h2> 
            <img src=" ./image/method.png" alt=''/>
          </div>
          <div className="comment">
            <h2>What our customers say</h2> 
          </div>
          <div className="decor"></div>
          <div className="container-c">
            <div className="reviews-content scale">
              <i aria-hidden="true"  class="fas fa-quote-left com"></i>
              <p>I have been using iptv for a few months and it has been a great experience. 
                  It is the most reliable provider I have come across, 
                  as it always streams without any lag. 
                  The content is also phenomenal with plenty of options to choose from. 
                  I can only recommend them!</p>
              <img className="imgc" src="./image/p1.png" alt=''/>
              <p>GORGE JAKE</p>
            </div>
            <div className="reviews-content">
            <i aria-hidden="true"  class="fas fa-quote-left com"></i>
              <p>I was looking for a great IPTV service and couldn't find any that fit my budget. 
                  I was so happy when I found a network called TOP iptv. 
                  Their service is really cheap, has the best coverage and doesn't even lag in the slightest. 
                  I highly recommend it to anyone looking for a low cost IPTV service!</p>
              <img className="imgc" src="./image/p2.png" alt=''/>
              <p>GORGE JAKE</p>
            </div>
            <div className="reviews-content scale">
            <i aria-hidden="true"  class="fas fa-quote-left com"></i>
              <p>I've been using TOP iptv for over a year now and couldn't be happier. 
                  The interface is so easy to use, the channels are of high quality and it's the cheapest subscription I've found. 
                  I definitely recommend it to anyone interested in watching TV on their computer or mobile device!</p>
              <img className="imgc" src="./image/p3.png" alt=''/>
              <p>GORGE JAKE</p>
            </div> 
          </div>
      </section>
      <section className="wrapper-end">
        <div className="title-end">
          <h3>Overall Features</h3>
          <p>Our revolutionary Cloud solution is powerful, simple, and surprisingly affordable.</p>
        </div>

        <div className="img-end">

          <div className="img-total"> 
            <div className="i"><i class="fa-solid fa-cloud-arrow-up uplod"></i></div>
            <div className="end-content">
            <h3>Auto Updates</h3>
            <p>our Services and channels as 
              well as our panel are automatically 
              update once a week.</p>
            </div>
          </div> 

          <div className="img-total">
            <div className="i"><i class="fas fa-sliders-h uplod"></i></div>
            <div className="end-content">
            <h3>Sales Systems</h3>
            <p>All sales steps are done automatically.
              From payment to service delivery.
              There is no human factor at this page.</p>
            </div>
          </div>

          <div className="img-total">
              <div className="i"><i class="fas fa-archive uplod"></i></div>
              <div className="end-content">
              <h3>Daily Backups</h3>
              <p>All IPTV System infrastructure provided to customers 
                are automatically backed up every 5 minutes.</p>
              </div>
          </div>
          
          <div className="img-total">
            <div className="i"><i class="fas fa-globe uplod"></i></div>
            <div className="end-content">
            <h3>Wide Networking</h3>
            <p>You can access the services 24 hours a 
              day at a speed of 2 Mbps without any time and 
              space restrictions.</p>
            </div>
          </div>

          <div className="img-total">
            <div className="i"><i class="fas fa-user-shield uplod"></i></div>
            <div className="end-content">
            <h3>Protected</h3>
            <p>Security of user and service panels is guaranteed by countless proxies.</p>
            </div>
          </div>
          <div className="img-total">
            <div className="i"><i class="fas fa-headphones-alt uplod"></i></div>
            <div className="end-content">
            <h3>Free Support</h3>
            <p>Our support is available 24 hours a day 
              without any interruption through online chat and ticket creation.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home