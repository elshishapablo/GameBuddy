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
    <div className="w-full p-4 sm:p-6 max-w-3xl">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-semibold text-light-text tracking-tight">Mensajes</h1>
        <p className="text-sm text-medium-text mt-1">Compañeros disponibles para chatear o jugar</p>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-medium-text" />
        <input
          type="text"
          placeholder="Buscar por nombre o juego..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-field pl-10"
        />
      </div>

      <div className="scroll-pretty space-y-3 max-h-[calc(100vh-280px)] pr-1">
        {filtered.length > 0 ? (
          filtered.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <GlassCard match={match} onConnect={() => openChat(match)} />
            </motion.div>
          ))
        ) : (
          <div className="glass-card text-center py-12">
            <MessageSquare className="w-10 h-10 text-medium-text mx-auto mb-3 opacity-40" />
            <p className="text-medium-text text-sm">No hay conversaciones</p>
            <p className="text-xs text-medium-text/70 mt-1">
              {searchTerm ? 'Prueba otro nombre o juego' : 'Tus matches aparecerán aquí'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MensajesList;
