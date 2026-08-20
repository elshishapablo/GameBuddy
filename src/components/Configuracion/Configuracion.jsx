import { motion } from 'framer-motion';
import { Bell, Shield, Globe, Moon } from 'lucide-react';
import { useState } from 'react';

const Toggle = ({ value, onChange }) => (
  <button
    onClick={onChange}
    className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${
      value ? 'bg-accent' : 'bg-white/[0.08] border border-white/10'
    }`}
  >
    <motion.span
      animate={{ x: value ? 22 : 3 }}
      transition={{ type: 'spring', stiffness: 420, damping: 30 }}
      className={`absolute top-1 w-4 h-4 rounded-full ${value ? 'bg-dark-bg' : 'bg-medium-text'}`}
    />
  </button>
);

const Configuracion = () => {
  const [notificaciones, setNotificaciones] = useState({
    email: true,
    push: true,
    partidas: true,
  });

  return (
    <div className="w-full p-4 sm:p-6 space-y-4 max-w-2xl">
      <div className="mb-2">
        <h2 className="font-display text-2xl font-semibold text-light-text tracking-tight">Configuración</h2>
        <p className="text-sm text-medium-text mt-1">Personaliza tu experiencia</p>
      </div>

      <div className="glass-card p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="icon-well w-9 h-9"><Bell className="w-4 h-4 text-light-text" /></div>
          <h3 className="font-display font-semibold text-light-text">Notificaciones</h3>
        </div>
        <div className="space-y-4">
          {Object.entries(notificaciones).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm text-medium-text">
                {key === 'email' ? 'Email' : key === 'push' ? 'Push' : 'Nuevas partidas'}
              </span>
              <Toggle value={value} onChange={() => setNotificaciones({ ...notificaciones, [key]: !value })} />
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="icon-well w-9 h-9"><Shield className="w-4 h-4 text-light-text" /></div>
          <h3 className="font-display font-semibold text-light-text">Privacidad</h3>
        </div>
        <div className="space-y-3">
          {[
            ['Perfil visible para otros jugadores', true],
            ['Mostrar juegos y horarios', true],
            ['Aparecer en búsqueda de compañeros', false],
          ].map(([label, checked]) => (
            <label key={label} className="flex items-center gap-3 text-sm text-medium-text cursor-pointer">
              <input type="checkbox" defaultChecked={checked} className="w-4 h-4 rounded border-white/20 bg-transparent accent-white" />
              {label}
            </label>
          ))}
        </div>
      </div>

      <div className="glass-card p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="icon-well w-9 h-9"><Globe className="w-4 h-4 text-light-text" /></div>
          <h3 className="font-display font-semibold text-light-text">Idioma</h3>
        </div>
        <select className="input-field">
          <option value="es">Español</option>
          <option value="en">English</option>
          <option value="pt">Português</option>
        </select>
      </div>

      <div className="glass-card p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="icon-well w-9 h-9"><Moon className="w-4 h-4 text-light-text" /></div>
          <h3 className="font-display font-semibold text-light-text">Apariencia</h3>
        </div>
        <p className="text-sm text-medium-text">Tema oscuro espacial, por defecto en GameBuddy.</p>
      </div>
    </div>
  );
};

export default Configuracion;
