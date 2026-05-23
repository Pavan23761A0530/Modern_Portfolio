import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "Completed",
    verified: true,
    description: "Foundational understanding of AWS Cloud concepts, services, and terminology"
  },
  {
    title: "NPTEL Python",
    issuer: "NPTEL",
    status: "Completed", 
    verified: true,
    description: "Comprehensive Python programming course covering fundamentals to advanced concepts"
  },
  {
    title: "ChatGPT & MS Office Using AI",
    issuer: "Workshop Certification",
    status: "Completed",
    verified: true,
    description: "Practical training on AI tools integration with Microsoft Office suite"
  },
  {
    title: "Cybersecurity Introduction",
    issuer: "Professional Development",
    status: "Completed",
    verified: true,
    description: "Fundamentals of cybersecurity principles and best practices"
  },
  {
    title: "AI Internship",
    issuer: "IIT Kharagpur",
    status: "Completed",
    verified: true,
    description: "Hands-on experience with artificial intelligence and machine learning projects"
  },
  {
    title: "Power BI Certified",
    issuer: "Microsoft",
    status: "Completed",
    verified: true,
    description: "Data visualization and business intelligence using Microsoft Power BI"
  }
];

const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="section-padding bg-card/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-all duration-300">
                  <Award className="text-primary" size={28} />
                </div>
                {cert.verified && (
                  <div className="flex items-center gap-1 text-green-400">
                    <CheckCircle size={16} />
                    <span className="text-xs">Verified</span>
                  </div>
                )}
              </div>

              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                {cert.title}
              </h3>
              
              <p className="text-primary font-medium mb-2">{cert.issuer}</p>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                  {cert.status}
                </span>
                
                <button className="flex items-center gap-1 text-sm text-primary hover:text-accent transition-colors duration-300">
                  <span>View</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;