import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { availableGames, platforms, schedules } from '../utils/mockData';
import { findMatches } from '../utils/matchAlgorithm';
import { mockActiveMatches } from '../utils/mockData';
import { Monitor, Gamepad2, Smartphone, Check, ArrowLeft } from 'lucide-react';

const Onboarding = ({ onComplete, onBack }) => {
  // Scroll al top cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-3 sm:p-4 lg:p-6 relative">
      {/* Botón de volver */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onBack}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 p-2 sm:p-3 rounded-lg glass-card hover:bg-dark-card/60 transition-colors flex items-center gap-2 text-light-text"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="text-xs sm:text-sm font-medium hidden sm:inline">Volver</span>
      </motion.button>
      
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
        {/* Indicador de progreso */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-medium-text text-xs sm:text-sm lg:text-base">Paso {currentStep} de 3</span>
            <span className="text-medium-text text-xs sm:text-sm lg:text-base">{Math.round((currentStep / 3) * 100)}%</span>
          </div>
          <div className="h-1.5 sm:h-2 bg-dark-border rounded-full overflow-hidden">
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
            className="glass-card p-4 sm:p-5 lg:p-6 xl:p-8"
          >
            {/* Paso 1: Nickname y Plataforma */}
            {currentStep === 1 && (
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-light-text">Crea tu perfil</h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-medium-text mb-4 sm:mb-5 lg:mb-6">
                  Cuéntanos sobre ti para encontrar compañeros perfectos
                </p>

                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-medium mb-2 text-light-text">Nickname</label>
                  <input
                    type="text"
                    value={formData.nickname}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, nickname: e.target.value }))
                    }
                    placeholder="Tu nombre de gamer"
                    className="w-full px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl border-2 border-dark-border 
                             bg-dark-card/60 backdrop-blur-sm focus:outline-none focus:ring-2 
                             focus:ring-accent/20 focus:border-accent text-sm sm:text-base lg:text-lg text-light-text 
                             placeholder:text-medium-text transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-medium mb-3 sm:mb-4 text-light-text">
                    Plataforma
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
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
                          className={`relative px-3 sm:px-4 md:px-5 lg:px-6 py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 
                                   flex flex-col items-center justify-center gap-1.5 sm:gap-2 min-h-[70px] sm:min-h-[85px] md:min-h-[100px] lg:min-h-[120px]
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
                              className="absolute -top-1.5 sm:-top-2 -right-1.5 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-accent rounded-full 
                                       flex items-center justify-center border-2 border-dark-bg"
                            >
                              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-dark-bg" />
                            </motion.div>
                          )}
                          <div className={`${isSelected ? 'text-dark-bg' : 'text-light-text'}`}>
                            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                              {getIcon()}
                            </div>
                          </div>
                          <span className={`text-xs sm:text-sm md:text-base font-semibold ${isSelected ? 'text-dark-bg' : 'text-light-text'}`}>
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
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-light-text">Tus juegos favoritos</h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-medium-text mb-4 sm:mb-5 lg:mb-6">
                  Selecciona los juegos en los que quieres encontrar compañeros
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 max-h-[250px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px] xl:max-h-[450px] overflow-y-auto">
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
                        className={`relative px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl border-2 transition-all duration-300 text-left
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
                            className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 w-4 h-4 sm:w-5 sm:h-5 bg-accent rounded-full 
                                     flex items-center justify-center border-2 border-dark-bg"
                          >
                            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-dark-bg" />
                          </motion.div>
                        )}
                        <span className="text-xs sm:text-sm md:text-base font-medium">{game}</span>
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
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-light-text">Tu horario habitual</h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-medium-text mb-4 sm:mb-5 lg:mb-6">
                  ¿Cuándo sueles jugar?
                </p>

                <div className="space-y-2 sm:space-y-3">
                  {schedules.map((schedule, index) => {
                    const isSelected = formData.schedule === schedule;
                    return (
                      <motion.button
                        key={schedule}
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, schedule }))
                        }
                        whileHover={{ scale: 1.01, x: 2 }}
                        whileTap={{ scale: 0.99 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl border-2 transition-all duration-300 
                                 text-left flex items-center justify-between
                                 ${
                                   isSelected
                                     ? 'bg-accent text-dark-bg border-accent shadow-lg shadow-accent/20'
                                     : 'bg-dark-card/40 backdrop-blur-sm border-dark-border text-light-text hover:border-accent/50 hover:bg-dark-card/60'
                                 }`}
                      >
                        <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">{schedule}</span>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="w-5 h-5 sm:w-6 sm:h-6 bg-dark-bg rounded-full flex items-center justify-center"
                          >
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                          </motion.div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Botones de navegación */}
            <div className="flex justify-between mt-6 sm:mt-7 lg:mt-8 gap-3 sm:gap-4">
              <button
                onClick={handleBackStep}
                disabled={currentStep === 1}
                className={`btn-secondary text-xs sm:text-sm md:text-base px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Atrás
              </button>
              <button
                onClick={handleNextStep}
                disabled={!canProceed()}
                className={`btn-primary text-xs sm:text-sm md:text-base px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 ${!canProceed() ? 'opacity-50 cursor-not-allowed' : ''}`}
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

