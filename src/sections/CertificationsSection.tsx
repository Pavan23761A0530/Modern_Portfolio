import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

interface Certification {
  title: string;
  issuer: string;
  type: string;
  date: string;
  description: string;
  credentials: string[];
  image: string;
}

const certifications: Certification[] = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    type: "Cloud Infrastructure",
    date: "2024",
    description: "Architecting scalable cloud ecosystems, serverless protocols, and security automation.",
    credentials: ["https://drive.google.com/file/d/1d7hrOQxt66i79f0GbQX3NFP881K6BtfR/view?usp=sharing"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "IIT Kharagpur AI Internship",
    issuer: "IIT Kharagpur",
    type: "Artificial Intelligence",
    date: "2024",
    description: "Deep learning research and neural network implementation during high-intensity internship.",
    credentials: [
      "https://drive.google.com/file/d/1LC0yxr8pj2Hvvapi7ZX3YcW5jEEhu2OE/view?usp=drive_link",
      "https://drive.google.com/file/d/1OSpK0TjLi6eiIZ3gNHRzIy-yiQXjPkkZ/view?usp=drive_link"
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Salesforce Virtual Internship",
    issuer: "Salesforce Academy",
    type: "CRM & Apex",
    date: "2024",
    description: "Enterprise application development using Apex, Lightning components, and cloud security.",
    credentials: ["https://drive.google.com/file/d/1-CzWy2lqSq2-Wc9LqXxTlD6HRHNSh_pn/view?usp=sharing"],
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Power BI Architect",
    issuer: "Microsoft / NPTEL",
    type: "Data Analysis",
    date: "2024",
    description: "Complex data transformation (DAX) and advanced visualization for business intelligence.",
    credentials: ["https://drive.google.com/file/d/1o7IF1MsqNfUTETzjYhpbMzkzZvf9gqTK/view?usp=drive_link"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Cyber Resilience",
    issuer: "Introduction to Cybersecurity",
    type: "Security Protocol",
    date: "2023",
    description: "Defensive protocol implementation, network security, and threat vector analysis.",
    credentials: ["https://drive.google.com/file/d/1u4mGx6v7_OKdiGGnEtOBZxAlDS19UwBe/view?usp=sharing"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Python Engine Core",
    issuer: "NPTEL",
    type: "Logic & Scripting",
    date: "2023",
    description: "Advanced computational logic, algorithmic complexity analysis, and high-performance scripting.",
    credentials: ["https://drive.google.com/file/d/1vIAemAIbSAIfTErY4dHzxo6ccvzlGm3w/view?usp=drive_link"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "DSA with Java and Beyond",
    issuer: "Coursera",
    type: "Data Structures",
    date: "2023",
    description: "Mastering complex data structures, algorithmic paradigms, and Java-based optimization.",
    credentials: ["https://drive.google.com/file/d/1OBGntMsavy2PHQGSXxGi5v9XEGt6pQKX/view?usp=sharing"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Cisco Virtual Internship",
    issuer: "Cisco Networking Academy",
    type: "Cybersecurity",
    date: "2023",
    description: "Enterprise-grade threat protection, secure infrastructure, and Cisco security protocols.",
    credentials: ["https://drive.google.com/file/d/1VupKl-8JOzQoq-BsMOlMItpZnvWROdYC/view?usp=sharing"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "ServiceNow Virtual Internship",
    issuer: "ServiceNow Academy",
    type: "IT Service Management",
    date: "2023",
    description: "Building automated workflows, IT service orchestration, and ServiceNow platform core.",
    credentials: ["https://drive.google.com/file/d/1UxRmplTPDGhL1TlHpPTln6QSV2uMZmNV/view?usp=sharing"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "FSD Course Completion",
    issuer: "Professional Academy",
    type: "Full Stack Development",
    date: "2023",
    description: "End-to-end web architecture, distributed systems integration, and modern frontend logic.",
    credentials: ["https://drive.google.com/file/d/11bUGTwBGDlJ-xaZSrSfZTZDyUMgqvFga/view?usp=sharing"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
  }
];

const CertificationsSection: React.FC = () => {
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
      return url.replace('/view?usp=sharing', '/preview').replace('/view?usp=drive_link', '/preview').replace('/view', '/preview');
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
    <section id="certifications" className="section-padding relative overflow-hidden bg-background">
      <div className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[200px] rounded-full pointer-events-none animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h3 className="text-primary font-display tracking-[0.5em] text-[10px] mb-4 uppercase">Credentials</h3>
          <h2 className="text-4xl md:text-7xl font-display font-bold leading-tight tracking-tighter">Elite <span className="gradient-text-cyan-blue">Certifications</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-light mt-6 font-display text-[10px] tracking-widest">
            Certifications from top industry organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={2000} className="h-full">
                <div className="glass-card rounded-[20px] h-full flex flex-col group border-white/10 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-700 bg-black/30 backdrop-blur-xl overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                  
                  <div className="relative h-[220px] overflow-hidden rounded-t-[20px]">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500"></div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold">{cert.type}</span>
                    </div>
                    
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors leading-tight mb-4">
                      {cert.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {cert.description}
                    </p>

                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-xs font-medium text-white">{cert.issuer}</span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34,211,238,0.4)' }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => openGallery(cert.credentials)}
                      className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm transition-all flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-2">
                        <Eye className="w-5 h-5" />
                        View Certificate
                      </div>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
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
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full glass-card border-white/10 text-[10px] font-display font-bold tracking-[0.4em] text-primary uppercase">
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

export default CertificationsSection;
