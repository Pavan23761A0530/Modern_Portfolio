import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Cpu, Download, User, Bot, RefreshCw } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { grokApi, type Message as GrokMessage } from '@/services/grokApi';

const AI_NAME = "Pavan's Assistant";

const PREDEFINED_QUESTIONS = [
  { text: "Tell me about Pavan's projects" },
  { text: "What are his top skills?" },
  { text: "NASA Space Apps Achievement" },
  { text: "How to contact him?" },
  { text: "Download Resume" },
];

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm Pavan's AI assistant. How can I help you learn about Pavan today?",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [messages, isTyping]);

  const handleRetry = useCallback(() => {
    setError(null);
    // Trigger the last user message again if available
    const lastUserMessage = [...messages].reverse().find(msg => msg.role === 'user');
    if (lastUserMessage) {
      handleSendMessage(lastUserMessage.content);
    }
  }, [messages]);

  const handleSendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString()
    };

    const assistantMessageId = (Date.now() + 1).toString();
    const assistantMessage: ChatMessage = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage, assistantMessage]);
    setInputValue("");
    setIsLoading(true);
    setIsTyping(true);
    setError(null);

    try {
      // Prepare messages for API, excluding id and timestamp
      const apiMessages: Pick<GrokMessage, 'role' | 'content'>[] = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      // Add the new user message
      apiMessages.push({
        role: userMessage.role,
        content: userMessage.content
      });

      await grokApi.sendMessage(apiMessages, (chunk) => {
        setMessages(prev => prev.map(msg => 
          msg.id === assistantMessageId 
            ? { ...msg, content: msg.content + chunk }
            : msg
        ));
      });
    } catch (err) {
      console.error('[AIAssistant] Error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  }, [messages, isLoading]);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 z-[150] w-16 h-16 rounded-2xl bg-primary text-black flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.4)] group overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
        <Sparkles className="w-7 h-7 relative z-10" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 100, x: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 100, x: 100 }}
            className="fixed bottom-32 right-10 z-[200] w-[90vw] md:w-[450px] h-[600px] glass-card border-primary/30 flex flex-col overflow-hidden shadow-2xl shadow-primary/20"
          >
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

            <div 
              ref={scrollRef}
              className="flex-grow p-6 overflow-y-auto space-y-6 custom-scrollbar bg-black/40"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.role === 'assistant' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl flex flex-col gap-2 ${
                    msg.role === 'assistant'
                      ? 'bg-white/5 border border-white/10 rounded-tl-none'
                      : 'bg-primary/20 border border-primary/40 rounded-tr-none'
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      {msg.role === 'assistant' ? <Bot className="w-3 h-3 text-primary" /> : <User className="w-3 h-3 text-accent" />}
                      <span className="text-[8px] font-black tracking-widest uppercase opacity-50">
                        {msg.role}
                      </span>
                    </div>
                    <div className="text-[13px] leading-relaxed font-light tracking-wide">
                      <ReactMarkdown
                        components={{
                          code({ node, inline, className, children, ...props }: any) {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                              <div className="mt-2 mb-2">
                                <SyntaxHighlighter
                                  style={tomorrow}
                                  language={match[1]}
                                  PreTag="div"
                                  className="rounded-md"
                                  {...props}
                                >
                                  {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                              </div>
                            ) : (
                              <code className={`${className} bg-white/10 px-1 rounded`} {...props}>
                                {children}
                              </code>
                            );
                          },
                          a: ({ ...props }) => (
                            <a target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" {...props} />
                          ),
                          ul: ({ ...props }) => (
                            <ul className="list-disc list-inside space-y-1 ml-2" {...props} />
                          ),
                          ol: ({ ...props }) => (
                            <ol className="list-decimal list-inside space-y-1 ml-2" {...props} />
                          ),
                          h1: ({ ...props }) => (
                            <h1 className="text-xl font-bold text-white mb-2" {...props} />
                          ),
                          h2: ({ ...props }) => (
                            <h2 className="text-lg font-bold text-white mb-1" {...props} />
                          ),
                          h3: ({ ...props }) => (
                            <h3 className="text-md font-bold text-white mb-1" {...props} />
                          ),
                          strong: ({ ...props }) => (
                            <strong className="text-white font-bold" {...props} />
                          ),
                          blockquote: ({ ...props }) => (
                            <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground" {...props} />
                          )
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                    {msg.role === 'assistant' && (msg.content.toLowerCase().includes("resume") || msg.content.toLowerCase().includes("cv")) && (
                      <motion.a
                        href="https://drive.google.com/file/d/17sKy8sG4mBI1Dlb3tRxQFSKIMpBlIRZg/view?usp=sharing"
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
              ))}

              {isTyping && messages[messages.length - 1]?.content === '' && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center"
                >
                  <div className="bg-red-900/30 border border-red-500/30 p-4 rounded-2xl text-center">
                    <p className="text-red-300 text-sm mb-2">{error}</p>
                    <button
                      onClick={handleRetry}
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 text-sm hover:bg-red-500/30 transition-all"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Retry
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="p-4 border-t border-white/5 bg-black/20 overflow-x-auto whitespace-nowrap no-scrollbar flex gap-2">
              {PREDEFINED_QUESTIONS.map((q) => (
                <button
                  key={q.text}
                  onClick={() => handleSendMessage(q.text)}
                  disabled={isLoading}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:border-primary/50 hover:text-primary transition-all shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {q.text}
                </button>
              ))}
            </div>

            <div className="p-6 border-t border-primary/20 bg-primary/5">
              <div className="relative group">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  disabled={isLoading}
                  placeholder="Ask about Pavan..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-6 pr-14 focus:outline-none focus:border-primary/50 transition-all font-display text-[11px] tracking-widest uppercase text-white placeholder:text-muted-foreground/30 disabled:opacity-50"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={isLoading || !inputValue.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <RefreshCw className="w-4.5 h-4.5" />
                    </motion.div>
                  ) : (
                    <Send className="w-4.5 h-4.5" />
                  )}
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
