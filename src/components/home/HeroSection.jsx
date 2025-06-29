import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = ({ handleFeatureClick }) => {
  return (
    <section className="relative px-6 py-20 overflow-hidden bg-charcoal">
      <div className="absolute inset-0 bg-electric-blue/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-electric-blue/10 backdrop-blur-sm border border-electric-blue/20 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-electric-blue" />
            <span className="text-sm font-medium text-light-gray">Revolutionary AI Technology</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-light-gray">
            Transforming
            <br />
            <span className="text-electric-blue">
              Legal Technology
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-light-gray/80 max-w-4xl mx-auto mb-8 leading-relaxed">
            TriAMP creates cutting-edge AI solutions that revolutionize the Legal technology sector, 
            serving both enterprise clients and individual consumers with unprecedented innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button 
            onClick={handleFeatureClick}
            size="lg" 
            className="bg-electric-blue hover:bg-electric-blue/90 text-white text-lg px-8 py-4 rounded-xl shadow-2xl shadow-electric-blue/25"
          >
            Explore Solutions
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            onClick={handleFeatureClick}
            variant="outline" 
            size="lg"
            className="border-2 border-electric-blue/50 text-electric-blue hover:bg-electric-blue/10 hover:text-electric-blue text-lg px-8 py-4 rounded-xl"
          >
            Watch Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-electric-blue mb-2">500K+</div>
            <div className="text-light-gray/70">Legal Documents Processed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-aqua mb-2">99.9%</div>
            <div className="text-light-gray/70">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-electric-blue mb-2">24/7</div>
            <div className="text-light-gray/70">AI Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;