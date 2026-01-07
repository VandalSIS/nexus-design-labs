import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const NotFound = () => (
  <Layout>
    <div className="min-h-[70vh] flex items-center justify-center px-4 pt-20">
      <div className="text-center">
        <h1 className="text-8xl font-heading font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Pagina nu a fost găsită</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">Ne pare rău, pagina pe care o cauți nu există sau a fost mutată.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn-primary"><Home className="w-5 h-5" />Acasă</Link>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFound;
