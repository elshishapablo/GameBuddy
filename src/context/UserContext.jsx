import { createContext, useContext, useState } from 'react';
import { authApi, profileApi } from '../api/authApi';
import { findMatches } from '../utils/matchAlgorithm';
import { mockActiveMatches } from '../utils/mockData';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('gb_token'));
  const [authUser, setAuthUser] = useState(() => {
    const saved = localStorage.getItem('gb_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [userProfile, setUserProfile] = useState(() => {
    const saved = localStorage.getItem('gb_profile');
    return saved ? JSON.parse(saved) : null;
  });
  const [currentChat, setCurrentChat] = useState(null);
  const [matches, setMatches] = useState(() => {
    const saved = localStorage.getItem('gb_matches');
    return saved ? JSON.parse(saved) : [];
  });

  const saveAuth = (tkn, user) => {
    localStorage.setItem('gb_token', tkn);
    localStorage.setItem('gb_user', JSON.stringify(user));
    setToken(tkn);
    setAuthUser(user);
  };

  const getProfileCacheKey = (email) => (email ? `gb_profile_${email}` : null);

  const register = async (username, email, password) => {
    // Registro: forzar onboarding limpio (sin perfil previo)
    localStorage.removeItem('gb_profile');
    localStorage.removeItem('gb_matches');
    setUserProfile(null);
    setMatches([]);
    const data = await authApi.register(username, email, password);
    saveAuth(data.token, { username: data.username, email: data.email });
    return data;
  };

  // login: autentica y luego busca el perfil en la BD
  // devuelve { hasProfile: true/false } para que App.jsx decida si mostrar onboarding
  const login = async (email, password) => {
    const data = await authApi.login(email, password);
    saveAuth(data.token, { username: data.username, email: data.email });

    try {
      const profile = await profileApi.get(data.token);
      // Perfil encontrado en BD → cachearlo y generar matches
      localStorage.setItem('gb_profile', JSON.stringify(profile));
      const profileKey = getProfileCacheKey(data.email);
      if (profileKey) localStorage.setItem(profileKey, JSON.stringify(profile));
      setUserProfile(profile);
      const matchedUsers = findMatches(profile, mockActiveMatches);
      localStorage.setItem('gb_matches', JSON.stringify(matchedUsers));
      setMatches(matchedUsers);
      return { ...data, hasProfile: true };
    } catch {
      // No está en BD — buscar en caches locales (por usuario y global por compatibilidad)
      const profileKey = getProfileCacheKey(data.email);
      const cachedByUser = profileKey ? localStorage.getItem(profileKey) : null;
      const cachedGlobal = localStorage.getItem('gb_profile');
      const cached = cachedByUser || cachedGlobal;
      if (cached) {
        const profile = JSON.parse(cached);
        setUserProfile(profile);
        // Sincronizar silenciosamente a la BD para próximos logins
        try { await profileApi.save(data.token, profile); } catch { /* ignorar */ }
        const matchedUsers = findMatches(profile, mockActiveMatches);
        localStorage.setItem('gb_matches', JSON.stringify(matchedUsers));
        setMatches(matchedUsers);
        // Mantener ambos caches alineados
        localStorage.setItem('gb_profile', JSON.stringify(profile));
        if (profileKey) localStorage.setItem(profileKey, JSON.stringify(profile));
        return { ...data, hasProfile: true };
      }
      // Sin perfil en ningún lado → va al onboarding
      return { ...data, hasProfile: false };
    }
  };

  const logout = () => {
    localStorage.removeItem('gb_token');
    localStorage.removeItem('gb_user');
    // No borramos el perfil cacheado por usuario para permitir login sin re-onboarding
    // si el backend no está disponible. Sí borramos el cache global y matches.
    localStorage.removeItem('gb_profile');
    localStorage.removeItem('gb_matches');
    setToken(null);
    setAuthUser(null);
    setUserProfile(null);
    setMatches([]);
  };

  // Guarda el perfil en la BD y en localStorage
  const updateUserProfile = async (profile) => {
    // Siempre cachear localmente para no bloquear el flujo si el backend falla.
    // Si el backend responde, cacheamos la versión "oficial"; si no, guardamos el perfil local.
    const tkn = localStorage.getItem('gb_token');
    try {
      const saved = await profileApi.save(tkn, profile);
      localStorage.setItem('gb_profile', JSON.stringify(saved));
      const email = authUser?.email || JSON.parse(localStorage.getItem('gb_user') || 'null')?.email;
      const profileKey = getProfileCacheKey(email);
      if (profileKey) localStorage.setItem(profileKey, JSON.stringify(saved));
      setUserProfile(saved);
      return saved;
    } catch {
      localStorage.setItem('gb_profile', JSON.stringify(profile));
      const email = authUser?.email || JSON.parse(localStorage.getItem('gb_user') || 'null')?.email;
      const profileKey = getProfileCacheKey(email);
      if (profileKey) localStorage.setItem(profileKey, JSON.stringify(profile));
      setUserProfile(profile);
      return profile;
    }
  };

  const saveMatches = (newMatches) => {
    localStorage.setItem('gb_matches', JSON.stringify(newMatches));
    setMatches(newMatches);
  };

  const openChat = (match) => setCurrentChat(match);
  const closeChat = () => setCurrentChat(null);

  return (
    <UserContext.Provider
      value={{
        token,
        authUser,
        isAuthenticated: !!token,
        register,
        login,
        logout,
        userProfile,
        updateUserProfile,
        currentChat,
        openChat,
        closeChat,
        matches,
        setMatches,
        saveMatches,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
};
