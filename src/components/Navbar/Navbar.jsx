import { motion } from 'framer-motion';
import { LayoutDashboard, MessageSquare, History, Heart, User, Settings, Bell, LogOut } from 'lucide-react';
import { useUser } from '../../context/UserContext';

const Navbar = ({ activeView, onViewChange, onLogout }) => {
  const { authUser } = useUser();

  const menuItems = [
    { id: 'inicio', icon: LayoutDashboard, label: 'Inicio' },
    { id: 'mensajes', icon: MessageSquare, label: 'Mensajes' },
    { id: 'historial', icon: History, label: 'Historial' },
    { id: 'favoritos', icon: Heart, label: 'Favoritos' },
    { id: 'perfil', icon: User, label: 'Perfil' },
    { id: 'settings', icon: Settings, label: 'Configuración' },
  ];

  const handleLogout = () => {
    onLogout?.();
  };

  const initial = authUser?.username?.charAt(0)?.toUpperCase() || 'U';

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 h-full w-16 sm:w-20 z-50 bg-dark-card/95 backdrop-blur-sm flex flex-col items-center py-5 overflow-visible shadow-[ -4px_0_24px_0_rgba(0,0,0,0.4)]"
    >
      {/* Logo arriba */}
      <div className="mb-6 shrink-0">
        <img
          src="/icon.png"
          alt="GameBuddy"
          className="w-9 h-9 sm:w-10 sm:h-10"
        />
      </div>

      {/* Items del menú: sin flex-1 para evitar hueco vertical */}
      <div className="flex flex-col gap-2 w-full px-2 shrink-0">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => onViewChange?.(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full p-2.5 rounded-xl transition-all relative group ${
                isActive
                  ? 'bg-white/10 shadow-md'
                  : 'hover:bg-dark-surface/60'
              }`}
              title={item.label}
            >
              {isActive && (
                <span
                  className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent rounded-r-full"
                  aria-hidden
                />
              )}
              <Icon
                className={`w-5 h-5 transition-colors mx-auto ${
                  isActive
                    ? 'text-light-text'
                    : 'text-medium-text group-hover:text-light-text'
                }`}
              />
            </motion.button>
          );
        })}
      </div>

      {/* Espaciador para empujar el bloque de abajo al final */}
      <div className="flex-1 min-h-4" aria-hidden />

      {/* Abajo: notificaciones, avatar, cerrar sesión */}
      <div className="flex flex-col gap-3 w-full px-2 shrink-0">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative p-2.5 rounded-xl hover:bg-dark-surface/60 transition-colors group"
          title="Notificaciones"
        >
          <Bell className="w-5 h-5 text-medium-text group-hover:text-light-text transition-colors mx-auto" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
        </motion.button>

        <div className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center mx-auto text-light-text text-sm font-semibold shrink-0">
          {initial}
        </div>

        <motion.button
          onClick={handleLogout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2.5 rounded-xl hover:bg-red-500/20 transition-colors group border-t border-dark-border/50 mt-2 pt-4"
          title="Cerrar sesión"
        >
          <LogOut className="w-5 h-5 text-medium-text group-hover:text-red-400 transition-colors mx-auto" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Navbar;
