import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Code, Briefcase, TrendingUp, BookOpen, Target, Globe } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const stats = [
  { label: "Education", value: "B.Tech CSE", icon: GraduationCap, emoji: "🎓" },
  { label: "Projects", value: "5+", icon: Code, emoji: "💻" },
  { label: "Achievements", value: "10+", icon: Award, emoji: "🏆" },
  { label: "CGPA", value: "9.0", icon: TrendingUp, emoji: "📈" }
];

const highlights = [
  {
    title: "NASA Space Apps Global Winner",
    description: "Recognized internationally for developing innovative technology solutions during the world's largest space innovation hackathon organized by NASA.",
    icon: Globe,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "AICTE Yukti Innovation Finalist",
    description: "Selected among India's innovative student teams for building scalable technology solutions with real-world social impact.",
    icon: Target,
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Full Stack Development Intern",
    description: "Successfully completed industry internships where I developed scalable MERN Stack applications, collaborated with development teams, and gained hands-on software engineering experience.",
    icon: Briefcase,
    color: "from-emerald-500 to-teal-600"
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-background">
      {/* Background Ambient Effects */}
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: About Me Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 w-full sticky top-32"
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000}>
              <div className="glass-card p-10 relative group overflow-hidden border-white/10 hover:border-primary/30 transition-all duration-500">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <BookOpen className="w-[120px] h-[120px] text-primary" />
                </div>
                
                <h3 className="text-primary font-display tracking-[0.5em] text-[10px] mb-4">About Me</h3>
                <h2 className="text-4xl font-display font-bold mb-8 leading-tight">Hello, I'm <span className="gradient-text-cyan-blue">Pavan Kumar Ganesh</span></h2>
                
                <div className="space-y-6 mb-10">
                  <p className="text-muted-foreground leading-relaxed font-light text-base">
                    I am a Computer Science Engineering student with a strong passion for Artificial Intelligence, Full Stack Development, Machine Learning, and building impactful software solutions. I enjoy solving real-world problems by designing scalable applications that combine clean architecture, modern technologies, and exceptional user experiences.
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-light text-base">
                    Through internships, hackathons, and innovative projects, I have continuously strengthened my technical expertise while developing teamwork, leadership, and problem-solving skills. My goal is to contribute to organizations that value innovation, continuous learning, and engineering excellence.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  {stats.map((stat, i) => (
                    <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 group/stat">
                      <div className="text-primary mb-2 transition-transform group-hover/stat:scale-110 flex items-center gap-1">
                         <span className="text-xl">{stat.emoji}</span>
                         <stat.icon className="w-4 h-4" />
                      </div>
                      <p className="text-2xl font-display font-bold text-white mb-1">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* Right: Who I Am & Highlights */}
          <div className="lg:w-2/3 w-full space-y-20">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <h3 className="text-primary font-display tracking-[0.5em] text-[10px] mb-4">Who I Am</h3>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">About <span className="gradient-text-emerald-cyan">Me</span></h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 glass-card border-white/5 hover:border-primary/20 transition-all duration-300">
                   <h4 className="font-display font-bold text-lg mb-4 flex items-center gap-3">
                      <Globe className="text-primary w-5 h-5" />
                      Artificial Intelligence & Machine Learning
                   </h4>
                   <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      Passionate about developing intelligent systems using machine learning, deep learning, and modern AI technologies to solve practical business and real-world challenges.
                   </p>
                </div>
                <div className="p-8 glass-card border-white/5 hover:border-primary/20 transition-all duration-300">
                   <h4 className="font-display font-bold text-lg mb-4 flex items-center gap-3">
                      <Code className="text-accent w-5 h-5" />
                      Full Stack Development & Cloud
                   </h4>
                   <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      Experienced in building responsive full-stack web applications using the MERN Stack, REST APIs, databases, cloud technologies, and modern deployment workflows.
                   </p>
                </div>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="space-y-10"
            >
              <h3 className="text-primary font-display tracking-[0.5em] text-[10px]">Highlights</h3>
              <div className="space-y-8">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 8 }}
                    className="group flex flex-col md:flex-row items-start gap-8 p-1 glass-card border-white/5 hover:bg-white/[0.03] transition-all duration-300"
                  >
                    <div className={`w-full md:w-48 aspect-video md:aspect-square rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-500`}>
                       <item.icon className="w-12 h-12" strokeWidth={1.5} />
                    </div>
                    <div className="p-6 md:p-0">
                      <h4 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-muted-foreground font-light leading-relaxed max-w-2xl text-base">{item.description}</p>
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
