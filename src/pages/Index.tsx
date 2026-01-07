import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Code, Smartphone, Cloud, Database, Cpu, Palette, Building2, Heart, ShoppingCart, Factory, Car, Landmark, CheckCircle, Quote, Play } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import ParallaxHero from '@/components/ui/ParallaxHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import heroBg from '@/assets/hero-bg.jpg';

const services = [
  { icon: Code, title: 'Dezvoltare Web & E-commerce', description: 'Site-uri corporate, landing pages și magazine online WooCommerce, Shopify optimizate pentru conversii.', href: '/servicii#web' },
  { icon: Smartphone, title: 'Aplicații Mobile', description: 'Aplicații native iOS și Android sau cross-platform cu React Native și Flutter.', href: '/servicii#mobile' },
  { icon: Cloud, title: 'Platforme SaaS & Cloud', description: 'Soluții cloud-native cu arhitectură microservices și scalabilitate automată.', href: '/servicii#saas' },
  { icon: Database, title: 'Sisteme CRM/ERP', description: 'Automatizarea proceselor de business cu soluții personalizate și integrări complete.', href: '/servicii#crm' },
  { icon: Cpu, title: 'AI & Machine Learning', description: 'Chatbots inteligenți, analitică predictivă și soluții de procesare limbaj natural.', href: '/servicii#ai' },
  { icon: Palette, title: 'Design UI/UX', description: 'Research utilizatori, wireframing, prototipare și design system profesional.', href: '/servicii#design' },
];

const industries = [
  { icon: Building2, name: 'Sectorul Bancar', color: 'from-blue-500 to-blue-600' },
  { icon: Factory, name: 'Producție & Distribuție', color: 'from-amber-500 to-orange-600' },
  { icon: Car, name: 'Auto & Import/Export', color: 'from-slate-500 to-slate-700' },
  { icon: Landmark, name: 'Sector Public & ONG', color: 'from-emerald-500 to-teal-600' },
  { icon: ShoppingCart, name: 'Retail & E-commerce', color: 'from-purple-500 to-violet-600' },
  { icon: Heart, name: 'Healthcare', color: 'from-rose-500 to-pink-600' },
];

const stats = [
  { value: 12, suffix: '+', label: 'Ani Experiență' },
  { value: 200, suffix: '+', label: 'Proiecte Finalizate' },
  { value: 50, suffix: '+', label: 'Clienți Activi' },
  { value: 98, suffix: '%', label: 'Rată Satisfacție' },
];

const processSteps = [
  { step: 1, title: 'Analiză & Consultanță', description: 'Înțelegem nevoile și obiectivele tale de business' },
  { step: 2, title: 'Strategie Digitală', description: 'Planificăm soluția optimă și definim roadmap-ul' },
  { step: 3, title: 'Design & Prototipare', description: 'Creăm designul și validăm cu prototipuri interactive' },
  { step: 4, title: 'Dezvoltare & Testare', description: 'Implementăm cu tehnologii moderne și testăm riguros' },
  { step: 5, title: 'Lansare & Optimizare', description: 'Lansăm produsul și optimizăm continuu pe baza datelor' },
];

const testimonials = [
  { quote: "SiteShop.md a transformat complet prezența noastră digitală. Echipa lor profesionistă a livrat exact ce aveam nevoie, în timp și în buget.", author: "Alexandru Popescu", role: "CEO, TechCorp Moldova", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
  { quote: "Colaborarea cu SiteShop a fost excepțională. Au înțeles perfect cerințele noastre complexe și au livrat o platformă care ne-a crescut vânzările cu 40%.", author: "Maria Lungu", role: "Director Marketing, RetailPlus", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
  { quote: "Profesionalism, expertiză tehnică și comunicare excelentă. Recomand cu încredere pentru orice proiect de dezvoltare software.", author: "Ion Cebotari", role: "CTO, FinBank Moldova", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
];

const clients = ['TechCorp', 'FinBank', 'RetailPlus', 'AutoMold', 'HealthCare+', 'GovDigital'];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <ParallaxHero backgroundImage={heroBg} className="min-h-screen relative">
        <div className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-center py-20">
          <div className="max-w-4xl w-full text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                🚀 12+ ani de excelență în dezvoltare software
              </span>
            </motion.div>

            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 leading-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              Transformăm idei în <span className="relative"><span className="relative z-10">soluții digitale</span><span className="absolute bottom-2 left-0 w-full h-3 bg-white/20 -z-0" /></span> care generează rezultate
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              12+ ani de experiență în dezvoltare web, aplicații, e-commerce și soluții personalizate pentru companii de top din Moldova și internațional
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <Link to="/contact" className="btn-hero-primary">Contactează-ne <ArrowRight className="w-5 h-5" /></Link>
              <Link to="/portofoliu" className="btn-hero-secondary">Vezi Portofoliul <Play className="w-5 h-5" /></Link>
            </motion.div>

            <motion.div className="mt-16 flex flex-wrap items-center justify-center gap-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
              <div className="flex items-center gap-2 text-white/60 text-sm"><CheckCircle className="w-4 h-4 text-green-400" /><span>Proiecte USAID & UNDP</span></div>
              <div className="flex items-center gap-2 text-white/60 text-sm"><CheckCircle className="w-4 h-4 text-green-400" /><span>200+ Proiecte Livrate</span></div>
              <div className="flex items-center gap-2 text-white/60 text-sm"><CheckCircle className="w-4 h-4 text-green-400" /><span>Clienți Internaționali</span></div>
            </motion.div>
          </div>
        </div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div className="w-1.5 h-1.5 bg-white rounded-full" animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }} />
          </div>
        </motion.div>
      </ParallaxHero>

      {/* Services Section */}
      <AnimatedBackground variant="grid" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Serviciile Noastre" title="Soluții digitale complete pentru afacerea ta" subtitle="De la idee la implementare, oferim servicii integrate de dezvoltare software și design" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {services.map((service, index) => (<ServiceCard key={service.title} {...service} index={index} />))}
          </div>
          <motion.div className="text-center mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link to="/servicii" className="btn-primary">Vezi toate serviciile <ChevronRight className="w-5 h-5" /></Link>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* Industries Section */}
      <AnimatedBackground variant="mesh" className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Industrii" title="Industrii pe care le deservim" subtitle="Experiență vastă în diverse sectoare, de la bănci la instituții publice" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
            {industries.map((industry, index) => (
              <motion.div key={industry.name} className="group relative bg-card rounded-xl p-6 text-center transition-all duration-300 border border-border hover:border-primary/30 cursor-pointer overflow-hidden" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} whileHover={{ y: -5 }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <industry.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{industry.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedBackground>

      {/* Stats Section with Parallax */}
      <ParallaxHero backgroundImage={heroBg} className="py-24" overlayOpacity={0.85}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} className="text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-2 text-white"><AnimatedCounter end={stat.value} suffix={stat.suffix} /></div>
                <p className="text-white/80 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxHero>

      {/* Process Section */}
      <section className="py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Cum Lucrăm" title="Procesul nostru în 5 pași" subtitle="O metodologie dovedită care asigură succesul proiectului tău" />
          <div className="relative mt-16">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
            <div className="grid lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div key={step.step} className="relative" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }}>
                  <div className="bg-card rounded-xl p-6 border border-border relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg mb-4 mx-auto lg:mx-0">{step.step}</div>
                    <h3 className="font-heading font-bold text-foreground mb-2 text-center lg:text-left">{step.title}</h3>
                    <p className="text-sm text-muted-foreground text-center lg:text-left">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <AnimatedBackground variant="waves" className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Testimoniale" title="Ce spun clienții noștri" subtitle="Succesul clienților noștri este cea mai bună recomandare" />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} className="bg-card rounded-xl p-8 border border-border relative" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <p className="text-foreground mb-6 relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover" />
                  <div><h4 className="font-medium text-foreground">{testimonial.author}</h4><p className="text-sm text-muted-foreground">{testimonial.role}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedBackground>

      {/* Clients Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.p className="text-center text-muted-foreground mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Parteneri de încredere: USAID • UNDP • și peste 50 de companii
          </motion.p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {clients.map((client, index) => (
              <motion.div key={client} className="text-2xl font-heading font-bold text-muted-foreground/40 hover:text-primary transition-colors" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>{client}</motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ParallaxHero backgroundImage={heroBg} className="py-24">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">Începe proiectul tău astăzi</h2>
            <p className="text-lg text-white/80 mb-8">Hai să discutăm despre cum putem transforma ideea ta într-o soluție digitală de succes. Consultație gratuită!</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-hero-primary">Programează o consultație <ArrowRight className="w-5 h-5" /></Link>
              <Link to="/portofoliu" className="btn-hero-secondary">Explorează portofoliul</Link>
            </div>
          </motion.div>
        </div>
      </ParallaxHero>
    </Layout>
  );
};

export default Index;
