import { motion } from 'framer-motion';
import { UserPlus, Gamepad2, Users, MessageCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Crea tu perfil',
      description: 'Registro breve. Plataforma, juegos y horario habitual.',
      step: '01',
    },
    {
      icon: Gamepad2,
      title: 'Elige tus juegos',
      description: 'Selecciona los títulos en los que quieres encontrar compañía.',
      step: '02',
    },
    {
      icon: Users,
      title: 'Encuentra matches',
      description: 'El algoritmo prioriza juegos en común y coincidencia de horario.',
      step: '03',
    },
    {
      icon: MessageCircle,
      title: 'Conecta y juega',
      description: 'Chatea, coordina y entra a partida con alguien compatible.',
      step: '04',
    },
  ];

  return (
    <section id="como-funciona" className="relative py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="section-kicker mb-4">El flujo</p>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl mb-4">Cómo funciona</h2>
          <p className="text-sm sm:text-base lg:text-lg text-medium-text max-w-2xl mx-auto">
            Cuatro pasos. Sin fricción.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] right-[-1.25rem] h-px bg-gradient-to-r from-white/15 to-transparent" />
                )}
                <div className="glass-card glass-card-hover text-center p-6 relative">
                  <span className="absolute top-4 right-4 font-display text-xs tracking-widest text-medium-text/70">
                    {step.step}
                  </span>
                  <div className="icon-well w-14 h-14 mx-auto mb-4 mt-2">
                    <Icon className="w-6 h-6 text-light-text" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-light-text mb-2">{step.title}</h3>
                  <p className="text-sm text-medium-text leading-relaxed">{step.description}</p>
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
