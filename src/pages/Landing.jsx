import { lazy, Suspense, useEffect } from 'react';
import NavbarLanding from '../components/Landing/NavbarLanding';
import HeroLanding from '../components/Landing/HeroLanding';

// Lazy load de secciones pesadas
const Features = lazy(() => import('../components/Landing/Features'));
const QueHacemos = lazy(() => import('../components/Landing/QueHacemos'));
const HowItWorks = lazy(() => import('../components/Landing/HowItWorks'));
const Stats = lazy(() => import('../components/Landing/Stats'));
const ContactForm = lazy(() => import('../components/Landing/ContactForm'));
const Footer = lazy(() => import('../components/Landing/Footer'));

// Componente de placeholder para lazy loading
const LazySection = ({ children }) => (
  <Suspense fallback={<div className="min-h-[200px] bg-dark-bg" />}>
    {children}
  </Suspense>
);

const Landing = ({ onGetStarted }) => {
  // Scroll al top cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg">
      <NavbarLanding onGetStarted={onGetStarted} />
      <HeroLanding onGetStarted={onGetStarted} />
      <LazySection><QueHacemos /></LazySection>
      <LazySection><Features /></LazySection>
      <LazySection><HowItWorks /></LazySection>
      <LazySection><Stats /></LazySection>
      <section id="contacto" className="py-8 sm:py-12 lg:py-16 bg-dark-bg">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <LazySection>
            <ContactForm />
          </LazySection>
        </div>
      </section>
      <LazySection><Footer /></LazySection>
    </div>
  );
};

export default Landing;

