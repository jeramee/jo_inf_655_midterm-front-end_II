// AuthContext.js

import React, { createContext, useState } from 'react';

// Create a context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Define any authentication-related functions here
  const signIn = (userData) => {
    // Implement your sign-in logic here
    setUser(userData);
  };

  const signOut = () => {
    // Implement your sign-out logic here
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
