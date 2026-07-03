import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Star, Target, Globe, Rocket, Zap, TrendingUp, Medal, ChevronLeft, ChevronRight, ExternalLink, Eye, Shield, Search } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

interface Achievement {
  id: string;
  title: string;
  category: string;
  description: string;
  metric: string;
  icon: React.ElementType;
  color: string;
  glowColor: string;
  image: string;
  credentials: string[];
}

const achievements: Achievement[] = [
  {
    id: "yugantaai",
    title: "Full Stack Development Intern",
    category: "Professional Experience",
    description: "Successfully completed a Full Stack Development Internship at YugantaAI Pvt. Ltd., where I developed and maintained full-stack web applications using the MERN Stack. Contributed to both frontend and backend development while collaborating with the development team to build scalable, responsive, and user-friendly solutions.",
    metric: "May 2026 – July 2026",
    icon: Rocket,
    color: "from-cyan-600/20 to-blue-600/20",
    glowColor: "rgba(6, 182, 212, 0.5)",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200",
    credentials: [
      "https://drive.google.com/file/d/1YGHxynwlJdXpCJ1HcUN0r2mIKWS_i5ko/view?usp=sharing"
    ]
  },
  {
    id: "nasa",
    title: "NASA Space Apps Global Winner",
    category: "Global Recognition",
    description: "Achieved the highest honors in the world's largest hackathon, solving complex challenges using NASA's strategic data assets.",
    metric: "Rank: #1 Global",
    icon: Globe,
    color: "from-blue-600/20 to-indigo-600/20",
    glowColor: "rgba(59, 130, 246, 0.5)",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    credentials: [
      "https://drive.google.com/file/d/1rzNUGcWdQSwSzvi--KaXrLNNWrWN8Jfw/view?usp=sharing",
      "https://drive.google.com/file/d/1E7Px4hPvEkJoH2Iga4J1QFs41i-0ilmm/view?usp=sharing",
      "https://drive.google.com/file/d/1U8fyO9aSnFL53Ijl_APzl7jm85ShqpnN/view?usp=sharing",
      "https://drive.google.com/file/d/1bBJ5hM1q4b-NZ3ziq3C-1-mOQNPASSxO/view?usp=sharing"
    ]
  },
  {
    id: "aicte",
    title: "AICTE YUTI Innovation Finalist",
    category: "National Scale",
    description: "Selected among top national innovators for building high-impact technological solutions for social governance.",
    metric: "Selected: Top 1%",
    icon: Target,
    color: "from-orange-600/20 to-red-600/20",
    glowColor: "rgba(249, 115, 22, 0.5)",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    credentials: [
      "https://drive.google.com/file/d/1d_mGSEyz1p0s9lKVW2gi786O0bhiCcvs/view?usp=sharing",
      "https://drive.google.com/file/d/1J92t-_x-alDebWRMFdx27pNO9W6_g3ca/view?usp=sharing",
      "https://drive.google.com/file/d/1KRphc26c4rAwDpXNunmNHjXiU2sLLOkg/view?usp=sharing"
    ]
  },
  {
    id: "technovision",
    title: "Technovision Poster Presentation",
    category: "Academic Excellence",
    description: "Awarded for exceptional technical communication and research synthesis in distributed computing architectures.",
    metric: "Achievement: Gold",
    icon: Trophy,
    color: "from-yellow-600/20 to-yellow-400/10",
    glowColor: "rgba(234, 179, 8, 0.5)",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200",
    credentials: [
      "https://drive.google.com/file/d/1XTWb-PgOujGAr8dB1YUksRmyIneC2XFG/view?usp=sharing",
      "https://drive.google.com/file/d/1BXyqiFONgPq3-4vwd2wmh2Qo1LLz-vPb/view?usp=sharing"
    ]
  },
  {
    id: "govt-appreciation",
    title: "Govt Appreciation – AP Sachivalayam",
    category: "Social Impact",
    description: "Honored for community problem-solving at Andhra Pradesh Sachivalayam through technical application development and public service support.",
    metric: "Impact: Governmental",
    icon: Shield,
    color: "from-emerald-600/20 to-teal-600/20",
    glowColor: "rgba(16, 185, 129, 0.5)",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    credentials: [
      "https://drive.google.com/file/d/1kbydXpjtVrjBeCmtPN3N--vd6wWUDc-b/view?usp=sharing"
    ]
  }
];


const AchievementsSection: React.FC = () => {
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
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold leading-tight tracking-tighter">My <span className="gradient-text-emerald-cyan">Achievements</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={2000} className="h-full">
                <div className={`glass-card p-1 pb-1 flex flex-col md:flex-row group border-white/5 hover:border-primary/40 transition-all duration-700 bg-background overflow-hidden h-full`}>
                  
                  {/* Visual Side */}
                  <div className={`w-full md:w-56 aspect-square md:aspect-auto bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden shrink-0`}>
                     {item.image && (
                      <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" />
                     )}
                     <item.icon className="w-[60px] h-[60px] relative z-10 text-white transition-transform duration-700 group-hover:scale-110" />
                  </div>

                  {/* Content Side */}
                  <div className="p-8 md:p-10 flex flex-col flex-grow bg-background min-h-[350px]">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] tracking-[0.3em] font-bold text-primary uppercase">{item.category}</span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-primary transition-colors leading-tight mb-4">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8 flex-grow">
                      {item.description}
                    </p>

                    {item.credentials && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openGallery(item.credentials!)}
                        className="mb-8 self-start px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary font-display font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-primary hover:text-black transition-all flex items-center gap-3"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        View Credentials
                      </motion.button>
                    )}

                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex items-center gap-3">
                         <TrendingUp className="w-4 h-4 text-primary" />
                         <span className="text-[10px] font-display font-bold text-white tracking-[0.1em]">{item.metric}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Cinematic Gallery Modal */}
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

                  {/* Counter HUD */}
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
