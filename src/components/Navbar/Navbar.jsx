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

  const initial = authUser?.username?.charAt(0)?.toUpperCase() || 'U';

  return (
    <motion.aside
      initial={{ x: 24, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 right-0 h-full w-16 sm:w-[4.5rem] z-50 glass border-l border-white/[0.06] flex flex-col items-center py-5"
    >
      <div className="mb-6 shrink-0">
        <img src="/icon.png" alt="GameBuddy" className="w-8 h-8 sm:w-9 sm:h-9" />
      </div>

      <div className="flex flex-col gap-1.5 w-full px-2 shrink-0">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange?.(item.id)}
              className={`relative w-full p-2.5 rounded-xl transition-all duration-300 group ${
                isActive ? 'bg-white/[0.08]' : 'hover:bg-white/[0.04]'
              }`}
              title={item.label}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-accent rounded-r-full" />
              )}
              <Icon
                className={`w-[18px] h-[18px] mx-auto transition-colors duration-300 ${
                  isActive ? 'text-light-text' : 'text-medium-text group-hover:text-light-text'
                }`}
              />
            </button>
          );
        })}
      </div>

      <div className="flex-1" aria-hidden />

      <div className="flex flex-col items-center gap-3 w-full px-2 shrink-0">
        <button className="relative p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group" title="Notificaciones">
          <Bell className="w-[18px] h-[18px] text-medium-text group-hover:text-light-text transition-colors" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-rose-400 rounded-full shadow-[0_0_8px_rgba(251,113,133,0.7)]" />
        </button>

        <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-light-text text-xs font-semibold">
          {initial}
        </div>

        <button
          onClick={() => onLogout?.()}
          className="p-2.5 rounded-xl hover:bg-rose-500/10 transition-colors group"
          title="Cerrar sesión"
        >
          <LogOut className="w-[18px] h-[18px] text-medium-text group-hover:text-rose-400 transition-colors" />
        </button>
      </div>
    </motion.aside>
  );
};

export default Navbar;
