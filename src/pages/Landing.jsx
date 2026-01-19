import { lazy, Suspense, useEffect } from 'react';
import NavbarLanding from '../components/Landing/NavbarLanding';
import HeroLanding from '../components/Landing/HeroLanding';

// Lazy load de secciones pesadas
const Features = lazy(() => import('../components/Landing/Features'));
const QueHacemos = lazy(() => import('../components/Landing/QueHacemos'));
const HowItWorks = lazy(() => import('../components/Landing/HowItWorks'));
const Stats = lazy(() => import('../components/Landing/Stats'));
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
      <LazySection><Footer /></LazySection>
    </div>
  );
};

export default Landing;

