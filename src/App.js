import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Counter from './components/Counter';
import { BrowserRouter, Route } from 'react-router-dom';
import AutoComplete from './components/AutoComplete';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/counter" component={Counter} />
      <Route path="/auto-complete" component={AutoComplete} />
    </BrowserRouter>
  );
}

export default App;
