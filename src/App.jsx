import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import SetupHubPage from './pages/SetupHubPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col" style={{
        background: '#000000'
      }}>
        <Navigation />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/setup" element={<SetupHubPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
