import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useUser } from '../../context/UserContext';

const AuthForm = ({ onSuccess, onBack }) => {
  const { login, register } = useUser();
  const [tab, setTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (tab === 'register') {
        await register(form.username, form.email, form.password);
        onSuccess('register', false);
      } else {
        const result = await login(form.email, form.password);
        onSuccess('login', result.hasProfile);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const switchTab = (newTab) => {
    setTab(newTab);
    setError('');
    setForm({ username: '', email: '', password: '' });
  };

  return (
    <div className="min-h-screen bg-dark-bg ambient-scene flex items-center justify-center p-4 relative">
      <motion.button
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="absolute top-6 left-6 glass rounded-xl px-3 py-2 hover:bg-white/5 transition-colors flex items-center gap-2 text-light-text"
        whileTap={{ scale: 0.98 }}
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium hidden sm:inline">Volver</span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-8">
          <img src="/icon.png" alt="" className="w-10 h-10 mx-auto mb-4" />
          <h1 className="font-display text-3xl font-semibold tracking-tight text-light-text">GameBuddy</h1>
          <p className="text-medium-text mt-2 text-sm">Encuentra tu compañero de juego</p>
        </div>

        <div className="glass-card p-7 sm:p-8">
          <div className="relative flex rounded-xl p-1 mb-7 bg-white/[0.03] border border-white/[0.06]">
            {['login', 'register'].map((t) => (
              <button
                key={t}
                onClick={() => switchTab(t)}
                className={`relative z-10 flex-1 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                  tab === t ? 'text-dark-bg' : 'text-medium-text hover:text-light-text'
                }`}
              >
                {tab === t && (
                  <motion.span
                    layoutId="auth-tab"
                    className="absolute inset-0 bg-accent rounded-lg shadow-glow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{t === 'login' ? 'Iniciar sesión' : 'Registrarse'}</span>
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {tab === 'register' && (
                <motion.div
                  key="username"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  <label className="block text-xs font-medium mb-1.5 text-medium-text tracking-wide">Usuario</label>
                  <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Tu nombre de usuario"
                    required
                    minLength={3}
                    className="input-field"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="block text-xs font-medium mb-1.5 text-medium-text tracking-wide">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-xs font-medium mb-1.5 text-medium-text tracking-wide">Contraseña</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  className="input-field pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-medium-text hover:text-light-text transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-300 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Cargando...' : tab === 'login' ? 'Entrar' : 'Crear cuenta'}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthForm;
