
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, ArrowUpRight } from 'lucide-react';
import useGoogleAnalytics from '../hooks/useGoogleAnalytics';

const TermsOfUsePage = () => {
  useGoogleAnalytics();
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>Terms of Use | TriAMP</title>
        <meta name="description" content="Terms of Use for TriAMP services and website." />
      </Helmet>
      <div className="bg-charcoal text-light-gray py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-electric-blue/10 mb-6">
              <FileText className="w-8 h-8 text-electric-blue" />
            </div>
            <h1 className="text-4xl font-bold mb-4">📜 TERMS OF USE</h1>
            <div className="text-light-gray/70 text-sm space-y-1">
              <p>Effective Date: {currentDate}</p>
              <p>Last Updated: {currentDate}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="prose prose-invert max-w-none bg-charcoal-darker/50 p-8 rounded-xl border border-border/50"
          >
            <p className="text-lg mb-8">
              Welcome to <span className="text-electric-blue">TriAMP</span> ("Company", "we", "our", or "us"). These Terms of Use ("Terms") govern your use of our website, services, applications, and platform (collectively, the "Service").
            </p>
            
            <p className="mb-8">
              By accessing or using our Service, you agree to be bound by these Terms. If you do not agree, do not access or use the Service.
            </p>

            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-semibold text-electric-blue mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center mr-3 text-electric-blue font-mono">1</span>
                  Eligibility
                </h2>
                <p>You must be at least 18 years old and legally capable of entering into binding contracts to use the Service. By using the Service, you represent and warrant that you meet these requirements.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-electric-blue mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center mr-3 text-electric-blue font-mono">2</span>
                  Description of Services
                </h2>
                <p className="mb-4">We offer a platform for legal professionals, individuals, and organizations to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Access legal tools and resources</li>
                  <li>Generate, manage, or analyze legal documents</li>
                  <li>Facilitate communication or automation of legal processes</li>
                </ul>
                <p>We are not a law firm and do not provide legal advice. Use of the Service does not create an attorney-client relationship.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-electric-blue mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center mr-3 text-electric-blue font-mono">3</span>
                  Account Registration
                </h2>
                <p className="mb-4">You may need to create an account to access certain features. You agree to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain confidentiality of your credentials</li>
                  <li>Notify us of any unauthorized use</li>
                </ul>
                <p>You are responsible for all activity under your account.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-electric-blue mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center mr-3 text-electric-blue font-mono">4</span>
                  Acceptable Use
                </h2>
                <p className="mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Violate any laws or regulations</li>
                  <li>Upload or transmit unlawful or infringing content</li>
                  <li>Reverse-engineer or tamper with the platform</li>
                  <li>Use automated means (bots, crawlers) without our permission</li>
                  <li>Attempt to gain unauthorized access to systems</li>
                </ul>
                <p>We reserve the right to suspend or terminate your access for violations.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-electric-blue mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center mr-3 text-electric-blue font-mono">5</span>
                  Intellectual Property
                </h2>
                <p className="mb-4">All content, branding, code, and materials on the Service are owned by or licensed to us and protected by intellectual property laws. You may:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Use our platform as intended for personal or business use</li>
                  <li>Not copy, distribute, or create derivative works without prior written consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-electric-blue mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center mr-3 text-electric-blue font-mono">6</span>
                  User Content
                </h2>
                <p className="mb-4">You may upload or submit content to the Service (e.g., legal documents, case notes, messages). You retain ownership of your content but grant us a limited license to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Store and process it to deliver the Service</li>
                  <li>Improve and develop our platform (anonymized and aggregated only)</li>
                </ul>
                <p>You are solely responsible for your content.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-electric-blue mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center mr-3 text-electric-blue font-mono">7</span>
                  Disclaimers
                </h2>
                <p className="mb-4">The Service is provided "as is" without warranties of any kind.</p>
                <p className="mb-4">We do not guarantee the accuracy, completeness, or legal validity of generated documents or outcomes.</p>
                <p>You should consult a licensed attorney for legal advice.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-electric-blue mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center mr-3 text-electric-blue font-mono">8</span>
                  Limitation of Liability
                </h2>
                <p className="mb-4">To the maximum extent permitted by law, we shall not be liable for:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or goodwill</li>
                  <li>Errors or omissions in the Service</li>
                </ul>
                <p>Our total liability is limited to the fees paid by you (if any) in the last 12 months.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-electric-blue mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center mr-3 text-electric-blue font-mono">9</span>
                  Third-Party Services
                </h2>
                <p>Our Service may contain links or integrations with third-party services. We are not responsible for their content, privacy, or practices.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-electric-blue mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center mr-3 text-electric-blue font-mono">10</span>
                  Termination
                </h2>
                <p>You may stop using the Service at any time. We reserve the right to suspend or terminate access at our discretion, especially for violations of these Terms or suspected misconduct.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-electric-blue mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center mr-3 text-electric-blue font-mono">11</span>
                  Modifications
                </h2>
                <p>We may update these Terms at any time. We will notify you of material changes via email or notice on the website. Continued use of the Service constitutes acceptance of the updated Terms.</p>
              </section>


              <section>
                <h2 className="text-2xl font-semibold text-electric-blue mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center mr-3 text-electric-blue font-mono">12</span>
                  Governing Law & Jurisdiction
                </h2>
                <p>These Terms are governed by the laws of India. All disputes shall be resolved in the courts located in Mumbai, India.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-electric-blue mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center mr-3 text-electric-blue font-mono">13</span>
                  Contact
                </h2>
                <p className="mb-4">If you have questions or concerns regarding these Terms, contact us at:</p>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <span className="mr-2">📧</span>
                    <a href="mailto:support@triamp.in" className="text-electric-blue hover:underline flex items-center">
                      support@triamp.in
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </a>
                  </p>
                  <p className="flex items-start">
                    <span className="mr-2 mt-1">📍</span>
                    <span>TriAmp Ai solutions pvt ltd<br />
                    MH, India</span>
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TermsOfUsePage;
