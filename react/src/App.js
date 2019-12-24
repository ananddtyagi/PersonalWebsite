import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar'
import Resume from './components/resume'
import Bio from './components/bio'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="Sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className = "Bio">
        <Bio></Bio>
      </div>
      <div className = "Resume">
        <Resume></Resume>
      </div>


    </div>
  );
}

export default App;
