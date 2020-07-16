import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimeFormats from './TimeFormats.js'
import Navbar from './components/navbar'
import Footer from './components/footer'
import InputField from './components/inputField'
import CommonFormats from './components/commonFormats'



function App() {
  return (
    <div>
     <Navbar/>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br></br>
      <h1 class="header center orange-text">Today's Date:</h1>
      <div class="row center">
        <h5 class="header col s12 light"><TimeFormats/></h5>
      </div>
      <br></br>
    </div>
    <div class="container">
      <div class="section">
        <div class="row">
        <div class="col s12 m6 pull-m1">
          <div class="icon-block">
          <h1 class="header center orange-text">Format Tester</h1>
            <InputField title="Format String to Date String:" placeholder="dddd, mmm dS, yyyy, h:MM:ss TT"/>
          </div>
        </div>
        <div class="col s12 m6 push-m1">
          <div class="icon-block">
          <h1 class="header center orange-text">Date to Format</h1>
            <InputField title="Date String to Format String:" placeholder="Saturday, June 9th, 2007, 5:46:21 PM"/>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <CommonFormats/>




    <Footer/>
    </div>
  );
}

export default App;
