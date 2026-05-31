import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Download, 
  TrendingUp, 
  CheckCircle, 
  Rocket, 
  X, 
  Users, 
  Shield, 
  Target, 
  Star,
  Terminal,
  Cpu,
  Mail,
  Linkedin,
  Activity
} from 'lucide-react';

const highlights = [
  { text: "NASA Space Apps Global Global Winner", icon: Star },
  { text: "AICTE YUTI Innovation Finalist", icon: Target },
  { text: "MERN & AI Deployment Specialist", icon: Cpu },
  { text: "Security-First Architecture", icon: Shield },
];

const RecruiterSection: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section id="recruiter-mode" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Lights */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto">
        <div className="recruiter-hero glass-card border-primary/30 p-12 lg:p-20 relative group">
           {/* HUD Decorative Elements */}
           <div className="absolute top-10 right-10 hidden lg:flex flex-col items-end opacity-20">
              <span className="text-[10px] tracking-[0.5em] font-black text-primary uppercase">Authorization: EXECUTIVE</span>
              <div className="flex gap-1 mt-2">
                 {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-4 bg-primary"></div>)}
              </div>
           </div>

           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-8"
                 >
                    <Users className="w-4 h-4" />
                    <span className="text-[10px] tracking-[0.4em] font-black uppercase">Recruiter Protocol</span>
                 </motion.div>

                 <h2 className="text-4xl md:text-7xl font-display font-black leading-[0.9] mb-10 tracking-tighter uppercase">
                    WHY HIRE <br />
                    <span className="gradient-text">PAVAN KUMAR?</span>
                 </h2>

                 <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12 max-w-xl">
                    I don't just build software. I engineer <span className="text-white font-bold underline decoration-primary underline-offset-8">high-density ecosystems</span> that solve global challenges. My work at <strong>NASA Space Apps</strong> and <strong>IIT Kharagpur</strong> proves my capacity for elite-level innovation.
                 </p>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {highlights.map((item, i) => (
                       <div key={i} className="flex items-center gap-4 group/item">
                          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover/item:border-primary/40 transition-all">
                             <item.icon className="w-4.5 h-4.5" />
                          </div>
                          <span className="text-[11px] tracking-widest font-black uppercase text-foreground/80">{item.text}</span>
                       </div>
                    ))}
                 </div>

                 <div className="flex flex-wrap gap-6">
                    <button 
                      onClick={() => setIsOpen(true)}
                      className="neon-button px-10 py-5 flex items-center gap-4 group overflow-hidden"
                    >
                       <span className="relative z-10 font-display font-black tracking-[0.4em] text-[10px] uppercase">Executive Summary</span>
                       <TrendingUp className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
                    </button>
                    <a 
                      href="https://drive.google.com/file/d/1nd5uTIW5BTanaLyojMsVWlTzK5vFXLL9/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card px-10 py-5 border-white/10 hover:border-primary/40 flex items-center gap-4 group"
                    >
                       <FileText className="w-5 h-5" />
                       <span className="font-display font-black tracking-[0.4em] text-[10px] uppercase">One-Page Profile</span>
                    </a>
                 </div>
              </div>

              <div className="hidden lg:block relative">
                 <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
                 <div className="relative glass-card border-white/10 p-10 space-y-10 group-hover:border-primary/20 transition-all">
                    <div className="flex justify-between items-center mb-6">
                       <div className="flex gap-2">
                          {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-primary/40"></div>)}
                       </div>
                       <span className="text-[8px] font-mono tracking-widest text-muted-foreground uppercase text-primary">Live Capability Sync</span>
                    </div>

                    <div className="space-y-8">
                       {[
                         { label: "Frontend Excellence", val: 98 },
                         { label: "Engineering Rigor", val: 92 },
                         { label: "AI Integration", val: 95 },
                       ].map((stat, i) => (
                         <div key={i}>
                            <div className="flex justify-between items-center text-[10px] tracking-widest uppercase font-bold mb-3">
                               <span className="text-muted-foreground">{stat.label}</span>
                               <span className="text-primary">{stat.val}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: `${stat.val}%` }}
                                 transition={{ duration: 1.5, delay: 0.2 + (i*0.2) }}
                                 className="h-full bg-primary shadow-[0_0_15px_rgba(0,255,255,0.4)]"
                               />
                            </div>
                         </div>
                       ))}
                    </div>

                    <div className="p-8 rounded-2xl bg-white/5 border border-white/5 mt-10">
                       <div className="flex items-center gap-4 mb-4">
                          <CheckCircle className="w-6 h-6 text-primary" />
                          <h4 className="text-sm font-display font-black text-white uppercase tracking-widest">Hiring Available</h4>
                       </div>
                       <p className="text-[10px] text-muted-foreground leading-relaxed uppercase tracking-widest">Currently exploring high-impact AI/Full Stack engineering roles. Optimization ready for global teams.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Recruiter Summary Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6"
          >
             <motion.div
               initial={{ scale: 0.9, y: 40 }}
               animate={{ scale: 1, y: 0 }}
               exit={{ scale: 0.9, y: 40 }}
               className="glass-card w-full max-w-4xl max-h-[85vh] overflow-auto p-12 md:p-20 border-primary/20 relative"
             >
                <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-muted-foreground hover:text-red-500 transition-colors">
                   <X className="w-8 h-8" />
                </button>

                <div className="space-y-16">
                   <header className="text-center">
                      <h3 className="text-primary font-display font-black tracking-[0.5em] text-[12px] mb-6 uppercase">Executive Protocol</h3>
                      <h2 className="text-5xl font-display font-black text-white uppercase tracking-tighter">WHY PAVAN KUMAR?</h2>
                   </header>

                   <div className="grid md:grid-cols-2 gap-16">
                      <div className="space-y-10">
                         <div className="space-y-4">
                            <h4 className="text-sm font-display font-black text-white tracking-widest uppercase flex items-center gap-3">
                               <Rocket className="w-4.5 h-4.5 text-primary" />
                               Innovator DNA
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed font-light">
                               Proven ability to handle extreme pressure and complex data at <strong>NASA Space Apps</strong>. He doesn't just write code; he solves systemic problems.
                            </p>
                         </div>
                         <div className="space-y-4">
                            <h4 className="text-sm font-display font-black text-white tracking-widest uppercase flex items-center gap-3">
                               <Terminal className="w-4.5 h-4.5 text-primary" />
                               Full-Stack Mastery
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed font-light">
                               From React/Next.js interfaces to complex Node.js/Python backends and AI model deployment. A complete engineering package.
                            </p>
                         </div>
                      </div>

                      <div className="space-y-10">
                         <div className="space-y-4">
                            <h4 className="text-sm font-display font-black text-white tracking-widest uppercase flex items-center gap-3">
                               <Shield className="w-4.5 h-4.5 text-primary" />
                               Security Focused
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed font-light">
                               Integrates security-first protocols as a standard. Dedicated to building resilient, threat-resistant architectures for longevity.
                            </p>
                         </div>
                         <div className="space-y-4">
                            <h4 className="text-sm font-display font-black text-white tracking-widest uppercase flex items-center gap-3">
                               <Activity className="w-4.5 h-4.5 text-primary" />
                               Optimization Freak
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed font-light">
                               Obsessed with 95+ Lighthouse scores and 60 FPS animations. Engineering performance that defines user experience.
                            </p>
                         </div>
                      </div>
                   </div>

                   <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                      <div className="flex gap-6">
                         <a href="#" className="flex items-center gap-2 text-primary hover:text-white transition-colors">
                            <Mail className="w-4.5 h-4.5" />
                            <span className="text-[10px] font-black uppercase tracking-widest font-display underline underline-offset-4">Direct Message</span>
                         </a>
                         <a href="#" className="flex items-center gap-2 text-primary hover:text-white transition-colors">
                            <Linkedin className="w-4.5 h-4.5" />
                            <span className="text-[10px] font-black uppercase tracking-widest font-display underline underline-offset-4">LinkedIn Sync</span>
                         </a>
                      </div>
                      <a 
                        href="https://drive.google.com/file/d/1nd5uTIW5BTanaLyojMsVWlTzK5vFXLL9/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neon-button px-10 py-5 font-display font-black text-[10px] uppercase tracking-widest"
                      >
                        Download Resume.pdf
                      </a>
                   </div>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RecruiterSection;
