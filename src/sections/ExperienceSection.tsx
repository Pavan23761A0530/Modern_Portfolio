import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Award as Trophy, 
  Cpu, 
  ShieldCheck, 
  Cloud, 
  Rocket, 
  Target,
  Trophy as Medal,
  Activity,
  Milestone
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const journeyData = [
  {
    type: 'education',
    date: '2023 - PRESENT',
    title: 'B.Tech in Computer Science',
    institution: 'LBRCE Engineering College',
    desc: 'Specializing in Distributed Systems and Deep Learning. Consistently optimizing neural architectures and software infrastructure.',
    icon: GraduationCap,
    color: 'primary',
  },
  {
    type: 'internship',
    date: '2024',
    title: 'AI Research Intern',
    institution: 'IIT Kharagpur',
    desc: 'Led high-density neural network research, focusing on algorithmic efficiency and data-driven intelligence during intensive lab sessions.',
    icon: Cpu,
    color: 'accent',
  },
  {
    type: 'recognition',
    date: '2024',
    title: 'NASA Space Apps Global Global Winner',
    institution: 'NASA International Challenge',
    desc: 'World-class recognition for engineering high-impact space data visualization solutions in the worlds largest hackathon.',
    icon: Medal,
    color: 'primary',
    featured: true
  },
  {
    type: 'internship',
    date: '2024',
    title: 'Salesforce Virtual Internship',
    institution: 'Salesforce Academy',
    desc: 'Mastered cloud-native CRM architecture, Apex development, and automated business flow orchestration.',
    icon: Cloud,
    color: 'blue-500',
  },
  {
    type: 'award',
    date: '2024',
    title: 'AICTE YUTI Innovation Finalist',
    institution: 'AICTE India',
    desc: 'Selected among top national innovators for building scalable socio-technical solutions bridging AI and public governance.',
    icon: Target,
    color: 'orange-500',
  },
  {
    type: 'education',
    date: '2021 - 2023',
    title: 'Intermediate Synthesis',
    institution: 'Sarada College, Vijayawada',
    desc: 'Mathematical optimization and physics core. Achieved 98.4% performance efficiency in technical curriculum.',
    icon: Activity,
    color: 'muted-foreground',
  },
  {
    type: 'education',
    date: '2016 - 2021',
    title: 'Secondary Foundation',
    institution: 'Vivekananda High School',
    desc: 'Initial logic synthesis and computational foundation building. 9.8/10 baseline performance.',
    icon: Milestone,
    color: 'muted-foreground',
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="journey" className="section-padding relative overflow-hidden bg-background/50">
      {/* Background Neural Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-32"
        >
          <h3 className="text-primary font-display tracking-[0.5em] text-[10px] mb-4 uppercase">Timeline.exe</h3>
          <h2 className="text-4xl md:text-7xl font-display font-black leading-tight uppercase tracking-tighter">THE <span className="gradient-text">EVOLUTION</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-light mt-6">
             Tracing the technical trajectory from baseline logic foundation to global innovation leadership.
          </p>
        </motion.div>

        <div className="relative space-y-24">
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row items-center justify-between gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              {/* Timeline Card */}
              <div className="w-full lg:w-[45%]">
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={2000}>
                   <div className={`glass-card p-10 relative group border-white/5 hover:border-primary/40 transition-all duration-700 ${item.featured ? 'border-primary/20 shadow-[0_0_50px_rgba(0,255,255,0.1)]' : ''}`}>
                      <div className="absolute -top-6 -left-6 opacity-5 group-hover:opacity-10 transition-opacity">
                         <item.icon size={100} className="text-primary" />
                      </div>

                      <div className="flex items-center gap-6 mb-8 relative z-10">
                         <div className={`w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all shadow-[0_0_30px_rgba(0,255,255,0.15)]`}>
                            <item.icon size={24} />
                         </div>
                         <div>
                            <p className="text-[10px] tracking-[0.4em] font-black text-primary uppercase mb-1">{item.date}</p>
                            <h3 className="text-2xl font-display font-black text-white group-hover:text-primary transition-colors leading-tight uppercase">{item.title}</h3>
                         </div>
                      </div>

                      <h4 className="text-sm font-display font-bold text-foreground/90 mb-4">{item.institution}</h4>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8">{item.desc}</p>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-white/5">
                         <div className="flex items-center gap-2">
                             <Activity size={14} className="text-primary animate-pulse" />
                             <span className="text-[9px] tracking-widest uppercase font-bold text-muted-foreground">Status: <span className="text-primary">SYNCED</span></span>
                         </div>
                         {item.featured && (
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-[8px] font-black text-primary uppercase">
                               <Rocket size={10} />
                               Elite Selection
                            </div>
                         )}
                      </div>
                   </div>
                </Tilt>
              </div>

              {/* Timeline Center Node */}
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass-card border-white/10 items-center justify-center z-10">
                 <div className="w-4 h-4 rounded-full bg-primary relative animate-pulse">
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
                 </div>
              </div>

              {/* Empty Space for balancing */}
              <div className="hidden lg:block w-[45%]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
