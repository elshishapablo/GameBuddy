import { motion } from 'framer-motion';
import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import { Gamepad2, Users, Clock } from 'lucide-react';
import { mockActiveMatches } from '../../utils/mockData';

// Lazy load del planeta 3D que es pesado
const Planet3D = lazy(() => import('../Planet3D'));

const HeroLanding = ({ onGetStarted }) => {
  const [shouldLoadPlanet, setShouldLoadPlanet] = useState(false);
  const planetContainerRef = useRef(null);

  // Cargar planeta solo cuando esté visible (Intersection Observer)
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
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(planetContainerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-2 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 items-center h-full" style={{ minHeight: '100%' }}>
          {/* Left: Text Content - Renderizado inmediato sin esperar 3D */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2 sm:space-y-3 z-10"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-light-text leading-tight">
              Encuentra tu
              <span className="block text-medium-text">Compañero Perfecto</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-medium-text leading-snug">
              Conecta con gamers según sus habilidades, horarios y compatibilidad.
              Elimina la toxicidad de los emparejamientos aleatorios.
            </p>

            {/* Stats rápidas */}
            <div className="flex flex-wrap gap-2 py-0.5">
              <div className="flex items-center gap-1.5">
                <Users className="w-3 h-3 text-light-text" />
                <span className="text-xs sm:text-sm text-medium-text">+10K Gamers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Gamepad2 className="w-3 h-3 text-light-text" />
                <span className="text-xs sm:text-sm text-medium-text">15+ Juegos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-light-text" />
                <span className="text-xs sm:text-sm text-medium-text">Match en segundos</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onGetStarted}
                className="btn-primary text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
              >
                Comenzar Ahora
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('como-funciona');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
              >
                Ver Cómo Funciona
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Planet - Espacio reservado para evitar layout shift */}
          <div className="flex flex-col justify-center" ref={planetContainerRef}>
            {/* Contenedor con altura fija para evitar layout shift */}
            <div className="relative h-[160px] sm:h-[220px] md:h-[260px] lg:h-[300px] xl:h-[340px] bg-dark-bg min-h-[160px]">
              {shouldLoadPlanet ? (
                <Suspense
                  fallback={
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-dark-border border-t-accent rounded-full animate-spin"></div>
                    </div>
                  }
                >
                  <Planet3D
                    onMatchClick={() => { }}
                    showMatches={true}
                    filteredMatches={mockActiveMatches}
                  />
                </Suspense>
              ) : (
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-dark-border border-t-accent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            <div className="-mt-2 sm:-mt-1 md:mt-15 lg:mt-28 glass-card p-1.5 sm:p-2 lg:p-3">
              <p className="text-[10px] sm:text-xs md:text-sm text-medium-text text-center">
                <span className="font-semibold text-light-text">Partidas activas en el mundo</span>
                <br className="hidden sm:block" />
                <span className="hidden sm:inline"> </span>
                <span className="text-[10px] sm:text-xs">Haz clic en los puntos para ver gamers disponibles</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;

