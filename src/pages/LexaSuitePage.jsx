import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase, Mail, User, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import useGoogleAnalytics from '../hooks/useGoogleAnalytics';

const LexaSuitePage = () => {
  useGoogleAnalytics();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      localStorage.setItem('lexa_suite_notification_request', JSON.stringify(formData));
      toast({
        title: "🎉 You're on the list!",
        description: "We'll notify you as soon as Lexa Suite is ready to launch.",
      });
      setFormData({ name: '', email: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Lexa Suite - Launching Soon | TriAMP</title>
        <meta name="description" content="Lexa Suite, TriAMP's powerful enterprise toolset for Legal Tech, is launching soon. Sign up for updates!" />
      </Helmet>
      <div className="min-h-[calc(100vh-150px)] flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden bg-charcoal">
        <div className="absolute inset-0 bg-aqua/5 blur-3xl"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <div className="w-24 h-24 bg-aqua rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-aqua/30">
            <Briefcase className="w-12 h-12 text-charcoal" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-aqua">
            Lexa Suite
          </h1>
          <p className="text-3xl md:text-4xl font-semibold text-light-gray mb-8">
            Launching Soon!
          </p>
          <p className="text-xl text-light-gray/80 mb-12 leading-relaxed">
            The ultimate enterprise toolkit for legal professionals. Lexa Suite integrates seamlessly into your workflow to boost productivity and provide unparalleled insights.
          </p>

          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-secondary/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 space-y-6 max-w-lg mx-auto"
          >
            <h2 className="text-2xl font-semibold text-light-gray mb-4">Get Notified!</h2>
            <div className="space-y-2 text-left">
              <Label htmlFor="name-lexa-suite">Your Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-light-gray/50" />
                <Input
                  type="text"
                  id="name-lexa-suite"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="email-lexa-suite">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-light-gray/50" />
                <Input
                  type="email"
                  id="email-lexa-suite"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10"
                />
              </div>
            </div>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-aqua hover:bg-aqua/90 text-charcoal text-lg py-3 rounded-xl"
            >
              {isSubmitting ? 'Submitting...' : (
                <>
                  <Bell className="mr-2 w-5 h-5" />
                  Notify Me
                </>
              )}
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </>
  );
};

export default LexaSuitePage;