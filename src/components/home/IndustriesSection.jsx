import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2 } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const IndustriesSection = () => {
  return (
    <section id="industries" className="px-6 py-20 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-light-gray">
            B2B & B2C <span className="text-aqua">Excellence</span>
          </h2>
          <p className="text-xl text-light-gray/80 max-w-3xl mx-auto">
            Serving diverse legal markets with tailored AI solutions for enterprises and individual consumers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            {...fadeInUp}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-3 mb-4">
                <Building2 className="w-8 h-8 text-electric-blue" />
                <h3 className="text-3xl font-bold text-electric-blue">Enterprise Solutions</h3>
              </div>
              <p className="text-light-gray/80 text-lg">
                Comprehensive AI platforms designed for large-scale legal enterprise deployment.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-secondary/50 border border-border rounded-xl p-6">
                <h4 className="text-xl font-semibold text-light-gray mb-3">Law Firms & Legal Departments</h4>
                <p className="text-light-gray/70">AI-powered legal research, contract analysis, and case management for legal professionals.</p>
              </div>
              <div className="bg-secondary/50 border border-border rounded-xl p-6">
                <h4 className="text-xl font-semibold text-light-gray mb-3">Corporate Compliance</h4>
                <p className="text-light-gray/70">Automated compliance monitoring and risk assessment solutions.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-3 mb-4">
                <Users className="w-8 h-8 text-aqua" />
                <h3 className="text-3xl font-bold text-aqua">Consumer Products</h3>
              </div>
              <p className="text-light-gray/80 text-lg">
                User-friendly AI applications for individual consumers and small businesses.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-secondary/50 border border-border rounded-xl p-6">
                <h4 className="text-xl font-semibold text-light-gray mb-3">Personal Legal Assistant</h4>
                <p className="text-light-gray/70">AI-powered legal guidance and document preparation for individuals.</p>
              </div>
              <div className="bg-secondary/50 border border-border rounded-xl p-6">
                <h4 className="text-xl font-semibold text-light-gray mb-3">Freelancer & Small Business Tools</h4>
                <p className="text-light-gray/70">Contract generation and review tools for independent professionals.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;