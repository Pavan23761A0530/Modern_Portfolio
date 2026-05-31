import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Cpu, Rocket, Download, Terminal, User, Bot, FileText } from 'lucide-react';

const AI_NAME = "PAVAN_AI-V1";

const INITIAL_MESSAGES = [
  { 
    id: 1, 
    role: 'bot', 
    text: "GREETINGS. I AM THE NEURAL INTERFACE FOR PAVAN KUMAR. HOW CAN I ASSIST YOUR RECRUITMENT PROTOCOL?",
    timestamp: new Date().toLocaleTimeString()
  }
];

const PREDEFINED_QUESTIONS = [
  { text: "Tell me about Pavan's projects", category: "projects" },
  { text: "What are his top skills?", category: "skills" },
  { text: "NASA Space Apps Achievement", category: "achievements" },
  { text: "How to contact him?", category: "contact" },
  { text: "Download Resume", category: "resume" },
];

const RESPONSES: Record<string, string> = {
  projects: "Pavan has engineered high-impact systems including HomeBell (Service Platform), AI Snake Bite Detection, and Smart Spectacles for the visually impaired. Each project merges deep technical architecture with social innovation.",
  skills: "Technical Arsenal initialized: MERN Stack, Python for AI/ML, AWS Cloud, Java, and Cybersecurity. He specializes in building distributed systems and high-density neural models.",
  achievements: "System records show World-Class recognition: NASA Space Apps Global Global Winner and AICTE YUTI Innovation Finalist. His work represents the peak of competitive innovation.",
  contact: "Uplink protocols available: You can reach him through the contact form below or directly via LinkedIn. Response time estimated: < 2 Hours.",
  resume: "Resume decryption ready. You can download the latest PDF certification through the RESUME section of this terminal.",
  default: "I AM OPTIMIZED TO DISCUSS PROJECTS, SKILLS, AND ACHIEVEMENTS. PLEASE SELECT A RECRUITMENT PARAMETER."
};

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg = { 
      id: Date.now(), 
      role: 'user', 
      text, 
      timestamp: new Date().toLocaleTimeString() 
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI logic
    setTimeout(() => {
      let botResponse = RESPONSES.default;
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes("project")) botResponse = RESPONSES.projects;
      else if (lowerText.includes("skill")) botResponse = RESPONSES.skills;
      else if (lowerText.includes("nasa") || lowerText.includes("achievement")) botResponse = RESPONSES.achievements;
      else if (lowerText.includes("contact")) botResponse = RESPONSES.contact;
      else if (lowerText.includes("resume") || lowerText.includes("cv")) botResponse = RESPONSES.resume;

      const botMsg = { 
        id: Date.now() + 1, 
        role: 'bot', 
        text: botResponse, 
        timestamp: new Date().toLocaleTimeString() 
      };
      
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating AI Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 z-[150] w-16 h-16 rounded-2xl bg-primary text-black flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.4)] group overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
        <Sparkles className="w-7 h-7 relative z-10" />
      </motion.button>

      {/* Chat Modal Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 100, x: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 100, x: 100 }}
            className="fixed bottom-32 right-10 z-[200] w-[90vw] md:w-[450px] h-[600px] glass-card border-primary/30 flex flex-col overflow-hidden shadow-2xl shadow-primary/20"
          >
            {/* Header */}
            <div className="p-6 bg-primary/10 border-b border-primary/20 flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary relative">
                     <Cpu className="w-5 h-5" />
                     <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse"></div>
                  </div>
                  <div>
                     <h3 className="text-sm font-display font-black text-primary tracking-widest uppercase">{AI_NAME}</h3>
                     <p className="text-[8px] font-mono text-muted-foreground uppercase">Neural Proxy Active</p>
                  </div>
               </div>
               <button onClick={() => setIsOpen(false)} className="text-white hover:text-red-500 transition-colors">
                  <X className="w-5 h-5" />
               </button>
            </div>

            {/* Chat History */}
            <div 
              ref={scrollRef}
              className="flex-grow p-6 overflow-y-auto space-y-6 custom-scrollbar bg-black/40"
            >
               {messages.map((msg) => (
                 <motion.div
                   key={msg.id}
                   initial={{ opacity: 0, x: msg.role === 'bot' ? -20 : 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                 >
                    <div className={`max-w-[85%] p-4 rounded-2xl flex flex-col gap-2 ${
                      msg.role === 'bot' 
                        ? 'bg-white/5 border border-white/10 rounded-tl-none' 
                        : 'bg-primary/20 border border-primary/40 rounded-tr-none'
                    }`}>
                       <div className="flex items-center gap-2 mb-1">
                          {msg.role === 'bot' ? <Bot className="w-3 h-3 text-primary" /> : <User className="w-3 h-3 text-accent" />}
                          <span className="text-[8px] font-black tracking-widest uppercase opacity-50">{msg.role}</span>
                       </div>
                       <p className="text-[13px] leading-relaxed font-light tracking-wide">{msg.text}</p>
                       
                       {msg.role === 'bot' && msg.text === RESPONSES.resume && (
                          <motion.a
                            href="https://drive.google.com/file/d/1nd5uTIW5BTanaLyojMsVWlTzK5vFXLL9/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-primary text-black font-display font-black text-[10px] uppercase tracking-widest shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all"
                          >
                             <Download className="w-3.5 h-3.5" />
                             Download Protocol
                          </motion.a>
                       )}
                       
                       <span className="text-[7px] font-mono self-end opacity-30 uppercase">{msg.timestamp}</span>
                    </div>
                 </motion.div>
               ))}
               
               {isTyping && (
                 <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none">
                       <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                       </div>
                    </div>
                 </div>
               )}
            </div>

            {/* Quick Replies */}
            <div className="p-4 border-t border-white/5 bg-black/20 overflow-x-auto whitespace-nowrap no-scrollbar flex gap-2">
               {PREDEFINED_QUESTIONS.map((q) => (
                 <button
                   key={q.text}
                   onClick={() => handleSendMessage(q.text)}
                   className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:border-primary/50 hover:text-primary transition-all shrink-0"
                 >
                   {q.text}
                 </button>
               ))}
            </div>

            {/* Input Footer */}
            <div className="p-6 border-t border-primary/20 bg-primary/5">
               <div className="relative group">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                    placeholder="ENTER QUERY PARAMETER..."
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-6 pr-14 focus:outline-none focus:border-primary/50 transition-all font-display text-[11px] tracking-widest uppercase text-white placeholder:text-muted-foreground/30"
                  />
                  <button 
                    onClick={() => handleSendMessage(inputValue)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-black transition-all"
                  >
                    <Send className="w-4.5 h-4.5" />
                  </button>
               </div>
               <div className="mt-4 flex justify-between items-center opacity-30">
                  <div className="flex gap-1">
                     {[1,2,3,4].map(i => <div key={i} className="w-[2px] h-2 bg-primary"></div>)}
                  </div>
                  <span className="text-[7px] font-mono uppercase tracking-[0.3em]">Encryption Status: High Density</span>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
