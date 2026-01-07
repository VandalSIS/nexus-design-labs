import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import SectionHeading from '@/components/ui/SectionHeading';

const categories = [
  'Toate',
  'Web',
  'Mobile',
  'E-commerce',
  'SaaS',
  'CRM/ERP',
  'Instituțional',
];

const projects = [
  {
    id: 1,
    title: 'FinBank Online',
    category: 'Web',
    description: 'Platformă completă de internet banking pentru una din cele mai mari bănci din Moldova.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    results: 'Creștere 200% utilizatori activi',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    id: 2,
    title: 'ShopMD Marketplace',
    category: 'E-commerce',
    description: 'Marketplace multi-vendor pentru produse locale din Moldova.',
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'Vercel'],
    results: '+40% conversie în 3 luni',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    id: 3,
    title: 'MedConnect',
    category: 'Mobile',
    description: 'Aplicație de telemedicină pentru consultații online cu medici.',
    technologies: ['React Native', 'Firebase', 'WebRTC', 'Node.js'],
    results: '50,000+ descărcări',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    id: 4,
    title: 'LogisticsPro ERP',
    category: 'CRM/ERP',
    description: 'Sistem ERP complet pentru companie de logistică și transport.',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
    results: 'Reducere 30% costuri operaționale',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    id: 5,
    title: 'CloudHR Platform',
    category: 'SaaS',
    description: 'Platformă SaaS pentru managementul resurselor umane.',
    technologies: ['React', 'AWS Lambda', 'DynamoDB', 'Terraform'],
    results: '100+ companii client',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    id: 6,
    title: 'GovPortal Moldova',
    category: 'Instituțional',
    description: 'Portal de servicii electronice pentru o instituție guvernamentală.',
    technologies: ['Next.js', '.NET', 'SQL Server', 'Azure'],
    results: '1M+ utilizatori',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    id: 7,
    title: 'AutoDealer Pro',
    category: 'Web',
    description: 'Platformă digitală pentru rețea de dealeri auto.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis'],
    results: '+60% lead-uri generate',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    id: 8,
    title: 'FarmConnect',
    category: 'Mobile',
    description: 'Aplicație pentru conectarea fermierilor cu cumpărători.',
    technologies: ['Flutter', 'Firebase', 'Google Maps', 'Stripe'],
    results: '5,000+ fermieri înregistrați',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    id: 9,
    title: 'FashionStore',
    category: 'E-commerce',
    description: 'Magazin online de modă cu integrări internaționale.',
    technologies: ['Shopify', 'React', 'Node.js', 'Klaviyo'],
    results: '€500K vânzări/an',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    id: 10,
    title: 'InventoryCloud',
    category: 'SaaS',
    description: 'Sistem cloud pentru gestiunea stocurilor și inventarului.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'DigitalOcean'],
    results: '50+ magazine utilizatori',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    id: 11,
    title: 'NGO Transparency',
    category: 'Instituțional',
    description: 'Platformă de transparență pentru ONG-uri finanțată de USAID.',
    technologies: ['React', 'Python', 'PostgreSQL', 'D3.js'],
    results: 'Proiect USAID',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    id: 12,
    title: 'CRM Pro Solutions',
    category: 'CRM/ERP',
    description: 'CRM personalizat pentru companie de servicii B2B.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Salesforce API'],
    results: '+80% eficiență vânzări',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    link: '#',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Toate');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'Toate'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <AnimatedBackground variant="hero" className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              Portofoliu
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Proiecte care vorbesc de la sine
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Explorează o selecție din cele peste 200 de proiecte livrate cu succes
            </p>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30 sticky top-16 z-30 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground hover:bg-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative rounded-xl overflow-hidden bg-card border border-border">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="px-4 py-2 bg-white rounded-lg text-foreground font-medium">
                          Vezi detalii
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-heading font-bold text-foreground mt-1 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover"
              />

              <div className="p-8">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl font-heading font-bold text-foreground mt-2 mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {selectedProject.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-3">Tehnologii</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-3">Rezultate</h3>
                    <p className="text-primary font-medium">{selectedProject.results}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link to="/contact" className="btn-primary" onClick={() => setSelectedProject(null)}>
                    Proiect similar?
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <AnimatedBackground variant="hero" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Vrei un proiect similar?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Contactează-ne și hai să discutăm despre cum putem transforma ideea ta în realitate
            </p>
            <Link to="/contact" className="btn-hero-primary">
              Începe proiectul tău
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </AnimatedBackground>
    </Layout>
  );
};

export default Portfolio;
