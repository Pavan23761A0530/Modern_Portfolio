import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Cpu, Globe, Database, Shield, Zap, Search, Maximize2, Activity, Eye, Home, Star } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

import carPriceImg from '@/assets/car-price-project.jpg';
import eyewearImg from '@/assets/eyewear-project.jpg';
import homeBellImg from '@/assets/house-tax-project.jpg';

const categories = [
  { id: 'all', name: 'ALL SYSTEMS', icon: Search },
  { id: 'ai', name: 'INTELLIGENCE', icon: Cpu },
  { id: 'web', name: 'ECOSYSTEMS', icon: Globe },
  { id: 'iot', name: 'HARDWARE', icon: Zap },
];

const projects = [
  {
    id: "homebell",
    title: "HomeBell – Smart Household Services Platform",
    category: "web",
    description: "HomeBell is a modern household services platform designed to connect users with trusted service providers for plumbing, electrical work, appliance repair, cleaning, and other home services through a seamless and user-friendly web experience.",
    longDesc: "HomeBell represents a peak in service-oriented architecture. It provides a seamless interface between high-quality service providers and end-users, ensuring that every interaction is smooth and reliable. The platform features advanced scheduling algorithms and a custom-built payment gateway integration.",
    problem: "Inefficient discovery and unreliable vetting in the local household service market.",
    innovation: "Neural service-matching algorithm that prioritizes reliability metrics over simple distance.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "MERN Stack"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdL6TCbFC7WMyh-ce5juAP0FKrDc62cxyjIA&s",
    githubUrl: "https://github.com/Pavan23761A0530/Home-Bell",
    liveUrl: "https://home-bell-1.onrender.com/",
    icon: Home,
    featured: true
  },
  {
    id: "smart-spectacles",
    title: "Evolens – Smart AI Spectacles",
    category: "iot",
    description: "Evolens is an AI-powered smart spectacles platform designed to revolutionize personalized vision technology through intelligent visual assistance, futuristic UI experiences, and innovative smart eyewear concepts.",
    longDesc: "A complete hardware-software hybrid. The spectacles use ultrasonic sensors and a camera module to provide haptic and audio feedback about the surrounding environment. The 3D platform showcases the design and capabilities using advanced rendering techniques.",
    problem: "Limited spatial awareness for visually impaired individuals in dynamic urban environments.",
    innovation: "Whisper-quiet audio feedback loop synchronized with multi-modal sensor fusion and immersive 3D visualization.",
    tech: ["React.js", "Three.js", "Tailwind CSS", "Framer Motion", "AI Integration", "MERN Stack"],
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/Pavan23761A0530/Smart-Ai-Spectacles",
    liveUrl: "https://smart-ai-spectacles.onrender.com",
    icon: Eye
  },
  {
    id: "car-price",
    title: "Car Price Prediction Using Machine Learning",
    category: "ai",
    description: "Car Price Prediction is a machine learning-powered web application that predicts vehicle prices based on multiple parameters using intelligent predictive analytics and a user-friendly interactive interface.",
    longDesc: "Developed using regression analysis and feature engineering, this tool helps users estimate the fair market value of vehicles based on various parameters like mileage, year, and condition.",
    problem: "Lack of transparent pricing in the used car market.",
    innovation: "Multi-parameter regression model with localized market weightings.",
    tech: ["Python", "Machine Learning", "Flask", "React.js", "Scikit-learn", "Pandas", "NumPy"],
    image: carPriceImg,
    githubUrl: "https://github.com/Pavan23761A0530/CarPricePrediction/tree/main",
    liveUrl: "https://carpriceprediction-let2.onrender.com",
    icon: Activity
  },
  {
    id: "eyewear",
    title: "Eyewear Analysis Dashboard",
    category: "web",
    description: "Premium e-commerce analytics dashboard for luxury eyewear brands, featuring real-time sales tracking.",
    longDesc: "A high-fidelity dashboard designed for tracking inventory, sales trends, and customer demographics for eyewear retailers.",
    problem: "Fragmented sales data and poor inventory visibility for luxury retailers.",
    innovation: "Real-time data visualization with predictive inventory management.",
    tech: ["React", "D3.js", "Firebase", "Tailwind"],
    image: eyewearImg,
    githubUrl: "https://github.com/Pavan23761A0530",
    liveUrl: "https://drive.google.com/file/d/1p7pbujiv0P39viQE4V2NAo7AqoDccKfu/view?usp=sharing",
    icon: Eye
  },
  {
    id: "house-tax",
    title: "House Tax Management System",
    category: "web",
    description: "House Tax Management System is a web-based application designed to simplify and accelerate property tax management operations through efficient Excel workbench integration. The platform enables users to quickly import and access large Excel sheet records, retrieve tax and property details faster, streamline administrative workflows, reduce manual effort, improve data organization, and enhance overall operational efficiency through a user-friendly digital interface.",
    longDesc: "A specialized digital ecosystem optimized for high-volume tax record management. By integrating an advanced Excel workbench, the system eliminates traditional data entry bottlenecks, allowing for rapid import and real-time querying of complex property datasets. This transition from manual to automated workflows significantly boosts administrative throughput and data accuracy.",
    problem: "Inefficient manual handling of large-scale property tax records and slow data retrieval from legacy spreadsheets.",
    innovation: "High-performance Excel workbench integration for rapid data ingestion and optimized search algorithms for instant record retrieval.",
    benefits: ["Faster Excel access", "Quick data retrieval", "Reduced manual work", "Improved efficiency", "Streamlined workflow"],
    tech: ["HTML", "CSS", "JavaScript", "Java", "JSP", "JDBC", "MySQL"],
    image: homeBellImg,
    githubUrl: "https://github.com/Pavan23761A0530/navigator/tree/main",
    liveUrl: "https://navigator-1-op5s.onrender.com",
    icon: Database
  }
];



const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const filteredProjects = projects.filter(p => activeCategory === 'all' || p.category === activeCategory);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        closeModal();
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, closeModal]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    currentTarget.style.setProperty('--mouse-x', `${x}px`);
    currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-background">
      {/* Decorative Grids and Lights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 lg:mb-24 gap-6"
        >
          <div className="max-w-2xl">
            <h3 className="text-primary font-display tracking-[0.5em] text-[9px] md:text-[10px] mb-3 md:mb-4 uppercase">Archive.sys</h3>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-black leading-tight uppercase tracking-tighter">CRAFTED <br /><span className="gradient-text">ECOSYSTEMS</span></h2>
          </div>
          
          <div className="flex w-full md:w-auto bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-1 backdrop-blur-xl">
             {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-1 md:flex-none px-3 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl text-[8px] md:text-[10px] tracking-widest font-bold uppercase transition-all duration-500 flex items-center justify-center md:justify-start gap-1.5 md:gap-2 ${
                    activeCategory === cat.id ? 'bg-primary text-black shadow-[0_0_20px_rgba(0,255,255,0.3)]' : 'text-muted-foreground hover:text-white'
                  }`}
                >
                  <cat.icon className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  <span className="hidden sm:block">{cat.name}</span>
                  <span className="sm:hidden">{cat.id}</span>
                </button>
             ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={2000}
                  className="h-full"
                >
                  <div 
                    className="glass-card flex flex-col h-full group border-white/5 hover:border-primary/40 transition-all duration-700 bg-black/40 overflow-hidden cursor-pointer relative"
                    onClick={() => setSelectedProject(project)}
                    onMouseMove={handleMouseMove}
                  >
                    {/* Cinematic Hover Spotlight */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0">
                      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(0,255,255,0.15)_0%,transparent_70%)]" />
                    </div>

                    {/* Media Layer */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-all duration-1000 ${
                          project.id === 'homebell' 
                            ? 'grayscale-0 opacity-100 brightness-110' 
                            : 'grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100'
                        } group-hover:scale-105`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      
                      {/* Project Icon HUD */}
                      <div className="absolute top-4 left-4 z-10">
                         <div className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                            <project.icon className="w-4.5 h-4.5" />
                         </div>
                      </div>

                      {/* Featured Star */}
                      {project.featured && (
                        <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-md border border-primary/40 px-3 py-1 rounded-full flex items-center gap-2 z-10">
                           <Star className="w-2.5 h-2.5 text-primary fill-primary" />
                           <span className="text-[8px] font-black text-primary tracking-widest uppercase">Featured</span>
                        </div>
                      )}
                    </div>

                    {/* Content Layer */}
                    <div className="p-6 flex flex-col flex-grow relative z-10">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl md:text-2xl font-display font-black leading-tight group-hover:text-primary transition-colors uppercase tracking-tight">
                          {project.title}
                        </h3>
                        <div className="flex gap-2">
                           <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6 line-clamp-3">
                        {project.description}
                      </p>

                      {project.benefits && (
                        <div className="flex flex-wrap gap-2 mb-6">
                           {project.benefits.map((benefit: string, i: number) => (
                             <span key={i} className="text-[7px] uppercase tracking-widest px-2 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-black">
                                {benefit}
                             </span>
                           ))}
                        </div>
                      )}

                      <div className="mt-auto space-y-5">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span key={i} className="text-[8px] uppercase tracking-[.2em] px-2 py-1 rounded border border-white/5 bg-white/5 text-muted-foreground font-bold group-hover:border-primary/20 transition-colors">
                              {t}
                            </span>
                          ))}
                        </div>

                        {(project.id === 'homebell' || project.id === 'smart-spectacles' || project.id === 'car-price' || project.id === 'house-tax' || project.id === 'eyewear') && (
                          <div className="flex gap-3 pt-2">
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={project.liveUrl !== '#' ? { scale: 1.05 } : {}}
                              whileTap={project.liveUrl !== '#' ? { scale: 0.95 } : {}}
                              className={`px-4 py-2 rounded-lg font-display font-black text-[8px] uppercase tracking-widest flex items-center gap-2 transition-all ${
                                project.liveUrl !== '#' 
                                ? 'bg-primary text-black shadow-[0_0_15px_rgba(0,255,255,0.2)]' 
                                : 'bg-white/5 text-white/20 border border-white/5 cursor-not-allowed'
                              }`}
                              onClick={(e) => {
                                if (project.liveUrl === '#') e.preventDefault();
                                e.stopPropagation();
                              }}
                            >
                               Live Demo
                               <ExternalLink className="w-2.5 h-2.5" />
                            </motion.a>
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={project.githubUrl !== '#' ? { scale: 1.05 } : {}}
                              whileTap={project.githubUrl !== '#' ? { scale: 0.95 } : {}}
                              className={`px-4 py-2 rounded-lg font-display font-black text-[8px] uppercase tracking-widest flex items-center gap-2 transition-all ${
                                project.githubUrl !== '#'
                                  ? 'bg-white/5 border border-white/10 text-white hover:border-primary/40'
                                  : 'bg-white/5 text-white/20 border border-white/5 cursor-not-allowed'
                              }`}
                              onClick={(e) => {
                                if (project.githubUrl === '#') e.preventDefault();
                                e.stopPropagation();
                              }}
                            >
                               Source
                               <Github className="w-2.5 h-2.5" />
                            </motion.a>
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                           <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                              <span className="text-[8px] tracking-[.3em] font-black text-primary uppercase">Status: Online</span>
                           </div>
                           <button className="text-[9px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 group/btn text-muted-foreground group-hover:text-primary transition-colors">
                              VIEW SYSTEM
                              <Maximize2 className="w-3 h-3 group-hover/btn:scale-110 transition-transform" />
                           </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Expandable Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-2xl p-6 md:p-20 flex items-center justify-center"
            onClick={closeModal}
          >


            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card w-full max-w-6xl max-h-[90vh] overflow-auto relative flex flex-col lg:flex-row border-white/10"
            >

              {/* Modal Image Section */}
              <div className="lg:w-1/2 relative bg-black/40">
                 <img src={selectedProject.image} className="w-full h-full object-cover grayscale opacity-60" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                 <div className="absolute bottom-12 left-12 right-12">
                     <div className="w-20 h-20 rounded-3xl bg-primary/20 backdrop-blur-2xl border border-primary/30 flex items-center justify-center text-primary mb-6 shadow-[0_0_50px_rgba(0,255,255,0.2)]">
                        <selectedProject.icon className="w-10 h-10" />
                     </div>
                     <h2 className="text-5xl font-display font-black text-white uppercase tracking-tighter mb-2">{selectedProject.title}</h2>
                     <p className="text-primary font-display text-xs tracking-[0.5em] uppercase font-bold">{selectedProject.category} // protocol</p>
                 </div>
              </div>

              {/* Modal Content Section */}
              <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col">
                 <div className="space-y-12">
                    <section>
                       <h4 className="text-[10px] tracking-[0.4em] font-bold text-primary uppercase mb-4">Functional Narrative</h4>
                       <p className="text-lg text-muted-foreground font-light leading-relaxed">{selectedProject.longDesc}</p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-12">
                       <section>
                          <h4 className="text-[10px] tracking-[0.4em] font-bold text-primary uppercase mb-4">Problem Scope</h4>
                          <p className="text-sm text-foreground/80 font-light leading-relaxed">{selectedProject.problem}</p>
                       </section>
                       <section>
                          <h4 className="text-[10px] tracking-[0.4em] font-bold text-accent uppercase mb-4">Neural Innovation</h4>
                          <p className="text-sm text-foreground/80 font-light leading-relaxed">{selectedProject.innovation}</p>
                       </section>
                    </div>

                    {selectedProject.benefits && (
                       <section>
                          <h4 className="text-[10px] tracking-[0.4em] font-bold text-primary uppercase mb-6">Operational Advantages</h4>
                          <div className="flex flex-wrap gap-3">
                             {selectedProject.benefits.map((benefit: string) => (
                                <div key={benefit} className="flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/5 border border-primary/20">
                                   <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                                   <span className="text-[10px] text-white font-bold tracking-widest uppercase">{benefit}</span>
                                </div>
                             ))}
                          </div>
                       </section>
                    )}

                    <section>
                       <h4 className="text-[10px] tracking-[0.4em] font-bold text-muted-foreground uppercase mb-6">Framework Stack</h4>
                       <div className="flex flex-wrap gap-3">
                          {selectedProject.tech.map((t: string) => (
                             <span key={t} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-primary font-bold tracking-widest">{t}</span>
                          ))}
                       </div>
                    </section>

                    <div className="pt-12 flex flex-col sm:flex-row gap-6">
                       <motion.a 
                         href={selectedProject.liveUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                         className="neon-button px-10 py-5 flex items-center gap-3 group overflow-hidden flex-grow justify-center text-center"
                       >
                           <span className="font-display tracking-[0.4em] uppercase text-[10px] font-bold">Initiate Live Demo</span>
                           <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                       </motion.a>
                       <motion.a 
                         href={selectedProject.githubUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                         className="glass-card px-10 py-5 flex items-center gap-3 border-white/10 hover:border-primary/40 group flex-grow justify-center text-center"
                       >
                           <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                           <span className="font-display tracking-[0.4em] uppercase text-[10px] font-bold">Access Source</span>
                       </motion.a>
                    </div>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
