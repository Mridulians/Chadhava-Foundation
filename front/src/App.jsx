/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Newsletter from './components/NewsLetter/NewsLetter';
import Stories from './pages/Stories/Stories';

const App = () => {
  return (
    <Router>
      <div className="">
        {/* Navigation Links */}
       <Header />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/involved" element={<Stories />} />
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  )
}

export default App
