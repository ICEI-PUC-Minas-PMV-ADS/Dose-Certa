import React, { createContext, useState, useContext } from 'react';

const defaultUserContextValue = {
  signed: true,
  setSigned: () => {},
};

export const UserContext = createContext(defaultUserContextValue);

export const UserProvider = ({ children }) => {
  const [signed, setSigned] = useState(true);

  return (
    <UserContext.Provider value={{ signed, setSigned }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
