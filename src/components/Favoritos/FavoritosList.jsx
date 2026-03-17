import { motion } from 'framer-motion';
import { Heart, MessageSquare } from 'lucide-react';
import { useUser } from '../../context/UserContext';
import GlassCard from '../GlassCard';

const FavoritosList = () => {
  const { matches, openChat } = useUser();
  // Por ahora mostramos los mismos matches como "favoritos"; luego se puede filtrar por favoritos reales
  const favoritos = matches;

  return (
    <div className="w-full p-4 sm:p-6 space-y-4">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-light-text mb-2">Favoritos</h2>
        <p className="text-sm text-medium-text">Compañeros que has guardado para jugar</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favoritos.length > 0 ? (
          favoritos.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glass-card p-4 sm:p-6 rounded-xl flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={match.avatar}
                    alt={match.name}
                    className="w-12 h-12 rounded-full border-2 border-dark-border"
                  />
                  <div>
                    <h3 className="font-semibold text-light-text">{match.name}</h3>
                    <p className="text-xs text-medium-text">{match.platform}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-red-500 p-1"
                  title="Quitar de favoritos"
                >
                  <Heart className="w-5 h-5 fill-red-500" />
                </motion.button>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {match.games?.slice(0, 3).map((game, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs bg-dark-surface rounded-lg border border-dark-border text-light-text"
                  >
                    {game}
                  </span>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openChat(match)}
                className="w-full py-2 rounded-xl bg-accent text-dark-bg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <MessageSquare className="w-4 h-4" />
                Conectar
              </motion.button>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full glass-card text-center py-12">
            <Heart className="w-12 h-12 text-medium-text mx-auto mb-3 opacity-50" />
            <p className="text-medium-text">Aún no tienes favoritos</p>
            <p className="text-sm text-medium-text mt-1">Marca compañeros como favoritos desde Inicio o Mensajes</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritosList;
