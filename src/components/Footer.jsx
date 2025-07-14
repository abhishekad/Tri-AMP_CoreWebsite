import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return <footer className="px-6 py-12 bg-charcoal border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <div className="flex items-center space-x-3">
                <img 
                  src="/images/triamp_no_bg_logo.png" 
                  alt="TriAMP Logo" 
                  className="h-12 w-auto transition-transform group-hover:scale-105"
                  width={48}
                  height={48}
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-aqua to-electric-blue bg-clip-text text-transparent">
                  TriAMP
                </span>
              </div>
            </Link>
            <p className="text-light-gray/70">Ai for You!</p>
          </div>
          
          <div>
            <span className="font-semibold text-light-gray mb-4 block">Solutions</span>
            <div className="space-y-2">
              <Link to="/lexa" className="text-light-gray/70 hover:text-aqua cursor-pointer transition-colors block">LEXA</Link>
              <Link to="/lexa-suite" className="text-light-gray/70 hover:text-aqua cursor-pointer transition-colors block">Lexa Suite</Link>
            </div>
          </div>
          
          <div>
            <span className="font-semibold text-light-gray mb-4 block">Company</span>
            <div className="space-y-2">
              <Link to="/about" className="text-light-gray/70 hover:text-aqua transition-colors block">About Us</Link>
              <Link to="/careers" className="text-light-gray/70 hover:text-aqua transition-colors block">Careers</Link>
              <Link to="/contact" className="text-light-gray/70 hover:text-aqua transition-colors block">Contact</Link>
            </div>
          </div>
          
          <div>
            <span className="font-semibold text-light-gray mb-4 block">Policies</span>
            <div className="space-y-2">
              <Link to="/privacy-policy" className="text-light-gray/70 hover:text-aqua cursor-pointer transition-colors block">Privacy Policy</Link>
              <Link to="/cookies-policy" className="text-light-gray/70 hover:text-aqua cursor-pointer transition-colors block">Cookies Policy</Link>
              <Link to="/terms-of-use" className="text-light-gray/70 hover:text-aqua cursor-pointer transition-colors block">Terms of Use</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-light-gray/60">
            © {new Date().getFullYear()} TriAMP. All rights reserved. Transforming Legal Tech with AI innovation.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;