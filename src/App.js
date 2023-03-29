import React, { useState, useEffect } from 'react';
import { Contact } from "./components/contact";
import { Featured } from "./components/featured";
import { Header } from "./components/header";
import { NewArrival } from "./components/newArrival";
import { NewsLetter } from "./components/newsletter";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './components/css/app.css';

function App() {
  
  useEffect(() => {
    document.title = 'Musical Memoirs';
    window.scrollTo(0, 0);
    AOS.init({mirror: true});
  }, []);

  return (
    <div className="App">
      <Header/>
      <Featured/>
      <NewArrival/>
      <NewsLetter/>
      <Contact/>
    </div>
  );
}

export default App;
