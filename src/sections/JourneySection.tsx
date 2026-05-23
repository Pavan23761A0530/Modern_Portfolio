import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Clock } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const journeyData = [
  {
    year: "2021",
    title: "Secondary Education",
    institution: "Vivekananda High School",
    achievement: "98% Efficiency",
    icon: GraduationCap,
    desc: "Foundation in advanced logic and systemic thinking."
  },
  {
    year: "2023", 
    title: "Intermediate Synthesis",
    institution: "Sarada College, Vijayawada",
    achievement: "98.4% Accuracy",
    icon: Award,
    desc: "Mathematical optimization and computational core focus."
  },
  {
    year: "2023-PRESENT",
    title: "B.Tech CSE Core",
    institution: "LBRCE Engineering College",
    achievement: "Active Protocol",
    icon: BookOpen,
    desc: "Specializing in Distributed Systems and Artificial Intelligence."
  }
];

const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="section-padding relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
        >
          <h3 className="text-primary font-display tracking-[0.5em] text-sm mb-4 uppercase">Timeline.log</h3>
          <h2 className="text-4xl md:text-6xl font-display font-bold">EVOLUTION <span className="gradient-text">PATH</span></h2>
        </motion.div>

        <div className="relative">
          {/* Central Neural Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
          
          <div className="space-y-32">
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className="w-[45%]">
                  <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                    <div className="glass-card p-8 relative group hover:border-primary/40 transition-all duration-700">
                      <div className="absolute -top-10 left-0 text-6xl font-display font-black text-white/[0.03] select-none tracking-tighter">
                        {item.year}
                      </div>
                      
                      <div className="flex items-center gap-4 mb-6 relative z-10">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
                          <item.icon size={24} />
                        </div>
                        <div>
                          <h4 className="text-xs tracking-[0.3em] uppercase text-primary font-bold">{item.year}</h4>
                          <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                        </div>
                      </div>

                      <p className="text-sm font-medium text-foreground mb-2">{item.institution}</p>
                      <p className="text-sm text-muted-foreground font-light mb-6 leading-relaxed">{item.desc}</p>
                      
                      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                        <Clock size={14} className="text-primary/60" />
                        <span className="text-[10px] tracking-widest uppercase text-muted-foreground">Status: <span className="text-primary font-bold">{item.achievement}</span></span>
                      </div>
                    </div>
                  </Tilt>
                </div>

                {/* Center Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.5)]">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></div>
                </div>

                {/* Empty Space for balancing */}
                <div className="w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
