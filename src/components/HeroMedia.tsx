import React, { memo, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pavanPic from '@/assets/pavanpic.png';

const HeroMedia = memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [showPortrait, setShowPortrait] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setVideoEnded(true);
      setTimeout(() => {
        setShowPortrait(true);
      }, 500);
    };

    video.addEventListener('ended', handleEnded);

    // Cleanup
    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center" style={{ perspective: '1000px' }}>
      <AnimatePresence mode="wait">
        {!showPortrait ? (
          <motion.div
            key="video"
            className="relative"
            initial={{ rotateY: 0, scale: 1, opacity: 1 }}
            animate={videoEnded ? { rotateY: 90, scale: 0.96, opacity: 0 } : { rotateY: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="relative w-full max-w-[620px] aspect-video">
              <video
                ref={videoRef}
                src="/intro.mp4"
                playsInline
                preload="auto"
                controls
                muted
                className="w-full h-full object-contain rounded-[24px]"
                style={{ background: 'transparent' }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="portrait"
            className="relative"
            initial={{ rotateY: -90, scale: 0.96, opacity: 0 }}
            animate={{ rotateY: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Original Portrait Styling from git, responsive */}
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-[2.5rem] blur-xl opacity-40"></div>
              <div className="relative glass-card p-2 rounded-[2.5rem] overflow-hidden border-primary/20 backdrop-blur-xl">
                <img
                  src={pavanPic}
                  alt="Kommoju Pavan Kumar Ganesh"
                  className="object-cover object-[center_20%] rounded-[2rem] w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px]"
                  style={{
                    aspectRatio: '470/620',
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

HeroMedia.displayName = 'HeroMedia';

export default HeroMedia;
