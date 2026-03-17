import { motion } from 'framer-motion';
import { Bell, Shield, Globe, Moon } from 'lucide-react';
import { useState } from 'react';

const Configuracion = () => {
  const [notificaciones, setNotificaciones] = useState({
    email: true,
    push: true,
    partidas: true,
  });

  return (
    <div className="w-full p-4 sm:p-6 space-y-6">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-light-text mb-2">Configuración</h2>
        <p className="text-sm text-medium-text">Personaliza tu experiencia en GameBuddy</p>
      </div>

      {/* Notificaciones */}
      <div className="glass-card p-4 sm:p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <Bell className="w-5 h-5 text-medium-text" />
          <h3 className="text-lg font-semibold text-light-text">Notificaciones</h3>
        </div>
        <div className="space-y-4">
          {Object.entries(notificaciones).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <label className="text-medium-text capitalize">
                {key === 'email' ? 'Email' : key === 'push' ? 'Push' : 'Nuevas partidas'}
              </label>
              <button
                onClick={() => setNotificaciones({ ...notificaciones, [key]: !value })}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  value ? 'bg-accent' : 'bg-dark-surface'
                }`}
              >
                <motion.div
                  animate={{ x: value ? 24 : 2 }}
                  className="absolute top-1 left-1 w-4 h-4 bg-dark-bg rounded-full"
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Privacidad */}
      <div className="glass-card p-4 sm:p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-5 h-5 text-medium-text" />
          <h3 className="text-lg font-semibold text-light-text">Privacidad</h3>
        </div>
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-medium-text cursor-pointer">
            <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-dark-border bg-dark-card text-accent" />
            <span>Perfil visible para otros jugadores</span>
          </label>
          <label className="flex items-center gap-2 text-medium-text cursor-pointer">
            <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-dark-border bg-dark-card text-accent" />
            <span>Mostrar juegos y horarios</span>
          </label>
          <label className="flex items-center gap-2 text-medium-text cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-dark-border bg-dark-card text-accent" />
            <span>Aparecer en búsqueda de compañeros</span>
          </label>
        </div>
      </div>

      {/* Idioma */}
      <div className="glass-card p-4 sm:p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="w-5 h-5 text-medium-text" />
          <h3 className="text-lg font-semibold text-light-text">Idioma</h3>
        </div>
        <select className="w-full px-4 py-2 rounded-xl border border-dark-border bg-dark-card text-light-text focus:outline-none focus:ring-2 focus:ring-accent/50">
          <option value="es">Español</option>
          <option value="en">English</option>
          <option value="pt">Português</option>
        </select>
      </div>

      {/* Tema (opcional) */}
      <div className="glass-card p-4 sm:p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <Moon className="w-5 h-5 text-medium-text" />
          <h3 className="text-lg font-semibold text-light-text">Apariencia</h3>
        </div>
        <p className="text-sm text-medium-text">Tema oscuro (por defecto en GameBuddy).</p>
      </div>
    </div>
  );
};

export default Configuracion;
