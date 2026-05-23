import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Zap, Globe, Cpu, Cloud, Database, Layout, Eye, X, ChevronLeft, ChevronRight, Binary, Server, Terminal, Monitor, Code } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    type: "Cloud Infrastructure",
    date: "2024",
    icon: Cloud,
    description: "Architecting scalable cloud ecosystems, serverless protocols, and security automation.",
    credentials: ["https://drive.google.com/file/d/1d7hrOQxt66i79f0GbQX3NFP881K6BtfR/view?usp=sharing"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "IIT Kharagpur AI Internship",
    issuer: "IIT Kharagpur",
    type: "Artificial Intelligence",
    date: "2024",
    icon: Cpu,
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
    icon: Server,
    description: "Enterprise application development using Apex, Lightning components, and cloud security.",
    credentials: ["https://drive.google.com/file/d/1-CzWy2lqSq2-Wc9LqXxTlD6HRHNSh_pn/view?usp=sharing"],
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Power BI Architect",
    issuer: "Microsoft / NPTEL",
    type: "Data Analysis",
    date: "2024",
    icon: Database,
    description: "Complex data transformation (DAX) and advanced visualization for business intelligence.",
    credentials: ["https://drive.google.com/file/d/1o7IF1MsqNfUTETzjYhpbMzkzZvf9gqTK/view?usp=drive_link"],
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Cyber Resilience",
    issuer: "Introduction to Cybersecurity",
    type: "Security Protocol",
    date: "2023",
    icon: ShieldCheck,
    description: "Defensive protocol implementation, network security, and threat vector analysis.",
    credentials: ["https://drive.google.com/file/d/1u4mGx6v7_OKdiGGnEtOBZxAlDS19UwBe/view?usp=sharing"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Python Engine Core",
    issuer: "NPTEL",
    type: "Logic & Scripting",
    date: "2023",
    icon: Terminal,
    description: "Advanced computational logic, algorithmic complexity analysis, and high-performance scripting.",
    credentials: ["https://drive.google.com/file/d/1vIAemAIbSAIfTErY4dHzxo6ccvzlGm3w/view?usp=drive_link"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "DSA with Java and Beyond",
    issuer: "Coursera",
    type: "Data Structures",
    date: "2023",
    icon: Code,
    description: "Mastering complex data structures, algorithmic paradigms, and Java-based optimization.",
    credentials: ["https://drive.google.com/file/d/1OBGntMsavy2PHQGSXxGi5v9XEGt6pQKX/view?usp=sharing"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Cisco Virtual Internship",
    issuer: "Cisco Networking Academy",
    type: "Cybersecurity",
    date: "2023",
    icon: ShieldCheck,
    description: "Enterprise-grade threat protection, secure infrastructure, and Cisco security protocols.",
    credentials: ["https://drive.google.com/file/d/1VupKl-8JOzQoq-BsMOlMItpZnvWROdYC/view?usp=sharing"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "ServiceNow Virtual Internship",
    issuer: "ServiceNow Academy",
    type: "IT Service Management",
    date: "2023",
    icon: Binary,
    description: "Building automated workflows, IT service orchestration, and ServiceNow platform core.",
    credentials: ["https://drive.google.com/file/d/1UxRmplTPDGhL1TlHpPTln6QSV2uMZmNV/view?usp=sharing"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "FSD Course Completion",
    issuer: "Professional Academy",
    type: "Full Stack Development",
    date: "2023",
    icon: Monitor,
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

  const closeGallery = () => {
    setActiveGallery(null);
  };

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
      return url.replace('/view?usp=sharing', '/preview').replace('/view?usp=drive_link', '/preview').replace('/view', '/preview');
    }
    return url;
  };

  return (
    <section id="certifications" className="section-padding relative overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[200px] rounded-full pointer-events-none animate-pulse"></div>

      <div className="container mx-auto relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h3 className="text-primary font-display tracking-[0.5em] text-[10px] mb-4 uppercase">Credentials.vault</h3>
          <h2 className="text-4xl md:text-7xl font-display font-black leading-tight tracking-tighter uppercase">ELITE <span className="gradient-text">CERTIFICATION</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-light mt-6 font-display text-[10px] tracking-widest">
             UNAUTHORIZED ACCESS PROTECTED // VERIFIED PROTOCOLS ONLY
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={2000} className="h-full">
                <div className="glass-card p-0 h-full flex flex-col group border-white/5 hover:border-primary/40 transition-all duration-700 bg-black/40 relative overflow-hidden">
                  
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    
                    {/* Floating Icon HUD */}
                    <div className="absolute top-6 left-6 z-10">
                      <div className="w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                        <cert.icon size={20} />
                      </div>
                    </div>

                    <div className="absolute top-6 right-6">
                       <div className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40 flex items-center gap-2">
                          <ShieldCheck size={10} className="text-primary" />
                          <span className="text-[8px] tracking-widest uppercase text-primary font-black">Verified</span>
                       </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow relative">
                    {/* Subtle Background Glow */}
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/5 blur-[80px] group-hover:bg-primary/20 transition-all duration-700"></div>
                    
                    <div className="relative z-10 space-y-4">
                      <h4 className="text-[9px] tracking-[0.4em] uppercase text-primary/60 font-bold group-hover:text-primary transition-colors">{cert.type}</h4>
                      <h3 className="text-xl font-display font-black text-white group-hover:text-primary transition-all leading-tight uppercase tracking-tight line-clamp-2 min-h-[3rem]">
                        {cert.title}
                      </h3>
                    </div>
                    
                    <p className="text-[13px] text-muted-foreground font-light leading-relaxed my-6 flex-grow relative z-10 line-clamp-3">
                      {cert.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5 relative z-10 mt-auto">
                      <div className="flex flex-col">
                         <span className="text-[7px] tracking-[0.2em] font-bold text-muted-foreground uppercase mb-1">Issuer Protocol:</span>
                         <span className="text-[10px] font-display font-black text-foreground uppercase tracking-wider">{cert.issuer}</span>
                      </div>
                      <button 
                        onClick={() => openGallery(cert.credentials)}
                        className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center bg-white/5 hover:bg-primary hover:text-black hover:border-primary transition-all shadow-xl group/btn"
                      >
                        <Eye size={18} className="group-hover/btn:scale-110 transition-transform" />
                      </button>
                    </div>

                    {/* Aesthetic Shine Effect */}
                    <div className="absolute top-0 -left-[100%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[25deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out pointer-events-none"></div>
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
              <button
                onClick={closeGallery}
                className="absolute top-6 right-6 z-[310] w-12 h-12 rounded-full glass-card border-white/10 flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-500 transition-all"
              >
                <X size={24} />
              </button>

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
                      <ChevronLeft size={24} />
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-4 flex items-center">
                    <button
                      onClick={nextImage}
                      className="w-12 h-12 rounded-full glass-card border-white/10 flex items-center justify-center hover:border-primary/50 text-white/50 hover:text-primary transition-all"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                  {/* Counter HUD */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full glass-card border-white/10 text-[10px] font-display font-black tracking-[0.4em] text-primary uppercase">
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
