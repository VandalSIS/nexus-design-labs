import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'particles' | 'mesh' | 'dots' | 'grid' | 'waves';
  className?: string;
  children?: React.ReactNode;
}

const AnimatedBackground = ({ variant = 'hero', className = '', children }: AnimatedBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (variant === 'particles' || variant === 'hero') {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const resizeCanvas = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      };

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      const particleCount = 35;
      const particleArray: Particle[] = [];

      for (let i = 0; i < particleCount; i++) {
        particleArray.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.5 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.4 + 0.2,
        });
      }

      let animationId: number;
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particleArray.forEach((particle) => {
          particle.x += particle.speedX;
          particle.y += particle.speedY;

          if (particle.x > canvas.width) particle.x = 0;
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.y > canvas.height) particle.y = 0;
          if (particle.y < 0) particle.y = canvas.height;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
          ctx.fill();
        });

        // Draw connecting lines - optimized with distance check first
        for (let i = 0; i < particleArray.length; i++) {
          for (let j = i + 1; j < particleArray.length; j++) {
            const dx = particleArray[i].x - particleArray[j].x;
            const dy = particleArray[i].y - particleArray[j].y;
            const distSq = dx * dx + dy * dy;

            if (distSq < 22500) { // 150^2
              const distance = Math.sqrt(distSq);
              ctx.beginPath();
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - distance / 150)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particleArray[i].x, particleArray[i].y);
              ctx.lineTo(particleArray[j].x, particleArray[j].y);
              ctx.stroke();
            }
          }
        }

        animationId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener('resize', resizeCanvas);
        cancelAnimationFrame(animationId);
      };
    }
  }, [variant]);

  if (variant === 'hero') {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {/* Gradient Background */}
        <div className="absolute inset-0 hero-gradient" />
        
        {/* Particle Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />

        {/* Floating Geometric Shapes - Simplified */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-[20%] left-[10%] w-16 h-16 border border-white/10 rounded-full"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-[60%] left-[85%] w-12 h-12 border border-white/10"
            style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-[30%] right-[20%] w-16 h-16 border border-white/5 rounded-lg"
            animate={{ rotate: [0, 45, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  if (variant === 'mesh') {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary-light/5 blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  if (variant === 'waves') {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <svg
          className="absolute bottom-0 left-0 w-full h-40 opacity-50"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L0,120Z"
            fill="hsl(var(--primary) / 0.1)"
            animate={{
              d: [
                'M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L0,120Z',
                'M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L0,120Z',
                'M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L0,120Z',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedBackground;
