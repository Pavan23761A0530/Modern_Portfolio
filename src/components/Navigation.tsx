import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X, 
  Layout, 
  Zap, 
  User, 
  FileText, 
  ChevronRight,
  Briefcase,
  Trophy,
  Award
} from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Zap },
  { name: 'Projects', href: '#projects', icon: Layout },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Achievements', href: '#achievements', icon: Trophy },
  { name: 'Certifications', href: '#certifications', icon: Award },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('About');

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      // Update active tab
      const section = href.substring(1);
      setActiveTab(section.charAt(0).toUpperCase() + section.slice(1));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section logic
      const sections = ['about', 'skills', 'projects', 'achievements', 'certifications', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`flex items-center justify-between transition-all duration-300 rounded-xl px-4 md:px-6 backdrop-blur-xl border ${
          isScrolled 
            ? 'bg-black/70 border-white/10 py-3 md:py-4 shadow-xl' 
            : 'bg-transparent border-transparent py-4 md:py-6'
        }`}>
          {/* Brand/Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-xl font-display font-bold tracking-tight text-white">
              Pavan <span className="text-primary">Portfolio</span>
            </span>
          </motion.div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
             {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-4 md:px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === item.name 
                      ? 'text-primary bg-primary/10' 
                      : 'text-muted-foreground hover:text-white hover:bg-white/5'
                  }`}
                >
                   {item.name}
                </motion.a>
             ))}
          </div>

          {/* Utility Buttons */}
          <div className="hidden lg:flex items-center gap-3">
             <motion.a
                href="https://drive.google.com/file/d/17sKy8sG4mBI1Dlb3tRxQFSKIMpBlIRZg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:border-primary/30 transition-all duration-300 flex items-center gap-2"
             >
                <FileText className="w-4 h-4" />
                Resume
             </motion.a>
             
             <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2.5 rounded-lg bg-primary text-black font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
             >
                <Briefcase className="w-4 h-4" />
                Hire Me
             </motion.a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
             <motion.button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-all"
             >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden mt-3 p-6 glass-card border border-white/10 rounded-xl flex flex-col gap-3 shadow-xl backdrop-blur-xl"
            >
               {navItems.map((item) => (
                 <motion.a 
                   key={item.name}
                   href={item.href}
                   onClick={(e) => handleNavClick(e, item.href)}
                   whileHover={{ x: 5 }}
                   className="flex items-center justify-between group py-3"
                 >
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all">
                        <item.icon className="w-5 h-5" />
                       </div>
                       <span className={`text-base font-medium ${activeTab === item.name ? 'text-primary' : 'text-white'}`}>{item.name}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all" />
                 </motion.a>
               ))}
               <div className="h-[1px] bg-white/10 my-2"></div>
               <div className="flex flex-col gap-3">
                 <motion.a 
                   href="https://drive.google.com/file/d/17sKy8sG4mBI1Dlb3tRxQFSKIMpBlIRZg/view?usp=sharing"
                   target="_blank"
                   rel="noopener noreferrer"
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium flex items-center justify-center gap-2"
                 >
                    <FileText className="w-5 h-5" />
                    Download Resume
                 </motion.a>
                 <motion.a 
                   href="#contact"
                   onClick={(e) => handleNavClick(e, '#contact')}
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   className="w-full py-3 rounded-lg bg-primary text-black font-medium flex items-center justify-center gap-2"
                 >
                    <Briefcase className="w-5 h-5" />
                    Hire Me
                 </motion.a>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
