import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Star, Target, Globe, Rocket, Zap, TrendingUp, Medal, ChevronLeft, ChevronRight, ExternalLink, Eye, Shield } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const achievements = [
  {
    id: "yugantaai",
    title: "Full Stack Development Intern | YugantaAI Pvt. Ltd.",
    category: "PROFESSIONAL EXPERIENCE",
    description: "Successfully completed a Full Stack Development Internship at YugantaAI Pvt. Ltd., where I developed and maintained full-stack web applications using the MERN Stack. Contributed to both frontend and backend development while collaborating with the development team to build scalable, responsive, and user-friendly solutions.",
    metric: "MAY 2026 – JULY 2026",
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
    category: "GLOBAL RECOGNITION",
    description: "Achieved the highest honors in the world's largest hackathon, solving complex challenges using NASA's strategic data assets.",
    metric: "RANK: #1 GLOBAL",
    icon: Globe,
    color: "from-blue-600/20 to-indigo-600/20",
    glowColor: "rgba(59, 130, 246, 0.5)",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    credentials: [
      "https://drive.google.com/file/d/1rzNUGcWdQSwWzvi--KaXrLNNWrWN8Jfw/view?usp=sharing",
      "https://drive.google.com/file/d/1E7Px4hPvEkJoH2Iga4J1QFs41i-0ilmm/view?usp=sharing",
      "https://drive.google.com/file/d/1U8fyO9aSnFL53Ijl_APzl7jm85ShqpnN/view?usp=sharing",
      "https://drive.google.com/file/d/1bBJ5hM1q4b-NZ3ziq3C-1-mOQNPASSxO/view?usp=sharing"
    ]
  },
  {
    id: "aicte",
    title: "AICTE YUKTI Innovation Finalist",
    category: "NATIONAL SCALE",
    description: "Selected among the top innovators nationally for building high-impact technological solutions for social governance.",
    metric: "SELECTED: TOP 1%",
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
    category: "ACADEMIC EXCELLENCE",
    description: "Awarded for exceptional technical communication and research synthesis in distributed computing architectures.",
    metric: "ACHIEVEMENT: GOLD",
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
    category: "SOCIAL IMPACT",
    description: "Honored for community problem-solving at Andhra Pradesh Sachivalayam through technical application development and public service support.",
    metric: "IMPACT: GOVERNMENTAL",
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

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeGallery) {
      setCurrentImageIndex((prev) => (prev + 1) % activeGallery.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeGallery) {
      setCurrentImageIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);
    }
  };

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
  }, [activeGallery, closeGallery]);

  return (
    <section id="achievements" className="section-padding relative overflow-hidden bg-black/40">
      {/* Background Cinematic Spotlights */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-32"
        >
          <h3 className="text-primary font-display tracking-[0.5em] text-[10px] mb-4 uppercase">Achievement.log</h3>
          <h2 className="text-4xl md:text-7xl font-display font-black leading-tight tracking-tighter uppercase">ELITE <span className="gradient-text">MILESTONES</span></h2>
          <div className="flex items-center justify-center gap-6 mt-12 flex-wrap">
             <div className="px-6 py-4 glass-card border-white/5 flex flex-col items-center">
                <p className="text-4xl font-display font-black text-primary">01</p>
                <p className="text-[8px] tracking-widest text-muted-foreground uppercase">Global Win</p>
             </div>
             <div className="px-6 py-4 glass-card border-white/5 flex flex-col items-center">
                <p className="text-4xl font-display font-black text-white">06+</p>
                <p className="text-[8px] tracking-widest text-muted-foreground uppercase">Major Awards</p>
             </div>
             <div className="px-6 py-4 glass-card border-white/5 flex flex-col items-center">
                <p className="text-4xl font-display font-black text-accent">10+</p>
                <p className="text-[8px] tracking-widest text-muted-foreground uppercase">Hackathons</p>
             </div>
          </div>
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
                <div className={`glass-card p-1 pb-1 flex flex-col md:flex-row group border-white/5 hover:border-primary/40 transition-all duration-700 bg-black/40 overflow-hidden h-full`}>
                  
                  {/* Visual Side */}
                  <div className={`w-full md:w-56 aspect-square md:aspect-auto bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden shrink-0`}>
                     <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_center,var(--glow),transparent_70%)]" style={{ '--glow': item.glowColor } as any}></div>
                     {item.image ? (
                       <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" />
                     ) : (
                       <item.icon className="w-[60px] h-[60px] relative z-10 text-white transition-transform duration-700 group-hover:scale-110" />
                     )}
                     <div className="absolute top-4 left-4">
                        <Star className="w-4 h-4 text-white/20" />
                     </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 md:p-10 flex flex-col flex-grow bg-white/[0.02] min-h-[350px]">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[8px] tracking-[0.4em] font-black text-primary uppercase">{item.category}</span>
                      <Medal className="w-4 h-4 text-white/10 group-hover:text-primary transition-colors" />
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-display font-black text-white group-hover:text-primary transition-all leading-tight uppercase mb-4 tracking-tighter line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-[13px] text-muted-foreground font-light leading-relaxed mb-8 flex-grow">
                      {item.description}
                    </p>

                    {item.credentials && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openGallery(item.credentials!)}
                        className="mb-8 self-start px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary font-display font-black text-[9px] tracking-widest uppercase hover:bg-primary hover:text-black transition-all flex items-center gap-3 shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        View Credentials
                      </motion.button>
                    )}

                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex items-center gap-3">
                         <TrendingUp className="w-4 h-4 text-primary" />
                         <span className="text-[9px] font-display font-black text-white tracking-[0.1em]">{item.metric}</span>
                      </div>
                      <div className="flex gap-1">
                         {[1,2,3].map(i => <div key={i} className="w-1 h-3 bg-primary/20 group-hover:bg-primary/60 transition-all" style={{ transitionDelay: `${i*0.1}s` }}></div>)}
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
            className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
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
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full glass-card border-white/10 text-[10px] font-display font-black tracking-[0.4em] text-primary uppercase">
                {currentImageIndex + 1} / {activeGallery.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AchievementsSection;
