import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Maximize2, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Search, FileCheck, Award, Target } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const ResumeSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const summaryUrl = 'https://drive.google.com/file/d/1nd5uTIW5BTanaLyojMsVWlTzK5vFXLL9/view?usp=drive_link';
  
  const getEmbedUrl = (url: string) => {
    return url.replace('/view?usp=sharing', '/preview').replace('/view?usp=drive_link', '/preview');
  };

  const handleDownload = () => {
    window.open(summaryUrl, '_blank');
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, closeModal]);

  const resumeStats = [
    { label: "Experience", value: "Freshman", icon: Target },
    { label: "Education", value: "B.Tech CSE", icon: Award },
    { label: "Awards", value: "NASA Winner", icon: Search },
  ];

  return (
    <section id="resume" className="section-padding relative bg-black/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h3 className="text-primary font-display tracking-[0.5em] text-[10px] mb-4 uppercase">Credentials.sys</h3>
          <h2 className="text-4xl md:text-6xl font-display font-black leading-tight uppercase">EXPERTISE <span className="gradient-text">SHOWCASE</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-light mt-6 italic">
             Detailed documentation of academic excellence, project leadership, and technical mastery.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Resume Info & Stats */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-6"
            >
               <h3 className="text-2xl font-display font-bold flex items-center gap-4">
                  <span className="w-2 h-8 bg-primary rounded-full"></span>
                  Professional Summary
               </h3>
               <p className="text-muted-foreground leading-relaxed font-light text-lg">
                  My resume outlines a continuous journey of <span className="text-primary">high-performance engineering</span>. 
                  From winning global hackathons to architecting deep learning models, every achievement is recorded with precision.
               </p>
               
               <div className="grid grid-cols-1 gap-4 pt-6">
                 {resumeStats.map((stat, i) => (
                   <div key={i} className="glass-card p-6 flex items-center gap-6 border-white/5 hover:border-primary/30 transition-all group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <stat.icon className="w-[22px] h-[22px]" />
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-lg font-display font-bold uppercase">{stat.value}</p>
                      </div>
                   </div>
                 ))}
               </div>

               <div className="pt-8">
                  <button 
                    onClick={handleDownload}
                    className="neon-button w-full py-5 flex items-center justify-center gap-4 group relative overflow-hidden"
                  >
                    <span className="font-display tracking-[0.4em] uppercase text-xs relative z-10 group-hover:text-black transition-colors">Download Official PDF</span>
                    <Download className="w-[18px] h-[18px] relative z-10 group-hover:translate-y-1 transition-transform" />
                  </button>
               </div>
            </motion.div>
          </div>

          {/* Right: Resume Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
               <div className="glass-card p-4 border-white/10 relative group cursor-pointer h-[500px] sm:h-[600px] overflow-hidden" onClick={() => setIsModalOpen(true)}>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  
                  {/* Embedded Reading Experience - Iframe Preview */}
                  <div className="w-full h-full rounded-xl overflow-hidden bg-white/5 border border-white/5 opacity-60 group-hover:opacity-40 transition-opacity">
                     <iframe
                       src={getEmbedUrl(summaryUrl)}
                       className="w-full h-full border-none pointer-events-none scale-110 origin-top"
                       scrolling="no"
                     />
                  </div>

                  {/* Interactive HUD Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-4 group-hover:scale-110 transition-transform">
                     <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-xl flex items-center justify-center text-primary border border-primary/40 group-hover:bg-primary group-hover:text-black transition-all shadow-[0_0_30px_rgba(0,255,255,0.3)]">
                        <Maximize2 className="w-6 h-6" />
                     </div>
                     <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-primary group-hover:text-white transition-colors">Enter Immersive Reader</span>
                  </div>

                  <div className="absolute bottom-10 left-10 right-10 z-30">
                    <div className="flex items-center gap-4 text-primary bg-black/60 backdrop-blur-xl p-4 rounded-xl border border-primary/20">
                       <FileCheck className="w-5 h-5" />
                       <div className="text-left">
                          <p className="text-[10px] font-bold tracking-widest uppercase">PROFESSIONAL_SUMMARY_DETAILED.pdf</p>
                          <p className="text-[8px] text-muted-foreground uppercase tracking-wider">Certified Security Encryption Enabled</p>
                       </div>
                    </div>
                  </div>
               </div>
            </Tilt>
          </motion.div>
        </div>
      </div>

      {/* Premium Resume Modal - Immersive Reader */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] bg-black/98 backdrop-blur-3xl flex flex-col"
            onClick={closeModal}
          >


            {/* Modal Header - Glass HUD */}
            <div className="relative z-[510] flex items-center justify-between px-6 py-4 md:px-10 md:py-6 border-b border-white/5 bg-black/20 backdrop-blur-xl" onClick={(e) => e.stopPropagation()}>
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                     <FileText className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                     <h4 className="text-sm md:text-lg font-display font-bold uppercase tracking-widest">Immersive Reader Mode</h4>
                     <p className="hidden sm:block text-[8px] tracking-[0.3em] text-muted-foreground uppercase font-bold">Secure Protocol // Continuous Vertical Stream</p>
                  </div>
               </div>

               <div className="flex items-center gap-4 mr-20">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload();
                    }}
                    className="hidden md:flex items-center gap-3 px-6 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary font-display font-black text-[9px] tracking-widest uppercase hover:bg-primary hover:text-black transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Protocol
                  </button>
               </div>
            </div>

            {/* Immersive Viewer Area - Vertical Continuous Flow */}
            <div className="flex-grow overflow-y-auto relative bg-black/40" onClick={(e) => e.stopPropagation()}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="w-full h-full flex justify-center min-h-[600px]"
                >
                  <iframe
                    src={getEmbedUrl(summaryUrl)}
                    className="w-full h-full min-h-[600px] max-w-5xl border-none shadow-[0_0_100px_rgba(0,0,0,0.8)]"
                    allow="autoplay"
                    title="Professional Summary Viewer"
                  />
                </motion.div>
                
                {/* Scrolling Instruction HUD */}
                <div className="absolute bottom-8 right-8 pointer-events-none hidden lg:flex flex-col items-end gap-2 opacity-40">
                   <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
                   <span className="text-[7px] tracking-[0.4em] uppercase font-bold text-primary">Scroll to Explore</span>
                </div>
            </div>
            
            {/* Mobile Action Bar */}
            <div className="md:hidden p-4 border-t border-white/5 bg-black/20 backdrop-blur-xl" onClick={(e) => e.stopPropagation()}>
               <button 
                 onClick={handleDownload}
                 className="w-full py-4 rounded-xl bg-primary text-black font-display font-black text-[10px] tracking-widest uppercase flex items-center justify-center gap-3"
               >
                 <Download className="w-4 h-4" />
                 Download PDF
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};


export default ResumeSection;
