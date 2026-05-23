import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, Shield, Activity, Database, Layout, Sparkles } from 'lucide-react';

const AI_STEPS = [
  { text: "INITIALIZING NEURAL LOGIC...", icon: Cpu },
  { text: "SYNCING REPOSITORY TELEMETRY...", icon: Database },
  { text: "DECRYPTING SECURITY PROTOCOLS...", icon: Shield },
  { text: "RENDER ARCHITECTURE READY.", icon: Layout },
];

const LoadingScreen: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev < AI_STEPS.length - 1 ? prev + 1 : prev));
    }, 1000);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsDone(true), 500);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 200);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, []);

  if (isDone) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[500] bg-black flex flex-col items-center justify-center p-6 overflow-hidden"
    >
      {/* Background Neural Matrix Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative w-full max-w-xl flex flex-col items-center">
        {/* Animated Brand Core */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 rounded-[2.5rem] bg-primary/10 border-2 border-primary/40 flex items-center justify-center mb-12 shadow-[0_0_50px_rgba(0,255,255,0.2)] relative group"
        >
          <Cpu size={60} className="text-primary animate-pulse" />
          <div className="absolute -inset-4 rounded-[3rem] border border-primary/20 animate-spin-slow"></div>
          <div className="absolute -inset-8 rounded-[3.5rem] border border-primary/10 animate-reverse-spin"></div>
        </motion.div>

        <div className="space-y-4 w-full">
           <div className="flex justify-between items-end mb-2">
              <div className="flex flex-col">
                 <h1 className="text-2xl font-display font-black text-white tracking-widest uppercase">PKG.SYS_BOOT</h1>
                 <div className="flex items-center gap-2 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-[10px] tracking-[0.4em] font-bold text-primary uppercase">Neural Sync Authorization</span>
                 </div>
              </div>
              <div className="text-right">
                 <span className="text-4xl font-display font-black text-white">{Math.min(100, Math.floor(progress))}%</span>
              </div>
           </div>

           {/* Progress Bar Container */}
           <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 relative">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-primary via-accent to-primary shadow-[0_0_20px_rgba(0,255,255,0.4)]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-shimmer"></div>
           </div>

           {/* AI Logs Terminal */}
           <div className="mt-12 p-6 glass-card bg-black/40 border-white/5 font-mono text-[9px] min-h-[120px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                 <motion.div
                   key={currentStep}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   className="flex items-center gap-4 text-primary"
                 >
                    <Terminal size={14} />
                    <span className="tracking-[0.4em] font-black uppercase">{AI_STEPS[currentStep].text}</span>
                 </motion.div>
              </AnimatePresence>
              
              <div className="mt-4 flex gap-1 opacity-20 overflow-hidden">
                 {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-[1px] h-3 bg-primary animate-pulse" style={{ animationDelay: `${i*0.1}s` }}></div>
                 ))}
              </div>
           </div>
        </div>

        <div className="mt-12 opacity-20 flex flex-col items-center gap-2">
           <Sparkles size={20} className="text-primary" />
           <span className="text-[8px] tracking-[1em] uppercase font-bold">Initializing Premium Interface</span>
        </div>
      </div>
      
      {/* HUD Edge Elements */}
      <div className="absolute top-10 left-10 opacity-20 flex flex-col gap-2">
         {[1,2,3,4].map(i => <div key={i} className="w-12 h-[2px] bg-primary"></div>)}
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 flex flex-col gap-2 items-end">
         {[1,2,3,4].map(i => <div key={i} className="w-20 h-[2px] bg-primary"></div>)}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
