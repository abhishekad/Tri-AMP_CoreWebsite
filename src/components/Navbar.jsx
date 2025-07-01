import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Menu, X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Navbar = () => {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleFeatureClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleDemoClick = () => {
    navigate('/demo');
  };

  return (
    <nav className="relative z-50 px-6 py-4 bg-charcoal border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-electric-blue rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-light-gray">
              TriAMP
            </span>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8 text-light-gray">
          <a href="/#solutions" className="hover:text-aqua transition-colors">Solutions</a>
          <Link to="/about" className="hover:text-aqua transition-colors">About</Link>
          <Button onClick={handleDemoClick} variant="outline" className="border-2 border-aqua/50 text-aqua hover:bg-aqua/10 hover:text-aqua">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Demo
          </Button>
          <Button onClick={handleFeatureClick} className="bg-electric-blue hover:bg-electric-blue/90 text-white">
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden text-light-gray"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-charcoal/95 backdrop-blur-lg border-t border-border px-6 py-4"
        >
          <div className="flex flex-col space-y-4 text-light-gray">
            <a href="/#solutions" onClick={() => setIsMenuOpen(false)} className="hover:text-aqua transition-colors">Solutions</a>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-aqua transition-colors">About</Link>
            <Button onClick={() => { handleDemoClick(); setIsMenuOpen(false); }} variant="outline" className="w-full border-aqua/50 text-aqua hover:bg-aqua/10 hover:text-aqua">
              Schedule Demo
            </Button>
            <Button onClick={() => { handleFeatureClick(); setIsMenuOpen(false); }} className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white">
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
