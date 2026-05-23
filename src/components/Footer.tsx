import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border/30">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-muted-foreground">Made with</span>
            <Heart className="text-red-500 fill-current" size={16} />
            <span className="text-muted-foreground">and</span>
            <Code className="text-primary" size={16} />
            <span className="text-muted-foreground">by</span>
            <span className="font-semibold text-primary">Pavan Kumar Ganesh Kommoju</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} Pavan Kumar Ganesh Kommoju. All rights reserved.
          </p>
          
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span>Built with React</span>
            <span>•</span>
            <span>Powered by Vite</span>
            <span>•</span>
            <span>Styled with Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;