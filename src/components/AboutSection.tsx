import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart, GraduationCap, Users, Target, BookOpen } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Clean & Close Work",
    description: "Delivering high-quality, maintainable code with attention to detail"
  },
  {
    icon: Users,
    title: "User-Centric Approach", 
    description: "Designing solutions that prioritize user experience and accessibility"
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Staying updated with latest technologies and industry best practices"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working effectively in teams to achieve common goals"
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with a drive for innovation and excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-primary">
              Pavan Kumar Ganesh Kommoju
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" size={20} />
                <span>Mylavaram, Andhra Pradesh, India</span>
              </div>
              
              <div className="flex items-center gap-3">
                <GraduationCap className="text-primary" size={20} />
                <span>B.Tech CSE at Lakireddy Balireddy College of Engineering</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Heart className="text-primary" size={20} />
                <span>Learning new things, gaming, coding</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing B.Tech in Computer Science and Engineering, 
              I'm passionate about exploring new technologies and creating 
              innovative solutions. My journey in tech has been driven by 
              curiosity and a commitment to excellence.
            </p>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-center lg:text-left">
              Core Values
            </h3>
            
            <div className="grid gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <value.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
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

export default AboutSection;