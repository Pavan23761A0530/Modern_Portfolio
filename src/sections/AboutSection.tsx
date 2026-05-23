import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Globe, Shield, Rocket, Target, Users, Zap, TrendingUp, Cpu } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const stats = [
  { label: "Global Hackathon Wins", value: "2+", icon: Award },
  { label: "AI Models Deployed", value: "5+", icon: Cpu },
  { label: "Projects Completed", value: "15+", icon: Rocket },
  { label: "Security Enthusiast", value: "100%", icon: Shield }
];

const highlights = [
  {
    title: "NASA Space Apps Global Winner",
    desc: "Achieved international recognition for innovative space-tech solutions in the world's largest hackathon.",
    icon: Globe,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "AICTE YUTI Innovation",
    desc: "Recognized for disruptive innovation in national challenge, focusing on high-impact scalable solutions.",
    icon: Target,
    color: "from-orange-500 to-red-600"
  },
  {
    title: "MERN Stack Specialist",
    desc: "Architecting high-density, full-stack applications with optimal performance and UX precision.",
    icon: Code,
    color: "from-emerald-500 to-teal-600"
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-black/20">
      {/* Background Ambient Effects */}
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Identity Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 w-full sticky top-32"
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000}>
              <div className="glass-card p-10 relative group overflow-hidden border-primary/20">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                   <Users size={120} className="text-primary" />
                </div>
                
                <h3 className="text-primary font-display tracking-[0.5em] text-[10px] mb-4 uppercase">System.status</h3>
                <h2 className="text-4xl font-display font-black mb-8 leading-tight">THE <br /><span className="gradient-text">ENGINEER</span></h2>
                
                <div className="space-y-6 mb-10">
                  <p className="text-muted-foreground leading-relaxed font-light">
                    I am <span className="text-foreground font-medium">Kommoju Pavan Kumar Ganesh</span>, a visionary developer dedicated to pushing the boundaries of what's possible in AI and Software Engineering.
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    My mission is to engineer high-impact solutions that blend advanced mathematics with cinematic user experiences.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all group/stat">
                      <div className="text-primary mb-2 transition-transform group-hover/stat:scale-110">
                         <stat.icon size={20} />
                      </div>
                      <p className="text-xl font-display font-black text-white">{stat.value}</p>
                      <p className="text-[8px] tracking-widest text-muted-foreground uppercase">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* Right: Narrative & Highlights */}
          <div className="lg:w-2/3 w-full space-y-16">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <h3 className="text-primary font-display tracking-[0.5em] text-[10px] mb-4 uppercase">Background.log</h3>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">INNOVATION <span className="gradient-text">JOURNEY</span></h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 glass-card border-white/5 hover:border-primary/20 transition-all">
                   <h4 className="font-display font-bold text-lg mb-4 flex items-center gap-3">
                      <Zap className="text-primary" size={20} />
                      AI ARCHITECT
                   </h4>
                   <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      Specializing in deep learning and generative models. Transforming raw data into predictive intelligence and autonomous ecosystems.
                   </p>
                </div>
                <div className="p-8 glass-card border-white/5 hover:border-primary/20 transition-all">
                   <h4 className="font-display font-bold text-lg mb-4 flex items-center gap-3">
                      <Shield className="text-accent" size={20} />
                      SEC_OPS ENTHUSIAST
                   </h4>
                   <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      Integrating security-first protocols into every layer of development. Dedicated to building resilient, threat-resistant architectures.
                   </p>
                </div>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
            >
              <h3 className="text-primary font-display tracking-[0.5em] text-[10px] uppercase">Elite.Achievements</h3>
              <div className="space-y-6">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="group flex flex-col md:flex-row items-center gap-8 p-1 glass-card border-white/5 hover:bg-white/[0.03] transition-all"
                  >
                    <div className={`w-full md:w-48 aspect-video md:aspect-square rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-500`}>
                       <item.icon size={48} strokeWidth={1.5} />
                    </div>
                    <div className="p-6 md:p-0">
                      <h4 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-muted-foreground font-light leading-relaxed max-w-2xl">{item.desc}</p>
                      <div className="mt-4 flex items-center gap-2 text-primary font-display text-[10px] tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-all">
                        <span>DETAILED REPORT</span>
                        <TrendingUp size={12} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
