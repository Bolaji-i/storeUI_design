import { createContext, useContext } from 'react';
import { useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {actionStarted: false, selectAll: false}
  const [context, setContext] = useState(sharedState)

  return (
    <AppContext.Provider value={[context, setContext]}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}