import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ActivitiesSection from '../components/sections/ActivitiesSection';
import StatsSection from '../components/sections/StatsSection';
import NewsSection from '../components/sections/NewsSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <StatsSection />
      <NewsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
