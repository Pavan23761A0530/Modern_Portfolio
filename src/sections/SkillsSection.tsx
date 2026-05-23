import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Globe, Database, Shield, Layout, Server, Cloud, Terminal, CheckCircle2, Search } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Zap = ({ className, size }: { className?: string; size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const categories = [
  { id: 'all', name: 'All Protocol', icon: Terminal },
  { id: 'frontend', name: 'Interface', icon: Layout },
  { id: 'backend', name: 'Neural Core', icon: Server },
  { id: 'ai', name: 'Intelligence', icon: Cpu },
  { id: 'cloud', name: 'Infrastructure', icon: Cloud },
  { id: 'security', name: 'Defense', icon: Shield },
  { id: 'db', name: 'Data Lake', icon: Database },
];

const skills = [
  { name: "React.js", category: "frontend", level: 95, icon: Layout, color: "from-cyan-400 to-blue-500" },
  { name: "Typescript", category: "frontend", level: 90, icon: Terminal, color: "from-blue-500 to-indigo-600" },
  { name: "Framer Motion", category: "frontend", level: 95, icon: Zap, color: "from-purple-500 to-pink-500" },
  { name: "Tailwind CSS", category: "frontend", level: 98, icon: Layout, color: "from-teal-400 to-cyan-500" },
  
  { name: "Node.js", category: "backend", level: 92, icon: Server, color: "from-green-500 to-emerald-600" },
  { name: "Java", category: "backend", level: 88, icon: Server, color: "from-orange-500 to-red-600" },
  { name: "Python", category: "backend", level: 95, icon: Terminal, color: "from-yellow-400 to-blue-500" },
  { name: "JSP / JDBC", category: "backend", level: 85, icon: Database, color: "from-red-400 to-orange-500" },
  
  { name: "Deep Learning", category: "ai", level: 82, icon: Cpu, color: "from-purple-600 to-blue-600" },
  { name: "GPT Architecture", category: "ai", level: 90, icon: Globe, color: "from-cyan-500 to-blue-500" },
  { name: "TensorFlow", category: "ai", level: 78, icon: Cpu, color: "from-orange-500 to-yellow-500" },
  { name: "Machine Learning", category: "ai", level: 92, icon: Cpu, color: "from-indigo-500 to-purple-600" },
  
  { name: "AWS Cloud", category: "cloud", level: 85, icon: Cloud, color: "from-yellow-500 to-orange-600" },
  { name: "Docker", category: "cloud", level: 80, icon: Cloud, color: "from-blue-400 to-blue-600" },
  { name: "CI/CD", category: "cloud", level: 88, icon: Globe, color: "from-green-400 to-teal-500" },
  
  { name: "MySQL", category: "db", level: 90, icon: Database, color: "from-blue-500 to-cyan-500" },
  { name: "PostgreSQL", category: "db", level: 85, icon: Database, color: "from-indigo-500 to-blue-600" },
  { name: "Prisma", category: "db", level: 92, icon: Database, color: "from-emerald-400 to-teal-600" },
  
  { name: "Cybersecurity", category: "security", level: 85, icon: Shield, color: "from-red-600 to-red-900" },
  { name: "Network Defense", category: "security", level: 75, icon: Shield, color: "from-gray-700 to-black" },
  
  { name: "Power BI", category: "all", level: 95, icon: Database, color: "from-yellow-400 to-yellow-600" },
  { name: "Cursor AI", category: "all", level: 100, icon: Terminal, color: "from-primary to-accent" },
];

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skills.filter(skill => 
    (activeCategory === 'all' || skill.category === activeCategory) &&
    skill.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-background">
      {/* Background Grids */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h3 className="text-primary font-display tracking-[0.5em] text-[10px] mb-4 uppercase">Capacities.bin</h3>
          <h2 className="text-4xl md:text-6xl font-display font-black leading-tight">TECHNICAL <span className="gradient-text">ARSENAL</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-light mt-6">
             A high-density collection of professional protocols and intelligence frameworks optimized for global performance.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1 glass-card border-white/5 rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] tracking-wider font-bold transition-all duration-500 uppercase ${
                  activeCategory === cat.id 
                    ? 'bg-primary text-black shadow-[0_0_20px_rgba(0,255,255,0.3)]' 
                    : 'text-muted-foreground hover:bg-white/5'
                }`}
              >
                <cat.icon size={14} />
                <span className="hidden sm:inline">{cat.name}</span>
              </button>
            ))}
          </div>

          <div className="relative group w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="SCAN ARSENAL..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary/50 transition-all font-display text-[10px] tracking-widest uppercase"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[600px]">
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill, i) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="h-full">
                  <div className="glass-card p-6 h-full flex flex-col group border-white/5 hover:border-primary/20 transition-all duration-500 relative overflow-hidden group">
                    {/* Animated background glow */}
                    <div className={`absolute -right-8 -bottom-8 w-24 h-24 bg-gradient-to-br ${skill.color} blur-[50px] opacity-0 group-hover:opacity-30 transition-opacity duration-700`}></div>
                    
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-black transition-all">
                        <skill.icon size={20} />
                      </div>
                      <div className="flex items-center gap-1">
                        {[1,2,3].map(dot => (
                          <div key={dot} className={`w-1 h-1 rounded-full ${skill.level >= (dot*30) ? 'bg-primary' : 'bg-white/10'}`}></div>
                        ))}
                      </div>
                    </div>

                    <h4 className="font-display font-bold text-sm tracking-widest text-foreground group-hover:text-primary transition-colors mb-4 uppercase">
                      {skill.name}
                    </h4>

                    <div className="mt-auto space-y-3">
                      <div className="flex justify-between items-center text-[8px] tracking-[.3em] font-bold text-muted-foreground uppercase">
                        <span>Proficiency</span>
                        <span className="font-mono text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${skill.color} shadow-[0_0_10px_rgba(0,255,255,0.3)]`}
                        />
                      </div>
                    </div>

                    {/* Verified indicator for high level */}
                    {skill.level >= 90 && (
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                         <CheckCircle2 size={12} className="text-primary" />
                      </div>
                    )}
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
