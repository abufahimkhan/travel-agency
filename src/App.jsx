import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PlaceCard from './components/PlaceCards/PlaceCard';
import ServiceCard from './components/ServiceCards/ServiceCard';
import Layout from "./pages/Layout";
import Footer from './components/FooterSection/Footer';
import SignupForm from './components/Registration/SignupForm';
import LoginForm from './components/Registration/LoginForm';
import Booking from './components/PlaceCards/Booking';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/travels" element={<Layout><PlaceCard /></Layout>} />
        <Route path="/services" element={<Layout><ServiceCard /></Layout>} />
        <Route path="/about" element={<Layout><Home /></Layout>} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/booking" element={<Layout><Booking /></Layout>} />
        {/* Login and Signup routes outside the layout */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Router>
  );
}
