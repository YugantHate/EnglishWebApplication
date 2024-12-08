import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import './App.css';
import GoogleLoginComponent from './GoogleLoginComponent';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <>
     <GoogleOAuthProvider clientId="1063700517226-8boukrmm3cvod0llp4u8uqmjcnfaq46g.apps.googleusercontent.com">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/contactus">Contact Us</Link>
          <GoogleLoginComponent /> 
        </nav>
        <div className="container">
          <div className="page-content">
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contactus" element={<ContactUs />} />
            </Routes>
          </div>
        </div>
      </Router>
      </GoogleOAuthProvider>
    </>
  )
}

export default App;
