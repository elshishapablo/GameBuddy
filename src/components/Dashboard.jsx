import { useState, useEffect } from 'react';
import { Mic, MicOff, Filter } from 'lucide-react';
import { useUser } from '../context/UserContext';
import GlassCard from './GlassCard';
import Planet3D from './Planet3D';
import Chat from './Chat';
import Navbar from './Navbar/Navbar';
import PerfilUsuario from './Perfil/PerfilUsuario';
import Configuracion from './Configuracion/Configuracion';
import MensajesList from './Mensajes/MensajesList';
import HistorialPartidas from './Historial/HistorialPartidas';
import FavoritosList from './Favoritos/FavoritosList';
import { filterByMicrophone } from '../utils/matchAlgorithm';

const Dashboard = ({ onBack }) => {
  const { matches, openChat, currentChat, closeChat, logout } = useUser();
  const [activeView, setActiveView] = useState('inicio');
  const [microphoneFilter, setMicrophoneFilter] = useState(null); // null = todos, true = con mic, false = sin mic
  const [filteredMatches, setFilteredMatches] = useState(matches);
  const [selectedRegion, setSelectedRegion] = useState(null);

  // Scroll al top cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    setSelectedRegion(match);
  };

  const handleLogout = () => {
    logout();
    onBack?.();
  };

  const renderContent = () => {
    switch (activeView) {
      case 'inicio':
        return (
          <>
            <header className="glass border-b border-dark-border p-2 sm:p-3 lg:p-4">
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <img src="/icon.png" alt="GameBuddy Logo" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-light-text">GameBuddy</h1>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Filter size={16} className="sm:w-[18px] sm:h-[18px] text-medium-text" />
                  <div className="flex items-center gap-1 glass rounded-lg sm:rounded-xl p-0.5 sm:p-1 flex-1 sm:flex-initial">
                    <button
                      onClick={() => setMicrophoneFilter(null)}
                      className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all ${
                        microphoneFilter === null ? 'bg-accent text-dark-bg' : 'text-medium-text hover:bg-dark-card/60'
                      }`}
                    >
                      Todos
                    </button>
                    <button
                      onClick={() => setMicrophoneFilter(true)}
                      className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-1 sm:gap-2 ${
                        microphoneFilter === true ? 'bg-accent text-dark-bg' : 'text-medium-text hover:bg-dark-card/60'
                      }`}
                    >
                      <Mic size={14} className="sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Con Mic</span>
                    </button>
                    <button
                      onClick={() => setMicrophoneFilter(false)}
                      className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-1 sm:gap-2 ${
                        microphoneFilter === false ? 'bg-accent text-dark-bg' : 'text-medium-text hover:bg-dark-card/60'
                      }`}
                    >
                      <MicOff size={14} className="sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Sin Mic</span>
                    </button>
                  </div>
                </div>
              </div>
            </header>
            <div className="max-w-7xl mx-auto p-2 sm:p-3 md:p-4 lg:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="lg:col-span-1 space-y-3 sm:space-y-4">
                  <div className="glass-card p-3 sm:p-4 lg:p-6">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 lg:mb-4 text-light-text">
                      Compañeros Disponibles
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-medium-text mb-2 sm:mb-3 lg:mb-4">
                      {filteredMatches.length} {filteredMatches.length === 1 ? 'match encontrado' : 'matches encontrados'}
                    </p>
                  </div>
                  <div className="scroll-pretty space-y-3 sm:space-y-4 max-h-[calc(100vh-200px)] sm:max-h-[calc(100vh-250px)] lg:max-h-[calc(100vh-300px)]">
                    {filteredMatches.length > 0 ? (
                      filteredMatches.map((match) => (
                        <GlassCard key={match.id} match={match} onConnect={handleMatchClick} />
                      ))
                    ) : (
                      <div className="glass-card text-center py-8">
                        <p className="text-medium-text">No se encontraron matches</p>
                        <p className="text-sm text-medium-text mt-2">Intenta ajustar los filtros</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="glass-card h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] p-3 sm:p-4 lg:p-6">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-light-text">
                      Partidas Activas en el Mundo
                    </h2>
                    <div className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px] rounded-lg sm:rounded-xl overflow-hidden">
                      <Planet3D onMatchClick={handlePlanetClick} showMatches={true} filteredMatches={filteredMatches} />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-medium-text mt-3 sm:mt-4 text-center">
                      Haz clic en los puntos del planeta para ver partidas activas por región
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 'mensajes':
        return (
          <>
            <header className="glass border-b border-dark-border p-2 sm:p-3 lg:p-4">
              <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3">
                <img src="/icon.png" alt="GameBuddy" className="w-8 h-8 sm:w-10 sm:h-10" />
                <h1 className="text-lg sm:text-xl font-bold text-light-text">GameBuddy</h1>
              </div>
            </header>
            <MensajesList />
          </>
        );
      case 'historial':
        return (
          <>
            <header className="glass border-b border-dark-border p-2 sm:p-3 lg:p-4">
              <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3">
                <img src="/icon.png" alt="GameBuddy" className="w-8 h-8 sm:w-10 sm:h-10" />
                <h1 className="text-lg sm:text-xl font-bold text-light-text">GameBuddy</h1>
              </div>
            </header>
            <HistorialPartidas />
          </>
        );
      case 'favoritos':
        return (
          <>
            <header className="glass border-b border-dark-border p-2 sm:p-3 lg:p-4">
              <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3">
                <img src="/icon.png" alt="GameBuddy" className="w-8 h-8 sm:w-10 sm:h-10" />
                <h1 className="text-lg sm:text-xl font-bold text-light-text">GameBuddy</h1>
              </div>
            </header>
            <FavoritosList />
          </>
        );
      case 'perfil':
        return (
          <>
            <header className="glass border-b border-dark-border p-2 sm:p-3 lg:p-4">
              <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3">
                <img src="/icon.png" alt="GameBuddy" className="w-8 h-8 sm:w-10 sm:h-10" />
                <h1 className="text-lg sm:text-xl font-bold text-light-text">GameBuddy</h1>
              </div>
            </header>
            <PerfilUsuario />
          </>
        );
      case 'settings':
        return (
          <>
            <header className="glass border-b border-dark-border p-2 sm:p-3 lg:p-4">
              <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3">
                <img src="/icon.png" alt="GameBuddy" className="w-8 h-8 sm:w-10 sm:h-10" />
                <h1 className="text-lg sm:text-xl font-bold text-light-text">GameBuddy</h1>
              </div>
            </header>
            <Configuracion />
          </>
        );
      default:
        return (
          <>
            <header className="glass border-b border-dark-border p-2 sm:p-3 lg:p-4">
              <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3">
                <img src="/icon.png" alt="GameBuddy" className="w-8 h-8 sm:w-10 sm:h-10" />
                <h1 className="text-lg sm:text-xl font-bold text-light-text">GameBuddy</h1>
              </div>
            </header>
            <div className="max-w-7xl mx-auto p-4 text-center text-medium-text">Selecciona una opción del menú.</div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="flex flex-col min-w-0 pr-16 sm:pr-20">
        {renderContent()}

      {/* Chat Overlay */}
      {currentChat && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={closeChat} />
      )}
      {currentChat && (
        <Chat match={currentChat} onClose={closeChat} />
      )}
      </div>

      {/* Barra lateral derecha (estilo Microconsultas) */}
      <Navbar
        activeView={activeView}
        onViewChange={setActiveView}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default Dashboard;

