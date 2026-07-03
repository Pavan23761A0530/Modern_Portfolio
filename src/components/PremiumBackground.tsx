import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
}

const PremiumBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 20000);
      particles.current = [];
      const colors = [
        '0, 245, 255', // Electric Cyan
        '79, 107, 255', // Royal Blue
        '139, 92, 246', // Neon Purple
        '0, 208, 132', // Emerald
      ];

      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2.5 + 0.5,
          alpha: Math.random() * 0.4 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw floating glow orbs
      const time = Date.now() * 0.001;
      const orbs = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, color: '79, 107, 255', size: 300 + Math.sin(time) * 50 },
        { x: canvas.width * 0.8, y: canvas.height * 0.6, color: '0, 245, 255', size: 250 + Math.cos(time) * 40 },
        { x: canvas.width * 0.5, y: canvas.height * 0.9, color: '139, 92, 246', size: 280 + Math.sin(time * 0.8) * 35 },
      ];

      orbs.forEach((orb) => {
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.size);
        gradient.addColorStop(0, `rgba(${orb.color}, 0.15)`);
        gradient.addColorStop(0.4, `rgba(${orb.color}, 0.05)`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Update and draw particles
      particles.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particle.color}, ${particle.alpha})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(${particle.color}, 0.6)`;
        ctx.fill();
        ctx.restore();
      });

      // Connect nearby particles
      particles.current.forEach((p1, i) => {
        particles.current.slice(i + 1).forEach((p2) => {
          const distance = Math.sqrt(
            Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
          );

          if (distance < 120) {
            ctx.save();
            ctx.globalAlpha = 0.08;
            ctx.strokeStyle = `rgba(${p1.color}, ${1 - distance / 120})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Aurora gradient layers */}
      <div className="fixed inset-0 pointer-events-none z-[-3] overflow-hidden">
        <div 
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full animate-aurora"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(79, 107, 255, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div 
          className="absolute top-[40%] right-[-15%] w-[50%] h-[50%] rounded-full animate-aurora"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 245, 255, 0.12) 0%, transparent 70%)',
            filter: 'blur(100px)',
            animationDelay: '2s',
          }}
        />
        <div 
          className="absolute bottom-[-10%] left-[20%] w-[55%] h-[55%] rounded-full animate-aurora"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
            filter: 'blur(90px)',
            animationDelay: '4s',
          }}
        />
      </div>

      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[-2]"
        style={{
          width: '100%',
          height: '100%',
        }}
      />

      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </>
  );
};

export default PremiumBackground;
