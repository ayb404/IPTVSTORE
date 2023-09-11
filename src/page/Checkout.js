import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'


const Checkout = ({scroll}) => {


    const location = useLocation()


useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const [payeerOpen, setPayeerOpen] = useState(false)
  const [binanceOpen, setBinanceOpen] = useState(false)
  const [payoneerOpen , setPayoneerOpen] = useState(false)
  const [coinpaymentsOpen , setCoinPaymentsOpen] = useState(false)
  const [bankOpen , setBankOpen] = useState(false)
  const [visaOpen , setVisaOpen] = useState(false)
  
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
        
      {/*  popup payeer bank */}

     <div className= {!payeerOpen ? "payeer" : "payeerOpen"} id="bank1">
        <div className="popup_payeer">
            <div>
                <img className= "img11" src="./image/payeer.png"/>
            </div>
            <h4 className='mt-4'>Send <span className='text-danger ' > 25 USD </span>to the information below:</h4>
            <span >Account number: P1008795006
                 
            </span> <br/><br/>
            <span >After sending the amount, put the "Transaction id" and take a screenshot of the process and send it on telegram,
                then click “I HAVE PAID” button.
                Payment requests are accepted within a few minutes or hours</span> <pre></pre>
              <form action="" className="form">
                  <input type="text" placeholder="Transaction referance id"/>
      
                  <pre></pre> <span>AND</span> 
      
                  <br/>
                  <a href="https://t.me/Gold_Pers" target="_blank" rel="noreferrer"><label ><i class="fa-brands fa-telegram"></i> Proof of payment</label> </a> <br/>
                  <div >
                      <button class = "but">I HAVE PAID</button> 
                      <button class = "but">close</button>
                  </div>
                  
                  <p className="span spanHelp"  > <span >Help!</span>  : <a href="https://t.me/Gold_Pers" target="_blank" rel="noreferrer"> contact us </a></p>
              </form>
            
        </div>
    
    </div>


    {/* popup payeer bank end */}


    {/* popup binance bank */}


    <div className= {!binanceOpen ? "binance" : "binanceOpen" } id="bank2">
        <div className="popup_binance">
            <div>
                <img className= "img11" src="./image/binance.png"/>
            </div>
            <h4 className='mt-4'> Send <span className=' text-danger'> 25 USD </span>to the information below:</h4>
            <span >USDT deposit address, ERC20: 
            0x52d585641bfe02e09992ed9420b2c6f13b07611b
            <pre></pre>  <span > or </span> <br/>
             
             USDT deposit address, TRC20:
             TJm6G48JmxBwkHJeovjp82w7W3Rv1BNq3r
         </span> <br/><br/>
            <span >After sending the amount, put the "Transaction id" and take a screenshot of the process and send it on telegram,
                then click “I HAVE PAID” button.
                Payment requests are accepted within a few minutes or hours</span> <pre></pre>
              <form action="" className="form">
                  <input type="text" placeholder="Transaction referance id"/>
      
                  <pre></pre> <span>AND</span> 
      
                  <br/>
                  <a href="https://t.me/Gold_Pers" target="_blank" rel="noreferrer"><label ><i class="fa-brands fa-telegram"></i> Proof of payment</label> </a> <br/>
                  <div >
                      <button class = "but">I HAVE PAID</button> 
                      <button class = "but">close</button>
                  </div>
                  
                  <p className="span spanHelp"  > <span >Help!</span>  : <a href="https://t.me/Gold_Pers" target="_blank" rel="noreferrer"> contact us </a></p>
              </form>
            
        </div>
    
    </div>


    {/* popup binance bank end */}


    {/* popup payonner bank */}


    <div className= {!payoneerOpen ? "payoneer" : "payoneerOpen" } id="bank3">
        <div className="popup_payoneer">
            <div>
                <img className= "img11" src="./image/payoneer.png"/>
            </div>
            <h4 className='mt-4'> Send <span className=' text-danger'> 25 USD </span>to the information below:</h4>
            <span>Email Account : aqarroutayoub@gmail.com </span>
            <br/><br/>
            <span >After sending the amount, put the "Transaction id" and take a screenshot of the process and send it on telegram,
                then click “I HAVE PAID” button.
                Payment requests are accepted within a few minutes or hours</span> <pre></pre>
              <form action="" className="form">
                  <input type="text" placeholder="Transaction referance id"/>
      
                  <pre></pre> <span>AND</span> 
      
                  <br/>
                  <a href="https://t.me/Gold_Pers" target="_blank" rel="noreferrer" ><label ><i class="fa-brands fa-telegram"></i> Proof of payment</label> </a> <br/>
                  <div >
                      <button class = "but">I HAVE PAID</button> 
                      <button class = "but">close</button>
                  </div>
                  
                  <p className="span spanHelp"  > <span >Help!</span>  : <a href="https://t.me/Gold_Pers" target="_blank" rel="noreferrer"> contact us </a></p>
              </form>
            
        </div>
    
    </div>


    {/* popup payonner bank end */}


    {/* popup coinpayments bank */}

    <div className= {!coinpaymentsOpen ? "coinpayments" : "coinpaymentsOpen" } id="bank4">
        <div className="popup_coinpayments">
            <div>
                <img className= "img11" src="./image/coinpayments.png"/>
            </div>
            <h4 className='mt-4'> Send <span className=' text-danger'> 25 USD </span>to the information below:</h4>
            <span>USDT deposit address,(Tron/TRC20): 
            TTcSuLZi8v2TCwQNpzKo4yq5pYD9Fr7qGU</span>
            <br/><br/>
            <span >After sending the amount, put the "Transaction id" and take a screenshot of the process and send it on telegram,
                then click “I HAVE PAID” button.
                Payment requests are accepted within a few minutes or hours</span> <pre></pre>
              <form action="" className="form">
                  <input type="text" placeholder="Transaction referance id"/>
      
                  <pre></pre> <span>AND</span> 
      
                  <br/>
                  <a href="https://t.me/Gold_Pers" target="_blank" rel="noreferrer"><label ><i class="fa-brands fa-telegram"></i> Proof of payment</label> </a> <br/>
                  <div >
                      <button class = "but">I HAVE PAID</button> 
                      <button class = "but">close</button>
                  </div>
                  
                  <p className="span spanHelp"  > <span >Help!</span>  : <a href="https://t.me/Gold_Pers" target="_blank" rel="noreferrer"> contact us </a></p>
              </form>
            
        </div>
    
    </div>


    {/* popup coinpayments bank end */}


    {/* popup bank  */}

    <div className= {!bankOpen ? "bank" : "bankOpen" } id="bank">
        <div className="popup_bank">
            <div>
                <img className= "img11" src="./image/bank.png"/>
            </div>
            <h4 className='mt-4'> Send <span className=' text-danger'> 25 USD </span>to the information below:</h4>
            <span> Bank name : Citibank <br></br>
            IBAN : IE10CITI99005170448475 <br></br>
            BIC : CITIIE2X <br></br>
            Beneficiary name : aqarrout ayoub 
        </span>
            <br/><br/>
            <span >After sending the amount, put the "Transaction id" and take a screenshot of the process and send it on telegram,
                then click “I HAVE PAID” button.
                Payment requests are accepted within a few minutes or hours</span> <pre></pre>
              <form action="" className="form">
                  <input type="text" placeholder="Transaction referance id"/>
      
                  <pre></pre> <span>AND</span> 
      
                  <br/>
                  <a href="https://t.me/Gold_Pers" target="_blank" rel="noreferrer"><label ><i class="fa-brands fa-telegram"></i> Proof of payment</label> </a> <br/>
                  <div >
                      <button class = "but">I HAVE PAID</button> 
                      <button class = "but">close</button>
                  </div>
                  
                  <p className="span spanHelp"  > <span >Help!</span>  : <a href="https://t.me/Gold_Pers" target="_blank" rel="noreferrer"> contact us </a></p>
              </form>
            
        </div>
    
    </div>

    {/* popup bank end */}


    {/* popup visa end */}

    <div className= {!visaOpen ? "visa" : "visaOpen" } id="bank6">
        <div className="popup_visa">
            <div>
                <img className= "img11" src="./image/visa.png"/>
            </div>
            <h4 className='mt-4'> Send <span className=' text-danger'> 25 USD </span>to the information below:</h4>
            <div class="coffee"> 
            <h5>CLICK HERE TO PAY:</h5>   

        </div><br/>
            <span >After sending the amount, put the "Transaction id" and take a screenshot of the process and send it on telegram,
                then click “I HAVE PAID” button.
                Payment requests are accepted within a few minutes or hours</span> <pre></pre>
              <form action="" className="form">
                  <input type="text" placeholder="Transaction referance id"/>
      
                  <pre></pre> <span>AND</span> 
      
                  <br/>
                  <a href="https://t.me/Gold_Pers" target="_blank" rel="noreferrer"><label ><i class="fa-brands fa-telegram"></i> Proof of payment</label> </a> <br/>
                  <div className='d-f'>
                      <button class = "but">I HAVE PAID</button> 
                      <button class = "but">close</button>
                  </div>
                  
                  <p className="span spanHelp"  > <span className='text-blue'>Help!</span>  : <a href="https://t.me/Gold_Pers" target="_blank" rel="noreferrer"> contact us </a></p>
              </form>
            
        </div>
    
    </div>

    {/* popup visa end */}


    <div className="deal">
        <span className="material-icons gap-2"><i className="far fa-check-circle"></i>cart</span>
        <div className="space"></div>
        <span className="material-icons gap-2"><i className="fas fa-check-circle"></i>information</span>
        <div className="space"></div>
        <span className="material-icons gap-2"><i className="far fa-check-circle"></i>finish</span>
    </div>
    <div className="linee"></div>

    <div className = "main mainEvent">

    
        <div className="controler">
            <div className="main1">
                <div className="h4" > Proceed to pay</div>
                    <div >
                                        
                        <div>You will <span className='text-danger'>Save  
                            0.35$</span> when using one of these methods
                        </div>
                    </div>
                    <div className="country text-black">
                        <i className="fas fa-globe-americas worldIcon"></i> <span> Worldwide </span> 
                    </div>

                <div className = "photo">

                    <div className = "img" onClick={() => setPayeerOpen(true) }>
                        <img src="./image/payeer.png" alt=''/>   
                    </div>

                    <div className = "img" onClick={() => setBinanceOpen(true) }>
                        <img src="./image/binance.png"  />   
                    </div>
        
                    <div className = "img" onClick={() => setPayoneerOpen(true) }>
                        <img src="./image/payoneer.png" />   
                    </div>
        
                    <div className = "img" onClick={() => setCoinPaymentsOpen(true) }>
                        <img src="./image/coinpayments.png" />   
                    </div>

                    <div className = "img" onClick={() => setBankOpen(true) }>
                        <img src="./image/bank.png" />    
                    </div>

                    <div className = "img" onClick={() => setVisaOpen(true) }>
                    <img src="./image/visa.png" />  
                    </div>
                    
                </div>


                <div className="price">
                    <table id="order-table">
                        <tr >
                            <th >Price</th>
                            <th className="align-right">{location.state}$</th>
                        </tr>
                        <tr>
                            <td >Fees</td>
                            <td className="align-right" >0$</td>
                        </tr>
                        <tr>
                            <td >total</td>
                            <td className="align-right">{location.state}$</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    

        <div className="consept">
            <h3 className ="get">What you’ll get :</h3>
            <p>Entertainment package with our IPTV subscription 
                offering a staggering 18,000+ channels and 
                85,000+ movies and series, all delivered 
                seamlessly through the most reliable and stable 
                server from the best IPTV provider.
                <ul>
                    <li>4K, FHD & HD Channels</li>
                    <li>All International Channels</li>
                    <li>All Devices Supported TV, Smartphone, Laptot, Tablet</li>
                    <li>100% compatible with ANDROID - IOS</li>
                    <li>Fast Delivery 2min at 10min maximum</li>
                    <li>Team support 24/7 to satisfy our clients</li>
                    <li>News channels (e.g. CNN, BBC, Fox News, Al Jazeera)</li>
                    <li>Sports channels (e.g. ESPN, Sky Sports, Bein Sports, Eurosport)</li>
                    <li>Entertainment channels (e.g. HBO, AMC, TNT, Comedy Central)</li>
                    <li>Movie channels (e.g. Netflix, Hulu, Amazon Prime Video)</li>
                    <li>Kids channels (e.g. Disney Channel, Cartoon Network, Nickelodeon)</li>
                    <li>Music channels (e.g. MTV, VH1, iHeartRadio)</li>
                    <li>International channels (e.g. Univision, Telemundo, Rai Italia, Zee TV)</li>
                    <li>Documentary channels (e.g. Discovery Channel, National Geographic, History)</li>
                    <li>Lifestyle channels (e.g. Food Network, HGTV, Travel Channel)</li>
                </ul>
            </p>
            <div className="line"></div>
            <div className="provider">
                <h3>Purchase with confidence</h3>
                <div className="guarante">
                    <div className="guarante1">
                        <img src="./image/guarante.png" alt=""/>
                    </div>
                    <div className="money">
                        <p className="p1">100% money back guarantee!</p>
                        <p>100% money back guarantee!</p>
                    </div>
                </div>
                <div>
                    <h3>BEST ІРТV PROVIDER</h3>
                    <ul>
                        <li>SSL secured checkout</li>
                        <li>Support available 24/7 chat : Telegram & email</li>
                        <li>Payment options</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Checkout