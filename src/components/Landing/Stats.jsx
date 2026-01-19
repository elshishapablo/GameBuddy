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
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-light-text mb-4">GameBuddy en Números</h2>
          <p className="text-xl text-medium-text max-w-3xl mx-auto">
            Una comunidad global de gamers conectándose y disfrutando juntos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full 
                              bg-dark-surface/60 backdrop-blur-sm border border-dark-border mb-4">
                  <Icon className="w-8 h-8 text-light-text" />
                </div>
                <div className="text-4xl font-bold text-light-text mb-2">{stat.value}</div>
                <div className="text-medium-text">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

