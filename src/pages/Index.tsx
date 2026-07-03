import React from 'react';
import Navigation from '@/components/Navigation';
import AIAssistant from '@/components/AIAssistant';
import StickyResume from '@/components/StickyResume';
import LoadingScreen from '@/components/LoadingScreen';
import PremiumBackground from '@/components/PremiumBackground';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ExperienceSection from '@/sections/ExperienceSection';
import SkillsSection from '@/sections/SkillsSection';
import ProjectsSection from '@/sections/ProjectsSection';
import AchievementsSection from '@/sections/AchievementsSection';
import CertificationsSection from '@/sections/CertificationsSection';
import ContactSection from '@/sections/ContactSection';
import FooterSection from '@/sections/FooterSection';
import { useLenis } from '@/hooks/useLenis';

const Index = () => {
  // Initialize Smooth Scrolling
  useLenis();

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary transition-colors duration-700">
      {/* Premium Animated Background */}
      <PremiumBackground />
      
      {/* Cinematic Intro Sequence */}
      <LoadingScreen />
      
      <Navigation />
      <AIAssistant />
      <StickyResume />
      
      <main className="relative z-10 overflow-hidden">
        <HeroSection />
        
        <div className="relative">
          {/* Section Divider/Transition */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
          
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <CertificationsSection />
          <ContactSection />
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Index;





