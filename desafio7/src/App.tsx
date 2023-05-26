import React from 'react';
import { Link, Route, Routes } from "react-router-dom"
import './App.css';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  return (
    <div className="App">
      <header>
        <h2 className="title">UBUNTU</h2>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>
      </header>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/sobre' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
