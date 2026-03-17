import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useUser } from '../../context/UserContext';

const AuthForm = ({ onSuccess, onBack }) => {
  const { login, register } = useUser();
  const [tab, setTab] = useState('login'); // 'login' | 'register'
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

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
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4 relative">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="absolute top-6 left-6 p-2 rounded-lg glass-card hover:bg-dark-card/60 transition-colors flex items-center gap-2 text-light-text"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">Volver</span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-light-text">GameBuddy</h1>
          <p className="text-medium-text mt-2">Encuentra tu compañero de juego</p>
        </div>

        <div className="glass-card p-8">
          {/* Tabs */}
          <div className="flex rounded-xl overflow-hidden border border-dark-border mb-8">
            {['login', 'register'].map((t) => (
              <button
                key={t}
                onClick={() => switchTab(t)}
                className={`flex-1 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  tab === t
                    ? 'bg-accent text-dark-bg'
                    : 'text-medium-text hover:text-light-text'
                }`}
              >
                {t === 'login' ? 'Iniciar sesión' : 'Registrarse'}
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
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium mb-1.5 text-light-text">
                    Usuario
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Tu nombre de usuario"
                    required
                    minLength={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-dark-border bg-dark-card/60
                             text-light-text placeholder:text-medium-text focus:outline-none
                             focus:border-accent/60 transition-colors"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="block text-sm font-medium mb-1.5 text-light-text">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-dark-border bg-dark-card/60
                         text-light-text placeholder:text-medium-text focus:outline-none
                         focus:border-accent/60 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5 text-light-text">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-dark-border bg-dark-card/60
                           text-light-text placeholder:text-medium-text focus:outline-none
                           focus:border-accent/60 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-medium-text hover:text-light-text transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading
                ? 'Cargando...'
                : tab === 'login'
                ? 'Entrar'
                : 'Crear cuenta'}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthForm;
