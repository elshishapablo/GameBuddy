import { useState, useEffect, lazy, Suspense } from 'react';
import { UserProvider, useUser } from './context/UserContext';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';
import AuthForm from './components/Auth/AuthForm';

const Landing = lazy(() => import('./pages/Landing'));

function AppContent() {
  const { isAuthenticated, logout, userProfile } = useUser();
  // Inicializar según sesión persistida (para que al recargar sigas logeado)
  const [showLanding, setShowLanding] = useState(() => !localStorage.getItem('gb_token'));
  const [showAuth, setShowAuth] = useState(false);
  const [onboardingComplete, setOnboardingComplete] = useState(() => !!localStorage.getItem('gb_profile'));

  // Sincronizar con contexto por si userProfile se carga después (ej. desde API)
  useEffect(() => {
    if (isAuthenticated) {
      setShowLanding(false);
      setShowAuth(false);
      if (userProfile) setOnboardingComplete(true);
    }
  }, [isAuthenticated, userProfile]);

  const handleGetStarted = () => {
    if (isAuthenticated) {
      setShowLanding(false);
    } else {
      setShowAuth(true);
      setShowLanding(false);
    }
  };

  // type: 'register' | 'login'
  // hasProfile: solo viene en login, indica si ya tiene perfil en la BD
  const handleAuthSuccess = (type, hasProfile = false) => {
    setShowAuth(false);
    if (type === 'login' && hasProfile) {
      // Ya tiene perfil → saltar onboarding
      setOnboardingComplete(true);
    }
    // register o login sin perfil → pasa por onboarding
  };

  const handleOnboardingComplete = () => {
    setOnboardingComplete(true);
  };

  const handleBackToLanding = () => {
    setShowLanding(true);
    setShowAuth(false);
    setOnboardingComplete(false);
    logout();
  };

  if (showLanding) {
    return (
      <Suspense
        fallback={
          <div className="min-h-screen bg-dark-bg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-dark-border border-t-dark-gray rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-medium-text">Cargando...</p>
            </div>
          </div>
        }
      >
        <Landing onGetStarted={handleGetStarted} />
      </Suspense>
    );
  }

  if (showAuth) {
    return (
      <AuthForm
        onSuccess={handleAuthSuccess}
        onBack={() => { setShowAuth(false); setShowLanding(true); }}
      />
    );
  }

  if (!onboardingComplete) {
    return (
      <Onboarding
        onComplete={handleOnboardingComplete}
        onBack={handleBackToLanding}
      />
    );
  }

  return <Dashboard onBack={handleBackToLanding} />;
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
