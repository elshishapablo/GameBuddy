import { motion } from 'framer-motion';
import { User, Mail, Edit, Save, Camera } from 'lucide-react';
import { useState } from 'react';
import { useUser } from '../../context/UserContext';

const PerfilUsuario = () => {
  const { authUser, userProfile, matches } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: authUser?.username || '',
    email: authUser?.email || '',
    games: userProfile?.games?.join(', ') || '',
    platform: userProfile?.platform || '',
    schedule: userProfile?.schedule || '',
    hasMicrophone: userProfile?.hasMicrophone ?? true,
    bio: userProfile?.bio || 'Gamer buscando compañeros para partidas.',
  });

  const handleSave = () => {
    setIsEditing(false);
    // Aquí se podría llamar a updateUserProfile con los datos editados
  };

  return (
    <div className="w-full p-4 sm:p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-light-text mb-2">Mi Perfil</h2>
          <p className="text-sm text-medium-text">Gestiona tu información y preferencias de juego</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className="flex items-center gap-2 px-4 py-2 bg-accent text-dark-bg rounded-xl font-semibold hover:opacity-90 transition-opacity"
        >
          {isEditing ? (
            <>
              <Save className="w-4 h-4" />
              Guardar
            </>
          ) : (
            <>
              <Edit className="w-4 h-4" />
              Editar
            </>
          )}
        </motion.button>
      </div>

      {/* Avatar */}
      <div className="flex items-center gap-6 mb-6">
        <div className="relative">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-dark-surface border-2 border-dark-border flex items-center justify-center">
            <span className="text-3xl sm:text-4xl font-bold text-light-text">
              {authUser?.username?.charAt(0)?.toUpperCase() || 'U'}
            </span>
          </div>
          {isEditing && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-accent text-dark-bg flex items-center justify-center border-2 border-dark-bg"
            >
              <Camera className="w-4 h-4" />
            </motion.button>
          )}
        </div>
        <div>
          <h3 className="text-lg font-bold text-light-text">{formData.username}</h3>
          <p className="text-medium-text">{formData.email}</p>
        </div>
      </div>

      {/* Campos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-sm font-medium text-medium-text mb-2">Usuario</label>
          {isEditing ? (
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-dark-border bg-dark-card text-light-text focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
          ) : (
            <div className="px-4 py-2 bg-dark-surface rounded-xl text-light-text">{formData.username}</div>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-medium-text mb-2">Correo electrónico</label>
          {isEditing ? (
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-dark-border bg-dark-card text-light-text focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
          ) : (
            <div className="px-4 py-2 bg-dark-surface rounded-xl text-light-text">{formData.email}</div>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-medium-text mb-2">Juegos favoritos</label>
          <div className="px-4 py-2 bg-dark-surface rounded-xl text-light-text">
            {userProfile?.games?.join(', ') || formData.games || 'No especificados'}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-medium-text mb-2">Plataforma</label>
          <div className="px-4 py-2 bg-dark-surface rounded-xl text-light-text">
            {userProfile?.platform || formData.platform || 'No especificada'}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-medium-text mb-2">Horario preferido</label>
          <div className="px-4 py-2 bg-dark-surface rounded-xl text-light-text">
            {userProfile?.schedule || formData.schedule || 'No especificado'}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-medium-text mb-2">Micrófono</label>
          <div className="px-4 py-2 bg-dark-surface rounded-xl text-light-text">
            {userProfile?.hasMicrophone ? 'Sí' : 'No'}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-medium-text mb-2">Biografía</label>
        {isEditing ? (
          <textarea
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 rounded-xl border border-dark-border bg-dark-card text-light-text focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
          />
        ) : (
          <div className="px-4 py-2 bg-dark-surface rounded-xl text-light-text">{formData.bio}</div>
        )}
      </div>

      {/* Stats tipo GameBuddy */}
      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-dark-border">
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-light-text">{userProfile?.games?.length || 0}</div>
          <div className="text-xs sm:text-sm text-medium-text">Juegos</div>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-light-text">{matches?.length ?? 0}</div>
          <div className="text-xs sm:text-sm text-medium-text">Matches</div>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-light-text">—</div>
          <div className="text-xs sm:text-sm text-medium-text">Partidas</div>
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;
