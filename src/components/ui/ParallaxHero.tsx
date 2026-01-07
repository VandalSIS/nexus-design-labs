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

      {/* Animated Particles Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[20%] left-[10%] w-20 h-20 border border-white/10 rounded-full"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-[60%] right-[15%] w-16 h-16 border border-white/10"
          style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
          animate={{ y: [0, 15, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-[40%] right-[30%] w-12 h-12 bg-white/5 rounded-lg"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
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
