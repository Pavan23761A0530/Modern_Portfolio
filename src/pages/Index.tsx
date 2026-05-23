import React from 'react';
import Scene3D from '@/components/Scene3D';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import AIAssistant from '@/components/AIAssistant';
import StickyResume from '@/components/StickyResume';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/sections/HeroSection';
import RecruiterSection from '@/sections/RecruiterSection';
import AboutSection from '@/sections/AboutSection';
import GithubDashboard from '@/sections/GithubDashboard';
import ExperienceSection from '@/sections/ExperienceSection';
import SkillsSection from '@/sections/SkillsSection';
import ProjectsSection from '@/sections/ProjectsSection';
import AchievementsSection from '@/sections/AchievementsSection';
import CertificationsSection from '@/sections/CertificationsSection';
import ResumeSection from '@/sections/ResumeSection';
import ContactSection from '@/sections/ContactSection';
import FooterSection from '@/sections/FooterSection';
import { useLenis } from '@/hooks/useLenis';

const Index = () => {
  // Initialize Smooth Scrolling
  useLenis();

  return (
    <div className="relative min-h-screen bg-transparent text-foreground selection:bg-primary/30 selection:text-primary transition-colors duration-700">
      {/* Cinematic Intro Sequence */}
      <LoadingScreen />
      
      {/* Cinematic Background (Temporarily disabled for environment compatibility) */}
      {/* <Scene3D /> */}
      
      {/* High-end Interactions */}
      <CustomCursor />
      <Navigation />
      <AIAssistant />
      <StickyResume />
      
      <main className="relative z-10 overflow-hidden">
        <HeroSection />
        
        <div className="relative">
          {/* Section Divider/Transition */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
          
          <RecruiterSection />
          <AboutSection />
          <GithubDashboard />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <CertificationsSection />
          <ResumeSection />
          <ContactSection />
        </div>
      </main>
      
      <FooterSection />
      
      {/* Global Noise/Grain Overlay for Cinematic Texture */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default Index;





