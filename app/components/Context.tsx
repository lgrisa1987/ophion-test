'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type DispatchStateActionBoolan = Dispatch<SetStateAction<boolean>>;

type AppContextType = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: DispatchStateActionBoolan;
  isInitialAnimationComplete: boolean;
  setIsInitialAnimationComlete: DispatchStateActionBoolan;
};

const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isInitialAnimationComplete, setIsInitialAnimationComlete] =
    useState(false);
  return (
    <AppContext.Provider
      value={{
        isDrawerOpen,
        setIsDrawerOpen,
        isInitialAnimationComplete,
        setIsInitialAnimationComlete,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContextProvider = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error('AppContext must be used within a AppContextProvider');
  return context;
};

export default AppContextProvider;
