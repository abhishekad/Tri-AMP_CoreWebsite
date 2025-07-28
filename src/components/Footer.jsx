import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return <footer className="px-6 py-12 bg-[#0f172a] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
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
            <p className="text-light-gray/70 mt-4 max-w-xs">AI for YOU!.</p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-light-gray/60 hover:text-aqua transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="text-light-gray/60 hover:text-aqua transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-light-gray/60 hover:text-aqua transition-colors">
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="#" className="text-light-gray/60 hover:text-aqua transition-colors">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
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
        
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-light-gray/60 mb-4">
            {new Date().getFullYear()} TriAMP. All rights reserved. Transforming Legal Tech with AI innovation.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-light-gray/70">Supported by</span>
            <img 
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_92x30dp.png" 
              alt="Google" 
              className="h-5 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;