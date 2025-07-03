
import React from 'react';
import { Helmet } from 'react-helmet';
import { useToast } from '@/components/ui/use-toast';
import HeroSection from '@/components/home/HeroSection';
import SolutionsSection from '@/components/home/SolutionsSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import CtaSection from '@/components/home/CtaSection';
import useGoogleAnalytics from '../hooks/useGoogleAnalytics';

const HomePage = () => {
  const { toast } = useToast();
  useGoogleAnalytics();

  const handleFeatureClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—Coming soon!"
    });
  };

  return (
    <>
      <Helmet>
        <title>TriAMP - Revolutionary AI Solutions for Legal Tech</title>
        <meta name="description" content="TriAMP creates cutting-edge AI products for the Legal technology sector, serving both B2B and B2C markets with innovative solutions." />
      </Helmet>
      <HeroSection handleFeatureClick={handleFeatureClick} />
      <SolutionsSection />
      <WhyChooseUsSection />
      <CtaSection handleFeatureClick={handleFeatureClick} />
    </>
  );
};

export default HomePage;
