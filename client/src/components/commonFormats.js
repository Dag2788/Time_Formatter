import React from 'react';
import TimeFormats from '../TimeFormats'

function CommonFormats() {
  return (

<React.Fragment>
     <div class="container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div> 

<div class="container">
<h1 class="header center orange-text">Commonly Used Formats:</h1>

<div class="section">

  {/* <!--   Icon Section   --> */}
  <div class="row">
    <div class="col s12 m6 push-m1">
      <div class="icon-block">
        <h5 class="center">Date String</h5>
        <h5 class="center light">Sat Jun 09 2007 17:46:21</h5>
      </div>
    </div>

    <div class="col s12 m6 pull-m1">
      <div class="icon-block">
        <h5 class="center">Format String</h5>
        <h5 class="center light">ddd mmm dd yyyy HH:MM:s</h5>
      </div>
    </div>
  </div>

</div>
<br></br>
</div>
</React.Fragment>
  )}

export default CommonFormats;

