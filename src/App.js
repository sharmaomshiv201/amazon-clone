import React from 'react';
import './App.css';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Checkout from './Checkout';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>


          <Route path="/" element={<Home />}>
          </Route>
          <Route path="checkout" element={<Checkout />}>

          </Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
