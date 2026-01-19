import { motion } from 'framer-motion';
import { UserPlus, Gamepad2, Users, MessageCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Crea tu Perfil',
      description: 'Regístrate en menos de 2 minutos. Selecciona tu plataforma, juegos favoritos y horario habitual.',
      step: '01',
    },
    {
      icon: Gamepad2,
      title: 'Selecciona Juegos',
      description: 'Elige los juegos en los que quieres encontrar compañeros. Puedes seleccionar múltiples títulos.',
      step: '02',
    },
    {
      icon: Users,
      title: 'Encuentra Matches',
      description: 'Nuestro algoritmo encuentra compañeros perfectos basado en juegos en común y horarios.',
      step: '03',
    },
    {
      icon: MessageCircle,
      title: 'Conecta y Juega',
      description: 'Chatea con tus matches, coordina partidas y disfruta de una experiencia gaming sin toxicidad.',
      step: '04',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-light-text mb-4">Cómo Funciona</h2>
          <p className="text-xl text-medium-text max-w-3xl mx-auto">
            Encuentra tu compañero perfecto en 4 simples pasos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-card text-center">
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-accent 
                                text-dark-bg flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full 
                                bg-dark-surface/60 backdrop-blur-sm border border-dark-border mb-4 mt-4">
                    <Icon className="w-8 h-8 text-light-text" />
                  </div>
                  <h3 className="text-xl font-semibold text-light-text mb-2">{step.title}</h3>
                  <p className="text-medium-text">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

