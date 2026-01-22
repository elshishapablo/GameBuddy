import { motion } from 'framer-motion';
import { Users, Gamepad2, MessageSquare, Globe } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Gamers Activos',
      color: 'text-dark-gray',
    },
    {
      icon: Gamepad2,
      value: '15+',
      label: 'Juegos Soportados',
      color: 'text-dark-gray',
    },
    {
      icon: MessageSquare,
      value: '50,000+',
      label: 'Matches Exitosos',
      color: 'text-dark-gray',
    },
    {
      icon: Globe,
      value: '100+',
      label: 'Países',
      color: 'text-dark-gray',
    },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-dark-bg">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-light-text mb-3 sm:mb-4">GameBuddy en Números</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-medium-text max-w-3xl mx-auto">
            Una comunidad global de gamers conectándose y disfrutando juntos
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card text-center p-3 sm:p-4 lg:p-6"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full 
                              bg-dark-surface/60 backdrop-blur-sm border border-dark-border mb-3 sm:mb-4">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-light-text" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-light-text mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg text-medium-text">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

