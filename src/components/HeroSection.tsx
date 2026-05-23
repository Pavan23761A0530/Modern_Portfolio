import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import RotatingTitles from './RotatingTitles';
// Using uploaded hero image

const HeroSection: React.FC = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1KOGSHRC7rIKJ1CsTv9FWvAfWL2z9KYg7';
    link.download = 'Pavan_Kumar_Ganesh_Resume.pdf';
    link.target = '_blank';
    link.click();
  };

  const handleContactMe = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 glow-text"
            >
              Pavan Kumar Ganesh
              <br />
              <span className="gradient-text">Kommoju</span>
            </motion.h1>

            <RotatingTitles />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Passionate about creating innovative solutions through clean code, 
              user-centric design, and cutting-edge technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={handleDownloadResume}
                className="neon-button flex items-center gap-2 justify-center"
              >
                <Download size={20} />
                Download Resume
              </button>
              
              <button
                onClick={handleContactMe}
                className="glass-card px-6 py-3 font-medium rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="float"
                style={{ animationDelay: '1s' }}
              >
                <div className="glass-card p-4 rounded-2xl">
                  <img
                    src="/lovable-uploads/cd41442b-5392-4e53-b7cd-81023588848c.png"
                    alt="Pavan Kumar Ganesh Kommoju"
                    className="w-80 h-80 object-cover rounded-xl"
                  />
                </div>
              </motion.div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;