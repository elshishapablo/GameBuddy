import { motion } from 'framer-motion';
import { Mic, MicOff, Heart } from 'lucide-react';
import { useUser } from '../context/UserContext';

const GlassCard = ({ match, onConnect }) => {
  const { isFavorite, toggleFavorite } = useUser();
  const favorite = isFavorite(match.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card glass-card-hover p-4 sm:p-5"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="relative flex-shrink-0">
          <img
            src={match.avatar}
            alt={match.name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 object-cover"
          />
          <span
            className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-dark-card ${
              match.status === 'online' ? 'bg-emerald-400' : 'bg-zinc-500'
            }`}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2 gap-2">
            <div className="min-w-0">
              <h3 className="font-display text-sm sm:text-base font-semibold text-light-text truncate">{match.name}</h3>
              <p className="text-xs text-medium-text">{match.platform}</p>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-xs text-medium-text">★ {match.rating}</span>
              <button
                onClick={() => toggleFavorite(match)}
                title={favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                aria-label={favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                className={`p-1.5 rounded-lg transition-colors ${favorite ? 'text-rose-400' : 'text-medium-text hover:text-rose-400'}`}
              >
                <Heart size={15} className={favorite ? 'fill-rose-400' : ''} />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {match.games.slice(0, 3).map((game) => (
              <span key={game} className="chip">{game}</span>
            ))}
            {match.games.length > 3 && (
              <span className="text-[10px] text-medium-text self-center">+{match.games.length - 3}</span>
            )}
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] text-medium-text">{match.schedule}</span>
            {match.hasMicrophone ? (
              <span className="flex items-center gap-1 text-emerald-400/90 text-[11px]">
                <Mic size={12} /> Mic
              </span>
            ) : (
              <span className="flex items-center gap-1 text-medium-text text-[11px]">
                <MicOff size={12} /> Sin mic
              </span>
            )}
          </div>

          {match.compatibilityScore && (
            <div className="mt-3 pt-3 border-t border-white/[0.06]">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] text-medium-text">Compatibilidad</span>
                <span className="text-xs font-medium text-light-text">{match.compatibilityScore}%</span>
              </div>
              <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${match.compatibilityScore}%` }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => onConnect(match)}
        className="w-full mt-4 btn-primary text-sm py-2.5"
      >
        Conectar
      </button>
    </motion.div>
  );
};

export default GlassCard;
