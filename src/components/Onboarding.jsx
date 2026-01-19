import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { availableGames, platforms, schedules } from '../utils/mockData';
import { findMatches } from '../utils/matchAlgorithm';
import { mockActiveMatches } from '../utils/mockData';

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
    <div className="min-h-screen bg-bone-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Indicador de progreso */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-medium-gray text-sm">Paso {currentStep} de 3</span>
            <span className="text-medium-gray text-sm">{Math.round((currentStep / 3) * 100)}%</span>
          </div>
          <div className="h-2 bg-light-gray rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-dark-gray rounded-full"
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
                <p className="text-medium-gray mb-6">
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
                    className="w-full px-4 py-3 rounded-xl border border-light-gray 
                             bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 
                             focus:ring-dark-gray/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Plataforma</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {platforms.map((platform) => (
                      <button
                        key={platform}
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, platform }))
                        }
                        className={`px-4 py-3 rounded-xl border transition-all ${
                          formData.platform === platform
                            ? 'bg-dark-gray text-white border-dark-gray'
                            : 'bg-white/60 backdrop-blur-sm border-light-gray hover:bg-white/80'
                        }`}
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Paso 2: Selección de Juegos */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold mb-2">Tus juegos favoritos</h2>
                <p className="text-medium-gray mb-6">
                  Selecciona los juegos en los que quieres encontrar compañeros
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[400px] overflow-y-auto">
                  {availableGames.map((game) => (
                    <button
                      key={game}
                      onClick={() => handleGameToggle(game)}
                      className={`px-4 py-3 rounded-xl border transition-all text-left ${
                        formData.games.includes(game)
                          ? 'bg-dark-gray text-white border-dark-gray'
                          : 'bg-white/60 backdrop-blur-sm border-light-gray hover:bg-white/80'
                      }`}
                    >
                      {game}
                    </button>
                  ))}
                </div>

                {formData.games.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-medium-gray mb-2">
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
                <p className="text-medium-gray mb-6">
                  ¿Cuándo sueles jugar?
                </p>

                <div className="space-y-3">
                  {schedules.map((schedule) => (
                    <button
                      key={schedule}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, schedule }))
                      }
                      className={`w-full px-6 py-4 rounded-xl border transition-all text-left ${
                        formData.schedule === schedule
                          ? 'bg-dark-gray text-white border-dark-gray'
                          : 'bg-white/60 backdrop-blur-sm border-light-gray hover:bg-white/80'
                      }`}
                    >
                      <span className="text-lg font-medium">{schedule}</span>
                    </button>
                  ))}
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

