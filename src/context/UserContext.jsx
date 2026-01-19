import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const [matches, setMatches] = useState([]);

  const updateUserProfile = (profile) => {
    setUserProfile(profile);
  };

  const openChat = (match) => {
    setCurrentChat(match);
  };

  const closeChat = () => {
    setCurrentChat(null);
  };

  return (
    <UserContext.Provider
      value={{
        userProfile,
        updateUserProfile,
        currentChat,
        openChat,
        closeChat,
        matches,
        setMatches,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};

