import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import Typewriter from 'typewriter-effect';
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
    { icon: <Mail className="w-5 h-5" />, href: "mailto:kommojupavankumarganesh@gmail.com", label: "Email" }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1nd5uTIW5BTanaLyojMsVWlTzK5vFXLL9';
    link.download = 'Pavan_Kumar_Ganesh_Resume.pdf';
    link.target = '_blank';
    link.click();
  };

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ y: y1, opacity }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
              </div>
              <span className="text-xs font-semibold text-primary">Open to New Opportunities</span>
            </motion.div>

            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight">
                <span className="block text-white/90 mb-3">Hello, I'm</span>
                <span className="gradient-text-cyan-blue block mb-3">Pavan Kumar</span>
                <span className="gradient-text-purple-cyan block">Ganesh</span>
              </h1>
            </div>

            <div className="text-xl md:text-2xl font-sans text-muted-foreground mb-12 h-12 flex items-center justify-center lg:justify-start">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer", 
                    "AI & Machine Learning Engineer", 
                    "Problem Solver",
                    "Tech Enthusiast"
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "text-primary font-bold",
                  cursorClassName: "text-primary animate-pulse"
                }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-14 max-w-xl mx-auto lg:mx-0"
            >
              Passionate about building scalable, user-friendly applications and intelligent systems that solve real-world problems.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-16">
              <motion.button
                onClick={handleViewProjects}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="premium-button flex items-center justify-center gap-3"
              >
                <span className="font-semibold">View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="glass-button flex items-center justify-center gap-3"
              >
                <span className="font-semibold">Download Resume</span>
                <Download className="w-4 h-4" />
              </motion.button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted-foreground hover:text-primary transition-all p-3 glass-card border-white/10 hover:border-primary/30 rounded-xl"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
            className="flex justify-center relative mt-12 lg:mt-0"
          >
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={2000}
              scale={1.02}
              className="relative z-10"
            >
              <div className="relative group">
                {/* Animated Glow Layers */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-all duration-1000 animate-gradient-xy"></div>
                
                {/* Main Glass Card */}
                <div className="relative glass-card p-3 rounded-[2rem] overflow-hidden backdrop-blur-xl border-white/10 group-hover:border-primary/40 transition-all duration-700">
                  <div className="w-[260px] h-[340px] sm:w-[320px] sm:h-[410px] md:w-[380px] md:h-[480px] lg:w-[400px] lg:h-[500px] overflow-hidden rounded-[1.7rem] relative">
                    {/* Inner Gradient Border */}
                    <div className="absolute inset-0 p-[2px] rounded-[1.7rem] bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50">
                      <div className="w-full h-full bg-background/80 rounded-[1.6rem] overflow-hidden relative">
                        <motion.img 
                          src={pavanPic} 
                          alt="Kommoju Pavan Kumar Ganesh"
                          className="w-full h-full object-cover object-[center_20%] transition-all duration-1000"
                          initial={{ scale: 1.15 }}
                          whileInView={{ scale: 1.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1 }}
                          loading="lazy"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary via-secondary to-transparent relative overflow-hidden rounded-full">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/3 bg-white rounded-full shadow-[0_0_10px_rgba(0,255,255,0.8)]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;