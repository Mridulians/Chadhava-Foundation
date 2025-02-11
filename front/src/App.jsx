/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Newsletter from './components/NewsLetter/NewsLetter';
import Stories from './pages/Stories/Stories';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';
import Involved from './pages/Involved/Involved';
import Contact from './pages/Contact/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import MissionVision from './pages/MissionVision/MissionVision';
import ScrollToTop from './components/ScrollToTop';
import AboveHeader from './components/AboveHeader/AboveHeader';

const App = () => {
  return (
    <Router>
      <div className="">
        {/* Navigation Links */}
        <AboveHeader />
       <Header />

        {/* Define Routes */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/involved" element={<Involved />} />
          <Route path="/donor-login" element={<Login />} />
          <Route path="/donor-signup" element={<SignUp />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/missionvision" element={<MissionVision />} />
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  )
}

export default App
