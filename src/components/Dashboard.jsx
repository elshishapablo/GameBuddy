import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff, Filter } from 'lucide-react';
import { useUser } from '../context/UserContext';
import GlassCard from './GlassCard';
import Planet3D from './Planet3D';
import Chat from './Chat';
import { filterByMicrophone } from '../utils/matchAlgorithm';

const Dashboard = () => {
  const { matches, openChat, currentChat, closeChat } = useUser();
  const [microphoneFilter, setMicrophoneFilter] = useState(null); // null = todos, true = con mic, false = sin mic
  const [filteredMatches, setFilteredMatches] = useState(matches);
  const [selectedRegion, setSelectedRegion] = useState(null);

  useEffect(() => {
    let filtered = matches;

    // Aplicar filtro de micrófono
    if (microphoneFilter !== null) {
      filtered = filterByMicrophone(filtered, microphoneFilter);
    }

    // Aplicar filtro de región (si se selecciona una región en el planeta)
    if (selectedRegion) {
      // Filtrar por región aproximada (podrías mejorar esto con coordenadas más precisas)
      filtered = filtered.filter((match) => {
        // Lógica simple de región basada en lat/lng
        // Esto es un ejemplo básico, puedes mejorarlo
        return true; // Por ahora mostrar todos
      });
    }

    setFilteredMatches(filtered);
  }, [matches, microphoneFilter, selectedRegion]);

  const handleMatchClick = (match) => {
    openChat(match);
  };

  const handlePlanetClick = (match) => {
    // Al hacer clic en una partida del planeta, filtrar por esa región
    setSelectedRegion(match);
    // También abrir el chat si se desea
    // openChat(match);
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <header className="glass border-b border-dark-border p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-light-text">GameBuddy</h1>
          
          {/* Filtro de Micrófono - PRINCIPAL */}
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-medium-text" />
            <div className="flex items-center gap-1 glass rounded-xl p-1">
              <button
                onClick={() => setMicrophoneFilter(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  microphoneFilter === null
                    ? 'bg-accent text-dark-bg'
                    : 'text-medium-text hover:bg-dark-card/60'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setMicrophoneFilter(true)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  microphoneFilter === true
                    ? 'bg-accent text-dark-bg'
                    : 'text-medium-text hover:bg-dark-card/60'
                }`}
              >
                <Mic size={16} />
                Con Mic
              </button>
              <button
                onClick={() => setMicrophoneFilter(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  microphoneFilter === false
                    ? 'bg-accent text-dark-bg'
                    : 'text-medium-text hover:bg-dark-card/60'
                }`}
              >
                <MicOff size={16} />
                Sin Mic
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna izquierda: Lista de Matches */}
          <div className="lg:col-span-1 space-y-4">
            <div className="glass-card">
              <h2 className="text-xl font-semibold mb-4 text-light-text">
                Compañeros Disponibles
              </h2>
              <p className="text-sm text-medium-text mb-4">
                {filteredMatches.length} {filteredMatches.length === 1 ? 'match encontrado' : 'matches encontrados'}
              </p>
            </div>

            <div className="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto">
              {filteredMatches.length > 0 ? (
                filteredMatches.map((match) => (
                  <GlassCard
                    key={match.id}
                    match={match}
                    onConnect={handleMatchClick}
                  />
                ))
              ) : (
                <div className="glass-card text-center py-8">
                  <p className="text-medium-text">No se encontraron matches</p>
                  <p className="text-sm text-medium-text mt-2">
                    Intenta ajustar los filtros
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Columna central: Planeta 3D */}
          <div className="lg:col-span-2">
            <div className="glass-card h-full min-h-[600px]">
              <h2 className="text-xl font-semibold mb-4 text-light-text">
                Partidas Activas en el Mundo
              </h2>
              <div className="h-[500px] rounded-xl overflow-hidden">
                <Planet3D
                  onMatchClick={handlePlanetClick}
                  showMatches={true}
                  filteredMatches={filteredMatches}
                />
              </div>
              <p className="text-sm text-medium-text mt-4 text-center">
                Haz clic en los puntos del planeta para ver partidas activas por región
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Overlay */}
      {currentChat && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={closeChat} />
      )}
      {currentChat && (
        <Chat match={currentChat} onClose={closeChat} />
      )}
    </div>
  );
};

export default Dashboard;

