import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Cpu, Download, User, Bot } from 'lucide-react';
import axios from 'axios';

const AI_NAME = "Pavan's Assistant";

// System prompt about Pavan
const SYSTEM_PROMPT = `You are a friendly, professional assistant for Pavan Kumar Ganesh's portfolio website. Your job is to help recruiters and visitors learn about Pavan's skills, projects, and experience in a clear, concise way.

Pavan's Background:
- Full Stack Developer & AI/ML Engineer
- B.Tech in Computer Science at LBRCE Engineering College
- NASA Space Apps Global Winner (2024)
- AICTE YUTI Innovation Finalist (2024)
- Internships at YugantaAI (Full Stack), IIT Kharagpur (AI Research), and Salesforce

Key Skills:
- Frontend: React, TypeScript, Tailwind CSS
- Backend: Node.js, Express, Python
- AI/ML: TensorFlow, PyTorch, Scikit-learn
- Cloud & DevOps: AWS, Git
- Databases: MongoDB, SQL
- Other: Java, Cybersecurity

Notable Projects:
- HomeBell: Service platform for home services
- AI Snake Bite Detection: ML model to identify snake types
- Smart Spectacles: Assistive tech for visually impaired
- Car Price Prediction: ML model for estimating car prices
- House Tax Calculator: Web app for tax calculations

Personality:
- Friendly and professional
- Focus on clarity and brevity
- Help recruiters quickly understand Pavan's value
- Always polite and helpful

When asked for resume, provide the link: https://drive.google.com/file/d/1nd5uTIW5BTanaLyojMsVWlTzK5vFXLL9/view?usp=drive_link

For contact: LinkedIn (https://www.linkedin.com/feed/), Email (kommojupavankumarganesh@gmail.com), or use the contact form on the website.`;

const FALLBACK_RESPONSES = {
  projects: "Pavan has worked on several impactful projects including HomeBell (service platform), AI Snake Bite Detection, Smart Spectacles for visually impaired, Car Price Prediction, and House Tax Calculator.",
  skills: "Pavan's key skills include React, TypeScript, Node.js, Python, TensorFlow, PyTorch, AWS, MongoDB, SQL, Java, and Cybersecurity.",
  achievements: "Pavan is a NASA Space Apps Global Winner (2024) and AICTE YUTI Innovation Finalist (2024).",
  contact: "You can reach Pavan via LinkedIn (https://www.linkedin.com/feed/), Email (kommojupavankumarganesh@gmail.com), or use the contact form on the website.",
  resume: "You can download Pavan's resume here: https://drive.google.com/file/d/1nd5uTIW5BTanaLyojMsVWlTzK5vFXLL9/view?usp=drive_link",
  default: "I'm happy to help you learn about Pavan! Ask about his projects, skills, achievements, or how to contact him."
};

const PREDEFINED_QUESTIONS = [
  { text: "Tell me about Pavan's projects", category: "projects" },
  { text: "What are his top skills?", category: "skills" },
  { text: "NASA Space Apps Achievement", category: "achievements" },
  { text: "How to contact him?", category: "contact" },
  { text: "Download Resume", category: "resume" },
];

interface Message {
  id: number;
  role: 'user' | 'bot';
  text: string;
  timestamp: string;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'bot',
      text: "Hi! I'm Pavan's assistant. How can I help you today?",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [currentTypingId, setCurrentTypingId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Typing animation effect
  useEffect(() => {
    if (!isTyping || currentTypingId === null) {
      setDisplayedText("");
      return;
    }

    const botMessage = messages.find(m => m.id === currentTypingId);
    if (!botMessage) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < botMessage.text.length) {
        setDisplayedText(botMessage.text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setCurrentTypingId(null);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isTyping, currentTypingId, messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { 
      id: Date.now(), 
      role: 'user', 
      text, 
      timestamp: new Date().toLocaleTimeString() 
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    
    try {
      if (!apiKey || apiKey.trim() === "") {
        // Fallback to predefined responses if no API key
        let botResponse = FALLBACK_RESPONSES.default;
        const lowerText = text.toLowerCase();
        
        if (lowerText.includes("project")) botResponse = FALLBACK_RESPONSES.projects;
        else if (lowerText.includes("skill")) botResponse = FALLBACK_RESPONSES.skills;
        else if (lowerText.includes("nasa") || lowerText.includes("achievement")) botResponse = FALLBACK_RESPONSES.achievements;
        else if (lowerText.includes("contact")) botResponse = FALLBACK_RESPONSES.contact;
        else if (lowerText.includes("resume") || lowerText.includes("cv")) botResponse = FALLBACK_RESPONSES.resume;

        const botMsg: Message = { 
          id: Date.now() + 1, 
          role: 'bot', 
          text: botResponse, 
          timestamp: new Date().toLocaleTimeString() 
        };
        setMessages(prev => [...prev, botMsg]);
        setCurrentTypingId(botMsg.id);
        return;
      }

      // Use OpenAI API
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.map(msg => ({
              role: msg.role === 'user' ? 'user' : 'assistant',
              content: msg.text
            })),
            { role: "user", content: text }
          ],
          temperature: 0.7,
          max_tokens: 500
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          }
        }
      );

      const aiText = response.data.choices[0].message.content;
      const botMsg: Message = { 
        id: Date.now() + 1, 
        role: 'bot', 
        text: aiText, 
        timestamp: new Date().toLocaleTimeString() 
      };
      
      setMessages(prev => [...prev, botMsg]);
      setCurrentTypingId(botMsg.id);
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      // Fallback to predefined responses on error
      let botResponse = FALLBACK_RESPONSES.default;
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes("project")) botResponse = FALLBACK_RESPONSES.projects;
      else if (lowerText.includes("skill")) botResponse = FALLBACK_RESPONSES.skills;
      else if (lowerText.includes("nasa") || lowerText.includes("achievement")) botResponse = FALLBACK_RESPONSES.achievements;
      else if (lowerText.includes("contact")) botResponse = FALLBACK_RESPONSES.contact;
      else if (lowerText.includes("resume") || lowerText.includes("cv")) botResponse = FALLBACK_RESPONSES.resume;

      const botMsg: Message = { 
        id: Date.now() + 1, 
        role: 'bot', 
        text: botResponse, 
        timestamp: new Date().toLocaleTimeString() 
      };
      
      setMessages(prev => [...prev, botMsg]);
      setCurrentTypingId(botMsg.id);
    }
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
                     <p className="text-[8px] font-mono text-muted-foreground uppercase">Online</p>
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
               {messages.map((msg) => {
                 const isCurrentlyTyping = isTyping && msg.id === currentTypingId;
                 return (
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
                         <p className="text-[13px] leading-relaxed font-light tracking-wide">
                           {isCurrentlyTyping ? displayedText : msg.text}
                           {isCurrentlyTyping && <span className="animate-pulse">|</span>}
                         </p>
                         
                         {msg.role === 'bot' && !isCurrentlyTyping && (msg.text.toLowerCase().includes("resume") || msg.text.toLowerCase().includes("cv")) && (
                            <motion.a
                              href="https://drive.google.com/file/d/1nd5uTIW5BTanaLyojMsVWlTzK5vFXLL9/view?usp=drive_link"
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-4 flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-primary text-black font-display font-black text-[10px] uppercase tracking-widest shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all"
                            >
                               <Download className="w-3.5 h-3.5" />
                               Download Resume
                            </motion.a>
                         )}
                         
                         <span className="text-[7px] font-mono self-end opacity-30 uppercase">{msg.timestamp}</span>
                      </div>
                   </motion.div>
                 );
               })}
               
               {isTyping && currentTypingId === null && (
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
                    placeholder="Ask about Pavan..."
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-6 pr-14 focus:outline-none focus:border-primary/50 transition-all font-display text-[11px] tracking-widest uppercase text-white placeholder:text-muted-foreground/30"
                  />
                  <button 
                    onClick={() => handleSendMessage(inputValue)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-black transition-all"
                  >
                    <Send className="w-4.5 h-4.5" />
                  </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
