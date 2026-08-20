import { motion } from 'framer-motion';
import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import { Gamepad2, Users, Clock, ArrowRight } from 'lucide-react';
import { mockActiveMatches } from '../../utils/mockData';

const Planet3D = lazy(() => import('../Planet3D'));

const HeroLanding = ({ onGetStarted }) => {
  const [shouldLoadPlanet, setShouldLoadPlanet] = useState(false);
  const planetContainerRef = useRef(null);

  useEffect(() => {
    if (!planetContainerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadPlanet(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '80px' }
    );
    observer.observe(planetContainerRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, label: '+10K gamers' },
    { icon: Gamepad2, label: '15+ juegos' },
    { icon: Clock, label: 'Match en segundos' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[42%] w-[70vw] h-[70vw] max-w-[760px] max-h-[760px] rounded-full bg-[radial-gradient(circle,rgba(168,178,204,0.14)_0%,transparent_68%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 sm:space-y-7 z-10"
          >
            <span className="section-kicker">
              <span className="w-1.5 h-1.5 rounded-full bg-light-text/80 animate-pulse-soft" />
              Comunidad global · sin toxicidad
            </span>

            <h1 className="font-display text-[2.35rem] sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-semibold text-light-text leading-[1.08] tracking-tight">
              Encuentra tu
              <span className="block text-medium-text font-normal mt-1">compañero perfecto</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-medium-text leading-relaxed max-w-lg">
              Conecta con gamers según habilidades, horarios y compatibilidad.
              Emparejamientos pensados, no aleatorios.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2.5">
              {stats.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-medium-text">
                  <span className="icon-well w-7 h-7">
                    <Icon className="w-3.5 h-3.5 text-light-text/80" />
                  </span>
                  <span className="text-xs sm:text-sm">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={onGetStarted}
                className="btn-primary text-sm px-6 py-3 inline-flex items-center justify-center gap-2"
              >
                Comenzar ahora
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-sm px-6 py-3"
              >
                Ver cómo funciona
              </motion.button>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center" ref={planetContainerRef}>
            <div className="relative h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[520px]">
              {shouldLoadPlanet ? (
                <Suspense
                  fallback={
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="spinner" />
                    </div>
                  }
                >
                  <Planet3D
                    onMatchClick={() => {}}
                    showMatches={true}
                    filteredMatches={mockActiveMatches}
                  />
                </Suspense>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="spinner" />
                </div>
              )}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="glass rounded-2xl px-4 py-3 -mt-2 sm:mt-0 mx-auto max-w-md"
            >
              <p className="text-center text-xs sm:text-sm text-medium-text">
                <span className="font-medium text-light-text">Partidas activas en el mundo</span>
                <span className="hidden sm:inline"> · </span>
                <span className="block sm:inline mt-0.5 sm:mt-0">Gira el planeta y explora cada región</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;
