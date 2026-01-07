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

      {/* Animated Particles Layer - Enhanced Visibility */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large glowing particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${6 + Math.random() * 8}px`,
              height: `${6 + Math.random() * 8}px`,
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
              background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 50%, transparent 70%)',
              boxShadow: '0 0 10px rgba(255,255,255,0.6), 0 0 20px rgba(0,180,255,0.4)',
            }}
            animate={{
              y: [0, -40 - Math.random() * 30, 0],
              x: [0, (Math.random() - 0.5) * 20, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
        {/* Medium particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`medium-${i}`}
            className="absolute rounded-full bg-white/60"
            style={{
              width: `${3 + Math.random() * 4}px`,
              height: `${3 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 6px rgba(255,255,255,0.5)',
            }}
            animate={{
              y: [0, -50 - Math.random() * 40, 0],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
            }}
          />
        ))}
        {/* Small twinkling particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className="absolute w-1.5 h-1.5 bg-white/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        {/* Connecting lines effect */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.line
            x1="10%" y1="20%" x2="30%" y2="40%"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.line
            x1="70%" y1="30%" x2="90%" y2="50%"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
          <motion.line
            x1="40%" y1="60%" x2="60%" y2="80%"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
          />
          <motion.line
            x1="20%" y1="70%" x2="35%" y2="85%"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.line
            x1="80%" y1="15%" x2="95%" y2="35%"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
          />
        </svg>
      </div>

      {/* Floating Geometric Shapes - Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle - top left */}
        <motion.div
          className="absolute top-[15%] left-[8%] w-24 h-24 border-2 border-white/20 rounded-full"
          style={{ boxShadow: '0 0 20px rgba(255,255,255,0.1)' }}
          animate={{ y: [0, -25, 0], rotate: [0, 180, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
        {/* Triangle - right side */}
        <motion.div
          className="absolute top-[55%] right-[12%] w-20 h-20 border-2 border-white/20"
          style={{ 
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            boxShadow: '0 0 15px rgba(255,255,255,0.1)'
          }}
          animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />
        {/* Square - top right */}
        <motion.div
          className="absolute top-[25%] right-[25%] w-16 h-16 border-2 border-white/15 rounded-lg"
          style={{ boxShadow: '0 0 15px rgba(255,255,255,0.08)' }}
          animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Small filled circle - bottom left */}
        <motion.div
          className="absolute bottom-[25%] left-[25%] w-14 h-14 bg-white/10 rounded-full"
          style={{ boxShadow: '0 0 25px rgba(255,255,255,0.15)' }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Hexagon - center left */}
        <motion.div
          className="absolute top-[45%] left-[15%] w-12 h-12 border-2 border-white/15"
          style={{ 
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            boxShadow: '0 0 12px rgba(255,255,255,0.1)'
          }}
          animate={{ y: [0, -15, 0], rotate: [0, 60, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Diamond - bottom right */}
        <motion.div
          className="absolute bottom-[30%] right-[20%] w-10 h-10 border-2 border-white/20"
          style={{ 
            transform: 'rotate(45deg)',
            boxShadow: '0 0 15px rgba(255,255,255,0.1)'
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Small circle - top center */}
        <motion.div
          className="absolute top-[10%] left-[45%] w-8 h-8 border border-white/25 rounded-full"
          animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Larger ring - center right */}
        <motion.div
          className="absolute top-[35%] right-[8%] w-28 h-28 border border-white/10 rounded-full"
          animate={{ rotate: [0, 360], scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
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
