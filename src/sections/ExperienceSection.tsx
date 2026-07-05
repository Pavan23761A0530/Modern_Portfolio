import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, Eye, ChevronLeft, ChevronRight, FileText, Award } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '@/lib/portfolioData';

const ExperienceSection: React.FC = () => {
  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (urls: string[]) => {
    setActiveGallery(urls);
    setCurrentImageIndex(0);
  };

  const closeGallery = useCallback(() => {
    setActiveGallery(null);
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeGallery) {
      setCurrentImageIndex((prev) => (prev + 1) % activeGallery.length);
    }
  }, [activeGallery]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeGallery) {
      setCurrentImageIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);
    }
  }, [activeGallery]);

  const getEmbedUrl = (url: string) => {
    if (url.includes('drive.google.com')) {
      return url.replace('/view?usp=sharing', '/preview').replace('/view', '/preview');
    }
    return url;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeGallery) {
        closeGallery();
      }
      if (e.key === 'ArrowRight' && activeGallery) {
        nextImage();
      }
      if (e.key === 'ArrowLeft' && activeGallery) {
        prevImage();
      }
    };

    if (activeGallery) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeGallery, closeGallery, nextImage, prevImage]);

  // Helper to get a unique icon per company
  const getCompanyIcon = (company: string) => {
    if (company.includes('Yuganta')) return Briefcase;
    if (company.includes('IIT')) return Award;
    if (company.includes('Salesforce')) return FileText;
    return Briefcase;
  };

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-background">
      {/* Background Grids */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h3 className="text-primary font-display tracking-[0.5em] text-[10px] mb-4 uppercase">Experience</h3>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold leading-tight tracking-tighter">Professional <span className="gradient-text-cyan-blue">Experience</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-sm md:text-base font-light leading-relaxed">
            Professional internships and industry experience where I contributed to real-world software development, AI research, cloud technologies, and scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {portfolioData.experience.map((item, index) => {
            const IconComponent = getCompanyIcon(item.company);
            return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={2000} className="h-full">
                <div className="glass-card rounded-[20px] flex flex-col group border-white/10 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-700 bg-black/30 backdrop-blur-xl overflow-hidden h-full relative">
                  {/* Accent Line at Top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />
                  
                  {/* Header */}
                  <div className="p-8 flex flex-col border-b border-white/5">
                    <div className="flex items-center gap-5 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary border border-primary/30 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors leading-tight">
                          {item.role}
                        </h3>
                        <p className="text-base text-white/80 font-medium mt-1">{item.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-xs text-white/70 font-medium">{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-xs text-white/70 font-medium">{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-xs tracking-[0.3em] font-bold text-primary uppercase mb-4">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-white/5 to-white/10 border border-white/10 text-xs font-medium text-white/80 hover:border-primary/30 hover:text-primary hover:from-primary/10 hover:to-secondary/10 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Certificate Button */}
                    {item.credentials && (
                      <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34,211,238,0.4)' }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => openGallery(item.credentials!)}
                        className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm transition-all flex items-center justify-between gap-3 group"
                      >
                        <div className="flex items-center gap-2">
                          <Eye className="w-5 h-5" />
                          View Certificate
                        </div>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    )}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          );})}
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {activeGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGallery}
            className="fixed inset-0 z-[500] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl aspect-[4/3] md:aspect-video glass-card border-white/10 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-0 flex items-center justify-center p-8 md:p-16">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full h-full relative"
                  >
                    <iframe
                      src={getEmbedUrl(activeGallery[currentImageIndex])}
                      className="w-full h-full rounded-2xl border-none bg-white/5"
                      allow="autoplay"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              {activeGallery.length > 1 && (
                <>
                  <div className="absolute inset-y-0 left-4 flex items-center">
                    <button
                      onClick={prevImage}
                      className="w-12 h-12 rounded-full glass-card border-white/10 flex items-center justify-center hover:border-primary/50 text-white/50 hover:text-primary transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-4 flex items-center">
                    <button
                      onClick={nextImage}
                      className="w-12 h-12 rounded-full glass-card border-white/10 flex items-center justify-center hover:border-primary/50 text-white/50 hover:text-primary transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Counter */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full glass-card border-white/10 text-[10px] font-display font-bold tracking-[0.3em] text-primary uppercase">
                    {currentImageIndex + 1} / {activeGallery.length}
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;
