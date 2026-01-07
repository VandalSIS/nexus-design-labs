import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Cloud, Database, Cpu, Palette, Plug, Monitor, Megaphone, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ParallaxHero from '@/components/ui/ParallaxHero';
import servicesBg from '@/assets/services-bg.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const services = [
  { id: 'web', icon: Code, title: 'Dezvoltare Web & E-commerce', description: 'Creăm site-uri web și magazine online care convertesc vizitatorii în clienți fideli.', features: ['Site-uri corporate responsive', 'Landing pages optimizate pentru conversii', 'Magazine online WooCommerce/Shopify', 'Platforme web personalizate', 'Portaluri și intranete', 'Optimizare performanță și SEO'], technologies: ['React', 'Next.js', 'WordPress', 'WooCommerce', 'Shopify'] },
  { id: 'mobile', icon: Smartphone, title: 'Aplicații Mobile', description: 'Dezvoltăm aplicații mobile native și cross-platform pentru iOS și Android.', features: ['Aplicații native iOS (Swift)', 'Aplicații native Android (Kotlin)', 'Cross-platform (React Native, Flutter)', 'App Store & Google Play deployment', 'Integrări cu backend propriu', 'Push notifications și analytics'], technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'] },
  { id: 'saas', icon: Cloud, title: 'Platforme SaaS & Cloud', description: 'Construim platforme cloud-native scalabile pentru afaceri în creștere.', features: ['Platforme cloud-native', 'Arhitectură microservices', 'Scalabilitate automată', 'Multi-tenant solutions', 'API-first development', 'DevOps și CI/CD'], technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'] },
  { id: 'crm', icon: Database, title: 'Sisteme CRM/ERP', description: 'Automatizăm procesele de business cu soluții personalizate și integrări complete.', features: ['Soluții CRM personalizate', 'Sisteme ERP enterprise', 'Automatizarea proceselor', 'Raportare și analytics', 'Integrări cu sisteme existente', 'Dashboard-uri executive'], technologies: ['Node.js', 'PostgreSQL', 'React', 'Power BI', 'Tableau'] },
  { id: 'api', icon: Plug, title: 'Dezvoltare API & Integrări', description: 'Conectăm sistemele tale cu API-uri robuste și integrări seamless.', features: ['REST & GraphQL APIs', 'Integrări payment gateways', 'Sincronizare date între sisteme', 'Webhooks și automatizări', 'OAuth și SSO', 'Documentație API completă'], technologies: ['REST', 'GraphQL', 'Stripe', 'PayPal', 'OAuth2'] },
  { id: 'iot', icon: Monitor, title: 'Soluții IoT', description: 'Conectăm device-uri IoT și creăm dashboards pentru monitorizare real-time.', features: ['Conectare device-uri IoT', 'Dashboards monitorizare real-time', 'Colectare și analiză date senzori', 'Alerte și notificări automate', 'Edge computing', 'Protocoale MQTT, CoAP'], technologies: ['MQTT', 'AWS IoT', 'Azure IoT', 'InfluxDB', 'Grafana'] },
  { id: 'ai', icon: Cpu, title: 'AI & Machine Learning', description: 'Implementăm soluții AI pentru automatizare și insight-uri avansate.', features: ['Chatbots inteligenți', 'Analitică predictivă', 'Procesare limbaj natural (NLP)', 'Computer vision solutions', 'Recomandări personalizate', 'Automatizări inteligente'], technologies: ['OpenAI', 'TensorFlow', 'Python', 'LangChain', 'Pinecone'] },
  { id: 'design', icon: Palette, title: 'Design UI/UX', description: 'Creăm experiențe digitale care încântă utilizatorii și cresc conversiile.', features: ['Research utilizatori', 'Wireframing & prototipare', 'Design system & UI kit', 'Testare usability', 'Design responsive', 'Handoff pentru dezvoltatori'], technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin'] },
  { id: 'marketing', icon: Megaphone, title: 'Branding & Marketing Digital', description: 'Servicii complete de marketing digital pentru creșterea vizibilității online.', features: ['Identitate vizuală completă', 'Logo & brandbook', 'SEO & optimizare Google', 'Social media marketing', 'Campanii Google Ads & Facebook', 'Email marketing automation'], technologies: ['Google Ads', 'Meta Ads', 'Mailchimp', 'SEMrush', 'Analytics'] },
];

const Services = () => {
  return (
    <Layout>
      <ParallaxHero backgroundImage={servicesBg} className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">Serviciile Noastre</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">Soluții digitale complete pentru orice nevoie</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">De la dezvoltare web la AI, oferim servicii integrate care transformă afaceri</p>
          </motion.div>
        </div>
      </ParallaxHero>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div key={service.id} id={service.id} className="scroll-mt-32" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6"><service.icon className="w-8 h-8 text-primary" /></div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (<div key={feature} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground">{feature}</span></div>))}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.technologies.map((tech) => (<span key={tech} className="px-3 py-1.5 bg-muted text-muted-foreground rounded-lg text-sm">{tech}</span>))}
                    </div>
                    <Link to="/contact" className="btn-primary">Solicită ofertă <ArrowRight className="w-5 h-5" /></Link>
                  </div>
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <motion.div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 p-8 aspect-square flex items-center justify-center" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                      <service.icon className="w-40 h-40 text-primary/20" />
                      <div className="absolute top-8 right-8 w-20 h-20 border-2 border-primary/20 rounded-full animate-float" />
                      <div className="absolute bottom-12 left-12 w-12 h-12 bg-primary/10 rounded-lg animate-float-delayed" />
                    </motion.div>
                  </div>
                </div>
                {index < services.length - 1 && <div className="mt-24 border-b border-border" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ParallaxHero backgroundImage={heroBg} className="py-24">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Nu știi ce serviciu ai nevoie?</h2>
            <p className="text-lg text-white/80 mb-8">Programează o consultație gratuită și te ajutăm să găsești soluția perfectă pentru afacerea ta</p>
            <Link to="/contact" className="btn-hero-primary">Programează o consultație <ArrowRight className="w-5 h-5" /></Link>
          </motion.div>
        </div>
      </ParallaxHero>
    </Layout>
  );
};

export default Services;
