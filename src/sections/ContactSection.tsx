import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, CheckCircle2, Phone } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { toast } from 'sonner';

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

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    if (!formData.subject.trim()) {
      toast.error('Please enter a subject');
      return false;
    }
    if (!formData.message.trim()) {
      toast.error('Please enter a message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;
    if (isSubmitting) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/kommojupavankumarganesh@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Contact Form Submission: ${formData.subject}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Contact error:', error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Pavan23761A0530", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:kommojupavankumarganesh@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+919398597140", label: "Phone" }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[200px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Branding & Message */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-[20px] border border-primary/30 bg-black/30 backdrop-blur-xl glass-card">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-500 absolute animate-ping"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-[10px] tracking-[0.4em] font-bold text-primary uppercase">Open for Opportunities</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8 tracking-tighter">
              Let's Work <br />
              <span className="gradient-text-cyan-blue">Together</span>
            </h2>

            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12 max-w-lg">
              I'm currently open to new opportunities. Whether you have a project in mind or just want to connect, feel free to reach out.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-12">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <Tilt key={i} tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={2000}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card rounded-[20px] p-6 flex flex-col items-center gap-4 border-white/10 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-500 bg-black/30 backdrop-blur-xl group"
                    >
                      <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary border border-primary/30 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">{social.label}</p>
                    </a>
                  </Tilt>
                );
              })}
            </div>

            <div className="glass-card rounded-[20px] p-6 border-white/10 bg-black/30 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-green-500/20 to-green-400/20 flex items-center justify-center text-green-500 border border-green-500/30">
                  <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-green-500 font-bold uppercase mb-1">Current Status</p>
                  <p className="text-lg font-bold text-white">Open for Opportunities</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card rounded-[20px] p-8 md:p-10 border-white/10 bg-black/30 backdrop-blur-xl relative overflow-hidden">
               <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
               
               <h3 className="text-2xl font-display font-bold text-white mb-8">Get In Touch</h3>

               <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 group/field">
                      <label className="text-xs tracking-[0.2em] text-muted-foreground font-medium transition-colors group-focus-within/field:text-primary">Name</label>
                      <input 
                        required 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-black/40 border border-white/10 rounded-[14px] py-4 px-5 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all text-white placeholder:text-white/40"
                      />
                    </div>
                    <div className="space-y-2 group/field">
                      <label className="text-xs tracking-[0.2em] text-muted-foreground font-medium transition-colors group-focus-within/field:text-primary">Email</label>
                      <input 
                        required 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full bg-black/40 border border-white/10 rounded-[14px] py-4 px-5 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all text-white placeholder:text-white/40"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group/field">
                    <label className="text-xs tracking-[0.2em] text-muted-foreground font-medium transition-colors group-focus-within/field:text-primary">Subject</label>
                    <input 
                      required 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full bg-black/40 border border-white/10 rounded-[14px] py-4 px-5 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="space-y-2 group/field">
                    <label className="text-xs tracking-[0.2em] text-muted-foreground font-medium transition-colors group-focus-within/field:text-primary">Message</label>
                    <textarea 
                      required 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full bg-black/40 border border-white/10 rounded-[14px] py-4 px-5 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all text-white placeholder:text-white/40 resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(34,211,238,0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting || isSuccess}
                    className="w-full py-4 px-6 rounded-[14px] bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="tracking-wide">
                      {isSubmitting ? "Sending..." : isSuccess ? "Sent!" : "Send Message"}
                    </span>
                    {isSuccess ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </motion.button>
               </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
