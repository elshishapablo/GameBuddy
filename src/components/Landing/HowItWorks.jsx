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
    <section id="como-funciona" className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-dark-bg">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-light-text mb-3 sm:mb-4">Cómo Funciona</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-medium-text max-w-3xl mx-auto">
            Encuentra tu compañero perfecto en 4 simples pasos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
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
                <div className="glass-card text-center p-4 sm:p-5 lg:p-6">
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent 
                                text-dark-bg flex items-center justify-center font-bold text-base sm:text-lg">
                    {step.step}
                  </div>
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full 
                                bg-dark-surface/60 backdrop-blur-sm border border-dark-border mb-3 sm:mb-4 mt-2 sm:mt-4">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-light-text" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-light-text mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-medium-text">{step.description}</p>
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

