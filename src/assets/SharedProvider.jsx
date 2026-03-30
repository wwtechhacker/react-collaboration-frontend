import { createContext, useState } from 'react';

export const SharedContext = createContext();

export const SharedProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState("Initial Value");

  return (
    <SharedContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </SharedContext.Provider>
  );
};