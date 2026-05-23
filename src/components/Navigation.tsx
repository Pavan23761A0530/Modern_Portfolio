import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Cpu, 
  Menu, 
  X, 
  Layout, 
  Zap, 
  User, 
  FileText, 
  Sparkles, 
  ChevronRight,
  Sun,
  Moon,
  Briefcase,
  Download
} from 'lucide-react';
import resumePDF from '@/assets/resume.pdf';

interface NavItem {
  name: string;
  href: string;
  icon: any;
}

const navItems: NavItem[] = [
  { name: 'IDENTITY', href: '#about', icon: User },
  { name: 'ARSENAL', href: '#skills', icon: Zap },
  { name: 'ECOSYSTEMS', href: '#projects', icon: Layout },
  { name: 'TIMELINE', href: '#journey', icon: Cpu },
  { name: 'UPLINK', href: '#contact', icon: Mail },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Pavan23761A0530", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:kommojupavankumarganesh@gmail.com", label: "Email" }
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState('HERO');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section logic
      const sections = ['about', 'skills', 'projects', 'journey', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveTab(section.toUpperCase());
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('light');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-700 rounded-3xl px-6 backdrop-blur-3xl border ${
          isScrolled 
            ? 'bg-black/60 border-white/10 h-16 shadow-[0_0_40px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border-transparent h-20'
        }`}>
          {/* Brand/Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30 group-hover:bg-primary group-hover:text-black transition-all shadow-[0_0_15px_rgba(0,255,255,0.2)] group-hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]">
               <Cpu size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-display font-black tracking-widest text-white uppercase leading-none">PKG.SYS</span>
              <span className="text-[7px] tracking-[0.4em] text-primary font-bold uppercase mt-1 opacity-60 group-hover:opacity-100 transition-opacity">V2.0 Neural</span>
            </div>
          </motion.div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
             {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className={`px-4 py-2 rounded-xl text-[9px] tracking-[0.3em] font-black uppercase transition-all flex items-center gap-2 group relative overflow-hidden ${
                    activeTab === item.name 
                      ? 'text-primary bg-primary/10 border border-primary/20' 
                      : 'text-muted-foreground hover:text-white'
                  }`}
                >
                   <item.icon size={12} className={activeTab === item.name ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'} />
                   {item.name}
                   {activeTab === item.name && (
                      <motion.div 
                        layoutId="nav-active"
                        className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-primary blur-[2px]"
                      />
                   )}
                </motion.a>
             ))}
          </div>

          {/* Utility Buttons */}
          <div className="hidden lg:flex items-center gap-4">
             <motion.button
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               onClick={toggleTheme}
               className="p-3 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
             >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
             </motion.button>

             <motion.a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-display font-black text-[9px] tracking-[0.2em] uppercase hover:border-primary/50 transition-all flex items-center gap-2"
             >
                <FileText size={14} className="text-primary" />
                Resume
             </motion.a>
             
             <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-xl bg-primary text-black font-display font-black text-[9px] tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-all flex items-center gap-2"
             >
                <Briefcase size={14} />
                Recruiter
             </motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
             <button onClick={toggleTheme} className="text-primary">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
             </button>
             <button 
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className="p-2 text-primary"
             >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
             </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="lg:hidden mt-4 p-8 glass-card border border-white/10 rounded-[2.5rem] flex flex-col gap-6 shadow-2xl backdrop-blur-3xl"
            >
               {navItems.map((item) => (
                 <a 
                   key={item.name}
                   href={item.href}
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="flex items-center justify-between group"
                 >
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all">
                          <item.icon size={18} />
                       </div>
                       <span className="text-sm font-display font-black tracking-widest uppercase">{item.name}</span>
                    </div>
                    <ChevronRight size={18} className="text-muted-foreground group-hover:text-primary transition-all" />
                 </a>
               ))}
               <div className="h-[1px] bg-white/10 my-2"></div>
               <a 
                 href={resumePDF}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full py-5 rounded-2xl bg-primary text-black font-display font-black tracking-widest uppercase text-sm shadow-xl items-center flex justify-center gap-3"
               >
                  <FileText size={20} />
                  RESUME.PDF
               </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;