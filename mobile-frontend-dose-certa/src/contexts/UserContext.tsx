import React, { createContext, useState, useContext, ReactNode } from 'react';

type UserContextType = {
  signed: boolean;
  setSigned: (signed: boolean) => void;
};

const defaultUserContextValue: UserContextType = {
  signed: true,
  setSigned: () => {},
};

export const UserContext = createContext<UserContextType>(defaultUserContextValue);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [signed, setSigned] = useState<boolean>(true);

  return (
    <UserContext.Provider value={{ signed, setSigned }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => useContext(UserContext);
