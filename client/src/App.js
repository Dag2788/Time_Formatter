import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimeFormats from './TimeFormats.js'
import Navbar from './components/navbar'
import Footer from './components/footer'
import InputField from './components/inputField'
import CommonFormats from './components/commonFormats'
import Header from './components/header'
import { formatTester } from './utils/formatTester'
import { dateTransformer } from './utils/dateTransformer'


function App() {
  return (
    <div>
     <Navbar/>
     <div class="section no-pad-bot" id="index-banner">
      {/* <Header/> */}
      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m6 pull-m1">
              <div class="icon-block">
                <h1 class="header center orange-text">Format Tester</h1>
                <InputField title="Format String to Date String:" placeholder="dddd, mmm dS, yyyy, h:MM:ss TT" handleInput={formatTester}/>
                </div>
            </div>
            <div class="col s12 m6 push-m1">
              <div class="icon-block">
                <h1 class="header center orange-text">Date to Format</h1>
                <InputField title="Date String to Format String:" placeholder="Saturday, June 9th, 2007, 5:46:21 PM" handleInput={dateTransformer}/>
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
