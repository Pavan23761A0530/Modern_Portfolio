import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const journeyData = [
  {
    year: "2021",
    title: "10th Grade",
    institution: "Vivekananda English Medium High School",
    achievement: "98%",
    icon: GraduationCap,
    color: "text-primary"
  },
  {
    year: "2023", 
    title: "Intermediate",
    institution: "Sarada College, Vijayawada",
    achievement: "98.4%",
    icon: Award,
    color: "text-accent"
  },
  {
    year: "2023-Present",
    title: "B.Tech CSE",
    institution: "Lakireddy Balireddy College of Engineering",
    achievement: "In Progress",
    icon: BookOpen,
    color: "text-primary"
  }
];

const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="section-padding bg-card/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of academic excellence and continuous growth
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full opacity-30"></div>
          
          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-primary/20`}>
                        <item.icon className={item.color} size={24} />
                      </div>
                      <span className="text-2xl font-display font-bold text-primary">
                        {item.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-3">{item.institution}</p>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Achievement:</span>
                      <span className="font-semibold text-primary">{item.achievement}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center relative z-10">
                    <div className="w-4 h-4 bg-background rounded-full"></div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;