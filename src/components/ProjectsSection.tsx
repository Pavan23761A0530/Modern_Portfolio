import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import houseTaxProject from '@/assets/house-tax-project.jpg';
import carPriceProject from '@/assets/car-price-project.jpg';
import eyewearProject from '@/assets/eyewear-project.jpg';

const projects = [
  {
    title: "House Tax Management System",
    description: "A comprehensive system for managing house tax records, payments, and property assessments with automated calculations and reporting features.",
    tech: ["Java", "SQL", "Database Management"],
    image: houseTaxProject,
    liveUrl: "#",
    githubUrl: "https://github.com/Pavan23761A0530/navigator.git"
  },
  {
    title: "Car Price Prediction",
    description: "Machine learning model that predicts car prices based on various features like brand, model, year, mileage, and condition using advanced algorithms.",
    tech: ["Python", "Machine Learning", "Data Analysis"],
    image: carPriceProject,
    liveUrl: "#",
    githubUrl: "https://github.com/Pavan23761A0530/CarPricePrediction.git"
  },
  {
    title: "Eyewear Analysis Dashboard",
    description: "Interactive Power BI dashboard analyzing eyewear market trends, sales performance, and customer preferences with dynamic visualizations.",
    tech: ["Power BI", "Data Visualization", "Analytics"],
    image: eyewearProject,
    liveUrl: "#"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects and innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card overflow-hidden hover:scale-105 transition-all duration-500 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.githubUrl && (
                    <button 
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="p-2 rounded-lg glass-card hover:bg-primary/20 transition-all duration-300"
                    >
                      <Github size={18} className="text-primary" />
                    </button>
                  )}
                  <button 
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="p-2 rounded-lg glass-card hover:bg-primary/20 transition-all duration-300"
                  >
                    <ExternalLink size={18} className="text-primary" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live View Button */}
                <button 
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  className="neon-button w-full flex items-center justify-center gap-2"
                >
                  <span>Live View</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;