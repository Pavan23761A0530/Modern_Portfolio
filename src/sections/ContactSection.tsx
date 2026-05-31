import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Send, CheckCircle2, Download, Terminal, MessageSquare, Globe, Activity, Rocket, FileText } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/kommojupavankumarganesh@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _timestamp: new Date().toLocaleString()
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Contact error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: "https://github.com/Pavan23761A0530", label: "Source Protocol", name: "GitHub" },
    { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/feed/", label: "Sync Network", name: "LinkedIn" },
    { icon: <Mail className="w-6 h-6" />, href: "mailto:kommojupavankumarganesh@gmail.com", label: "Direct Uplink", name: "Email" }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-background">
      {/* Background Particles & Effects */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[200px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Branding & Message */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-8">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] tracking-[0.4em] font-black text-primary uppercase">Uplink.available</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-display font-black leading-[0.9] mb-10 tracking-tighter uppercase">
              LET'S BUILD <br />
              <span className="gradient-text glow-text">THE FUTURE</span>
            </h2>

            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12 max-w-lg">
              Recruitment protocols are currently open. I am available for high-density engineering roles and innovative collaborations globally.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {socialLinks.map((social, i) => (
                <Tilt key={i} tiltMaxAngleX={15} tiltMaxAngleY={15}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-6 flex flex-col items-center gap-4 border-white/5 hover:border-primary/50 transition-all group"
                  >
                    <div className="text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-500">
                      {social.icon}
                    </div>
                    <div className="text-center">
                       <p className="text-[8px] tracking-widest text-muted-foreground uppercase mb-1">{social.label}</p>
                       <p className="text-[11px] font-display font-black uppercase text-white">{social.name}</p>
                    </div>
                  </a>
                </Tilt>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
               <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 flex-grow">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                     <Activity className="w-7 h-7" />
                  </div>
                  <div>
                     <p className="text-[10px] tracking-widest text-primary font-black uppercase mb-1">Current Status</p>
                     <p className="text-lg font-display font-bold text-white uppercase tracking-tight">OPEN FOR OPPORTUNITIES</p>
                  </div>
               </div>

               <motion.a
                 href="https://drive.google.com/file/d/1nd5uTIW5BTanaLyojMsVWlTzK5vFXLL9/view?usp=drive_link"
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ y: -5 }}
                 className="glass-card p-6 flex flex-col items-center justify-center gap-2 border-white/10 hover:border-primary/50 transition-all group"
               >
                  <FileText className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] font-display font-black tracking-widest uppercase">Resume</span>
               </motion.a>
            </div>
          </motion.div>

          {/* Right: Advanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-10 md:p-14 border-white/10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Rocket className="w-[150px] h-[150px] text-primary rotate-45" />
               </div>
               
               <h3 className="text-2xl font-display font-black text-white mb-10 flex items-center gap-4 uppercase tracking-tighter">
                  <Terminal className="w-6 h-6 text-primary" />
                  INITIATE_CONTACT
               </h3>

               <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2 group/field">
                      <label className="text-[10px] tracking-[0.4em] font-black text-muted-foreground uppercase transition-colors group-focus-within/field:text-primary">Source Name</label>
                      <input 
                        required 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="ENTER IDENTIFIER..."
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-all font-display text-[11px] tracking-widest uppercase text-white shadow-2xl"
                      />
                    </div>
                    <div className="space-y-2 group/field">
                      <label className="text-[10px] tracking-[0.4em] font-black text-muted-foreground uppercase transition-colors group-focus-within/field:text-primary">Return Path (Email)</label>
                      <input 
                        required 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="EMAIL@PROTOCOL.COM"
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-all font-display text-[11px] tracking-widest uppercase text-white shadow-2xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group/field">
                    <label className="text-[10px] tracking-[0.4em] font-black text-muted-foreground uppercase transition-colors group-focus-within/field:text-primary">Subject Protocol</label>
                    <input 
                      required 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="COLLABORATION / RECRUITMENT / QUERY"
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-all font-display text-[11px] tracking-widest uppercase text-white shadow-2xl"
                    />
                  </div>

                  <div className="space-y-2 group/field">
                    <label className="text-[10px] tracking-[0.4em] font-black text-muted-foreground uppercase transition-colors group-focus-within/field:text-primary">Payload (Message)</label>
                    <textarea 
                      required 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="ENTER DETAILED SPECIFICATIONS..."
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-all font-display text-[11px] tracking-widest uppercase text-white shadow-2xl resize-none"
                    ></textarea>
                  </div>

                  <button
                    disabled={isSubmitting || isSuccess}
                    className="neon-button w-full py-6 flex items-center justify-center gap-4 group relative overflow-hidden disabled:opacity-50"
                  >
                    <span className="font-display tracking-[0.5em] uppercase text-xs relative z-10 group-hover:text-black transition-colors font-black">
                      {isSubmitting ? "UPLOADING..." : isSuccess ? "TRANSMITTED" : "TRANSMIT MESSAGE"}
                    </span>
                    {isSuccess ? <CheckCircle2 className="w-6 h-6 relative z-10" /> : <Send className="w-6 h-6 relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />}
                  </button>
               </form>

               {/* Recruiter Friendly Tag */}
               <div className="mt-8 flex items-center justify-center gap-2 opacity-30">
                  <Globe className="w-3 h-3" />
                  <span className="text-[8px] tracking-widest uppercase font-mono">End-to-End Encrypted Recruitment Protocol</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
