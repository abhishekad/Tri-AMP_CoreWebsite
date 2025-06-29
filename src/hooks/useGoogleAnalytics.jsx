import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const GA_MEASUREMENT_ID = 'G-6RSQZFH4P9';

const useGoogleAnalytics = () => {
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') {
      return;
    }

    // Check if already initialized
    if (window.gtag) {
      return;
    }

    // Create script element for Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    
    // Add script to document
    document.head.appendChild(script);

    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    
    // Configure gtag
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });

    // Track page view on route change
    const handleRouteChange = () => {
      gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
      });
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('pushState', handleRouteChange);
    window.addEventListener('replaceState', handleRouteChange);

    // Cleanup function
    return () => {
      // Remove event listeners
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('pushState', handleRouteChange);
      window.removeEventListener('replaceState', handleRouteChange);
      
      // Remove script if it exists
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      
      // Cleanup globals
      delete window.gtag;
      window.dataLayer = [];
    };
  }, []);

  // Return null as we're not using a component
  return null;
};

export default useGoogleAnalytics;
