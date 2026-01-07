import Layout from '@/components/layout/Layout';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

const Privacy = () => (
  <Layout>
    <AnimatedBackground variant="hero" className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white text-center">Politica de Confidențialitate</h1>
      </div>
    </AnimatedBackground>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
        <p className="text-muted-foreground">Ultima actualizare: Ianuarie 2025</p>
        <h2 className="text-2xl font-heading font-bold text-foreground mt-8">1. Ce date colectăm</h2>
        <p className="text-muted-foreground">Colectăm date pe care ni le furnizați direct: nume, email, telefon, informații despre companie. De asemenea, colectăm automat date tehnice: adresă IP, tip browser, pagini vizitate.</p>
        <h2 className="text-2xl font-heading font-bold text-foreground mt-8">2. Cum folosim datele</h2>
        <p className="text-muted-foreground">Folosim datele pentru: răspunsuri la întrebări, furnizarea serviciilor solicitate, îmbunătățirea site-ului, marketing (cu consimțământ).</p>
        <h2 className="text-2xl font-heading font-bold text-foreground mt-8" id="cookies">3. Cookie-uri</h2>
        <p className="text-muted-foreground">Folosim cookie-uri esențiale pentru funcționarea site-ului, cookie-uri de analiză pentru statistici și cookie-uri de marketing (opționale).</p>
        <h2 className="text-2xl font-heading font-bold text-foreground mt-8">4. Drepturile dvs. (GDPR)</h2>
        <p className="text-muted-foreground">Aveți dreptul de: acces la datele dvs., rectificare, ștergere, portabilitate, restricționare a procesării și opoziție. Contactați-ne la contact@siteshop.md.</p>
        <h2 className="text-2xl font-heading font-bold text-foreground mt-8">5. Contact DPO</h2>
        <p className="text-muted-foreground">Pentru întrebări despre datele personale: dpo@siteshop.md</p>
      </div>
    </section>
  </Layout>
);

export default Privacy;
