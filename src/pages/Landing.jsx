import { lazy, Suspense, useEffect } from 'react';
import NavbarLanding from '../components/Landing/NavbarLanding';
import HeroLanding from '../components/Landing/HeroLanding';

const Features = lazy(() => import('../components/Landing/Features'));
const QueHacemos = lazy(() => import('../components/Landing/QueHacemos'));
const HowItWorks = lazy(() => import('../components/Landing/HowItWorks'));
const Stats = lazy(() => import('../components/Landing/Stats'));
const ContactForm = lazy(() => import('../components/Landing/ContactForm'));
const Footer = lazy(() => import('../components/Landing/Footer'));

const LazySection = ({ children }) => (
  <Suspense fallback={<div className="min-h-[180px]" />}>
    {children}
  </Suspense>
);

const Landing = ({ onGetStarted }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg ambient-scene">
      <NavbarLanding onGetStarted={onGetStarted} />
      <HeroLanding onGetStarted={onGetStarted} />
      <LazySection><QueHacemos /></LazySection>
      <LazySection><Features /></LazySection>
      <LazySection><HowItWorks /></LazySection>
      <LazySection><Stats /></LazySection>
      <section id="contacto" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
