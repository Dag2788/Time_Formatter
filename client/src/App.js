import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimeFormats from './TimeFormats.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Today's Date
        </p>
        <TimeFormats/>
      </header>
    </div>
  );
}

export default App;
