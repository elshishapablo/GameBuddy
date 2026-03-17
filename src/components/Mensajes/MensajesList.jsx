import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MessageSquare } from 'lucide-react';
import { useUser } from '../../context/UserContext';
import GlassCard from '../GlassCard';

const MensajesList = () => {
  const { matches, openChat } = useUser();
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = matches.filter(
    (m) =>
      m.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.games?.some((g) => g?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="w-full p-4 sm:p-6">
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-light-text mb-2">Mensajes</h1>
        <p className="text-sm text-medium-text">Tus compañeros disponibles para chatear o jugar</p>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-medium-text" />
        <input
          type="text"
          placeholder="Buscar por nombre o juego..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-card border border-dark-border text-light-text placeholder-medium-text focus:outline-none focus:ring-2 focus:ring-accent/50"
        />
      </div>

      <div className="scroll-pretty space-y-3 sm:space-y-4 max-h-[calc(100vh-280px)]">
        {filtered.length > 0 ? (
          filtered.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <GlassCard match={match} onConnect={() => openChat(match)} />
            </motion.div>
          ))
        ) : (
          <div className="glass-card text-center py-12">
            <MessageSquare className="w-12 h-12 text-medium-text mx-auto mb-3 opacity-50" />
            <p className="text-medium-text">No hay conversaciones</p>
            <p className="text-sm text-medium-text mt-1">
              {searchTerm ? 'Prueba otro nombre o juego' : 'Tus matches aparecerán aquí'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MensajesList;
