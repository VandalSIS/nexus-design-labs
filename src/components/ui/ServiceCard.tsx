import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  index?: number;
}

const ServiceCard = ({ icon: Icon, title, description, href, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      className="group relative bg-card rounded-xl p-6 md:p-8 transition-all duration-400 border border-border hover:border-primary/30"
      style={{ boxShadow: 'var(--shadow-md)' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: 'var(--shadow-xl)' }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
          <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-5 line-clamp-3">
          {description}
        </p>

        {/* Link */}
        <Link
          to={href}
          className="inline-flex items-center gap-2 text-primary font-medium group/link"
        >
          <span className="link-underline">Află mai mult</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
