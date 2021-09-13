import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route } from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </BrowserRouter>
  );
}

export default App;
