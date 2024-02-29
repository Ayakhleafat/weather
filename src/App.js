import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Weather from './Weather';
import MainWeather from './history';
import Profile from './profile';
import Login from './login'
import './App.css'; 

function App() {
  return (
    <Router>
      <div>
       
        <div className="navbar">
          <Link to="/" className="navbar-option">Weather</Link> 
          <Link to="/profile" className="navbar-option">Profile</Link>
          <Link to="/history" className="navbar-option">History</Link>
          <Link to="/login" className="navbar-option">Login</Link>
        </div>
        
      
        <Routes>
        
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} /> 
          <Route path="/history" element={<MainWeather />} /> 
          <Route path="/login" element={<Login />} /> 
         
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
     <Weather></Weather>
    </div>
  );
}

export default App;
