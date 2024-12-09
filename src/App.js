import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import Footer from './components/Footer'
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Events" element={<Events/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes> 
        <Footer />
      </Router>
    </>
  );
}

export default App;
