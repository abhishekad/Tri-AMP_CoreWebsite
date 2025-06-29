import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const SolutionsSection = () => {
  return (
    <section id="solutions" className="px-6 py-20 relative bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-light-gray">
            Our Flagship <span className="text-electric-blue">AI Solution</span>
          </h2>
          <p className="text-xl text-light-gray/80 max-w-3xl mx-auto">
            Discover our comprehensive AI product designed to transform the legal industry and empower professionals.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            variants={fadeInUp}
            className="group relative bg-secondary/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-electric-blue/50 transition-all duration-300 max-w-2xl"
          >
            <div className="absolute inset-0 bg-electric-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-electric-blue rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-electric-blue">LEXA</h3>
              <p className="text-light-gray/80 mb-6 leading-relaxed">
                Revolutionary AI-powered legal research, document analysis, and case management solutions that streamline legal workflows and enhance decision-making processes.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua" />
                  <span className="text-light-gray/90">Automated Document Review</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua" />
                  <span className="text-light-gray/90">Legal Research Assistant</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua" />
                  <span className="text-light-gray/90">Contract Intelligence</span>
                </li>
              </ul>
              <Button 
                asChild
                className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white"
              >
                <Link to="/lexa">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;