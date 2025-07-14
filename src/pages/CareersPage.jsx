import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase, Globe, Users, Code, Zap, ArrowRight } from 'lucide-react';
import useGoogleAnalytics from '../hooks/useGoogleAnalytics';

const jobOpenings = [
  {
    id: 1,
    title: 'Frontend Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    description: 'We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user interfaces and implementing features using modern JavaScript frameworks.',
    requirements: [
      '3+ years of experience with React.js',
      'Proficiency in JavaScript, HTML5, and CSS3',
      'Experience with state management (Redux/Context API)',
      'Familiarity with RESTful APIs',
      'Knowledge of modern frontend build pipelines and tools'
    ]
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    type: 'Full-time',
    location: 'Hybrid',
    department: 'Research & Development',
    description: 'Join our AI team to develop cutting-edge machine learning models and algorithms that power our legal tech solutions.',
    requirements: [
      'Strong background in machine learning and deep learning',
      'Experience with Python and ML frameworks (TensorFlow/PyTorch)',
      'Knowledge of NLP and legal tech is a plus',
      'Experience with cloud platforms (AWS/GCP/Azure)',
      'Strong problem-solving skills'
    ]
  },
  {
    id: 3,
    title: 'Product Manager',
    type: 'Full-time',
    location: 'Remote',
    department: 'Product',
    description: 'We are seeking an experienced Product Manager to lead the development of our AI-powered legal tech products.',
    requirements: [
      '5+ years of product management experience',
      'Experience in B2B SaaS products',
      'Strong analytical and problem-solving skills',
      'Excellent communication and leadership abilities',
      'Technical background is a plus'
    ]
  }
];

const benefits = [
  {
    icon: <Zap className="w-8 h-8 text-electric-blue" />,
    title: 'Competitive Salary',
    description: 'We offer industry-leading compensation packages.'
  },
  {
    icon: <Globe className="w-8 h-8 text-electric-blue" />,
    title: 'Remote Work',
    description: 'Work from anywhere in the world.'
  },
  {
    icon: <Briefcase className="w-8 h-8 text-electric-blue" />,
    title: 'Flexible Hours',
    description: 'We value results over strict schedules.'
  },
  {
    icon: <Users className="w-8 h-8 text-electric-blue" />,
    title: 'Team Events',
    description: 'Regular team building activities and retreats.'
  },
  {
    icon: <Code className="w-8 h-8 text-electric-blue" />,
    title: 'Learning Budget',
    description: 'Annual budget for professional development.'
  }
];

const CareersPage = () => {
  useGoogleAnalytics();

  return (
    <>
      <Helmet>
        <title>Careers | Join Our Team | TriAMP</title>
        <meta name="description" content="Join the TriAMP team. Explore exciting career opportunities in AI and legal technology. Help us build the future of legal tech." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-charcoal to-charcoal/90 text-light-gray py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-electric-blue mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl text-light-gray/80 max-w-3xl mx-auto mb-10">
            Help us revolutionize the legal tech industry with cutting-edge AI solutions. Work on challenging problems with a talented team.
          </p>
          <a 
            href="#open-positions" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-charcoal bg-electric-blue hover:bg-electric-blue/90 transition-colors duration-200"
          >
            View Open Positions
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 px-6 bg-charcoal/95">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-light-gray mb-4">Why Join TriAMP?</h2>
            <div className="w-24 h-1 bg-electric-blue mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-charcoal-light p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-light-gray mb-2">{benefit.title}</h3>
                <p className="text-light-gray/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 px-6 bg-charcoal/90">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-light-gray mb-4">Open Positions</h2>
            <div className="w-24 h-1 bg-electric-blue mx-auto mb-8"></div>
            <p className="text-light-gray/80 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our team. Check out our current openings below.
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-charcoal-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-electric-blue">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="px-3 py-1 bg-charcoal/50 rounded-full text-sm text-light-gray/80">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-charcoal/50 rounded-full text-sm text-light-gray/80">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-charcoal/50 rounded-full text-sm text-light-gray/80">
                        {job.department}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`#position-${job.id}`}
                    className="mt-4 md:mt-0 inline-flex items-center text-electric-blue hover:text-electric-blue/80 transition-colors duration-200"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
                <p className="text-light-gray/80 mb-4">{job.description}</p>
                <div id={`position-${job.id}`} className="mt-6 pt-6 border-t border-charcoal">
                  <h4 className="text-lg font-semibold text-light-gray mb-3">Requirements:</h4>
                  <ul className="space-y-2 text-light-gray/80">
                    {job.requirements.map((requirement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-electric-blue mr-2">•</span>
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a
                      href={`mailto:careers@triamp.com?subject=Application for ${job.title} (${job.id})`}
                      className="inline-flex items-center px-6 py-2 border border-electric-blue text-electric-blue rounded-md hover:bg-electric-blue/10 transition-colors duration-200"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No matching positions */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-light-gray mb-4">Don't see a role that fits?</h3>
            <p className="text-light-gray/70 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about AI and legal tech. 
              Even if you don't see an exact match, we'd love to hear from you.
            </p>
            <a
              href="mailto:careers@triamp.com?subject=General Application"
              className="inline-flex items-center px-6 py-3 border border-electric-blue text-electric-blue rounded-md hover:bg-electric-blue/10 transition-colors duration-200"
            >
              Send Us Your Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-6 bg-charcoal/95">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-light-gray mb-4">Our Culture</h2>
            <div className="w-24 h-1 bg-electric-blue mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-light-gray mb-4">Innovation Meets Impact</h3>
              <p className="text-light-gray/80 mb-6">
                At TriAMP, we believe in the power of AI to transform the legal industry. We're a team of passionate 
                individuals who are dedicated to building solutions that make a real difference in people's lives.
              </p>
              <p className="text-light-gray/80 mb-6">
                We value creativity, collaboration, and continuous learning. Our culture is built on trust, transparency, 
                and a shared commitment to excellence.
              </p>
              <ul className="space-y-3 text-light-gray/80">
                <li className="flex items-start">
                  <span className="text-electric-blue mr-2">•</span>
                  <span>We encourage innovation and out-of-the-box thinking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-electric-blue mr-2">•</span>
                  <span>We believe in work-life balance and flexibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-electric-blue mr-2">•</span>
                  <span>We celebrate diversity and inclusion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-electric-blue mr-2">•</span>
                  <span>We support professional growth and development</span>
                </li>
              </ul>
            </div>
            <div className="bg-charcoal-light p-8 rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-br from-electric-blue/20 to-charcoal-light rounded-lg flex items-center justify-center">
                  <Users className="w-32 h-32 text-electric-blue/30" />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-charcoal p-4 rounded-lg">
                  <div className="text-3xl font-bold text-electric-blue mb-1">20+</div>
                  <div className="text-light-gray/70 text-sm">Team Members</div>
                </div>
                <div className="bg-charcoal p-4 rounded-lg">
                  <div className="text-3xl font-bold text-electric-blue mb-1">10+</div>
                  <div className="text-light-gray/70 text-sm">Countries</div>
                </div>
                <div className="bg-charcoal p-4 rounded-lg">
                  <div className="text-3xl font-bold text-electric-blue mb-1">5+</div>
                  <div className="text-light-gray/70 text-sm">Years in Business</div>
                </div>
                <div className="bg-charcoal p-4 rounded-lg">
                  <div className="text-3xl font-bold text-electric-blue mb-1">50+</div>
                  <div className="text-light-gray/70 text-sm">Clients Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
