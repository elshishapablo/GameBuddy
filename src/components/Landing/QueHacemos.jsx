import { motion } from 'framer-motion';
import { Users, Gamepad2, Clock, Shield } from 'lucide-react';

const QueHacemos = () => {
  const features = [
    {
      icon: Users,
      title: 'Match Inteligente',
      description: 'Algoritmo que conecta gamers según juegos en común, horarios y compatibilidad. Encuentra tu compañero perfecto.',
    },
    {
      icon: Gamepad2,
      title: 'Multiplataforma',
      description: 'Conecta con jugadores de PC, PS5, Xbox, Nintendo Switch y más. Todos en un solo lugar.',
    },
    {
      icon: Clock,
      title: 'Horarios Flexibles',
      description: 'Encuentra compañeros que jueguen en tu mismo horario. Mañana, tarde o noche, siempre hay alguien disponible.',
    },
    {
      icon: Shield,
      title: 'Sin Toxicidad',
      description: 'Filtros avanzados y sistema de calificaciones para garantizar una experiencia de gaming positiva.',
    },
  ];

  return (
    <section id="que-hacemos" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-light-text mb-4">¿Qué Hacemos?</h2>
          <p className="text-xl text-medium-text max-w-3xl mx-auto">
            GameBuddy es una plataforma premium que conecta gamers según sus habilidades, 
            horarios y compatibilidad, eliminando la toxicidad de los emparejamientos aleatorios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center glass-card"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full 
                              bg-dark-surface/60 backdrop-blur-sm border border-dark-border mb-4">
                  <Icon className="w-8 h-8 text-light-text" />
                </div>
                <h3 className="text-xl font-semibold text-light-text mb-2">{feature.title}</h3>
                <p className="text-medium-text">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QueHacemos;

