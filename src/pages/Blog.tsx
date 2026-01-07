import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Search } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ParallaxHero from '@/components/ui/ParallaxHero';
import blogBg from '@/assets/blog-bg.jpg';

const articles = [
  { id: 1, title: 'Top 10 tehnologii web în 2025', excerpt: 'Descoperă cele mai importante tehnologii care vor domina dezvoltarea web în anul următor.', category: 'Tehnologii', date: '5 Ian 2025', readTime: '8 min', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' },
  { id: 2, title: 'Cum să alegi platforma potrivită pentru e-commerce', excerpt: 'Ghid complet pentru alegerea platformei perfecte pentru magazinul tău online.', category: 'E-commerce', date: '2 Ian 2025', readTime: '12 min', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop' },
  { id: 3, title: 'Beneficiile unui sistem CRM personalizat', excerpt: 'De ce un CRM custom poate transforma complet modul în care gestionezi relațiile cu clienții.', category: 'Business', date: '28 Dec 2024', readTime: '6 min', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' },
  { id: 4, title: 'SEO pentru site-uri corporate: ghid complet', excerpt: 'Strategii SEO testate și dovedite pentru a crește vizibilitatea site-ului tău corporate.', category: 'Marketing', date: '20 Dec 2024', readTime: '15 min', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop' },
  { id: 5, title: 'Tendințe design UI/UX în 2025', excerpt: 'Explorează cele mai fresh tendințe în design care vor defini experiențele digitale.', category: 'Design', date: '15 Dec 2024', readTime: '10 min', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop' },
  { id: 6, title: 'De ce afacerea ta are nevoie de o aplicație mobilă', excerpt: 'Beneficiile strategice ale unei aplicații mobile pentru business-ul tău.', category: 'Mobile', date: '10 Dec 2024', readTime: '7 min', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop' },
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredArticles = articles.filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Layout>
      <ParallaxHero backgroundImage={blogBg} className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">Blog & Știri</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">Insights din lumea tech</h1>
            <p className="text-lg text-white/80">Articole, ghiduri și studii de caz despre dezvoltare software</p>
          </motion.div>
        </div>
      </ParallaxHero>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto mb-12 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input type="text" placeholder="Caută articole..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-primary" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article key={article.id} className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }}>
                <div className="aspect-[16/10] overflow-hidden"><img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary uppercase">{article.category}</span>
                  <h3 className="text-lg font-heading font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
