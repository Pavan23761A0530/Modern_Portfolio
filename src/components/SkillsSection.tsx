import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Database, Terminal } from 'lucide-react';

const skills = [
  { name: "Java", category: "Programming", icon: Code, color: "text-orange-400" },
  { name: "Python", category: "Programming", icon: Code, color: "text-blue-400" },
  { name: "C", category: "Programming", icon: Code, color: "text-gray-400" },
  { name: "SQL", category: "Database", icon: Database, color: "text-green-400" },
  { name: "AWS Cloud Practitioner", category: "Cloud", icon: Cloud, color: "text-yellow-400" }
];

const tools = [
  { name: "VS Code", icon: Terminal },
  { name: "Cursor", icon: Terminal },
  { name: "Code Editors", icon: Terminal },
  { name: "Compilers", icon: Terminal }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">
            Skills & Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold mb-8 text-center lg:text-left">
              Technical Skills
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-all duration-300">
                      <skill.icon className={skill.color} size={28} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">{skill.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold mb-8 text-center lg:text-left">
              Development Tools
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-all duration-300">
                      <tool.icon className="text-accent" size={28} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{tool.name}</h4>
                      <p className="text-sm text-muted-foreground">Development Tool</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;