import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Code, Smartphone, Cloud, Database, Cpu, Palette, Building2, Heart, ShoppingCart, Factory, Car, Landmark } from 'lucide-react';

const services = [
  { name: 'Dezvoltare Web & E-commerce', href: '/servicii#web', icon: Code },
  { name: 'Aplicații Mobile', href: '/servicii#mobile', icon: Smartphone },
  { name: 'Platforme SaaS & Cloud', href: '/servicii#saas', icon: Cloud },
  { name: 'Sisteme CRM/ERP', href: '/servicii#crm', icon: Database },
  { name: 'AI & Machine Learning', href: '/servicii#ai', icon: Cpu },
  { name: 'Design UI/UX', href: '/servicii#design', icon: Palette },
];

const industries = [
  { name: 'Sectorul Bancar', href: '/industrii#bancar', icon: Building2 },
  { name: 'Healthcare', href: '/industrii#healthcare', icon: Heart },
  { name: 'Retail & E-commerce', href: '/industrii#retail', icon: ShoppingCart },
  { name: 'Producție & Distribuție', href: '/industrii#productie', icon: Factory },
  { name: 'Auto & Import/Export', href: '/industrii#auto', icon: Car },
  { name: 'Sector Public & ONG', href: '/industrii#public', icon: Landmark },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Acasă', href: '/' },
    { name: 'Despre Noi', href: '/despre' },
    { name: 'Servicii', href: '/servicii', hasDropdown: true, items: services },
    { name: 'Industrii', href: '/industrii', hasDropdown: true, items: industries },
    { name: 'Portofoliu', href: '/portofoliu' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
              <Code className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className={`text-xl font-heading font-bold transition-colors ${isScrolled ? 'text-foreground' : 'text-foreground'}`}>
              SiteShop<span className="text-primary">.md</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg flex items-center gap-1 ${
                    location.pathname === link.href
                      ? 'text-primary bg-accent'
                      : 'text-foreground hover:text-primary hover:bg-accent'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.hasDropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-xl border border-border overflow-hidden"
                    >
                      {link.items?.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.href}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-accent transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{item.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary text-sm">
              Solicită Ofertă
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <nav className="py-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className={`block px-6 py-3 text-sm font-medium transition-colors ${
                      location.pathname === link.href
                        ? 'text-primary bg-accent'
                        : 'text-foreground hover:text-primary hover:bg-accent'
                    }`}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
              <div className="px-6 py-4">
                <Link to="/contact" className="btn-primary w-full text-sm text-center">
                  Solicită Ofertă
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
