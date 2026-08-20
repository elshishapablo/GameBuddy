import { useState, useEffect, lazy, Suspense } from 'react';
import { Mic, MicOff, Filter } from 'lucide-react';
import { useUser } from '../context/UserContext';
import GlassCard from './GlassCard';
import Chat from './Chat';
import Navbar from './Navbar/Navbar';
import PerfilUsuario from './Perfil/PerfilUsuario';
import Configuracion from './Configuracion/Configuracion';
import MensajesList from './Mensajes/MensajesList';
import HistorialPartidas from './Historial/HistorialPartidas';
import FavoritosList from './Favoritos/FavoritosList';
import { filterByMicrophone } from '../utils/matchAlgorithm';

const Planet3D = lazy(() => import('./Planet3D'));

const AppHeader = ({ children }) => (
  <header className="sticky top-0 z-20 glass border-b border-white/[0.06] px-4 sm:px-6 py-3">
    <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
      <div className="flex items-center gap-2.5">
        <img src="/icon.png" alt="GameBuddy" className="w-8 h-8 sm:w-9 sm:h-9" />
        <h1 className="font-display text-lg sm:text-xl font-semibold tracking-tight text-light-text">GameBuddy</h1>
      </div>
      {children}
    </div>
  </header>
);

const Dashboard = ({ onBack }) => {
  const { matches, openChat, currentChat, closeChat, logout } = useUser();
  const [activeView, setActiveView] = useState('inicio');
  const [microphoneFilter, setMicrophoneFilter] = useState(null);
  const [filteredMatches, setFilteredMatches] = useState(matches);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setFilteredMatches(filterByMicrophone(matches, microphoneFilter));
  }, [matches, microphoneFilter]);

  const handleLogout = () => {
    logout();
    onBack?.();
  };

  const filterBtn = (active) =>
    `px-3 sm:px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
      active ? 'bg-accent text-dark-bg' : 'text-medium-text hover:text-light-text hover:bg-white/[0.04]'
    }`;

  const renderContent = () => {
    switch (activeView) {
      case 'inicio':
        return (
          <>
            <AppHeader>
              <div className="flex items-center gap-2">
                <Filter size={14} className="text-medium-text hidden sm:block" />
                <div className="flex items-center gap-0.5 glass rounded-xl p-1">
                  <button onClick={() => setMicrophoneFilter(null)} className={filterBtn(microphoneFilter === null)}>
                    Todos
                  </button>
                  <button onClick={() => setMicrophoneFilter(true)} className={`${filterBtn(microphoneFilter === true)} flex items-center gap-1.5`}>
                    <Mic size={13} />
                    <span className="hidden sm:inline">Con mic</span>
                  </button>
                  <button onClick={() => setMicrophoneFilter(false)} className={`${filterBtn(microphoneFilter === false)} flex items-center gap-1.5`}>
                    <MicOff size={13} />
                    <span className="hidden sm:inline">Sin mic</span>
                  </button>
                </div>
              </div>
            </AppHeader>
            <div className="max-w-7xl mx-auto p-4 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                <div className="lg:col-span-1 space-y-4">
                  <div className="glass-card p-4 sm:p-5">
                    <h2 className="font-display text-lg sm:text-xl font-semibold text-light-text">Compañeros</h2>
                    <p className="text-xs sm:text-sm text-medium-text mt-1">
                      {filteredMatches.length} {filteredMatches.length === 1 ? 'match encontrado' : 'matches encontrados'}
                    </p>
                  </div>
                  <div className="scroll-pretty space-y-3 max-h-[calc(100vh-260px)] pr-1">
                    {filteredMatches.length > 0 ? (
                      filteredMatches.map((match) => (
                        <GlassCard key={match.id} match={match} onConnect={openChat} />
                      ))
                    ) : (
                      <div className="glass-card text-center py-10">
                        <p className="text-medium-text text-sm">No se encontraron matches</p>
                        <p className="text-xs text-medium-text/70 mt-1">Prueba a ajustar los filtros</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="glass-card h-full min-h-[420px] p-4 sm:p-5">
                    <div className="flex items-end justify-between mb-3">
                      <div>
                        <h2 className="font-display text-lg sm:text-xl font-semibold text-light-text">Partidas en el mundo</h2>
                        <p className="text-xs text-medium-text mt-1">Gira el planeta y pulsa un punto para conectar</p>
                      </div>
                    </div>
                    <div className="h-[280px] sm:h-[400px] lg:h-[520px] rounded-2xl overflow-hidden relative">
                      <Suspense
                        fallback={
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="spinner" />
                          </div>
                        }
                      >
                        <Planet3D onMatchClick={openChat} showMatches={true} filteredMatches={filteredMatches} />
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 'mensajes':
        return <><AppHeader /><MensajesList /></>;
      case 'historial':
        return <><AppHeader /><HistorialPartidas /></>;
      case 'favoritos':
        return <><AppHeader /><FavoritosList /></>;
      case 'perfil':
        return <><AppHeader /><PerfilUsuario /></>;
      case 'settings':
        return <><AppHeader /><Configuracion /></>;
      default:
        return (
          <>
            <AppHeader />
            <div className="max-w-7xl mx-auto p-6 text-center text-medium-text text-sm">Selecciona una opción del menú.</div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg ambient-scene">
      <div className="flex flex-col min-w-0 pr-16 sm:pr-[4.5rem] relative z-10">
        {renderContent()}
        {currentChat && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-[6px] z-40" onClick={closeChat} />
        )}
        {currentChat && <Chat match={currentChat} onClose={closeChat} />}
      </div>
      <Navbar activeView={activeView} onViewChange={setActiveView} onLogout={handleLogout} />
    </div>
  );
};

export default Dashboard;
