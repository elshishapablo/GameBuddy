import { motion } from 'framer-motion';
import { Mic, MicOff, Gamepad2 } from 'lucide-react';

const GlassCard = ({ match, onConnect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="glass-card hover:shadow-xl transition-all duration-300 p-3 sm:p-4 lg:p-6"
    >
      <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src={match.avatar}
            alt={match.name}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-dark-border"
          />
        </div>

        {/* Información */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-1.5 sm:mb-2 gap-2">
            <div className="min-w-0 flex-1">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-light-text mb-0.5 sm:mb-1 truncate">{match.name}</h3>
              <p className="text-xs sm:text-sm text-medium-text">{match.platform}</p>
            </div>
            <div className="flex items-center gap-0.5 sm:gap-1 text-yellow-500 flex-shrink-0">
              <span className="text-xs sm:text-sm font-medium">{match.rating}</span>
              <span className="text-[10px] sm:text-xs">⭐</span>
            </div>
          </div>

          {/* Juegos */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            {match.games.slice(0, 3).map((game, index) => (
              <span
                key={index}
                className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-dark-card/60 backdrop-blur-sm rounded-md sm:rounded-lg 
                         border border-dark-border text-light-text"
              >
                {game}
              </span>
            ))}
            {match.games.length > 3 && (
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs text-medium-text">
                +{match.games.length - 3}
              </span>
            )}
          </div>

          {/* Horario y Micrófono */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] sm:text-xs text-medium-text">{match.schedule}</span>
            <div className="flex items-center gap-1 sm:gap-2">
              {match.hasMicrophone ? (
                <div className="flex items-center gap-0.5 sm:gap-1 text-green-600">
                  <Mic size={12} className="sm:w-4 sm:h-4" />
                  <span className="text-[10px] sm:text-xs">Mic</span>
                </div>
              ) : (
                <div className="flex items-center gap-0.5 sm:gap-1 text-medium-text">
                  <MicOff size={12} className="sm:w-4 sm:h-4" />
                  <span className="text-[10px] sm:text-xs">Sin mic</span>
                </div>
              )}
            </div>
          </div>

          {/* Puntuación de compatibilidad */}
          {match.compatibilityScore && (
            <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-dark-border">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] sm:text-xs text-medium-text">Compatibilidad</span>
                <span className="text-xs sm:text-sm font-semibold text-light-text">
                  {match.compatibilityScore}%
                </span>
              </div>
              <div className="mt-1 h-1 sm:h-1.5 bg-dark-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${match.compatibilityScore}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Botón Conectar */}
      <button
        onClick={() => onConnect(match)}
        className="w-full mt-3 sm:mt-4 btn-primary text-xs sm:text-sm md:text-base px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3"
      >
        Conectar
      </button>
    </motion.div>
  );
};

export default GlassCard;

