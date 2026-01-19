import { useState, lazy, Suspense } from 'react';
import { UserProvider } from './context/UserContext';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';

// Lazy load de la landing
const Landing = lazy(() => import('./pages/Landing'));

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  const handleGetStarted = () => {
    setShowLanding(false);
  };

  const handleOnboardingComplete = () => {
    setOnboardingComplete(true);
  };

  return (
    <UserProvider>
      {showLanding ? (
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
      ) : !onboardingComplete ? (
        <Onboarding onComplete={handleOnboardingComplete} />
      ) : (
        <Dashboard />
      )}
    </UserProvider>
  );
}

export default App;

