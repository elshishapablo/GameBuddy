import { motion } from 'framer-motion';
import { Users, Gamepad2, MessageSquare, Globe } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Gamers activos' },
    { icon: Gamepad2, value: '15+', label: 'Juegos soportados' },
    { icon: MessageSquare, value: '50,000+', label: 'Matches exitosos' },
    { icon: Globe, value: '100+', label: 'Países' },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="section-kicker mb-4">Alcance</p>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl mb-4">GameBuddy en números</h2>
          <p className="text-sm sm:text-base lg:text-lg text-medium-text max-w-2xl mx-auto">
            Una comunidad global conectándose para jugar mejor.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card glass-card-hover text-center p-5 sm:p-6"
              >
                <div className="icon-well w-11 h-11 mx-auto mb-4">
                  <Icon className="w-5 h-5 text-light-text" />
                </div>
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-light-text tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-medium-text">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
