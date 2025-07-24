import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import CareerTimeline from '../components/CareerTimeline';
import MultimediaGallery from '../components/MultimediaGallery';
import WhyIServed from '../components/WhyIServed';
import MessageWall from '../components/MessageWall';
import TimeCapsule from '../components/TimeCapsule';
import AwardsSection from '../components/AwardsSection';
import FamilyTribute from '../components/FamilyTribute';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-50"
    >
      <HeroSection />
      <CareerTimeline />
      <MultimediaGallery />
      <WhyIServed />
      <MessageWall />
      <TimeCapsule />
      <AwardsSection />
      <FamilyTribute />
      <Footer />
    </motion.div>
  );
};

export default HomePage;