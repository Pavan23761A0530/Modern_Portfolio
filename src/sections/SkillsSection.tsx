import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Cpu,
  Terminal,
  Code2,
  FileType,
  FileCode,
  Code,
  Server,
  Globe,
  Database,
  GitBranch,
  Github,
  Container,
  Cloud,
  Brain,
  Network,
  Zap,
  CloudLightning,
  Monitor
} from 'lucide-react';

const techStack = [
  { name: "React", icon: Layers },
  { name: "Java", icon: Cpu },
  { name: "Python", icon: Terminal },
  { name: "JavaScript", icon: Code2 },
  { name: "TypeScript", icon: FileType },
  { name: "HTML5", icon: FileCode },
  { name: "CSS3", icon: Code },
  { name: "Tailwind CSS", icon: Layers },
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Globe },
  { name: "MongoDB", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github },
  { name: "Docker", icon: Container },
  { name: "AWS", icon: Cloud },
  { name: "TensorFlow", icon: Cpu },
  { name: "Machine Learning", icon: Brain },
  { name: "Deep Learning", icon: Network },
  { name: "OpenAI", icon: Zap },
  { name: "REST API", icon: CloudLightning },
  { name: "Linux", icon: Monitor }
];

const Marquee = ({ children, direction, speed, isPaused }: { children: React.ReactNode; direction: "left" | "right"; speed: number; isPaused: boolean }) => {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex gap-6 will-change-transform"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
            ...(isPaused && { duration: 0, repeat: 0 })
          }
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

const TechCard = ({ tech }: { tech: { name: string; icon: React.ElementType } }) => {
  const Icon = tech.icon;
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -8,
        rotate: 2
      }}
      className="min-w-[130px] h-[120px] glass-card rounded-[18px] border border-gradient-to-r border-transparent hover:border-primary/40 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-center gap-3 shadow-[0_0_0_rgba(34,211,238,0)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300"
    >
      <motion.div
        animate={{
          y: [0, -3, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-12 h-12 flex items-center justify-center text-cyan-400"
      >
        <Icon className="w-8 h-8" />
      </motion.div>
      <h4 className="text-sm font-display font-bold text-white/90">
        {tech.name}
      </h4>
    </motion.div>
  );
};

const SkillsSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-background">
      {/* Premium Background Blobs */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 bg-cyan-500/20 blur-[100px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: "2.5s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-blue-500/15 blur-[90px] rounded-full animate-pulse" style={{ animationDelay: "5s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-primary font-display tracking-[0.5em] text-[8px] sm:text-[10px] mb-4 uppercase">Skillset</h3>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold leading-tight">Technical <span className="gradient-text-cyan-blue">Skills</span></h2>
        </motion.div>

        <div
          className="space-y-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Marquee direction="left" speed={35} isPaused={isPaused}>
            {techStack.map((tech, index) => (
              <TechCard key={`t1-${tech.name}-${index}`} tech={tech} />
            ))}
          </Marquee>
          <Marquee direction="right" speed={40} isPaused={isPaused}>
            {[...techStack].reverse().map((tech, index) => (
              <TechCard key={`t2-${tech.name}-${index}`} tech={tech} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
