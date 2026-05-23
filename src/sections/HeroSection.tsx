import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Download, MousePointer2, ChevronDown, Award } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import GSAP from 'gsap';
import Tilt from 'react-parallax-tilt';

import pavanPic from '@/assets/pavanpic.png';
import resumePDF from '@/assets/resume.pdf';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Pavan23761A0530", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:kommojupavankumarganesh@gmail.com", label: "Email" },
    { icon: <Award size={20} />, href: "#", label: "LeetCode" }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Pavan_Kumar_Ganesh_Resume.pdf';
    link.target = '_blank';
    link.click();
  };

  const handleViewProjects = () => {
    window.open('https://github.com/Pavan23761A0530', '_blank', 'noopener,noreferrer');
  };

  const handleMouseMoveMagnetic = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    GSAP.to(currentTarget, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeaveMagnetic = (e: React.MouseEvent<HTMLButtonElement>) => {
    GSAP.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <section 
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 pb-20 md:pt-40 md:pb-32"
    >
      {/* 3D Glowing Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[140px] rounded-full opacity-40"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ y: y1, opacity }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-8 hover:border-primary/40 transition-colors cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-[10px] tracking-[0.3em] font-bold text-primary uppercase">NASA Space Apps Global Winner</span>
            </motion.div>

            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black leading-[1.1] tracking-tighter text-balance">
                <span className="block text-white/90 mb-1">KOMMOJU</span>
                <span className="gradient-text glow-text block mb-1">PAVAN KUMAR</span>
                <span className="gradient-text glow-text block">GANESH</span>
              </h1>
            </div>

            <div className="text-xl md:text-2xl font-display text-muted-foreground mb-10 h-12 flex items-center justify-center lg:justify-start">
              <Typewriter
                options={{
                  strings: [
                    'AI ENGINEER', 
                    'FULL STACK DEVELOPER', 
                    'INNOVATION ARCHITECT',
                    'CYBERSECURITY ENTHUSIAST'
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "text-primary glow-text font-bold",
                  cursorClassName: "text-primary animate-pulse"
                }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-light"
            >
              Architecting adaptive intelligence systems and high-density digital ecosystems. 
              Merging the precision of a software engineer with the vision of an AI researcher.
            </motion.p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-12">
              <motion.button
                onClick={handleViewProjects}
                onMouseMove={handleMouseMoveMagnetic}
                onMouseLeave={handleMouseLeaveMagnetic}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="neon-button px-6 sm:px-8 py-3.5 sm:py-4 flex items-center gap-3 group relative overflow-hidden min-w-[180px] sm:min-w-[200px] justify-center shadow-[0_0_20px_rgba(0,255,255,0.15)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 tracking-[0.2em] font-bold text-[10px] sm:text-xs uppercase">View Projects</span>
                <ExternalLink size={14} className="relative z-10 group-hover:rotate-45 transition-transform" />
              </motion.button>

              <motion.button
                onClick={handleDownloadResume}
                onMouseMove={handleMouseMoveMagnetic}
                onMouseLeave={handleMouseLeaveMagnetic}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-card px-6 sm:px-8 py-3.5 sm:py-4 flex items-center gap-3 hover:border-primary/50 transition-all group min-w-[180px] sm:min-w-[200px] justify-center"
              >
                <span className="tracking-[0.2em] font-bold text-[10px] sm:text-xs uppercase">Download CV</span>
                <Download size={14} className="group-hover:translate-y-1 transition-transform" />
              </motion.button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-8">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: "hsl(var(--primary))" }}
                  className="text-muted-foreground transition-colors p-2 hover:bg-primary/10 rounded-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Profile UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center relative mt-12 lg:mt-0"
          >
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1500}
              className="relative z-10"
            >
              <div className="relative group">
                {/* Animated Glow Border */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-[3rem] blur-xl opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
                
                <div className="relative glass-card p-2 rounded-[3rem] overflow-hidden border-primary/20 backdrop-blur-2xl">
                  <div className="w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px] overflow-hidden rounded-[2.5rem] relative bg-black/40 border-2 border-primary/10">
                    <motion.img 
                      src={pavanPic} 
                      alt="Kommoju Pavan Kumar Ganesh"
                      className="w-full h-full object-cover object-[center_20%] transition-all duration-1000"
                      initial={{ scale: 1.1, filter: 'grayscale(100%)' }}
                      whileInView={{ scale: 1.05, filter: 'grayscale(0%)' }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
                    
                    {/* Floating HUD Information Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 glass-card backdrop-blur-2xl border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[8px] tracking-[.3em] uppercase text-primary font-bold">Node Identity</span>
                        <div className="flex gap-1">
                          {[1,2,3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-primary animate-pulse" style={{animationDelay: `${i*0.2}s`}}></div>)}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <MousePointer2 size={12} />
                         </div>
                         <div>
                            <p className="text-[10px] font-display font-medium uppercase tracking-widest text-white/90">pavan.ai.core</p>
                            <p className="text-[8px] text-muted-foreground uppercase">Authorization Approved</p>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Satellite Elements */}
                <motion.div
                  animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 glass-card px-4 py-2 rounded-2xl backdrop-blur-3xl border-primary/20 flex items-center gap-3 z-20 shadow-[0_0_30px_rgba(0,255,255,0.15)]"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <Award size={18} />
                  </div>
                  <div>
                    <p className="text-[8px] tracking-[0.2em] text-muted-foreground uppercase font-bold">Global Rank</p>
                    <p className="text-[12px] font-display font-black text-primary">NASA WINNER</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 glass-card px-4 py-2 rounded-2xl backdrop-blur-3xl border-accent/20 flex items-center gap-3 z-20 shadow-[0_0_30px_rgba(255,0,255,0.15)]"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                    <Zap className="text-secondary fill-secondary" size={18} />
                  </div>
                  <div>
                    <p className="text-[8px] tracking-[0.2em] text-muted-foreground uppercase font-bold">Performance</p>
                    <p className="text-[12px] font-display font-black text-accent">OPTIMIZED</p>
                  </div>
                </motion.div>
              </div>
            </Tilt>
          </motion.div>

        </div>
      </div>


      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[8px] tracking-[0.5em] uppercase text-muted-foreground group-hover:text-primary transition-colors">Initiate Exploration</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/3 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
};

const Zap = ({ className, size }: { className?: string; size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export default HeroSection;
