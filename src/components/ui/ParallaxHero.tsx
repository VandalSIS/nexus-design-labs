import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxHeroProps {
  backgroundImage: string;
  children: React.ReactNode;
  className?: string;
  overlayOpacity?: number;
  parallaxSpeed?: number;
}

const ParallaxHero = ({ 
  backgroundImage, 
  children, 
  className = '',
  overlayOpacity = 0.6,
  parallaxSpeed = 0.5 
}: ParallaxHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const { scrollY } = useScroll();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const setValues = () => {
      setElementTop(element.offsetTop);
      setClientHeight(window.innerHeight);
    };

    setValues();
    window.addEventListener('resize', setValues);
    return () => window.removeEventListener('resize', setValues);
  }, []);

  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    [-100 * parallaxSpeed, 100 * parallaxSpeed]
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ y }}
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary-dark/80"
        style={{ opacity: overlayOpacity }}
      />

      {/* Animated Particles Layer - Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large glowing particles - reduced */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${8 + i * 2}px`,
              height: `${8 + i * 2}px`,
              left: `${10 + i * 15}%`,
              top: `${15 + i * 12}%`,
              background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 50%, transparent 70%)',
              boxShadow: '0 0 12px rgba(255,255,255,0.5)',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}
        {/* Medium particles - reduced */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`medium-${i}`}
            className="absolute rounded-full bg-white/50"
            style={{
              width: '5px',
              height: '5px',
              left: `${8 + i * 9}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 7 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}
        {/* Connecting lines - static with subtle pulse */}
        <svg className="absolute inset-0 w-full h-full opacity-25">
          <motion.line
            x1="10%" y1="20%" x2="25%" y2="35%"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.line
            x1="75%" y1="25%" x2="90%" y2="45%"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, delay: 2 }}
          />
          <motion.line
            x1="45%" y1="65%" x2="60%" y2="80%"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />
        </svg>
      </div>

      {/* Floating Geometric Shapes - Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle - top left */}
        <motion.div
          className="absolute top-[15%] left-[8%] w-20 h-20 border-2 border-white/15 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Triangle - right side */}
        <motion.div
          className="absolute top-[55%] right-[12%] w-16 h-16 border-2 border-white/15"
          style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Square - top right */}
        <motion.div
          className="absolute top-[30%] right-[20%] w-12 h-12 border-2 border-white/10 rounded-lg"
          animate={{ rotate: [0, 45, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Small filled circle - bottom left */}
        <motion.div
          className="absolute bottom-[25%] left-[20%] w-10 h-10 bg-white/8 rounded-full"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Larger ring - center right */}
        <motion.div
          className="absolute top-[35%] right-[8%] w-24 h-24 border border-white/10 rounded-full"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxHero;
