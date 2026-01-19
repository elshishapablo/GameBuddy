import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { Gamepad2, Users, Clock } from 'lucide-react';
import { mockActiveMatches } from '../../utils/mockData';

// Lazy load del planeta 3D que es pesado
const Planet3D = lazy(() => import('../Planet3D'));

const HeroLanding = ({ onGetStarted }) => {
  return (
    <section className="relative min-h-screen flex items-start justify-center pt-24 overflow-hidden bg-dark-bg">
      <div className="container mx-auto px-4 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 pt-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-light-text leading-tight">
              Encuentra tu
              <span className="block text-medium-text">Compañero Perfecto</span>
            </h1>
            <p className="text-xl text-medium-text leading-relaxed">
              Conecta con gamers según sus habilidades, horarios y compatibilidad. 
              Elimina la toxicidad de los emparejamientos aleatorios.
            </p>
            
            {/* Stats rápidas */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-light-text" />
                <span className="text-medium-text">+10K Gamers</span>
              </div>
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-light-text" />
                <span className="text-medium-text">15+ Juegos</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-light-text" />
                <span className="text-medium-text">Match en segundos</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onGetStarted}
                className="btn-primary"
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
                className="btn-secondary"
              >
                Ver Cómo Funciona
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Planet */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] bg-dark-bg -mt-4"
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-dark-border border-t-accent rounded-full animate-spin"></div>
                </div>
              }
            >
              <Planet3D
                onMatchClick={() => {}}
                showMatches={true}
                filteredMatches={mockActiveMatches}
              />
            </Suspense>
            <div className="absolute bottom-4 left-4 right-4 glass-card p-4">
              <p className="text-sm text-medium-text text-center">
                <span className="font-semibold text-light-text">Partidas activas en el mundo</span>
                <br />
                Haz clic en los puntos para ver gamers disponibles
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;

