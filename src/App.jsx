import { useState } from 'react';
import { UserProvider } from './context/UserContext';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';

function App() {
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  const handleOnboardingComplete = () => {
    setOnboardingComplete(true);
  };

  return (
    <UserProvider>
      {!onboardingComplete ? (
        <Onboarding onComplete={handleOnboardingComplete} />
      ) : (
        <Dashboard />
      )}
    </UserProvider>
  );
}

export default App;

