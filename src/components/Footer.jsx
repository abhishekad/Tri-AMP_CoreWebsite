
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="px-6 py-12 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                TriAMP
              </span>
            </Link>
            <p className="text-slate-400">
              Revolutionizing Legal Tech and Healthcare with cutting-edge AI solutions.
            </p>
          </div>
          
          <div>
            <span className="font-semibold text-white mb-4 block">Solutions</span>
            <div className="space-y-2">
              <Link to="/lexa" className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors block">LEXA</Link>
              <Link to="/healthcare-ai" className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors block">Healthcare AI</Link>
              <p className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors">Enterprise Tools</p>
            </div>
          </div>
          
          <div>
            <span className="font-semibold text-white mb-4 block">Industries</span>
            <div className="space-y-2">
              <p className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors">Legal Services</p>
              <p className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors">Healthcare</p>
              <p className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors">Enterprise</p>
            </div>
          </div>
          
          <div>
            <span className="font-semibold text-white mb-4 block">Company</span>
            <div className="space-y-2">
              <p className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors">About Us</p>
              <p className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors">Careers</p>
              <p className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors">Contact</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700/50 pt-8 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} TriAMP. All rights reserved. Transforming industries with AI innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
