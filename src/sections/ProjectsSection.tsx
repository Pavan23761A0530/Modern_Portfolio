import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Cpu, Globe, Zap, Search, Star, X } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

import carPriceImg from '@/assets/car-price-project.jpg';
import eyewearImg from '@/assets/eyewear-project.jpg';
import homeBellImg from '@/assets/house-tax-project.jpg';
import krrSchoolImg from '@/assets/krr-school-project.jpg';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDesc: string;
  problem: string;
  solution: string;
  tech: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  icon: React.ElementType;
  featured?: boolean;
  benefits?: string[];
}

const categories = [
  { id: 'all', name: 'All Projects', icon: Search },
  { id: 'ai', name: 'AI & ML', icon: Cpu },
  { id: 'web', name: 'Web Development', icon: Globe },
  { id: 'iot', name: 'IoT', icon: Zap },
];

const projects: Project[] = [
  {
    id: "krr-brightminds",
    title: "KRR BrightMinds School – Smart School Management Platform",
    category: "web",
    description: "Built a modern MERN Stack school management platform that transforms a traditional school website into a dynamic digital ecosystem. The platform includes online admissions, student management, transport tracking, fee management, event updates, gallery, contact system, responsive UI, and an intuitive admin panel for managing school content efficiently.",
    longDesc: "A comprehensive school management platform designed to streamline administrative tasks and enhance communication between the school, parents, and students. Features include online admissions, student and staff management, transport tracking, fee management, event calendar, photo gallery, and a full-featured admin panel.",
    problem: "Traditional school management systems are often fragmented, paper-based, and lack modern digital tools for efficient administration and communication.",
    solution: "A fully responsive MERN Stack application with a user-friendly interface, role-based access control, and real-time updates for all school operations.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JavaScript", "REST API", "JWT Authentication"],
    image: krrSchoolImg,
    githubUrl: "https://github.com/Pavan23761A0530/krr_school_website",
    liveUrl: "https://intern-1-9i3m.onrender.com",
    icon: Globe,
    featured: true
  },
  {
    id: "homebell",
    title: "HomeBell – Smart Household Services Platform",
    category: "web",
    description: "HomeBell is a modern platform designed to connect users with trusted service providers for plumbing, electrical work, appliance repair, cleaning, and other home services.",
    longDesc: "HomeBell provides a seamless interface between quality service providers and end-users. The platform features advanced scheduling and payment integration.",
    problem: "Inefficient discovery and unreliable vetting in the local household service market.",
    solution: "Service matching algorithm that prioritizes reliability and user reviews.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "MERN Stack"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdL6TCbFC7WMyh-ce5juAP0FKrDc62cxyjIA&s",
    githubUrl: "https://github.com/Pavan23761A0530/Home-Bell",
    liveUrl: "https://home-bell-1.onrender.com/",
    icon: Globe,
    featured: true
  },
  {
    id: "smart-spectacles",
    title: "Evolens – Smart AI Spectacles",
    category: "iot",
    description: "Evolens is an AI-powered smart spectacles platform designed to revolutionize personalized vision technology with intelligent visual assistance.",
    longDesc: "A complete hardware-software hybrid. The spectacles use sensors and a camera module to provide feedback about the surrounding environment. The platform showcases the design and capabilities with advanced rendering.",
    problem: "Limited spatial awareness for visually impaired individuals in dynamic urban environments.",
    solution: "Audio feedback system synchronized with multi-modal sensors and immersive visualization.",
    tech: ["React.js", "Three.js", "Tailwind CSS", "Framer Motion", "AI Integration", "MERN Stack"],
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/Pavan23761A0530/Smart-Ai-Spectacles",
    liveUrl: "https://smart-ai-spectacles.onrender.com",
    icon: Zap
  },
  {
    id: "car-price",
    title: "Car Price Prediction using Machine Learning",
    category: "ai",
    description: "Machine learning powered web application that predicts vehicle prices based on multiple parameters.",
    longDesc: "Developed using regression analysis and feature engineering, this tool helps users estimate the fair market value of vehicles based on mileage, year, and condition.",
    problem: "Lack of transparent pricing in the used car market.",
    solution: "Multi-parameter regression model with localized market weightings.",
    tech: ["Python", "Machine Learning", "Flask", "React.js", "Scikit-learn", "Pandas", "NumPy"],
    image: carPriceImg,
    githubUrl: "https://github.com/Pavan23761A0530/CarPricePrediction/tree/main",
    liveUrl: "https://carpriceprediction-let2.onrender.com",
    icon: Cpu
  },
  {
    id: "eyewear",
    title: "Eyewear Analytics Dashboard",
    category: "web",
    description: "Premium e-commerce analytics dashboard for luxury eyewear brands, featuring real-time sales tracking.",
    longDesc: "High-fidelity dashboard designed for tracking inventory, sales trends, and customer demographics for eyewear retailers.",
    problem: "Fragmented sales data and poor inventory visibility for luxury retailers.",
    solution: "Real-time data visualization with predictive inventory management.",
    tech: ["React", "D3.js", "Firebase", "Tailwind"],
    image: eyewearImg,
    githubUrl: "https://github.com/Pavan23761A0530",
    liveUrl: "https://drive.google.com/file/d/1p7pbujiv0P39viQE4V2NAo7AqoDccKfu/view?usp=sharing",
    icon: Globe
  },
  {
    id: "house-tax",
    title: "House Tax Management System",
    category: "web",
    description: "House Tax Management System is a web application designed to simplify and accelerate property tax management operations.",
    longDesc: "A specialized system optimized for high-volume tax record management. By integrating Excel workbench, the system eliminates traditional data entry bottlenecks.",
    problem: "Inefficient manual handling of large-scale property tax records and slow data retrieval from legacy spreadsheets.",
    solution: "High-performance Excel workbench integration for rapid data ingestion and optimized search algorithms for instant record retrieval.",
    benefits: ["Faster Excel access", "Quick data retrieval", "Reduced manual work", "Improved efficiency", "Streamlined workflow"],
    tech: ["HTML", "CSS", "JavaScript", "Java", "JSP", "JDBC", "MySQL"],
    image: homeBellImg,
    githubUrl: "https://github.com/Pavan23761A0530/navigator/tree/main",
    liveUrl: "https://navigator-1.op5s.onrender.com",
    icon: Globe
  }
];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter(p => activeCategory === 'all' || p.category === activeCategory);
  }, [activeCategory]);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    if (lastFocusedElementRef.current) {
      lastFocusedElementRef.current.focus();
    }
  }, []);

  const openModal = useCallback((project: Project) => {
    lastFocusedElementRef.current = document.activeElement as HTMLElement;
    setSelectedProject(project);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    const handleMouseDownOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('modal-overlay')) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDownOutside);

    return () => {
      document.body.style.overflow = originalStyle;
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDownOutside);
    };
  }, [selectedProject, closeModal]);

  const renderTechTags = (tech: string[]) => {
    const MAX_VISIBLE = 5;
    if (tech.length <= MAX_VISIBLE) {
      return tech.map((t, i) => (
        <span key={i} className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-muted-foreground font-medium whitespace-nowrap flex items-center justify-center h-7">
          {t}
        </span>
      ));
    }
    return [
      ...tech.slice(0, MAX_VISIBLE).map((t, i) => (
        <span key={i} className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-muted-foreground font-medium whitespace-nowrap flex items-center justify-center h-7">
          {t}
        </span>
      )),
      <span key="more" className="text-xs px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-semibold whitespace-nowrap flex items-center justify-center h-7">
        +{tech.length - MAX_VISIBLE} More
      </span>
    ];
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 lg:mb-24 gap-8"
        >
          <div className="max-w-2xl">
            <h3 className="text-primary font-display text-xs mb-4">My Work</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tighter">Featured <span className="gradient-text-cyan-blue">Projects</span></h2>
          </div>
          
          <div className="flex w-full lg:w-auto overflow-x-auto no-scrollbar bg-white/5 border border-white/10 rounded-xl p-1.5 backdrop-blur-md gap-1">
             {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 px-4 md:px-6 py-3 rounded-lg text-sm font-medium transition-all duration-500 flex items-center justify-center gap-2 ${
                    activeCategory === cat.id 
                      ? 'bg-gradient-to-r from-primary to-secondary text-black shadow-lg animate-gradient-xy' 
                      : 'text-muted-foreground hover:text-white hover:bg-white/5'
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  <span>{cat.name}</span>
                </button>
             ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-[550px]"
              >
                <Tilt
                  tiltMaxAngleX={3}
                  tiltMaxAngleY={3}
                  perspective={2500}
                  className="h-full"
                >
                  <div 
                    className="glass-card flex flex-col h-full group border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-700 bg-black/30 overflow-hidden cursor-pointer relative rounded-2xl"
                    onClick={() => openModal(project)}
                  >
                    {/* Media Layer */}
                    <div className="relative h-[220px] overflow-hidden rounded-t-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500"></div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-primary/30 to-secondary/30 backdrop-blur-xl border border-primary/40 px-4 py-1.5 rounded-full flex items-center gap-2 z-10">
                           <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                           <span className="text-xs font-semibold text-primary">Featured</span>
                        </div>
                      )}
                    </div>

                    {/* Content Layer */}
                    <div className="p-6 flex flex-col flex-grow relative z-10 h-[calc(550px-220px)]">
                      <div className="mb-4">
                        <h3 className="text-xl font-display font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-shrink-0">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6 flex-grow overflow-hidden">
                        {renderTechTags(project.tech)}
                      </div>

                      <div className="flex gap-3 mt-auto flex-shrink-0">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.97 }}
                          className="flex-1 px-4 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-black shadow-lg"
                          onClick={(e) => e.stopPropagation()}
                        >
                           Live Demo
                           <ExternalLink className="w-3.5 h-3.5" />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.97 }}
                          className="flex-1 px-4 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white hover:border-primary/40 transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                           Source
                           <Github className="w-3.5 h-3.5" />
                        </motion.a>
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
            transition={{ duration: 0.25 }}
            className="modal-overlay fixed inset-0 z-[200] bg-black/90 backdrop-blur-3xl p-4 sm:p-6 md:p-10 lg:p-20 flex items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-primary/40 hover:text-primary transition-all duration-300 z-10"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card w-full max-w-6xl max-h-[90vh] overflow-auto relative flex flex-col 2xl:flex-row border-white/10 rounded-2xl"
            >
              {/* Modal Image Section */}
              <div className="2xl:w-1/2 relative bg-black/40 rounded-t-2xl 2xl:rounded-l-2xl 2xl:rounded-tr-none overflow-hidden aspect-video 2xl:aspect-auto">
                 <img src={selectedProject.image} className="w-full h-full object-cover" alt={selectedProject.title} loading="lazy" />
                 <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                 <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-2xl border border-primary/40 flex items-center justify-center text-primary mb-4 sm:mb-6 shadow-lg">
                       <selectedProject.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-2">{selectedProject.title}</h2>
                    <p className="text-primary font-display text-xs sm:text-sm font-semibold">{selectedProject.category}</p>
                 </div>
              </div>

              {/* Modal Content Section */}
              <div className="2xl:w-1/2 p-6 sm:p-8 lg:p-10 2xl:p-16 flex flex-col">
                 <div className="space-y-8 sm:space-y-10">
                    <section>
                       <h4 className="text-xs font-semibold text-primary mb-4">Project Overview</h4>
                       <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{selectedProject.longDesc}</p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
                       <section>
                          <h4 className="text-xs font-semibold text-primary mb-4">The Problem</h4>
                          <p className="text-sm sm:text-base text-white/80 leading-relaxed">{selectedProject.problem}</p>
                       </section>
                       <section>
                          <h4 className="text-xs font-semibold text-accent mb-4">The Solution</h4>
                          <p className="text-sm sm:text-base text-white/80 leading-relaxed">{selectedProject.solution}</p>
                       </section>
                    </div>

                    {selectedProject.benefits && (
                       <section>
                          <h4 className="text-xs font-semibold text-primary mb-5 sm:mb-6">Key Benefits</h4>
                          <div className="flex flex-wrap gap-2.5 sm:gap-3">
                             {selectedProject.benefits.map((benefit: string) => (
                                <div key={benefit} className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2 rounded-xl bg-primary/5 border border-primary/20">
                                   <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                                   <span className="text-xs text-white font-medium">{benefit}</span>
                                </div>
                             ))}
                          </div>
                       </section>
                    )}

                    <section>
                       <h4 className="text-xs font-semibold text-muted-foreground mb-5 sm:mb-6">Technologies Used</h4>
                       <div className="flex flex-wrap gap-2.5 sm:gap-3">
                          {selectedProject.tech.map((t: string) => (
                             <span key={t} className="px-3.5 sm:px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-primary font-medium">{t}</span>
                          ))}
                       </div>
                    </section>

                    <div className="pt-6 sm:pt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
                       <motion.a 
                         href={selectedProject.liveUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                         className="premium-button flex items-center gap-3 group overflow-hidden flex-grow justify-center text-center"
                       >
                          <span className="font-medium">View Live Demo</span>
                          <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                       </motion.a>
                       <motion.a 
                         href={selectedProject.githubUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                         className="glass-button flex items-center gap-3 group flex-grow justify-center text-center"
                       >
                          <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                          <span className="font-medium">View Source Code</span>
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
