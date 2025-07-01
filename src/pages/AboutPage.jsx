import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Brain, Users, Lightbulb, Shield, BarChart3, ArrowUpRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import CtaSection from '@/components/home/CtaSection';
import useGoogleAnalytics from '../hooks/useGoogleAnalytics';

const AboutPage = () => {
  const navigate = useNavigate();
  useGoogleAnalytics();
  
  const handleDemoClick = (e) => {
    e.preventDefault();
    // Optional: Add analytics tracking here
    console.log('Schedule Demo clicked from About page');
    navigate('/demo');
  };

  const stats = [
    { value: '10K+', label: 'Legal Professionals Served' },
    { value: '1M+', label: 'Documents Processed' },
    { value: '99.9%', label: 'Accuracy Rate' },
    { value: '24/7', label: 'Support' },
  ];

  const team = [
    {
      name: 'Mr. Abhishek Dongare',
      role: 'CEO & Co-founder',
      bio: 'AI/ML expert passionate about building scalable, intelligent solutions that transform the legal tech landscape.',
      image: 'src/assets/images/male_dev.jpg',
    },
    {
      name: 'Ms. Mayuri Chavan',
      role: 'COO & Co-founder',
      bio: 'Management expert with a focus on operational excellence and scalable growth through strategic execution and leadership',
      image: 'src/assets/images/female_dev.jpg',
    },
    {
      name: 'Mr. Pravan Unchegaonkar',
      role: 'CTO & Co-founder',
      bio: 'Leading tech innovation and product development with a future-focused, hands-on approach in legal tech industry.',
      image: 'src/assets/images/male_dev.jpg',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - TriAMP</title>
        <meta name="description" content="Learn about TriAMP's mission, vision, and the team behind our innovative legal tech solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-charcoal to-charcoal/90 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-light-gray mb-6">
              Empowering Legal Innovation Through AI
            </h1>
            <p className="text-xl text-light-gray/80 mb-10 max-w-3xl mx-auto">
              At TriAMP, we're revolutionizing the legal industry with cutting-edge AI solutions that enhance efficiency, accuracy, and accessibility for legal professionals and individuals alike.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-electric-blue hover:bg-electric-blue/90 text-white">
                Get Started
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-2 border-aqua/50 text-aqua hover:bg-aqua/10 transition-colors duration-200"
              >
                <button 
                  onClick={handleDemoClick}
                  className="flex items-center"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Demo
                </button>
              </Button>
              <Button variant="outline" className="border-2 border-light-gray/30 text-light-gray hover:bg-light-gray/10">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-charcoal/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-charcoal/50 rounded-xl border border-border"
              >
                <div className="text-3xl font-bold text-aqua mb-2">{stat.value}</div>
                <div className="text-light-gray/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-light-gray mb-6">
                Our Mission
              </h2>
              <div className="space-y-6 text-light-gray/80">
                <p>
                  We're on a mission to transform the Indian legal industry by making advanced AI tools accessible to every legal professional and individual who needs them.
                </p>
                <p>
                  Our platform is designed to handle the complexities of legal work while remaining intuitive and easy to use, saving you time and reducing errors.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-charcoal/50 p-8 rounded-xl border border-border"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Brain className="w-8 h-8 text-aqua" />, title: 'AI-Powered', description: 'Advanced machine learning for accurate legal analysis' },
                  { icon: <Shield className="w-8 h-8 text-electric-blue" />, title: 'Secure', description: 'Enterprise-grade security for your sensitive data' },
                  { icon: <BarChart3 className="w-8 h-8 text-aqua" />, title: 'Data-Driven', description: 'Insights powered by millions of legal documents' },
                  { icon: <Lightbulb className="w-8 h-8 text-electric-blue" />, title: 'Innovative', description: 'Constantly evolving with the latest legal tech' },
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-charcoal/30 rounded-lg">
                    <div className="mb-2">{item.icon}</div>
                    <h3 className="font-semibold text-light-gray mb-1">{item.title}</h3>
                    <p className="text-sm text-light-gray/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-charcoal/80">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-light-gray mb-4">
              Meet Our Team
            </h2>
            <p className="text-light-gray/80 max-w-2xl mx-auto">
              A diverse team of legal experts, AI researchers, and technology enthusiasts dedicated to transforming the legal industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-charcoal/50 rounded-xl overflow-hidden border border-border hover:border-aqua/50 transition-colors"
              >
                <div className="h-64 bg-charcoal/30">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-light-gray">{member.name}</h3>
                  <p className="text-aqua mb-3">{member.role}</p>
                  <p className="text-light-gray/80">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable CTA Section */}
      <CtaSection 
        handleFeatureClick={() => {
          // Handle Get Started click
          console.log('Get Started clicked from About page');
          // You can add navigation or other logic here
        }}
      />
    </>
  );
};

export default AboutPage;
