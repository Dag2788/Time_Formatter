import React from 'react';
import TimeFormats from '../TimeFormats'


function Header() {
  return (
    <div class="container">
      <br></br>
      <h1 class="header center orange-text">Today's Date:</h1>
      <div class="row center">
        <h5 class="header col s12 light"><TimeFormats/></h5>
      </div>
      <br></br>
    </div>
  )}

  export default Header;
