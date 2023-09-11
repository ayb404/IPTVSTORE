import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter,Route,Router, Routes } from 'react-router-dom';
import Home from './page/Home';
import Nospacks from './page/Nospacks';
import Contact from './page/Contact';
import Layout from './components/Layout';
import Privacypolicy from './page/Privacypolicy';
import Refundpolicy from './page/Refundpolicy';
import Termsofservice from './page/Termsofservice';
import About from './page/About';
import FAQ from './page/FAQ';
import Checkout from './page/Checkout';

function App() {
const [scroll , setScroll ] = useState(0)

  window.onscroll = () => {
    setScroll(window.pageYOffset)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element = {<Layout/>} >
              <Route index element = {<Home scroll={scroll}/>} />
              <Route path ="Checkout" element = {<Checkout scroll={scroll}/>} />
              <Route path ="Nospacks" element = {<Nospacks scroll={scroll}/>} />
              <Route path="Contact" element = { <Contact scroll={scroll}/> }/>
              <Route path="Privacypolicy" element = { <Privacypolicy/> }/>
              <Route path="Refundpolicy" element = { <Refundpolicy scroll={scroll}/> }/>
              <Route path="Termsofservice" element = { <Termsofservice scroll={scroll}/> }/>
              <Route path="About" element = { <About scroll={scroll}/> }/>
              <Route path="FAQ" element = { <FAQ scroll={scroll}/> }/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
