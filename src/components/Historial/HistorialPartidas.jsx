import { motion } from 'framer-motion';
import { Clock, Gamepad2, Star, MessageSquare } from 'lucide-react';

const mockHistorial = [
  { id: 1, compañero: 'NightRider', juego: 'League of Legends', fecha: '2024-03-15', duracion: '45 min', rating: 5 },
  { id: 2, compañero: 'AlexGamer', juego: 'Valorant', fecha: '2024-03-14', duracion: '1h 20min', rating: 4 },
  { id: 3, compañero: 'ProGamer99', juego: 'Fortnite', fecha: '2024-03-13', duracion: '30 min', rating: 5 },
];

const HistorialPartidas = () => {
  return (
    <div className="w-full p-4 sm:p-6 space-y-4 max-w-3xl">
      <div className="mb-2">
        <h2 className="font-display text-2xl font-semibold text-light-text tracking-tight">Historial</h2>
        <p className="text-sm text-medium-text mt-1">Partidas recientes con tus compañeros</p>
      </div>

      <div className="space-y-3">
        {mockHistorial.map((partida, index) => (
          <motion.div
            key={partida.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="glass-card glass-card-hover p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="icon-well w-10 h-10">
                  <Gamepad2 className="w-4 h-4 text-light-text" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-light-text text-sm">{partida.compañero}</h3>
                  <p className="text-xs text-medium-text">{partida.juego}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(partida.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-medium-text mb-4">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {partida.duracion}
              </span>
              <span>
                {new Date(partida.fecha).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}
              </span>
            </div>
            <button className="btn-secondary text-sm px-4 py-2 inline-flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Volver a jugar
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HistorialPartidas;
