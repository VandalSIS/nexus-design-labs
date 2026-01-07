import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Heart, ShoppingCart, Factory, Car, Landmark, Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import SectionHeading from '@/components/ui/SectionHeading';

const industries = [
  {
    id: 'bancar',
    icon: Building2,
    title: 'Sectorul Bancar și Financiar',
    description: 'Soluții sigure și conforme pentru instituții financiare de top.',
    benefits: [
      'Platforme internet banking securizate',
      'Sisteme de plăți online',
      'Soluții anti-fraudă și AML',
      'Dashboard-uri executive',
      'Integrări cu sisteme core banking',
      'Conformitate PCI-DSS și GDPR',
    ],
    stats: { clients: '5+', projects: '15+' },
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'retail',
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    description: 'Magazine online complete și sisteme de gestiune pentru retail modern.',
    benefits: [
      'Magazine online multi-canal',
      'Sisteme gestiune stocuri',
      'Integrări livrare și plăți',
      'Marketing automation',
      'Loyalty programs',
      'Analytics și raportare',
    ],
    stats: { clients: '20+', projects: '50+' },
    color: 'from-purple-500 to-violet-600',
  },
  {
    id: 'productie',
    icon: Factory,
    title: 'Producție & Distribuție',
    description: 'Digitalizarea proceselor pentru producători și distribuitori.',
    benefits: [
      'ERP personalizat',
      'Trasabilitate produse',
      'Optimizare logistică',
      'Platforme B2B',
      'Automatizare comenzi',
      'Integrări cu echipamente',
    ],
    stats: { clients: '10+', projects: '25+' },
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'auto',
    icon: Car,
    title: 'Auto & Import/Export',
    description: 'Soluții pentru industria auto și companii de import/export.',
    benefits: [
      'Cataloage online produse',
      'Configuratoare auto',
      'Sisteme gestiune comenzi',
      'Integrări vamale',
      'Portal dealeri',
      'CRM automotive',
    ],
    stats: { clients: '8+', projects: '20+' },
    color: 'from-slate-500 to-slate-700',
  },
  {
    id: 'public',
    icon: Landmark,
    title: 'Sector Public & ONG',
    description: 'Platforme pentru instituții publice și organizații non-profit.',
    benefits: [
      'Portale guvernamentale',
      'Platforme transparență',
      'Sisteme e-guvernare',
      'Proiecte USAID, UNDP',
      'Gestionare granturi',
      'Platforme civic tech',
    ],
    stats: { clients: '15+', projects: '35+' },
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'healthcare',
    icon: Heart,
    title: 'Healthcare',
    description: 'Soluții digitale pentru sectorul medical și farmaceutic.',
    benefits: [
      'Platforme telemedicină',
      'Sisteme gestiune pacienți',
      'Integrări echipamente medicale',
      'Electronic Health Records',
      'Scheduling & booking',
      'Conformitate HIPAA',
    ],
    stats: { clients: '5+', projects: '12+' },
    color: 'from-rose-500 to-pink-600',
  },
];

const Industries = () => {
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
              Industrii
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Expertiză în diverse industrii
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Înțelegem provocările specifice fiecărei industrii și oferim soluții personalizate
            </p>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* Industries List */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                id={industry.id}
                className="scroll-mt-32"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? '' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6`}>
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                      {industry.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {industry.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {industry.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-8 mb-8">
                      <div className="text-center">
                        <div className="text-3xl font-heading font-bold text-primary">{industry.stats.clients}</div>
                        <div className="text-sm text-muted-foreground">Clienți</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-heading font-bold text-primary">{industry.stats.projects}</div>
                        <div className="text-sm text-muted-foreground">Proiecte</div>
                      </div>
                    </div>

                    <Link to="/contact" className="btn-primary">
                      Discută cu un expert
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <motion.div
                      className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${industry.color} p-8 aspect-[4/3]`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-black/20" />
                      <industry.icon className="absolute bottom-8 right-8 w-32 h-32 text-white/20" />
                      
                      <div className="relative z-10 h-full flex flex-col justify-end">
                        <h3 className="text-white text-2xl font-heading font-bold mb-2">
                          {industry.title}
                        </h3>
                        <p className="text-white/80">
                          {industry.stats.clients} clienți • {industry.stats.projects} proiecte
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Industria ta nu e listată?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Avem experiență în multe alte industrii. Contactează-ne și discutăm despre proiectul tău.
            </p>
            <Link to="/contact" className="btn-hero-primary">
              Contactează-ne
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </AnimatedBackground>
    </Layout>
  );
};

export default Industries;
