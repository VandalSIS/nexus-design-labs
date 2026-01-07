import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ParallaxHero from '@/components/ui/ParallaxHero';
import contactBg from '@/assets/contact-bg.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '', gdpr: false });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setIsSubmitted(true); };

  return (
    <Layout>
      <ParallaxHero backgroundImage={contactBg} className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">Contact</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">Hai să discutăm despre proiectul tău</h1>
            <p className="text-lg text-white/80">Suntem aici să te ajutăm. Completează formularul sau contactează-ne direct.</p>
          </motion.div>
        </div>
      </ParallaxHero>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <motion.div className="bg-card rounded-xl p-12 border border-border text-center" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"><CheckCircle className="w-10 h-10 text-green-600" /></div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Mulțumim pentru mesaj!</h2>
                  <p className="text-muted-foreground">Te vom contacta în cel mai scurt timp posibil.</p>
                </motion.div>
              ) : (
                <motion.form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Trimite-ne un mesaj</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div><label className="block text-sm font-medium text-foreground mb-2">Nume complet *</label><input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary" /></div>
                    <div><label className="block text-sm font-medium text-foreground mb-2">Email *</label><input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary" /></div>
                    <div><label className="block text-sm font-medium text-foreground mb-2">Telefon *</label><input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary" /></div>
                    <div><label className="block text-sm font-medium text-foreground mb-2">Companie</label><input type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary" /></div>
                  </div>
                  <div className="mb-6"><label className="block text-sm font-medium text-foreground mb-2">Serviciu de interes</label><select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary"><option value="">Selectează un serviciu</option><option value="web">Dezvoltare Web</option><option value="mobile">Aplicații Mobile</option><option value="ecommerce">E-commerce</option><option value="saas">Platforme SaaS</option><option value="crm">Sisteme CRM/ERP</option></select></div>
                  <div className="mb-6"><label className="block text-sm font-medium text-foreground mb-2">Mesaj *</label><textarea required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary resize-none" placeholder="Descrie proiectul tău..." /></div>
                  <div className="mb-6"><label className="flex items-start gap-3 cursor-pointer"><input type="checkbox" required checked={formData.gdpr} onChange={(e) => setFormData({...formData, gdpr: e.target.checked})} className="mt-1" /><span className="text-sm text-muted-foreground">Sunt de acord cu <a href="/confidentialitate" className="text-primary hover:underline">Politica de Confidențialitate</a></span></label></div>
                  <button type="submit" className="btn-primary w-full">Trimite mesajul <Send className="w-5 h-5" /></button>
                </motion.form>
              )}
            </div>
            <div className="space-y-6">
              <motion.div className="bg-card rounded-xl p-6 border border-border" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <h3 className="font-heading font-bold text-foreground mb-4">Informații de contact</h3>
                <div className="space-y-4">
                  <a href="mailto:contact@siteshop.md" className="flex items-center gap-3 text-muted-foreground hover:text-primary"><Mail className="w-5 h-5" />contact@siteshop.md</a>
                  <a href="tel:+37360123456" className="flex items-center gap-3 text-muted-foreground hover:text-primary"><Phone className="w-5 h-5" />+373 60 123 456</a>
                  <div className="flex items-start gap-3 text-muted-foreground"><MapPin className="w-5 h-5 mt-0.5" /><span>Chișinău, Republica Moldova</span></div>
                  <div className="flex items-center gap-3 text-muted-foreground"><Clock className="w-5 h-5" />Luni - Vineri: 09:00 - 18:00</div>
                </div>
              </motion.div>
              <motion.div className="bg-primary rounded-xl p-6 text-primary-foreground" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <h3 className="font-heading font-bold mb-2">Consultație gratuită</h3>
                <p className="text-primary-foreground/80 text-sm">Programează o întâlnire online de 30 minute pentru a discuta despre proiectul tău.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
