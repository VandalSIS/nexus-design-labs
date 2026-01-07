import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Twitter, ArrowUp, Send } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
    alert('Mulțumim pentru abonare!');
  };

  const services = [
    { name: 'Dezvoltare Web', href: '/servicii#web' },
    { name: 'Aplicații Mobile', href: '/servicii#mobile' },
    { name: 'Platforme SaaS', href: '/servicii#saas' },
    { name: 'Sisteme CRM/ERP', href: '/servicii#crm' },
    { name: 'Design UI/UX', href: '/servicii#design' },
    { name: 'AI & ML', href: '/servicii#ai' },
  ];

  const company = [
    { name: 'Despre Noi', href: '/despre' },
    { name: 'Portofoliu', href: '/portofoliu' },
    { name: 'Blog', href: '/blog' },
    { name: 'Cariere', href: '/contact' },
    { name: 'Contact', href: '/contact' },
  ];

  const legal = [
    { name: 'Termeni și Condiții', href: '/termeni' },
    { name: 'Politica de Confidențialitate', href: '/confidentialitate' },
    { name: 'Cookie Policy', href: '/confidentialitate#cookies' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Twitter', href: '#', icon: Twitter },
  ];

  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-32 opacity-10"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="currentColor"
            className="text-primary animate-wave"
          />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 pt-20 pb-8">
        {/* Newsletter Section */}
        <div className="bg-primary/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-16 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                Rămâi la curent cu cele mai noi tehnologii
              </h3>
              <p className="text-background/70">
                Abonează-te la newsletter-ul nostru și primești articole exclusive, studii de caz și oferte speciale.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adresa ta de email"
                className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button type="submit" className="btn-primary px-6">
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-heading font-bold">
                SiteShop<span className="text-primary">.md</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm mb-6">
              12+ ani de experiență în dezvoltare web, aplicații mobile și soluții digitale personalizate pentru companii din Moldova și internațional.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-background/70 group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Servicii</h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Companie</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@siteshop.md"
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contact@siteshop.md
                </a>
              </li>
              <li>
                <a
                  href="tel:+37360123456"
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +373 60 123 456
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-background/70">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  Chișinău, Moldova
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} SiteShop.md. Toate drepturile rezervate.
          </p>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-lg bg-primary hover:bg-primary-dark transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-primary-foreground group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
