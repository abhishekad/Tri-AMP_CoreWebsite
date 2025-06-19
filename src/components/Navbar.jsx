
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Navbar = () => {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleFeatureClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <nav className="relative z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              TriAMP
            </span>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/#solutions" className="hover:text-cyan-400 transition-colors">Solutions</Link>
          <Link to="/#industries" className="hover:text-cyan-400 transition-colors">Industries</Link>
          <Link to="/#about" className="hover:text-cyan-400 transition-colors">About</Link>
          <Button onClick={handleFeatureClick} className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-slate-800/95 backdrop-blur-lg border-t border-slate-700 px-6 py-4"
        >
          <div className="flex flex-col space-y-4">
            <Link to="/#solutions" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400 transition-colors">Solutions</Link>
            <Link to="/#industries" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400 transition-colors">Industries</Link>
            <Link to="/#about" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400 transition-colors">About</Link>
            <Button onClick={() => { handleFeatureClick(); setIsMenuOpen(false); }} className="bg-gradient-to-r from-cyan-500 to-purple-600">
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
