import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title='ReactSite' firstheading='Home' secondheading='About Us' mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textform heading="Please add text to perform some provided actions:" mode={mode} />
      </div>
    </>
  );
}

export default App;
