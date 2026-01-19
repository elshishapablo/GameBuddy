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
    <section id="caracteristicas" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-light-text mb-4">Características Premium</h2>
          <p className="text-xl text-medium-text max-w-3xl mx-auto">
            Todo lo que necesitas para encontrar compañeros de juego perfectos y disfrutar 
            de una experiencia gaming sin toxicidad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card hover:shadow-xl transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full 
                              bg-dark-surface/60 backdrop-blur-sm border border-dark-border mb-4">
                  <Icon className="w-6 h-6 text-light-text" />
                </div>
                <h3 className="text-lg font-semibold text-light-text mb-2">{feature.title}</h3>
                <p className="text-sm text-medium-text">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

