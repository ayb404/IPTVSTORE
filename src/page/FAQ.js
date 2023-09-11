import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useEffect } from 'react';

const Termsofservice = ({scroll}) => {

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
            <Link to="/" className="text-black"><i class="fas fa-home"></i>  Home</Link> > FAQ
            </div>
            <div className='container-title'>
                <h2>"Frequently asked questions, answered.</h2>
            </div>

            <div className='container-policy'>
                <p>
                  <h3>WHAT IS IPTV?</h3>
                  Internet Protocol Television (IPTV) uses Internet technology to send television programming to your TV. IPTV uses a broadband Internet connection for top international programming directly to your home without a satellite dish. Just connect your receiver to your IPTV Internet from the house and on your TV, then sit back and enjoy.
                </p>
            </div>

            <div className='container-policy'>
                <p>
                  <h3>WHAT IS THE DIFFERENCE BETWEEN TRADITIONAL AND SATELLITE IPTV PROGRAMMING?</h3>
                  Traditional satellite dish requires the customer to install a dish on their whereabouts. IPTV offers a unique solution for customers who are unable to satellite programming (due to no sight to the satellite or apartment with its limitations). IPTV provides higher quality and cheaper than traditional satellite service.
                </p>
            </div>

            <div className='container-policy'>
                <p>
                  <h3>WHAT DO I NEED TO LOOK FOR TV? To install and use the IPTV, you need the following:</h3>
                  High-speed Internet connection (recommended or higher) at least 4.0 Mbps. A functioning Smart TV , PC , Laptops , MAC , MAG box , Android Box , Smart Phones , Avov box , OpenBOX , Fire Tv stick , Formuler box ETC….
                </p>
            </div>

            <div className='container-policy'>
                <p>
                  <h3>HOW DO I CHECK MY INTERNET SPEED & QUALITY?</h3>
                  Please use speed test server below to test your internet connection, Do this few times through the day. This will give you a good idea of overall internet speed available to you. A stable 4.0 Mbps is the minimum requirement.
                    http://www.speedtest.net/
                </p>
            </div>

            <div className='container-policy'>
                <p>
                  <h3>CAN I USE THE IPTV AS I LIVE IN AN APARTMENT?</h3>
                  Yes, IPTV is perfect for people who live in an apartment! IPTV works well everywhere with high-speed internet and stable , including apartment buildings or high-rise buildings, or as a satellite TV dish cannot be installed at your home. Often traveling? Take the IPTV, and watch your favorite programs on the go or at the temporary destination.
                </p>
            </div>

            <div className='container-policy'>
                <p>
                  <h3>CAN I BUY THE IPTV IF I DO NOT COME INTO CONSIDERATION FOR SATELLITE SERVICE?</h3>
                  Yes, you can buy and use IPTV if you do not qualify for a satellite TV service. Since IPTV delivers international programming to your TV via the Internet, no satellite dish is required. Moreover, To qualify, you need a high-speed internet connection of at least 4.0 Mbps or higher and stable with lower lataenchy (PING) .
                </p>
            </div>

            <div className='container-policy'>
                <p>
                  <h3>WHY I CAN’T ACCESS MY ACCOUNT?</h3>
                  First, please check your network connection, reboot your router and device, and then try again. ( Some routters or internet service providers can have restricted access to iptv )
Secondly, if your network connection is no problem, please check whether your account is used on other devices. as you can view from more than 1 device at the same time. Also for testing propose check your connection from different internet provider ( you can install on your smartphone using your mobile internet check installation tutorials in the site if need more help to install ) if you found that your internet service provider blocked connection you must need a VPN connection to bypass that .Good vpn you can find here : NEED VPN
                </p>
            </div>

            <div className='container-policy'>
                <p>
                  <h3> I AM NOT IN OR FROM USA/CAN OR THE UK. CAN I STILL SUBSCRIBE?</h3>
                  Yes. Our service is available worldwide to everyone.
                </p>
            </div>

            <div className='container-policy'>
                <p>
                  <h3>CAN I USE MY SUBSCRIPTION ON MULTIPLE DEVICES?</h3>
                  Please pay attention that 1 subscription can be used on multiple devices but you can watch only on 1 device at the same time. If you want to connect multiple devices in tehe same time you must purchase multi room package 2 , 3 , 4 , 5 connectioins package .
                </p>
            </div>

            <div className='container-policy'>
                <p>
                  <h3>WHAT PAYMENT METHODS ARE AVAILABLE?</h3>
                  Pay with your Debit/Credit Card through secured payment gate with automatic currency conversion and no hidden fees. Pay Pal , Crypto currenchy and bank transfer.
                </p>
            </div>

            <div className='container-policy'>
                <p>
                  <h3>DOES MY SUBSCRIPTION START TO BE ACTIVE RIGHT AFTER I MAKE A PAYMENT?</h3>
                  Subscription starting to be active from the moment you will receive your activation credentials in your e-mail.
Example:
David subscribed for 3 Months on February 1st at 11:55 PM and activation credentials were received February 2nd at 00:10 AM. David subscription is starting to be active from February 2nd 00:10 AM for next 3 months.
                </p>
            </div>

            <div className='container-policy'>
                <p>
                  <h3>ALL CHANNELS ARE BLANK?</h3>
                  If you are using a set-top box such as MAG or AVOV and have just set up your device with our service, you will need to perform a hard reset of your device. Simply power off your device, unplug your power cable and re-plug it in.

For Kodi, you will need to clear your cache. If unsuccessful, attempt a re-install of Kodi itself.
                </p>
            </div>

            <div className='container-policy'>
                <p>
                  <h3>SOME CHANNELS ONLY HAS SOUND WITHOUT VIDEO?</h3>
                  Because of decoder setting problem, some channels are only having sound without images/video, please do as followings:

                    1- Go to Settings in your device/app/program.
                    2- Choose Native for the Decoder.
                    3- Restart.
                </p>
            </div>

            <div className='container-policy'>
                <p>
                  <h3> MY M3U LINK IS NOT WORKING?</h3>
                  If the link is not working, always check the link on PC using the VLC software or smartphone with mobile internet. If it works it means that there is something wrong on your end. When typing in your M3U link make sure you are not entering any space and you are not using your M3U link on other devices.
Contact us if the link does not work on your PC after troubleshooting.
                </p>
                <p className='py-5'>
            If you can't find an answer that you're looking for, 
            feel free to ask us in the live chat or via <a href="">Email</a>. 
            We're also active on <a href="">Telegram</a>.
            </p>
            </div>
            
          </div>
        </div>
      </section>
    </>
    
  )
}

export default Termsofservice