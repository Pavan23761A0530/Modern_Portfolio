import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
    to_email: 'kommojupavankumarganesh@gmail.com', // Your email as recipient
    reply_to: '' // Will be set to sender's email
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // EmailJS Configuration - Replace these with your actual values from EmailJS dashboard
  const EMAILJS_SERVICE_ID = 'service_y93ocyl'; // Get from EmailJS dashboard
  const EMAILJS_TEMPLATE_ID = 'template_yelml2p'; // Get from EmailJS dashboard  
  const EMAILJS_PUBLIC_KEY = 'ZF4artAvY_ImBV6-U'; // Get from EmailJS dashboard

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = 'Name is required';
    } else if (formData.user_name.trim().length < 2) {
      newErrors.user_name = 'Name must be at least 2 characters';
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required';
    } else if (!validateEmail(formData.user_email)) {
      newErrors.user_email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Set reply_to email to sender's email before sending
      setFormData(prev => ({ ...prev, reply_to: prev.user_email }));
      
      // Initialize EmailJS (only needed once, but safe to call multiple times)
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      console.log('EmailJS Success:', result.text);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({ 
        user_name: '', 
        user_email: '', 
        subject: '', 
        message: '',
        to_email: 'kommojupavankumarganesh@gmail.com',
        reply_to: ''
      });
      setErrors({});
      
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      
      let errorMessage = "There was an error sending your message. Please try again.";
      
      if (error.text) {
        errorMessage = `EmailJS Error: ${error.text}`;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Failed to Send Message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kommojupavankumarganesh@gmail.com",
      href: "mailto:kommojupavankumarganesh@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9391634596",
      href: "tel:+919391634596"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mylavaram, Andhra Pradesh, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Pavan23761A0530",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/pavan-kumar-ganesh-kommoju-961553318",
      color: "hover:text-blue-400"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/btw_itzpavan",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-card/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities, projects, or just have a tech conversation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card p-4 flex items-center gap-4 hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-all duration-300">
                      <info.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`glass-card p-4 hover:scale-110 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-display font-bold mb-6">Send Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg bg-input border transition-colors duration-300 ${
                        errors.user_name ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'
                      } focus:outline-none`}
                      placeholder="Your full name"
                    />
                    {errors.user_name && (
                      <p className="text-red-500 text-sm mt-1">{errors.user_name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg bg-input border transition-colors duration-300 ${
                        errors.user_email ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'
                      } focus:outline-none`}
                      placeholder="your.email@example.com"
                    />
                    {errors.user_email && (
                      <p className="text-red-500 text-sm mt-1">{errors.user_email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg bg-input border transition-colors duration-300 ${
                      errors.subject ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'
                    } focus:outline-none`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg bg-input border transition-colors duration-300 resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'
                    } focus:outline-none`}
                    placeholder="Your message here... (minimum 10 characters)"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                 </div>

                {/* Hidden fields for EmailJS template */}
                <input type="hidden" name="to_email" value={formData.to_email} />
                <input type="hidden" name="reply_to" value={formData.user_email} />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="neon-button w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
                
                <div className="text-sm text-muted-foreground text-center">
                  <p>* Required fields</p>
                  <p className="mt-1">Usually respond within 24 hours</p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
