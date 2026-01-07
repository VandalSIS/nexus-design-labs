import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

const SectionHeading = ({ 
  badge, 
  title, 
  subtitle, 
  centered = true, 
  light = false,
  className = '' 
}: SectionHeadingProps) => {
  return (
    <motion.div
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {badge && (
        <motion.span
          className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
            light 
              ? 'bg-white/10 text-white' 
              : 'bg-primary/10 text-primary'
          }`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {badge}
        </motion.span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 ${
        light ? 'text-white' : 'text-foreground'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl ${
          light ? 'text-white/80' : 'text-muted-foreground'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
