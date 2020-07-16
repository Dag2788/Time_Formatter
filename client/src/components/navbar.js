import React from 'react';

function Navbar() {
  return (
      <nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Date Formatter</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="https://github.com/Dag2788/Time_Formatter">Github</a></li>
      </ul>

      <ul id="nav-mobile" class="sidenav">
        <li><a href="https://github.com/Dag2788/Time_Formatter">Github</a></li>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  </nav>
  )}

  export default Navbar;
