import { motion } from 'framer-motion';
import {
  Mic,
  Search,
  MessageSquare,
  Star,
  Filter,
  Globe,
  Zap,
  Shield,
  Clock,
  Users,
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: 'Filtro de Micrófono',
      description: 'Encuentra compañeros con o sin micrófono. Filtro principal para una mejor experiencia.',
    },
    {
      icon: Search,
      title: 'Búsqueda Inteligente',
      description: 'Algoritmo avanzado que encuentra matches perfectos basado en juegos, horarios y plataformas.',
    },
    {
      icon: MessageSquare,
      title: 'Chat Premium',
      description: 'Interfaz de mensajería minimalista y elegante para coordinar partidas.',
    },
    {
      icon: Star,
      title: 'Sistema de Ratings',
      description: 'Califica a tus compañeros y ayuda a construir una comunidad positiva.',
    },
    {
      icon: Filter,
      title: 'Filtros Avanzados',
      description: 'Filtra por plataforma, juegos, horario y más para encontrar exactamente lo que buscas.',
    },
    {
      icon: Globe,
      title: 'Planeta Interactivo',
      description: 'Visualiza partidas activas en el mundo en tiempo real. Haz clic para explorar.',
    },
    {
      icon: Zap,
      title: 'Match Rápido',
      description: 'Conecta con compañeros en segundos. Sin esperas, sin complicaciones.',
    },
    {
      icon: Shield,
      title: 'Seguro y Confiable',
      description: 'Perfiles verificados y sistema de reportes para mantener la comunidad segura.',
    },
    {
      icon: Clock,
      title: 'Disponibilidad 24/7',
      description: 'Gamers activos en todo el mundo. Siempre hay alguien disponible para jugar.',
    },
    {
      icon: Users,
      title: 'Comunidad Activa',
      description: 'Únete a miles de gamers que buscan compañeros de juego serios y amigables.',
    },
  ];

  return (
    <section id="caracteristicas" className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-dark-bg">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-light-text mb-3 sm:mb-4">Características Premium</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-medium-text max-w-3xl mx-auto">
            Todo lo que necesitas para encontrar compañeros de juego perfectos y disfrutar 
            de una experiencia gaming sin toxicidad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card hover:shadow-xl transition-all p-3 sm:p-4 lg:p-6"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full 
                              bg-dark-surface/60 backdrop-blur-sm border border-dark-border mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-light-text" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-light-text mb-2">{feature.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-medium-text">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

