import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { availableGames, platforms, schedules } from '../utils/mockData';
import { findMatches } from '../utils/matchAlgorithm';
import { mockActiveMatches } from '../utils/mockData';
import { Monitor, Gamepad2, Smartphone, Check } from 'lucide-react';

const Onboarding = ({ onComplete }) => {
  const { updateUserProfile, setMatches } = useUser();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nickname: '',
    platform: '',
    games: [],
    schedule: '',
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Completar onboarding
      updateUserProfile(formData);
      const matchedUsers = findMatches(formData, mockActiveMatches);
      setMatches(matchedUsers);
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGameToggle = (game) => {
    setFormData((prev) => ({
      ...prev,
      games: prev.games.includes(game)
        ? prev.games.filter((g) => g !== game)
        : [...prev.games, game],
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.nickname && formData.platform;
      case 2:
        return formData.games.length > 0;
      case 3:
        return formData.schedule;
      default:
        return false;
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const handleNextStep = () => {
    setDirection(1);
    handleNext();
  };

  const handleBackStep = () => {
    setDirection(-1);
    handleBack();
  };

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Indicador de progreso */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-medium-text text-sm">Paso {currentStep} de 3</span>
            <span className="text-medium-text text-sm">{Math.round((currentStep / 3) * 100)}%</span>
          </div>
          <div className="h-2 bg-dark-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Contenido de los pasos */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="glass-card"
          >
            {/* Paso 1: Nickname y Plataforma */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold mb-2">Crea tu perfil</h2>
                <p className="text-medium-text mb-6">
                  Cuéntanos sobre ti para encontrar compañeros perfectos
                </p>

                <div>
                  <label className="block text-sm font-medium mb-2">Nickname</label>
                  <input
                    type="text"
                    value={formData.nickname}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, nickname: e.target.value }))
                    }
                    placeholder="Tu nombre de gamer"
                    className="w-full px-4 py-3 rounded-xl border-2 border-dark-border 
                             bg-dark-card/60 backdrop-blur-sm focus:outline-none focus:ring-2 
                             focus:ring-accent/20 focus:border-accent text-light-text 
                             placeholder:text-medium-text transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-4 text-light-text">
                    Plataforma
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {platforms.map((platform, index) => {
                      const isSelected = formData.platform === platform;
                      // Iconos para cada plataforma
                      const getIcon = () => {
                        switch (platform) {
                          case 'PC':
                            return <Monitor className="w-6 h-6" />;
                          case 'PS5':
                            return <Gamepad2 className="w-6 h-6" />;
                          case 'Xbox':
                            return <Gamepad2 className="w-6 h-6" />;
                          case 'Nintendo Switch':
                            return <Gamepad2 className="w-6 h-6" />;
                          case 'Mobile':
                            return <Smartphone className="w-6 h-6" />;
                          default:
                            return <Gamepad2 className="w-6 h-6" />;
                        }
                      };

                      return (
                        <motion.button
                          key={platform}
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, platform }))
                          }
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`relative px-6 py-4 rounded-2xl border-2 transition-all duration-300 
                                   flex flex-col items-center justify-center gap-2 min-h-[100px]
                                   ${
                                     isSelected
                                       ? 'bg-accent text-dark-bg border-accent shadow-lg shadow-accent/20'
                                       : 'bg-dark-card/40 backdrop-blur-sm border-dark-border text-light-text hover:border-accent/50 hover:bg-dark-card/60'
                                   }`}
                        >
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full 
                                       flex items-center justify-center border-2 border-dark-bg"
                            >
                              <Check className="w-4 h-4 text-dark-bg" />
                            </motion.div>
                          )}
                          <div className={`${isSelected ? 'text-dark-bg' : 'text-light-text'}`}>
                            {getIcon()}
                          </div>
                          <span className={`text-sm font-semibold ${isSelected ? 'text-dark-bg' : 'text-light-text'}`}>
                            {platform}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Paso 2: Selección de Juegos */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold mb-2">Tus juegos favoritos</h2>
                <p className="text-medium-text mb-6">
                  Selecciona los juegos en los que quieres encontrar compañeros
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[400px] overflow-y-auto">
                  {availableGames.map((game, index) => {
                    const isSelected = formData.games.includes(game);
                    return (
                      <motion.button
                        key={game}
                        onClick={() => handleGameToggle(game)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.02 }}
                        className={`relative px-4 py-3 rounded-xl border-2 transition-all duration-300 text-left
                                 ${
                                   isSelected
                                     ? 'bg-accent text-dark-bg border-accent shadow-lg shadow-accent/20'
                                     : 'bg-dark-card/40 backdrop-blur-sm border-dark-border text-light-text hover:border-accent/50 hover:bg-dark-card/60'
                                 }`}
                      >
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-accent rounded-full 
                                     flex items-center justify-center border-2 border-dark-bg"
                          >
                            <Check className="w-3 h-3 text-dark-bg" />
                          </motion.div>
                        )}
                        <span className="text-sm font-medium">{game}</span>
                      </motion.button>
                    );
                  })}
                </div>

                {formData.games.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-medium-text mb-2">
                      Seleccionados: {formData.games.length}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Paso 3: Horario */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold mb-2">Tu horario habitual</h2>
                <p className="text-medium-text mb-6">
                  ¿Cuándo sueles jugar?
                </p>

                <div className="space-y-3">
                  {schedules.map((schedule, index) => {
                    const isSelected = formData.schedule === schedule;
                    return (
                      <motion.button
                        key={schedule}
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, schedule }))
                        }
                        whileHover={{ scale: 1.01, x: 4 }}
                        whileTap={{ scale: 0.99 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 
                                 text-left flex items-center justify-between
                                 ${
                                   isSelected
                                     ? 'bg-accent text-dark-bg border-accent shadow-lg shadow-accent/20'
                                     : 'bg-dark-card/40 backdrop-blur-sm border-dark-border text-light-text hover:border-accent/50 hover:bg-dark-card/60'
                                 }`}
                      >
                        <span className="text-lg font-semibold">{schedule}</span>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="w-6 h-6 bg-dark-bg rounded-full flex items-center justify-center"
                          >
                            <Check className="w-4 h-4 text-accent" />
                          </motion.div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Botones de navegación */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handleBackStep}
                disabled={currentStep === 1}
                className={`btn-secondary ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Atrás
              </button>
              <button
                onClick={handleNextStep}
                disabled={!canProceed()}
                className={`btn-primary ${!canProceed() ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {currentStep === 3 ? 'Comenzar' : 'Siguiente'}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Onboarding;

