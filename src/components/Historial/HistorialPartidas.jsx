import { motion } from 'framer-motion';
import { Clock, Gamepad2, Star, MessageSquare } from 'lucide-react';

// Mock historial de partidas recientes
const mockHistorial = [
  { id: 1, compañero: 'NightRider', juego: 'League of Legends', fecha: '2024-03-15', duracion: '45 min', rating: 5 },
  { id: 2, compañero: 'AlexGamer', juego: 'Valorant', fecha: '2024-03-14', duracion: '1h 20min', rating: 4 },
  { id: 3, compañero: 'ProGamer99', juego: 'Fortnite', fecha: '2024-03-13', duracion: '30 min', rating: 5 },
];

const HistorialPartidas = () => {
  return (
    <div className="w-full p-4 sm:p-6 space-y-4">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-light-text mb-2">Historial de partidas</h2>
        <p className="text-sm text-medium-text">Partidas recientes con tus compañeros</p>
      </div>

      <div className="space-y-4">
        {mockHistorial.map((partida, index) => (
          <motion.div
            key={partida.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="glass-card p-4 sm:p-6 rounded-xl hover:border-dark-border transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5 text-medium-text" />
                </div>
                <div>
                  <h3 className="font-semibold text-light-text">{partida.compañero}</h3>
                  <p className="text-sm text-medium-text">{partida.juego}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(partida.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-medium-text mb-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{partida.duracion}</span>
              </div>
              <span>{new Date(partida.fecha).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-surface border border-dark-border text-light-text text-sm font-medium hover:bg-dark-card transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Volver a jugar
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HistorialPartidas;
