import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const CtaSection = ({ handleFeatureClick }) => {
  const navigate = useNavigate();
  
  const handleDemoClick = useCallback((e) => {
    e?.preventDefault?.();
    try {
      // Optional: Add analytics tracking here
      console.log('Schedule Demo clicked from CTA section');
      navigate('/demo');
    } catch (error) {
      console.error('Navigation error:', error);
      toast({
        title: 'Navigation Error',
        description: 'Could not navigate to the demo page. Please try again.',
        variant: 'destructive',
      });
    }
  }, [navigate]);
  return (
    <section className="px-6 py-20 relative bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          {...fadeInUp}
          className="bg-secondary/50 backdrop-blur-sm border border-border rounded-3xl p-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-light-gray">
            Ready to Transform Your <span className="text-electric-blue">Legal Practice?</span>
          </h2>
          <p className="text-xl text-light-gray/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have revolutionized their operations with TriAMP's AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleFeatureClick}
              size="lg" 
              className="bg-electric-blue hover:bg-electric-blue/90 text-white text-lg px-8 py-4 rounded-xl shadow-2xl shadow-electric-blue/25"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="group border-2 border-aqua/50 text-aqua hover:bg-aqua/10 hover:text-aqua text-lg px-8 py-4 rounded-xl transition-all duration-200"
            >
              <button 
                onClick={handleDemoClick}
                className="flex items-center gap-2"
                aria-label="Schedule a demo"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Schedule Demo
              </button>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;