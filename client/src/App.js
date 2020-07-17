import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import InputField from './components/inputField'
import CommonFormats from './components/commonFormats'
import Converters from './components/converters';



function App() {
  return (
    <div>
     <Navbar/>
    <Converters/>
    <CommonFormats/>
    <Footer/>
    </div>
  );
}

export default App;
