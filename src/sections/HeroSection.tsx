import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Download, MousePointer2, ChevronDown, Award } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import GSAP from 'gsap';
import Tilt from 'react-parallax-tilt';

import pavanPic from '@/assets/pavanpic.png';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Pavan23761A0530", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:kommojupavankumarganesh@gmail.com", label: "Email" },
    { icon: <Award className="w-5 h-5" />, href: "#", label: "LeetCode" }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1nd5uTIW5BTanaLyojMsVWlTzK5vFXLL9';
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-28 pb-16 md:pt-40 md:pb-32"
    >
      {/* 3D Glowing Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[140px] rounded-full opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center max-w-7xl mx-auto">
          
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
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-6 hover:border-primary/40 transition-colors cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-[9px] md:text-[10px] tracking-[0.3em] font-bold text-primary uppercase">NASA Space Apps Global Winner</span>
            </motion.div>

            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black leading-[1.1] tracking-tighter text-balance">
                <span className="block text-white/90 mb-1">KOMMOJU</span>
                <span className="gradient-text glow-text block mb-1">PAVAN KUMAR</span>
                <span className="gradient-text glow-text block">GANESH</span>
              </h1>
            </div>

            <div className="text-lg md:text-xl lg:text-2xl font-display text-muted-foreground mb-8 h-10 md:h-12 flex items-center justify-center lg:justify-start">
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
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-light"
            >
              Architecting adaptive intelligence systems and high-density digital ecosystems. 
              Merging the precision of a software engineer with the vision of an AI researcher.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
              <motion.button
                onClick={handleViewProjects}
                onMouseMove={handleMouseMoveMagnetic}
                onMouseLeave={handleMouseLeaveMagnetic}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="neon-button px-6 sm:px-8 py-3.5 sm:py-4 flex items-center justify-center gap-3 group relative overflow-hidden shadow-[0_0_20px_rgba(0,255,255,0.15)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 tracking-[0.2em] font-bold text-[10px] sm:text-xs uppercase">View Projects</span>
                <ExternalLink className="w-3.5 h-3.5 relative z-10 group-hover:rotate-45 transition-transform" />
              </motion.button>

              <motion.button
                onClick={handleDownloadResume}
                onMouseMove={handleMouseMoveMagnetic}
                onMouseLeave={handleMouseLeaveMagnetic}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-card px-6 sm:px-8 py-3.5 sm:py-4 flex items-center justify-center gap-3 hover:border-primary/50 transition-all group"
              >
                <span className="tracking-[0.2em] font-bold text-[10px] sm:text-xs uppercase">Download CV</span>
                <Download className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
              </motion.button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6">
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
            className="flex justify-center relative mt-8 lg:mt-0"
          >
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1500}
              className="relative z-10"
            >
              <div className="relative group">
                {/* Animated Glow Border */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-[2.5rem] md:rounded-[3rem] blur-xl opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
                
                <div className="relative glass-card p-2 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-primary/20 backdrop-blur-xl">
                  <div className="w-[250px] h-[320px] sm:w-[300px] sm:h-[380px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] relative bg-black/40 border-2 border-primary/10">
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
                    <div className="absolute bottom-4 left-4 right-4 p-3 md:p-4 glass-card backdrop-blur-xl border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[8px] tracking-[.3em] uppercase text-primary font-bold">Node Identity</span>
                        <div className="flex gap-1">
                          {[1,2,3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-primary animate-pulse" style={{animationDelay: `${i*0.2}s`}}></div>)}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <MousePointer2 className="w-3 h-3" />
                         </div>
                         <div>
                            <p className="text-[9px] md:text-[10px] font-display font-medium uppercase tracking-widest text-white/90">pavan.ai.core</p>
                            <p className="text-[7px] md:text-[8px] text-muted-foreground uppercase">Authorization Approved</p>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Satellite Elements */}
                <motion.div
                  animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 glass-card px-3 py-2 md:px-4 md:py-2 rounded-xl md:rounded-2xl backdrop-blur-3xl border-primary/20 flex items-center gap-2 md:gap-3 z-20 shadow-[0_0_30px_rgba(0,255,255,0.15)]"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <Award className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </div>
                  <div>
                    <p className="text-[7px] md:text-[8px] tracking-[0.2em] text-muted-foreground uppercase font-bold">Global Rank</p>
                    <p className="text-[10px] md:text-[12px] font-display font-black text-primary">NASA WINNER</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 glass-card px-3 py-2 md:px-4 md:py-2 rounded-xl md:rounded-2xl backdrop-blur-3xl border-accent/20 flex items-center gap-2 md:gap-3 z-20 shadow-[0_0_30px_rgba(255,0,255,0.15)]"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                    <Zap className="w-3.5 h-3.5 text-secondary fill-secondary md:w-4 md:h-4" />
                  </div>
                  <div>
                    <p className="text-[7px] md:text-[8px] tracking-[0.2em] text-muted-foreground uppercase font-bold">Performance</p>
                    <p className="text-[10px] md:text-[12px] font-display font-black text-accent">OPTIMIZED</p>
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

const Zap = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
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
