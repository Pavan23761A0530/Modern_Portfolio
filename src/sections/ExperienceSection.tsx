import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Cpu, 
  Cloud, 
  Target,
  Activity,
  Milestone,
  Rocket
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';

interface JourneyItem {
  type: string;
  date: string;
  title: string;
  institution: string;
  description: string;
  icon: React.ElementType;
  color: string;
  featured?: boolean;
}

const journeyData: JourneyItem[] = [
  {
    type: 'internship',
    date: 'May 2026 – July 2026',
    title: 'Full Stack Development Intern',
    institution: 'YugantaAI Pvt. Ltd.',
    description: 'Developed and maintained full-stack web applications using the MERN Stack. Collaborated with the development team to build scalable, responsive, and user-friendly solutions.',
    icon: Briefcase,
    color: 'primary',
    featured: true
  },
  {
    type: 'education',
    date: '2023 - Present',
    title: 'B.Tech in Computer Science',
    institution: 'LBRCE Engineering College',
    description: 'Specializing in Distributed Systems and Machine Learning. Building strong foundations in software engineering and cutting-edge technologies.',
    icon: GraduationCap,
    color: 'primary'
  },
  {
    type: 'internship',
    date: '2024',
    title: 'AI Research Intern',
    institution: 'IIT Kharagpur',
    description: 'Worked on deep learning research projects, focusing on algorithmic efficiency and data-driven intelligence during intensive lab sessions.',
    icon: Cpu,
    color: 'accent'
  },
  {
    type: 'recognition',
    date: '2024',
    title: 'NASA Space Apps Global Winner',
    institution: 'NASA International Challenge',
    description: 'Won international recognition for building high-impact space data visualization solutions in the world\'s largest hackathon.',
    icon: Award,
    color: 'primary',
    featured: true
  },
  {
    type: 'internship',
    date: '2024',
    title: 'Salesforce Virtual Internship',
    institution: 'Salesforce Academy',
    description: 'Learned cloud-native CRM architecture, Apex development, and automated business process orchestration.',
    icon: Cloud,
    color: 'blue-500'
  },
  {
    type: 'recognition',
    date: '2024',
    title: 'AICTE YUTI Innovation Finalist',
    institution: 'AICTE India',
    description: 'Selected among top national innovators for building scalable socio-technical solutions bridging AI and public governance.',
    icon: Target,
    color: 'orange-500'
  },
  {
    type: 'education',
    date: '2021 - 2023',
    title: 'Intermediate',
    institution: 'Sarada College, Vijayawada',
    description: 'Built strong foundations in mathematics and physics, achieving excellent academic performance.',
    icon: Activity,
    color: 'muted-foreground'
  },
  {
    type: 'education',
    date: '2016 - 2021',
    title: 'Secondary School',
    institution: 'Vivekananda High School',
    description: 'Started my journey in technology and built initial programming and problem-solving skills.',
    icon: Milestone,
    color: 'muted-foreground'
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="journey" className="section-padding relative overflow-hidden bg-background">
      {/* Background Neural Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h3 className="text-primary font-display tracking-[0.5em] text-[10px] mb-4 uppercase">My Story</h3>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold leading-tight">My <span className="gradient-text-cyan-blue">Journey</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-light mt-6 text-sm md:text-base">
             From learning the basics to winning global awards, here's my professional and academic journey.
          </p>
        </motion.div>

        <div className="relative space-y-20">
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
                   <div className={`glass-card p-8 relative group border-white/5 hover:border-primary/40 transition-all duration-700 ${item.featured ? 'border-primary/20 shadow-[0_0_50px_rgba(0,255,255,0.1)]' : ''}`}>
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                         <item.icon className="w-[100px] h-[100px] text-primary" />
                      </div>

                      <div className="flex items-center gap-6 mb-6 relative z-10">
                         <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all shadow-[0_0_30px_rgba(0,255,255,0.15)]">
                            <item.icon className="w-5 h-5" />
                         </div>
                         <div>
                            <p className="text-[10px] tracking-[0.3em] font-bold text-primary uppercase mb-1">{item.date}</p>
                            <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
                         </div>
                      </div>

                      <h4 className="text-sm font-display font-semibold text-foreground/90 mb-3">{item.institution}</h4>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">{item.description}</p>
                      
                      {item.featured && (
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-[10px] font-bold text-primary uppercase w-fit">
                           <Rocket className="w-3 h-3" />
                           Featured
                        </div>
                      )}
                   </div>
                </Tilt>
              </div>

              {/* Timeline Center Node */}
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass-card border-white/10 items-center justify-center z-10">
                 <div className="w-3 h-3 rounded-full bg-primary relative animate-pulse">
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