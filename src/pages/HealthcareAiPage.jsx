import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Mail, User, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import useGoogleAnalytics from '../hooks/useGoogleAnalytics';

const HealthcareAiPage = () => {
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
      localStorage.setItem('healthcare_ai_notification_request', JSON.stringify(formData));
      toast({
        title: "🎉 You're on the list!",
        description: "We'll notify you as soon as our Healthcare AI solution is ready.",
      });
      setFormData({ name: '', email: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Healthcare AI - Launching Soon | TriAMP</title>
        <meta name="description" content="TriAMP's advanced Healthcare AI solution is launching soon. Sign up for updates!" />
      </Helmet>
      <div className="min-h-[calc(100vh-150px)] flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-purple-500/30">
            <Heart className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Healthcare AI
            </span>
          </h1>
          <p className="text-3xl md:text-4xl font-semibold text-slate-200 mb-8">
            Launching Soon!
          </p>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Our cutting-edge AI for healthcare is almost here. Get early access notifications and be among the first to experience the future of health tech.
          </p>

          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 space-y-6 max-w-lg mx-auto"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Get Notified!</h2>
            <div className="space-y-2 text-left">
              <Label htmlFor="name-health" className="text-slate-300">Your Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="text"
                  id="name-health"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-slate-700/50 border-slate-600 focus:border-purple-500"
                />
              </div>
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="email-health" className="text-slate-300">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="email"
                  id="email-health"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-slate-700/50 border-slate-600 focus:border-purple-500"
                />
              </div>
            </div>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-lg py-3 rounded-xl"
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

export default HealthcareAiPage;