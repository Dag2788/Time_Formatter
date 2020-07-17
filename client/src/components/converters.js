import React from 'react';
import InputField from './inputField'
import { formatTester } from '../utils/formatTester'
import { dateTransformer } from '../utils/dateTransformer'
import ConverterFunction from './converterFunctions'

function Converters() {
  return (
    <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <div class="section">
        <div class="row">
          <ConverterFunction  cssClass="col s12 m6 pull-m1" header="Format Tester" title="Format String to Date String:" placeholder="dddd, mmm dS, yyyy, h:MM:ss TT" handleInput={formatTester}/>
          <ConverterFunction  cssClass="col s12 m6 push-m1" header="Date to Format" title="Date String to Format String:" placeholder="Saturday, June 9th, 2007, 5:46:21 PM" handleInput={dateTransformer}/>
          </div>
        </div>
     </div>
    </div>
  )}

  export default Converters;
