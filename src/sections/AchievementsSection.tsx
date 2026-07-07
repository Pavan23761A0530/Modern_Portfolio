import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Eye, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import useEmblaCarousel from 'embla-carousel-react';
import { portfolioData } from '@/lib/portfolioData';

const AchievementsSection: React.FC = () => {
  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    align: "start",
    skipSnaps: false,
    duration: 900, // 900ms transition (800-1000ms range)
    inViewThreshold: 0.5
  });

  const startAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    autoplayTimerRef.current = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollPrev(); // Left → Right autoplay
      }
    }, 2800); // 2.8 second interval (2.5-3s range)
  }, [emblaApi]);

  const resetAutoplay = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      startAutoplay();
    }, 3000); // Resume after 3 seconds
  }, [startAutoplay]);

  // Handle drag events
  const onPointerDown = useCallback(() => {
    resetAutoplay();
  }, [resetAutoplay]);

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

  // Start autoplay on mount and clean up on unmount
  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [startAutoplay]);

  const getImageForAchievement = (id: string) => {
    switch (id) {
      case 'nasa':
        return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200';
      case 'google-ambassador':
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCzosa9g9Q8HZ8XK5xNjKWAAypaD6BKxK6hWprsXpskwBwz_8Z_Uxc54&s=10';
      case 'aicte':
        return 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200';
      case 'technovision':
        return 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200';
      case 'govt-appreciation':
        return 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200';
      default:
        return 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200';
    }
  };

  return (
    <section id="achievements" className="section-padding relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h3 className="text-primary font-display tracking-[0.5em] text-[10px] mb-4 uppercase">Achievements</h3>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold leading-tight tracking-tighter">My <span className="gradient-text-cyan-blue">Achievements</span></h2>
        </motion.div>

        {/* Embla Carousel */}
        <div className="relative">
          <div 
            ref={emblaRef}
            className="overflow-hidden"
            onPointerDown={onPointerDown}
          >
            <div className="flex">
              {portfolioData.achievements.map((item, index) => {
                const image = getImageForAchievement(item.id);

                return (
                  <div key={item.id} className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] pl-0 pr-4 sm:pr-6 lg:pr-8 last:pr-0">
                    <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={2000} className="h-full">
                      <motion.div
                        whileHover={{
                          y: -8,
                          scale: 1.03,
                          boxShadow: '0 0 50px rgba(34,211,238,0.3)'
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 20
                        }}
                        className="glass-card rounded-[20px] flex flex-col group border-white/10 bg-black/30 backdrop-blur-xl overflow-hidden h-full relative"
                      >
                        {/* Accent Line at Top */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />
                        
                        {/* Image Section */}
                        <div className="relative h-[220px] overflow-hidden rounded-t-[20px]">
                           <motion.img 
                            src={image} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                            loading="lazy"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.6 }}
                          />
                        </div>

                        {/* Content Section */}
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="mb-4">
                            <span className="text-[10px] tracking-[0.3em] font-bold text-primary uppercase">{item.category}</span>
                          </div>
                          
                          <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors leading-tight mb-4">
                            {item.title}
                          </h3>
                          
                          <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                            {item.description}
                          </p>

                          <div className="flex items-center gap-2 mb-6">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-xs font-medium text-white">{item.metric}</span>
                          </div>

                          {item.credentials && (
                            <motion.button
                              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34,211,238,0.4)' }}
                              whileTap={{ scale: 0.97 }}
                              onClick={() => openGallery(item.credentials!)}
                              className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm transition-all flex items-center justify-between gap-3 group"
                            >
                              <div className="flex items-center gap-2">
                                <Eye className="w-5 h-5" />
                                View Credentials
                              </div>
                              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                          )}
                        </div>
                      </motion.div>
                    </Tilt>
                  </div>
                );
              })}
            </div>
          </div>
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

export default AchievementsSection;
