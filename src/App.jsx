import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PlaceCard from './components/PlaceCards/PlaceCard';
import ServiceCard from './components/ServiceCards/ServiceCard';
import Layout from "./pages/Layout"
import Footer from './components/FooterSection/Footer';
export default function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travels" element={<PlaceCard />} />
        <Route path="/services" element={<ServiceCard />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
      </Layout>
    </Router>
  );
}

// import React from 'react';
// import Home from './pages/Home';

// export default function App() {
//   return (
//     <>
//     <Home/>
//     </>
//   );
// }

