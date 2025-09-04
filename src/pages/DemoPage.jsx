import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import VideoPlayer from '@/components/ui/VideoPlayer';
import useGoogleAnalytics from '../hooks/useGoogleAnalytics';

const DemoPage = () => {
  useGoogleAnalytics();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToRegistration = () => {
    if (window.location.hash === '#registration') {
      const element = document.getElementById('registration');
      if (element) {
        // Small timeout to ensure the DOM has updated
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    }
  };

  useEffect(() => {
    // Only run on initial page load if the URL already has #registration
    if (window.location.hash === '#registration') {
      scrollToRegistration();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('demo_notification_request', JSON.stringify(formData));
      toast({
        title: "🎉 Thank you!",
        description: "We'll be in touch soon to schedule your demo.",
      });
      setFormData({ name: '', email: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-charcoal text-light-gray">
      <Helmet>
        <title>Schedule a Demo | TriAMP</title>
        <meta name="description" content="See TriAMP's solutions in action. Schedule a demo to explore how our AI can transform your legal tech needs." />
      </Helmet>

      {/* Hero Section with Video */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-electric-blue/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-light-gray">
              See Our Solutions in
              <span className="text-electric-blue"> Action</span>
            </h1>
            <p className="text-xl text-light-gray/80 max-w-3xl mx-auto">
              Experience firsthand how TriAMP's AI solutions can transform your legal tech operations.
            </p>
          </motion.div>

          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/50 backdrop-blur-sm border border-border max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden">
              <VideoPlayer 
                src="/videos/Launching_soon_updated.mp4"
                poster="/images/demo_vid_thumbnail.png"
                className="w-full h-full"
                alt="TriAMP Demo Video"
              />
            </div>
          </motion.div>
          
          {/* Live Solution Section */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-electric-blue/20 to-aqua/20 border border-electric-blue/30 mb-6">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-aqua">
                We're Live!
              </span>
            </div>
            <div className="flex justify-center mb-8">
              <img 
                src="/images/urcounsel-full-logo.png" 
                alt="UrCounsel Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-light-gray mb-4">
              Experience Our Legal Document Analysis Solution
            </h3>
            <p className="text-lg text-light-gray/80 max-w-2xl mx-auto mb-8">
              Try our AI-powered legal document analysis tool and see how it can transform your legal pain points.
            </p>
            <Button 
              asChild
              size="lg" 
              className="bg-electric-blue hover:bg-electric-blue/90 text-white text-lg px-8 py-4 rounded-xl shadow-2xl shadow-electric-blue/25"
            >
              <a 
                href="https://www.urcounsel.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Try Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="registration" className="py-16 px-4 sm:px-6 bg-secondary/10">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary/50 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 space-y-6"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-light-gray mb-2">Schedule a Personal Demo</h2>
              <p className="text-light-gray/70 text-sm">
                Fill out the form below and our team will contact you to schedule a personalized demo.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="name-demo" className="text-light-gray/80 text-sm">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-light-gray/50" />
                  <Input
                    type="text"
                    id="name-demo"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-9 h-10 text-sm bg-charcoal/50 border-border text-light-gray placeholder:text-light-gray/40"
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <Label htmlFor="email-demo" className="text-light-gray/80 text-sm">Work Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-light-gray/50" />
                  <Input
                    type="email"
                    id="email-demo"
                    name="email"
                    placeholder="Enter your work email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-9 h-10 text-sm bg-charcoal/50 border-border text-light-gray placeholder:text-light-gray/40"
                  />
                </div>
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white text-base py-5 rounded-lg mt-4 transition-all duration-300"
              >
                {isSubmitting ? 'Scheduling...' : 'Schedule My Demo'}
              </Button>
              
              <p className="text-xs text-light-gray/50 text-center mt-3">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;
