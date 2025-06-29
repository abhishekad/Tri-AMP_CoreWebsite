import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const CookiesPolicyPage = () => {
  return (
    <>
      <Helmet>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6RSQZFH4P9"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6RSQZFH4P9');
          `
        }} />
        <title>Cookies Policy | TriAMP</title>
        <meta name="description" content="Cookies Policy for TriAMP. Learn about the cookies we use on our site." />
      </Helmet>
      <div className="bg-charcoal text-light-gray py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-aqua mb-4">🍪 Cookies Policy</h1>
            <p className="text-light-gray/70">Effective Date: June 21, 2025 | Last Updated: June 25, 2025</p>
          </div>
          
          <article className="prose prose-lg lg:prose-xl max-w-none">
            <p>
              This Cookies Policy explains how TriAMP uses cookies and similar technologies to recognize you when you visit our website.
            </p>

            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small data files placed on your device when you visit a website. They are used to remember your preferences, track your behavior, and improve your user experience.
            </p>

            <h2>2. Types of Cookies We Use</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left p-2">Type</th>
                    <th className="text-left p-2">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2"><strong>Essential Cookies</strong></td>
                    <td className="p-2">Required for website functionality (e.g., login, security)</td>
                  </tr>
                  <tr>
                    <td className="p-2"><strong>Analytics Cookies</strong></td>
                    <td className="p-2">Help us understand how users interact with the site (e.g., Google Analytics)</td>
                  </tr>
                  <tr>
                    <td className="p-2"><strong>Preference Cookies</strong></td>
                    <td className="p-2">Store your settings (e.g., language, theme)</td>
                  </tr>
                  <tr>
                    <td className="p-2"><strong>Marketing Cookies</strong></td>
                    <td className="p-2">May be used to deliver relevant ads or track email performance (if applicable)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>3. Third-Party Cookies</h2>
            <p>
              Some cookies may be placed by third parties such as analytics tools or embedded content providers.
            </p>

            <h2>4. Managing Cookies</h2>
            <p>You can control cookies through:</p>
            <ul>
              <li>Browser settings (block or delete cookies)</li>
              <li>Opt-out tools (e.g., Google Analytics opt-out browser add-on)</li>
            </ul>
            <p>Please note, disabling cookies may affect website functionality.</p>

            <h2>5. Updates to This Policy</h2>
            <p>
              We may update this Cookies Policy periodically. Changes will be posted here with a revised date.
            </p>

            <h2>6. Contact</h2>
            <p>
              If you have any questions about our use of cookies, please contact:
              <br />
              Email: <a href="mailto:support@triamp.in">support@triamp.in</a>
            </p>
          </article>
        </motion.div>
      </div>
    </>
  );
};

export default CookiesPolicyPage;