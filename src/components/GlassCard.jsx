import { motion } from 'framer-motion';
import { Mic, MicOff, Gamepad2 } from 'lucide-react';

const GlassCard = ({ match, onConnect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="glass-card hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src={match.avatar}
            alt={match.name}
            className="w-16 h-16 rounded-full border-2 border-light-gray"
          />
        </div>

        {/* Información */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-semibold text-dark-gray mb-1">{match.name}</h3>
              <p className="text-sm text-medium-gray">{match.platform}</p>
            </div>
            <div className="flex items-center gap-1 text-yellow-500">
              <span className="text-sm font-medium">{match.rating}</span>
              <span className="text-xs">⭐</span>
            </div>
          </div>

          {/* Juegos */}
          <div className="flex flex-wrap gap-2 mb-3">
            {match.games.slice(0, 3).map((game, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-white/60 backdrop-blur-sm rounded-lg 
                         border border-light-gray text-dark-gray"
              >
                {game}
              </span>
            ))}
            {match.games.length > 3 && (
              <span className="px-2 py-1 text-xs text-medium-gray">
                +{match.games.length - 3}
              </span>
            )}
          </div>

          {/* Horario y Micrófono */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-medium-gray">{match.schedule}</span>
            <div className="flex items-center gap-2">
              {match.hasMicrophone ? (
                <div className="flex items-center gap-1 text-green-600">
                  <Mic size={16} />
                  <span className="text-xs">Mic</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-medium-gray">
                  <MicOff size={16} />
                  <span className="text-xs">Sin mic</span>
                </div>
              )}
            </div>
          </div>

          {/* Puntuación de compatibilidad */}
          {match.compatibilityScore && (
            <div className="mt-3 pt-3 border-t border-light-gray">
              <div className="flex items-center justify-between">
                <span className="text-xs text-medium-gray">Compatibilidad</span>
                <span className="text-sm font-semibold text-dark-gray">
                  {match.compatibilityScore}%
                </span>
              </div>
              <div className="mt-1 h-1.5 bg-light-gray rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-dark-gray rounded-full"
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
        className="w-full mt-4 btn-primary"
      >
        Conectar
      </button>
    </motion.div>
  );
};

export default GlassCard;

