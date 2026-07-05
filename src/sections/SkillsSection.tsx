import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Globe, 
  Database, 
  Shield, 
  Layout, 
  Server, 
  Cloud, 
  Terminal, 
  Search, 
  Code2,
  FileCode,
  Brain,
  Eye,
  Sparkles,
  Cylinder,
  Github,
  Code,
  BarChart3,
  Zap
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const categories = [
  { id: 'all', name: 'All Skills', icon: Terminal },
  { id: 'frontend', name: 'Frontend', icon: Layout },
  { id: 'backend', name: 'Backend', icon: Server },
  { id: 'ai', name: 'AI & ML', icon: Cpu },
  { id: 'cloud', name: 'Cloud', icon: Cloud },
  { id: 'db', name: 'Database', icon: Database },
  { id: 'tools', name: 'Tools', icon: Code2 },
];

interface Skill {
  name: string;
  category: string;
  icon: React.ElementType;
  color: string;
  description: string;
}

const skills: Skill[] = [
  // Frontend
  { 
    name: "React.js", 
    category: "frontend", 
    icon: Layout, 
    color: "from-cyan-400 to-blue-500",
    description: "Building dynamic, responsive user interfaces"
  },
  { 
    name: "HTML5", 
    category: "frontend", 
    icon: FileCode, 
    color: "from-orange-400 to-yellow-500",
    description: "Semantic markup and accessibility standards"
  },
  { 
    name: "CSS3", 
    category: "frontend", 
    icon: Code, 
    color: "from-blue-400 to-indigo-500",
    description: "Modern styling and responsive design"
  },
  { 
    name: "JavaScript", 
    category: "frontend", 
    icon: FileCode, 
    color: "from-yellow-400 to-orange-500",
    description: "Interactive and dynamic web applications"
  },
  { 
    name: "Tailwind CSS", 
    category: "frontend", 
    icon: Layout, 
    color: "from-teal-400 to-cyan-500",
    description: "Utility-first, rapid UI development"
  },

  // Backend
  { 
    name: "Node.js", 
    category: "backend", 
    icon: Server, 
    color: "from-green-500 to-emerald-600",
    description: "Scalable server-side applications and APIs"
  },
  { 
    name: "Express.js", 
    category: "backend", 
    icon: Globe, 
    color: "from-gray-400 to-gray-600",
    description: "Fast, unopinionated web framework"
  },
  { 
    name: "Java", 
    category: "backend", 
    icon: Server, 
    color: "from-orange-500 to-red-600",
    description: "Enterprise-level software development"
  },
  { 
    name: "Python", 
    category: "backend", 
    icon: Terminal, 
    color: "from-yellow-400 to-blue-500",
    description: "Versatile scripting and backend development"
  },

  // AI & ML
  { 
    name: "Machine Learning", 
    category: "ai", 
    icon: Brain, 
    color: "from-indigo-500 to-purple-600",
    description: "Data-driven insights and predictive modeling"
  },
  { 
    name: "Deep Learning", 
    category: "ai", 
    icon: Cpu, 
    color: "from-purple-600 to-blue-600",
    description: "Neural networks and AI model development"
  },
  { 
    name: "TensorFlow", 
    category: "ai", 
    icon: Cpu, 
    color: "from-orange-500 to-yellow-500",
    description: "End-to-end machine learning platform"
  },
  { 
    name: "OpenCV", 
    category: "ai", 
    icon: Eye, 
    color: "from-blue-600 to-indigo-700",
    description: "Computer vision and image processing"
  },
  { 
    name: "Generative AI", 
    category: "ai", 
    icon: Sparkles, 
    color: "from-violet-500 to-pink-600",
    description: "LLMs and creative AI applications"
  },

  // Databases
  { 
    name: "MySQL", 
    category: "db", 
    icon: Database, 
    color: "from-blue-500 to-cyan-500",
    description: "Relational database management system"
  },
  { 
    name: "MongoDB", 
    category: "db", 
    icon: Cylinder, 
    color: "from-green-600 to-green-800",
    description: "NoSQL document-oriented database"
  },
  { 
    name: "PostgreSQL", 
    category: "db", 
    icon: Database, 
    color: "from-indigo-500 to-blue-600",
    description: "Advanced relational database system"
  },

  // Cloud & DevOps
  { 
    name: "AWS", 
    category: "cloud", 
    icon: Cloud, 
    color: "from-yellow-400 to-orange-600",
    description: "Cloud infrastructure and services"
  },
  { 
    name: "Docker", 
    category: "cloud", 
    icon: Cpu, 
    color: "from-blue-400 to-blue-600",
    description: "Containerization and deployment"
  },
  { 
    name: "Git", 
    category: "cloud", 
    icon: Terminal, 
    color: "from-orange-600 to-red-600",
    description: "Version control and collaboration"
  },
  { 
    name: "GitHub", 
    category: "cloud", 
    icon: Github, 
    color: "from-gray-600 to-gray-800",
    description: "Code hosting and project management"
  },

  // Tools
  { 
    name: "VS Code", 
    category: "tools", 
    icon: Code2, 
    color: "from-blue-500 to-indigo-500",
    description: "Powerful, extensible code editor"
  },
  { 
    name: "Cursor AI", 
    category: "tools", 
    icon: Zap, 
    color: "from-cyan-400 to-purple-500",
    description: "AI-powered coding assistant"
  },
  { 
    name: "Power BI", 
    category: "tools", 
    icon: BarChart3, 
    color: "from-yellow-400 to-yellow-600",
    description: "Data visualization and business intelligence"
  },
  { 
    name: "Postman", 
    category: "tools", 
    icon: Globe, 
    color: "from-orange-400 to-red-500",
    description: "API development and testing"
  },
];

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = useMemo(() => {
    return skills.filter(skill => {
      const categoryMatch = activeCategory === 'all' || skill.category === activeCategory;
      const lowerQuery = searchQuery.toLowerCase();
      const nameMatch = skill.name.toLowerCase().includes(lowerQuery);
      
      const categoryObj = categories.find(c => c.id === skill.category);
      const categoryNameMatch = categoryObj?.name.toLowerCase().includes(lowerQuery) || false;
      
      return categoryMatch && (nameMatch || categoryNameMatch);
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-background">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12 md:mb-16"
        >
          <h3 className="text-primary font-display tracking-[0.5em] text-[8px] sm:text-[10px] mb-4 uppercase">Skillset</h3>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold leading-tight">Technical <span className="gradient-text-cyan-blue">Skills</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-light mt-4 md:mt-6 text-sm md:text-base">
             A curated collection of professional skills for modern software development.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 md:mb-12">
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 glass-card border-white/5 rounded-2xl w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-2 sm:px-4 rounded-xl text-[8px] sm:text-[10px] tracking-wider font-bold transition-all duration-500 ${
                  activeCategory === cat.id 
                    ? 'bg-primary text-black shadow-[0_0_20px_rgba(0,255,255,0.3)]' 
                    : 'text-muted-foreground hover:bg-white/5'
                }`}
              >
                <cat.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden sm:inline">{cat.name}</span>
              </button>
            ))}
          </div>

          <div className="relative group w-full md:w-64">
            <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <input 
              type="text" 
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 md:py-3 pl-10 md:pl-12 pr-3 md:pr-4 focus:outline-none focus:border-primary/50 transition-all text-sm"
            />
          </div>
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode='popLayout'>
            {filteredSkills.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
              >
                {filteredSkills.map((skill, i) => (
                  <motion.div
                    layout
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3, delay: i * 0.02 }}
                    className="h-full"
                  >
                    <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={2000} className="h-full">
                      <div className="glass-card p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group h-48 md:h-52 flex flex-col">
                        <div className={`absolute -right-8 -bottom-8 w-24 h-24 bg-gradient-to-br ${skill.color} blur-[50px] opacity-0 group-hover:opacity-30 transition-opacity duration-700`}></div>
                        
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-black transition-all duration-300 group-hover:scale-110 mb-5">
                          <skill.icon className="w-6 h-6" />
                        </div>

                        <h4 className="font-display font-bold text-base text-foreground group-hover:text-primary transition-colors mb-2">
                          {skill.name}
                        </h4>

                        <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed flex-grow">
                          {skill.description}
                        </p>

                        <div className="pt-3 mt-3 border-t border-white/5">
                          <span className="text-[8px] md:text-[9px] font-display tracking-[0.3em] uppercase text-white/60">
                            {categories.find(c => c.id === skill.category)?.name}
                          </span>
                        </div>
                      </div>
                    </Tilt>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center py-24 text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Search className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">No matching skills found.</h3>
                <p className="text-muted-foreground text-sm max-w-md">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
