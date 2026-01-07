import Layout from '@/components/layout/Layout';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

const Terms = () => (
  <Layout>
    <AnimatedBackground variant="hero" className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white text-center">Termeni și Condiții</h1>
      </div>
    </AnimatedBackground>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
        <p className="text-muted-foreground">Ultima actualizare: Ianuarie 2025</p>
        <h2 className="text-2xl font-heading font-bold text-foreground mt-8">1. Definiții</h2>
        <p className="text-muted-foreground">„SiteShop.md" sau „Compania" se referă la SiteShop SRL, cu sediul în Chișinău, Moldova. „Client" sau „Utilizator" se referă la orice persoană fizică sau juridică care utilizează serviciile noastre.</p>
        <h2 className="text-2xl font-heading font-bold text-foreground mt-8">2. Utilizarea Serviciilor</h2>
        <p className="text-muted-foreground">Prin accesarea și utilizarea site-ului nostru, sunteți de acord să respectați acești termeni și condiții. Serviciile noastre sunt destinate utilizării în scopuri legale și comerciale legitime.</p>
        <h2 className="text-2xl font-heading font-bold text-foreground mt-8">3. Proprietate Intelectuală</h2>
        <p className="text-muted-foreground">Tot conținutul, designul, codul sursă și materialele de pe acest site sunt proprietatea SiteShop.md și sunt protejate de legile drepturilor de autor din Republica Moldova și internaționale.</p>
        <h2 className="text-2xl font-heading font-bold text-foreground mt-8">4. Limitarea Răspunderii</h2>
        <p className="text-muted-foreground">SiteShop.md nu va fi răspunzătoare pentru daune indirecte, incidentale sau consecvente rezultate din utilizarea serviciilor noastre, în măsura permisă de lege.</p>
        <h2 className="text-2xl font-heading font-bold text-foreground mt-8">5. Legea Aplicabilă</h2>
        <p className="text-muted-foreground">Acești termeni sunt guvernați de legile Republicii Moldova. Orice dispută va fi soluționată de instanțele competente din Chișinău.</p>
      </div>
    </section>
  </Layout>
);

export default Terms;
