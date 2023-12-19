/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './pages/Products';
import Productviewpage from './pages/Productviewpage';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';


function App() {
return (
  <Router>
    <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Product />} />
    <Route path="/productviewpage" element={<Productviewpage />} />
    <Route path="/LoginPage" element={<LoginPage />} />
    <Route path="/about" element={``} />
  </Routes>
  <Footer />
</Router>
)  
}

export default App;
