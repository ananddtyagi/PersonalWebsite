import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar'
import Main from './components/main'

function App() {
  return (
    <div className="App">

      <div className="Sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className = "Main">
        <Main></Main>
      </div>



    </div>
  );
}

export default App;
