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
    { icon: Mic, title: 'Filtro de micrófono', description: 'Compañeros con o sin mic. El filtro que más cambia la partida.' },
    { icon: Search, title: 'Búsqueda inteligente', description: 'Matches por juegos, horarios y plataforma, no por azar.' },
    { icon: MessageSquare, title: 'Chat limpio', description: 'Mensajería minimalista para coordinar sin ruido visual.' },
    { icon: Star, title: 'Ratings', description: 'Califica compañeros y construye una comunidad más sana.' },
    { icon: Filter, title: 'Filtros precisos', description: 'Plataforma, títulos, horario y más, exactamente lo que buscas.' },
    { icon: Globe, title: 'Planeta interactivo', description: 'Partidas activas en el mundo. Gira, apunta y explora.' },
    { icon: Zap, title: 'Match rápido', description: 'Conecta en segundos. Sin colas, sin fricción.' },
    { icon: Shield, title: 'Seguro', description: 'Perfiles y reportes para mantener el espacio en calma.' },
    { icon: Clock, title: 'Siempre activo', description: 'Gamers en todo el mundo. Siempre hay alguien listo.' },
    { icon: Users, title: 'Comunidad', description: 'Miles de jugadores buscando partidas serias y amables.' },
  ];

  return (
    <section id="caracteristicas" className="relative py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="section-kicker mb-4">Herramientas</p>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl mb-4">Características</h2>
          <p className="text-sm sm:text-base lg:text-lg text-medium-text max-w-2xl mx-auto leading-relaxed">
            Todo lo necesario para encontrar compañeros y jugar sin toxicidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card glass-card-hover p-5"
              >
                <div className="icon-well w-10 h-10 mb-4">
                  <Icon className="w-[18px] h-[18px] text-light-text" />
                </div>
                <h3 className="font-display text-base font-semibold text-light-text mb-1.5">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-medium-text leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
