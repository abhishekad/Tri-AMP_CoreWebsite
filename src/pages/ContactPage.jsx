import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Check, X } from 'lucide-react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import useGoogleAnalytics from '../hooks/useGoogleAnalytics';

const ContactPage = () => {
  useGoogleAnalytics();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Replace with actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully! We\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-electric-blue" />,
      title: 'Email Us',
      value: 'contact@triamp.in',
      href: 'mailto:contact@triamp.in'
    },
    {
      icon: <Phone className="w-6 h-6 text-electric-blue" />,
      title: 'Call Us',
      value: '+91 7776909491',
      href: 'tel:+917776909491'
    },
    {
      icon: <MapPin className="w-6 h-6 text-electric-blue" />,
      title: 'Visit Us',
      value: 'TriAMP AI Solutions, Buldana, Maharashtra India'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | TriAMP</title>
        <meta name="description" content="Get in touch with TriAMP. We're here to answer your questions and help you with our AI-powered legal tech solutions." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-charcoal to-charcoal/90 text-light-gray py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-electric-blue mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-light-gray/80 max-w-3xl mx-auto">
            Have questions about our AI solutions? We're here to help. Reach out to our team today.
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-6 bg-charcoal/95">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"
          >
            {/* Contact Form */}
            <div className="bg-charcoal-light p-8 rounded-xl shadow-xl h-full">
              <h2 className="text-2xl font-bold text-light-gray mb-6">Send Us a Message</h2>
              
              {status.message && (
                <div className={`p-4 mb-6 rounded-lg ${status.type === 'success' ? 'bg-green-900/30 border border-green-800' : 'bg-red-900/30 border border-red-800'}`}>
                  <div className="flex items-center">
                    {status.type === 'success' ? (
                      <Check className="w-5 h-5 text-green-400 mr-2" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 mr-2" />
                    )}
                    <span className="text-light-gray">{status.message}</span>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-light-gray/80 mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-charcoal border border-charcoal-dark rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent text-light-gray placeholder-light-gray/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-light-gray/80 mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-charcoal border border-charcoal-dark rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent text-light-gray placeholder-light-gray/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-light-gray/80 mb-2">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-charcoal border border-charcoal-dark rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent text-light-gray placeholder-light-gray/50"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-light-gray/80 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-charcoal border border-charcoal-dark rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent text-light-gray placeholder-light-gray/50 resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-charcoal bg-electric-blue hover:bg-electric-blue/90 transition-colors duration-200 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col h-full space-y-8">
              <div className="bg-charcoal-light p-8 rounded-xl shadow-xl flex-1">
                <h2 className="text-2xl font-bold text-light-gray mb-6">Contact Information</h2>
                <p className="text-light-gray/80 mb-8">
                  Have questions about our AI solutions or need support? Reach out to our team and we'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-light-gray mb-1">{item.title}</h3>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className="text-electric-blue hover:underline transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-light-gray/80">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-charcoal to-charcoal-dark p-8 rounded-xl border border-charcoal-dark">
                <h3 className="text-xl font-semibold text-light-gray mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { name: 'Twitter', icon: <FaTwitter className="w-6 h-6" />, url: '#' },
                    { name: 'LinkedIn', icon: <FaLinkedin className="w-6 h-6" />, url: '#' },
                    { name: 'GitHub', icon: <FaGithub className="w-6 h-6" />, url: '#' },
                    { name: 'Instagram', icon: <FaInstagram className="w-6 h-6" />, url: '#' }
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="w-12 h-12 rounded-full bg-charcoal-light flex items-center justify-center text-2xl hover:bg-electric-blue/20 transition-colors duration-200 text-light-gray hover:text-electric-blue"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
