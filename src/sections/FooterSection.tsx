import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Cpu, ChevronUp, Star, Globe, ShieldCheck } from 'lucide-react';

const FooterSection: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    }, 10000); // Update every 10 seconds

    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
     window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   const currentYear = new Date().getFullYear();

   const navLinks = [
    { name: "Identity", href: "#about" },
    { name: "Arsenal", href: "#skills" },
    { name: "Ecosystems", href: "#projects" },
    { name: "Uplink", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <Github className="w-[18px] h-[18px]" />, href: "https://github.com/Pavan23761A0530", label: "GitHub" },
    { icon: <Linkedin className="w-[18px] h-[18px]" />, href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
    { icon: <Mail className="w-[18px] h-[18px]" />, href: "mailto:kommojupavankumarganesh@gmail.com", label: "Email" }
  ];

  return (
    <footer className="relative pt-32 pb-16 bg-background overflow-hidden">
      {/* Cinematic Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start mb-24">
          
          {/* Logo & Status */}
          <div className="md:col-span-4 space-y-8">
            <motion.div 
               whileHover={{ scale: 1.05 }}
               className="flex items-center gap-4 cursor-pointer"
               onClick={scrollToTop}
            >
               <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/40 shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                  <Cpu className="w-6 h-6" />
               </div>
               <div>
                  <h2 className="text-2xl font-display font-black text-white tracking-tighter uppercase leading-none">PKG.SYS</h2>
                  <p className="text-[9px] tracking-[0.4em] font-black text-primary uppercase mt-1">V2.0 Neural Node</p>
               </div>
            </motion.div>

            <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-sm">
               Engineering high-performance intelligence ecosystems and production-grade full-stack architectures. Defining the future of AI-driven software.
            </p>

            <div className="flex items-center gap-6">
               <div className="flex flex-col">
                  <span className="text-[7px] tracking-[0.3em] font-black text-muted-foreground uppercase mb-1">Local Time</span>
                  <span className="text-xs font-mono text-white">{currentTime} IST</span>
               </div>
               <div className="w-[1px] h-8 bg-white/10"></div>
               <div className="flex flex-col">
                  <span className="text-[7px] tracking-[0.3em] font-black text-muted-foreground uppercase mb-1">Node Status</span>
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                     <span className="text-xs font-mono text-white">OPERATIONAL</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-2 space-y-8">
             <h4 className="text-[10px] tracking-[0.4em] font-black text-white uppercase">Navigation</h4>
             <ul className="space-y-4">
                {navLinks.map((link) => (
                   <li key={link.name}>
                      <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest font-medium text-[10px]">
                         {link.name}
                      </a>
                   </li>
                ))}
             </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-2 space-y-8">
             <h4 className="text-[10px] tracking-[0.4em] font-black text-white uppercase">Uplink Protocols</h4>
             <ul className="space-y-4">
                {socialLinks.map((link) => (
                   <li key={link.label}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-3 uppercase tracking-widest font-medium text-[10px]">
                         {link.icon}
                         {link.label}
                      </a>
                   </li>
                ))}
             </ul>
          </div>

          {/* Recognition HUD */}
          <div className="md:col-span-4 p-8 glass-card border-white/5 bg-white/[0.02] relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Globe className="w-[100px] h-[100px] text-primary" />
             </div>
             <h4 className="text-[10px] tracking-[0.4em] font-black text-primary uppercase mb-6 flex items-center gap-2">
                <Star className="w-3 h-3 fill-primary" />
                Elite Showcase
             </h4>
             <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6">
                Recognized globally for innovation and engineering excellence in high-stakes competition.
             </p>
             <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[9px] font-black tracking-widest uppercase">NASA GLOBAL WINNER 2024</span>
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-[9px] tracking-widest text-muted-foreground font-mono uppercase">
              © {currentYear} PAVAN KUMAR GANESH. ALL SYSTEM DATA PROTECTED BY AES-256.
           </p>

           <button 
             onClick={scrollToTop}
             className="group flex items-center gap-3 px-6 py-3 rounded-full glass-card border-white/10 hover:border-primary/40 transition-all"
           >
              <span className="text-[9px] tracking-[0.4em] font-black text-muted-foreground group-hover:text-primary transition-colors uppercase">Return to Peak</span>
              <ChevronUp className="w-4 h-4 text-primary group-hover:-translate-y-1 transition-transform" />
           </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
