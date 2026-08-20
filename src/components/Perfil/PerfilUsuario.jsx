import { Edit, Save, Camera, Mic, MicOff, X } from 'lucide-react';
import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { availableGames, platforms, schedules } from '../../utils/mockData';

const PerfilUsuario = () => {
  const { authUser, userProfile, matches, updateUserProfile } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const buildInitialData = () => ({
    nickname: userProfile?.nickname || authUser?.username || '',
    platform: userProfile?.platform || '',
    schedule: userProfile?.schedule || '',
    games: userProfile?.games || [],
    hasMicrophone: userProfile?.hasMicrophone ?? true,
    bio: userProfile?.bio || 'Gamer buscando compañeros para partidas.',
  });

  const [formData, setFormData] = useState(buildInitialData);

  const startEditing = () => {
    setFormData(buildInitialData());
    setError('');
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setFormData(buildInitialData());
    setError('');
    setIsEditing(false);
  };

  const toggleGame = (game) => {
    setFormData((prev) => ({
      ...prev,
      games: prev.games.includes(game) ? prev.games.filter((g) => g !== game) : [...prev.games, game],
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    try {
      await updateUserProfile({
        nickname: formData.nickname,
        platform: formData.platform,
        schedule: formData.schedule,
        games: formData.games,
        hasMicrophone: formData.hasMicrophone,
        bio: formData.bio,
      });
      setIsEditing(false);
    } catch {
      setError('No se pudo guardar el perfil. Inténtalo de nuevo.');
    } finally {
      setSaving(false);
    }
  };

  const displayName = userProfile?.nickname || authUser?.username || 'Usuario';
  const fieldBox = 'px-4 py-2.5 rounded-xl bg-white/[0.035] border border-white/[0.06] text-light-text text-sm';

  return (
    <div className="w-full p-4 sm:p-6 space-y-6 max-w-4xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-semibold text-light-text tracking-tight">Mi perfil</h2>
          <p className="text-sm text-medium-text mt-1">Información y preferencias de juego</p>
        </div>
        <div className="flex items-center gap-2">
          {isEditing && (
            <button onClick={cancelEditing} disabled={saving} className="btn-secondary text-sm px-4 py-2 flex items-center gap-2 disabled:opacity-50">
              <X className="w-4 h-4" /> Cancelar
            </button>
          )}
          <button onClick={() => (isEditing ? handleSave() : startEditing())} disabled={saving} className="btn-primary text-sm px-4 py-2 flex items-center gap-2 disabled:opacity-50">
            {isEditing ? <><Save className="w-4 h-4" />{saving ? 'Guardando...' : 'Guardar'}</> : <><Edit className="w-4 h-4" />Editar</>}
          </button>
        </div>
      </div>

      {error && (
        <div className="text-red-300 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2">{error}</div>
      )}

      <div className="glass-card p-5 sm:p-6">
        <div className="flex items-center gap-5 mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center">
              <span className="font-display text-3xl font-semibold text-light-text">
                {displayName.charAt(0)?.toUpperCase() || 'U'}
              </span>
            </div>
            {isEditing && (
              <button className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-accent text-dark-bg flex items-center justify-center border-2 border-dark-bg">
                <Camera className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-light-text">{displayName}</h3>
            <p className="text-sm text-medium-text">{authUser?.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-medium-text mb-1.5 tracking-wide">Nickname</label>
            {isEditing ? (
              <input type="text" value={formData.nickname} onChange={(e) => setFormData({ ...formData, nickname: e.target.value })} className="input-field" />
            ) : (
              <div className={fieldBox}>{displayName}</div>
            )}
          </div>
          <div>
            <label className="block text-xs font-medium text-medium-text mb-1.5 tracking-wide">Correo electrónico</label>
            <div className={fieldBox}>{authUser?.email || '—'}</div>
          </div>
          <div>
            <label className="block text-xs font-medium text-medium-text mb-1.5 tracking-wide">Plataforma</label>
            {isEditing ? (
              <select value={formData.platform} onChange={(e) => setFormData({ ...formData, platform: e.target.value })} className="input-field">
                <option value="">Selecciona una plataforma</option>
                {platforms.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            ) : (
              <div className={fieldBox}>{userProfile?.platform || 'No especificada'}</div>
            )}
          </div>
          <div>
            <label className="block text-xs font-medium text-medium-text mb-1.5 tracking-wide">Horario preferido</label>
            {isEditing ? (
              <select value={formData.schedule} onChange={(e) => setFormData({ ...formData, schedule: e.target.value })} className="input-field">
                <option value="">Selecciona un horario</option>
                {schedules.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            ) : (
              <div className={fieldBox}>{userProfile?.schedule || 'No especificado'}</div>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-medium-text mb-1.5 tracking-wide">Micrófono</label>
            {isEditing ? (
              <div className="grid grid-cols-2 gap-2.5 max-w-md">
                {[{ value: true, label: 'Con micrófono', Icon: Mic }, { value: false, label: 'Sin micrófono', Icon: MicOff }].map(({ value, label, Icon }) => {
                  const selected = formData.hasMicrophone === value;
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setFormData({ ...formData, hasMicrophone: value })}
                      className={`px-4 py-2 rounded-xl border text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                        selected ? 'bg-accent text-dark-bg border-accent' : 'bg-white/[0.03] border-white/[0.08] text-light-text hover:border-white/20'
                      }`}
                    >
                      <Icon className="w-4 h-4" /> {label}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className={`${fieldBox} flex items-center gap-2`}>
                {userProfile?.hasMicrophone ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                {userProfile?.hasMicrophone ? 'Sí' : 'No'}
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <label className="block text-xs font-medium text-medium-text mb-2 tracking-wide">Juegos favoritos</label>
          {isEditing ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 max-h-64 overflow-y-auto scroll-pretty">
              {availableGames.map((game) => {
                const selected = formData.games.includes(game);
                return (
                  <button
                    key={game}
                    type="button"
                    onClick={() => toggleGame(game)}
                    className={`px-3 py-2 rounded-lg border text-sm text-left transition-all ${
                      selected ? 'bg-accent text-dark-bg border-accent' : 'bg-white/[0.03] border-white/[0.08] text-light-text hover:border-white/20'
                    }`}
                  >
                    {game}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {userProfile?.games?.length ? (
                userProfile.games.map((game) => <span key={game} className="chip px-3 py-1 text-sm">{game}</span>)
              ) : (
                <span className="text-medium-text text-sm">No especificados</span>
              )}
            </div>
          )}
        </div>

        <div className="mt-5">
          <label className="block text-xs font-medium text-medium-text mb-1.5 tracking-wide">Biografía</label>
          {isEditing ? (
            <textarea value={formData.bio} onChange={(e) => setFormData({ ...formData, bio: e.target.value })} rows={4} className="input-field resize-none" />
          ) : (
            <div className={fieldBox}>{userProfile?.bio || 'Gamer buscando compañeros para partidas.'}</div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-white/[0.06]">
          {[
            [userProfile?.games?.length || 0, 'Juegos'],
            [matches?.length ?? 0, 'Matches'],
            ['—', 'Partidas'],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <div className="font-display text-xl font-semibold text-light-text">{value}</div>
              <div className="text-xs text-medium-text mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;
