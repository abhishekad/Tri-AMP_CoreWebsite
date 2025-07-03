
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import LexaPage from '@/pages/LexaPage';
import DemoPage from '@/pages/DemoPage';
import LexaSuitePage from '@/pages/LexaSuitePage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import CookiesPolicyPage from '@/pages/CookiesPolicyPage';
import TermsOfUsePage from '@/pages/TermsOfUsePage';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ErrorBoundary from '@/components/ErrorBoundary';

function AppContent() {
  return (
    <div className="min-h-screen bg-charcoal text-light-gray overflow-x-hidden flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/lexa" element={<LexaPage />} />
          <Route path="/lexa-suite" element={<LexaSuitePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/cookies-policy" element={<CookiesPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/demo" element={<DemoPage />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Helmet>
          <title>TriAMP - Revolutionary AI Solutions for Legal Tech</title>
          <meta name="description" content="TriAMP creates cutting-edge AI products for the Legal technology sector, serving both B2B and B2C markets with innovative solutions." />
        </Helmet>
        <AppContent />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
