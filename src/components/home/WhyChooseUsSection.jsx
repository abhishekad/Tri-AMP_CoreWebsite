import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Star } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const WhyChooseUsSection = () => {
  return (
    <section id="about" className="px-6 py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-light-gray">
            Why Choose <span className="text-electric-blue">TriAMP?</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center group"
          >
            <div className="w-20 h-20 bg-electric-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-electric-blue">Advanced AI</h3>
            <p className="text-light-gray/80">Cutting-edge machine learning algorithms and neural networks.</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="text-center group"
          >
            <div className="w-20 h-20 bg-aqua rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-10 h-10 text-charcoal" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-aqua">Enterprise Security</h3>
            <p className="text-light-gray/80">Bank-level security with end-to-end encryption and compliance.</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="text-center group"
          >
            <div className="w-20 h-20 bg-electric-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-electric-blue">24/7 Support</h3>
            <p className="text-light-gray/80">Round-the-clock customer support and AI-powered assistance.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 

export default WhyChooseUsSection;