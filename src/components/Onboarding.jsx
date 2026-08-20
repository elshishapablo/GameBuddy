import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { availableGames, platforms, schedules } from '../utils/mockData';
import { findMatches } from '../utils/matchAlgorithm';
import { mockActiveMatches } from '../utils/mockData';
import { Monitor, Gamepad2, Smartphone, Check, ArrowLeft, Mic, MicOff } from 'lucide-react';

const Onboarding = ({ onComplete, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { updateUserProfile, saveMatches } = useUser();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nickname: '',
    platform: '',
    games: [],
    schedule: '',
    hasMicrophone: true,
  });
  const [direction, setDirection] = useState(0);

  const handleNext = async () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      try { await updateUserProfile(formData); } catch { /* continuar igual */ }
      const matchedUsers = findMatches(formData, mockActiveMatches);
      saveMatches(matchedUsers);
      onComplete();
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
      case 1: return formData.nickname && formData.platform;
      case 2: return formData.games.length > 0;
      case 3: return formData.schedule;
      default: return false;
    }
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? 48 : -48, opacity: 0 }),
  };

  const selectedClass = 'bg-accent text-dark-bg border-accent shadow-glow-sm';
  const idleClass = 'bg-white/[0.03] border-white/[0.08] text-light-text hover:border-white/20 hover:bg-white/[0.05]';

  const getIcon = (platform) => {
    if (platform === 'PC') return <Monitor className="w-5 h-5" />;
    if (platform === 'Mobile') return <Smartphone className="w-5 h-5" />;
    return <Gamepad2 className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-dark-bg ambient-scene flex items-center justify-center p-4 lg:p-6 relative">
      <motion.button
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="absolute top-5 left-5 z-10 glass rounded-xl px-3 py-2 hover:bg-white/5 transition-colors flex items-center gap-2 text-light-text"
        whileTap={{ scale: 0.98 }}
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium hidden sm:inline">Volver</span>
      </motion.button>

      <div className="w-full max-w-xl lg:max-w-3xl relative z-10">
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between mb-2 text-xs sm:text-sm text-medium-text">
            <span>Paso {currentStep} de 3</span>
            <span>{Math.round((currentStep / 3) * 100)}%</span>
          </div>
          <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / 3) * 100}%` }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-5 sm:p-8"
          >
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-light-text tracking-tight">Crea tu perfil</h2>
                  <p className="text-sm text-medium-text mt-2">Cuéntanos sobre ti para encontrar compañeros precisos.</p>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5 text-medium-text tracking-wide">Nickname</label>
                  <input
                    type="text"
                    value={formData.nickname}
                    onChange={(e) => setFormData((prev) => ({ ...prev, nickname: e.target.value }))}
                    placeholder="Tu nombre de gamer"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-3 text-medium-text tracking-wide">Plataforma</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {platforms.map((platform) => {
                      const isSelected = formData.platform === platform;
                      return (
                        <button
                          key={platform}
                          onClick={() => setFormData((prev) => ({ ...prev, platform }))}
                          className={`relative px-4 py-4 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center gap-2 min-h-[96px] ${
                            isSelected ? selectedClass : idleClass
                          }`}
                        >
                          {isSelected && (
                            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-accent rounded-full flex items-center justify-center border-2 border-dark-bg">
                              <Check className="w-3 h-3 text-dark-bg" />
                            </span>
                          )}
                          {getIcon(platform)}
                          <span className="text-sm font-medium">{platform}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-light-text tracking-tight">Tus juegos</h2>
                  <p className="text-sm text-medium-text mt-2">Selecciona los títulos en los que quieres compañía.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 max-h-[340px] overflow-y-auto scroll-pretty pr-1">
                  {availableGames.map((game) => {
                    const isSelected = formData.games.includes(game);
                    return (
                      <button
                        key={game}
                        onClick={() => handleGameToggle(game)}
                        className={`relative px-3 py-2.5 rounded-xl border text-left text-sm font-medium transition-all duration-300 ${
                          isSelected ? selectedClass : idleClass
                        }`}
                      >
                        {game}
                      </button>
                    );
                  })}
                </div>
                {formData.games.length > 0 && (
                  <p className="text-xs text-medium-text">{formData.games.length} seleccionados</p>
                )}
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-light-text tracking-tight">Tu horario</h2>
                  <p className="text-sm text-medium-text mt-2">¿Cuándo sueles jugar?</p>
                </div>
                <div className="space-y-2">
                  {schedules.map((schedule) => {
                    const isSelected = formData.schedule === schedule;
                    return (
                      <button
                        key={schedule}
                        onClick={() => setFormData((prev) => ({ ...prev, schedule }))}
                        className={`w-full px-5 py-3.5 rounded-xl border transition-all duration-300 text-left flex items-center justify-between ${
                          isSelected ? selectedClass : idleClass
                        }`}
                      >
                        <span className="text-sm sm:text-base font-medium">{schedule}</span>
                        {isSelected && (
                          <span className="w-5 h-5 bg-dark-bg rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-accent" />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
                <div>
                  <label className="block text-xs font-medium mb-3 text-medium-text tracking-wide">¿Juegas con micrófono?</label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { value: true, label: 'Con micrófono', Icon: Mic },
                      { value: false, label: 'Sin micrófono', Icon: MicOff },
                    ].map(({ value, label, Icon }) => {
                      const isSelected = formData.hasMicrophone === value;
                      return (
                        <button
                          key={label}
                          onClick={() => setFormData((prev) => ({ ...prev, hasMicrophone: value }))}
                          className={`px-4 py-3 rounded-xl border transition-all duration-300 flex items-center justify-center gap-2 ${
                            isSelected ? selectedClass : idleClass
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-sm font-medium">{label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8 gap-3">
              <button
                onClick={() => {
                  setDirection(-1);
                  if (currentStep > 1) setCurrentStep(currentStep - 1);
                }}
                disabled={currentStep === 1}
                className={`btn-secondary text-sm px-5 py-2.5 ${currentStep === 1 ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                Atrás
              </button>
              <button
                onClick={() => {
                  setDirection(1);
                  handleNext();
                }}
                disabled={!canProceed()}
                className={`btn-primary text-sm px-5 py-2.5 ${!canProceed() ? 'opacity-40 cursor-not-allowed' : ''}`}
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
