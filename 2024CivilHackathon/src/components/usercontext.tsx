import React, { createContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Create a context provider
const UserProvider = ({ children }) => {
  const [email, setEmail] = useState('');

  return (
    <UserContext.Provider value={{ email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
