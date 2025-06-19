
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from '@/pages/HomePage';
import LexaPage from '@/pages/LexaPage';
import HealthcareAiPage from '@/pages/HealthcareAiPage';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function App() {
  return (
    <Router>
      <Helmet>
        <title>TriAMP - Revolutionary AI Solutions</title>
        <meta name="description" content="TriAMP creates cutting-edge AI products for Legal technology and Healthcare sectors, serving both B2B and B2C markets with innovative solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white overflow-x-hidden flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lexa" element={<LexaPage />} />
            <Route path="/healthcare-ai" element={<HealthcareAiPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
