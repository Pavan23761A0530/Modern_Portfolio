import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const StickyResume: React.FC = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed left-6 bottom-10 z-[150] hidden md:block"
    >
      <motion.a
        href="https://drive.google.com/file/d/1nd5uTIW5BTanaLyojMsVWlTzK5vFXLL9/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: 10 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center gap-4 bg-black/40 backdrop-blur-xl border border-white/10 p-2 pr-6 rounded-2xl group hover:border-primary/50 transition-all shadow-2xl"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30 group-hover:bg-primary group-hover:text-black transition-all shadow-[0_0_20px_rgba(0,255,255,0.2)]">
          <FileText className="w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-display font-black tracking-[0.2em] text-white uppercase leading-none">Resume.pdf</span>
          <span className="text-[7px] tracking-[0.3em] text-primary font-bold uppercase mt-1 opacity-60 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            <Download className="w-2 h-2" /> Download
          </span>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default StickyResume;
