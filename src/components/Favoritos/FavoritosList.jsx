import { motion } from 'framer-motion';
import { Heart, MessageSquare } from 'lucide-react';
import { useUser } from '../../context/UserContext';

const FavoritosList = () => {
  const { favorites: favoritos, openChat, toggleFavorite } = useUser();

  return (
    <div className="w-full p-4 sm:p-6 space-y-4">
      <div className="mb-2">
        <h2 className="font-display text-2xl font-semibold text-light-text tracking-tight">Favoritos</h2>
        <p className="text-sm text-medium-text mt-1">Compañeros que has guardado</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favoritos.length > 0 ? (
          favoritos.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="glass-card glass-card-hover p-5 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img src={match.avatar} alt={match.name} className="w-11 h-11 rounded-full border border-white/10 object-cover" />
                  <div>
                    <h3 className="font-display font-semibold text-light-text text-sm">{match.name}</h3>
                    <p className="text-xs text-medium-text">{match.platform}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleFavorite(match)}
                  className="text-rose-400 p-1"
                  title="Quitar de favoritos"
                  aria-label="Quitar de favoritos"
                >
                  <Heart className="w-4 h-4 fill-rose-400" />
                </button>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {match.games?.slice(0, 3).map((game) => (
                  <span key={game} className="chip">{game}</span>
                ))}
              </div>
              <button
                onClick={() => openChat(match)}
                className="mt-auto w-full btn-primary py-2 text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Conectar
              </button>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full glass-card text-center py-12">
            <Heart className="w-10 h-10 text-medium-text mx-auto mb-3 opacity-40" />
            <p className="text-medium-text text-sm">Aún no tienes favoritos</p>
            <p className="text-xs text-medium-text/70 mt-1">Márcalos desde Inicio o Mensajes</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritosList;
