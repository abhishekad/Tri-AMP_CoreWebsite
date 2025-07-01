import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, CheckCircle, Briefcase, Zap } from 'lucide-react';
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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* LEXA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-secondary/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-electric-blue/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-electric-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-16 h-16 bg-electric-blue rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-electric-blue">LEXA</h3>
              <p className="text-light-gray/80 mb-6 leading-relaxed flex-grow">
                AI-powered legal research and document analysis tool that helps legal professionals work more efficiently with automated insights and case management.
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
                  <span className="text-light-gray/90">Case Law Analysis</span>
                </li>
              </ul>
              <Button 
                asChild
                className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white mt-auto"
              >
                <Link to="/lexa">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* LEXA Suite Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative bg-secondary/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-aqua/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-aqua/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-br from-aqua to-electric-blue rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-center mb-1">
                <h3 className="text-2xl font-bold text-aqua">LEXA Suite</h3>
                <span className="ml-3 px-2 py-1 text-xs bg-aqua/20 text-aqua rounded-full font-medium">Enterprise</span>
              </div>
              <p className="text-light-gray/80 mb-6 leading-relaxed flex-grow">
                Comprehensive enterprise solution for law firms and legal departments featuring advanced AI-powered tools for legal research, contract drafting, and case management.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-aqua" />
                  <span className="text-light-gray/90">Advanced Legal Research</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-aqua" />
                  <span className="text-light-gray/90">Smart Contract Drafting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-aqua" />
                  <span className="text-light-gray/90">Team Collaboration Tools</span>
                </li>
              </ul>
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-aqua to-electric-blue hover:opacity-90 text-white mt-auto"
              >
                <Link to="/lexa-suite">
                  Explore Enterprise Features
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;