import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Target, Lightbulb, Shield, Zap } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import ParallaxHero from '@/components/ui/ParallaxHero';
import SectionHeading from '@/components/ui/SectionHeading';
import aboutBg from '@/assets/about-bg.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const whyUs = [
  { icon: Award, title: 'Experiență verificată', description: '12+ ani în proiecte complexe pentru diverse industrii' },
  { icon: Users, title: 'Clienți premium', description: 'Bănci, instituții, companii internaționale' },
  { icon: Target, title: 'Proces transparent', description: 'Comunicare clară, livrare în etape măsurabile' },
  { icon: Zap, title: 'Soluții scalabile', description: 'Arhitectură sigură și modernă pentru creștere' },
  { icon: Lightbulb, title: 'Consultanță strategică', description: 'Focus pe rezultate măsurabile și ROI' },
  { icon: Shield, title: 'Suport dedicat', description: 'Mentenanță și dezvoltare continuă 24/7' },
];

const technologies = {
  frontend: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'PHP', 'Python', '.NET', 'Go'],
  mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  ecommerce: ['WooCommerce', 'Shopify', 'Magento', 'Custom'],
  cloud: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'],
  database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
};

const team = [
  { name: 'Andrei Munteanu', role: 'CEO & Co-Founder', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face' },
  { name: 'Elena Roșca', role: 'CTO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face' },
  { name: 'Sergiu Popov', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face' },
  { name: 'Ana Codreanu', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face' },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <ParallaxHero backgroundImage={aboutBg} className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">Despre SiteShop.md</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">Partenerul tău de încredere în transformarea digitală</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">Cu peste 12 ani de experiență, livrăm soluții digitale care fac diferența pentru afacerea ta</p>
          </motion.div>
        </div>
      </ParallaxHero>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Povestea Noastră</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">12+ ani de excelență în dezvoltare software</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>SiteShop.md este o companie din Republica Moldova, cu peste 12 ani de experiență pe piața locală și internațională, specializată în dezvoltarea de soluții digitale complete pentru companii și instituții care au nevoie de rezultate măsurabile și procese corecte.</p>
                <p>Am început ca o echipă mică cu o viziune mare: să ajutăm companiile din Moldova să concureze la nivel global prin tehnologie de calitate. Astăzi, suntem mândri să fim parteneri de încredere pentru peste 50 de clienți activi.</p>
                <p>Colaborăm cu organizații internaționale precum USAID și UNDP, și am livrat proiecte pentru sectorul bancar, instituții publice, producători și companii de retail.</p>
              </div>
            </motion.div>
            <motion.div className="relative" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" alt="Echipa SiteShop" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
              <motion.div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl shadow-xl border border-border" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center"><Award className="w-7 h-7 text-primary-foreground" /></div>
                  <div><div className="text-2xl font-heading font-bold text-foreground">200+</div><div className="text-sm text-muted-foreground">Proiecte livrate</div></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <AnimatedBackground variant="dots" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading badge="De ce noi" title="De ce să alegi SiteShop.md" subtitle="Suntem mai mult decât dezvoltatori - suntem parteneri în succesul tău" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {whyUs.map((item, index) => (
              <motion.div key={item.title} className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -5 }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors"><item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" /></div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedBackground>

      {/* Technologies Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Tehnologii" title="Tehnologii & Competențe" subtitle="Folosim cele mai moderne tehnologii pentru a construi soluții robuste și scalabile" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {Object.entries(technologies).map(([category, techs], index) => (
              <motion.div key={category} className="bg-card rounded-xl p-6 border border-border" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <h3 className="text-lg font-heading font-bold text-foreground mb-4 capitalize">
                  {category === 'frontend' ? 'Frontend' : category === 'backend' ? 'Backend' : category === 'mobile' ? 'Mobile' : category === 'ecommerce' ? 'E-commerce' : category === 'cloud' ? 'Cloud' : 'Database'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (<span key={tech} className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium">{tech}</span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <AnimatedBackground variant="mesh" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Echipa" title="Oamenii din spatele succesului" subtitle="O echipă dedicată de profesioniști cu experiență vastă în industrie" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {team.map((member, index) => (
              <motion.div key={member.name} className="group text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img src={member.image} alt={member.name} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-heading font-bold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedBackground>

      {/* CTA Section */}
      <ParallaxHero backgroundImage={heroBg} className="py-24">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Hai să construim viitorul împreună</h2>
            <p className="text-lg text-white/80 mb-8">Contactează-ne pentru o consultație gratuită și descoperă cum putem transforma ideile tale în realitate</p>
            <Link to="/contact" className="btn-hero-primary">Contactează-ne acum <ArrowRight className="w-5 h-5" /></Link>
          </motion.div>
        </div>
      </ParallaxHero>
    </Layout>
  );
};

export default About;
