import { createContext, useEffect, useState } from "react";

interface ContextState {
  isFirstVisit: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  isMenuAnimating: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  isMenuOpen: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

export const Context = createContext<ContextState>({} as ContextState);

export const ContextProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");
    if (!visited) return;
    setIsFirstVisit(false);
  }, []);

  const state: ContextState = {
    isFirstVisit: [isFirstVisit, setIsFirstVisit],
    isMenuAnimating: [isMenuAnimating, setIsMenuAnimating],
    isMenuOpen: [isMenuOpen, setIsMenuOpen]
  };

  return (
    <Context.Provider value={state}>
      {children}
    </Context.Provider>
  );
}