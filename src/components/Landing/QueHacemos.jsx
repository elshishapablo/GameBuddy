import { motion } from 'framer-motion';
import { Users, Gamepad2, Clock, Shield } from 'lucide-react';

const QueHacemos = () => {
  const features = [
    {
      icon: Users,
      title: 'Match inteligente',
      description: 'Algoritmo que conecta gamers por juegos, horarios y compatibilidad real.',
    },
    {
      icon: Gamepad2,
      title: 'Multiplataforma',
      description: 'PC, PS5, Xbox, Switch y mobile. Toda tu comunidad, un solo lugar.',
    },
    {
      icon: Clock,
      title: 'Horarios alineados',
      description: 'Encuentra a quien juega cuando tú juegas. Mañana, tarde o noche.',
    },
    {
      icon: Shield,
      title: 'Sin toxicidad',
      description: 'Filtros y calificaciones para una experiencia de juego más limpia.',
    },
  ];

  return (
    <section id="que-hacemos" className="relative py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="section-kicker mb-4">La plataforma</p>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl mb-4">¿Qué hacemos?</h2>
          <p className="text-sm sm:text-base lg:text-lg text-medium-text max-w-2xl mx-auto leading-relaxed">
            GameBuddy conecta jugadores por afinidad real: títulos, horarios y estilo de juego.
            Sin emparejamientos aleatorios ni ruido innecesario.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card glass-card-hover p-5 sm:p-6 text-center"
              >
                <div className="icon-well w-12 h-12 mx-auto mb-4">
                  <Icon className="w-5 h-5 text-light-text" />
                </div>
                <h3 className="font-display text-lg font-semibold text-light-text mb-2">{feature.title}</h3>
                <p className="text-sm text-medium-text leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QueHacemos;
