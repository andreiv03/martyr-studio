"use client";

import { createContext, useReducer, useMemo, useCallback, useEffect } from "react";

interface LayoutState {
  isFirstVisit: boolean;
  isMenuAnimating: boolean;
  isMenuOpen: boolean;
}

type LayoutAction =
  | { type: "SET_IS_FIRST_VISIT"; payload: boolean }
  | { type: "SET_IS_MENU_ANIMATING"; payload: boolean }
  | { type: "SET_IS_MENU_OPEN"; payload: boolean };

interface LayoutContext {
  state: LayoutState;
  setIsFirstVisit: (payload: boolean) => void;
  setIsMenuAnimating: (payload: boolean) => void;
  setIsMenuOpen: (payload: boolean) => void;
}

export const LayoutContext = createContext<LayoutContext | null>(null);

const reducer = (state: LayoutState, action: LayoutAction): LayoutState => {
  switch (action.type) {
    case "SET_IS_FIRST_VISIT":
      return { ...state, isFirstVisit: action.payload };

    case "SET_IS_MENU_ANIMATING":
      return { ...state, isMenuAnimating: action.payload };

    case "SET_IS_MENU_OPEN":
      return { ...state, isMenuOpen: action.payload };

    default:
      return state;
  }
};

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    isFirstVisit: true,
    isMenuAnimating: false,
    isMenuOpen: false,
  });

  const setIsFirstVisit = useCallback((payload: boolean) => {
    dispatch({ type: "SET_IS_FIRST_VISIT", payload });
  }, []);

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");
    if (!visited) {
      return;
    }

    setIsFirstVisit(false);
  }, [setIsFirstVisit]);

  const setIsMenuAnimating = useCallback((payload: boolean) => {
    dispatch({ type: "SET_IS_MENU_ANIMATING", payload });
  }, []);

  const setIsMenuOpen = useCallback((payload: boolean) => {
    dispatch({ type: "SET_IS_MENU_OPEN", payload });
  }, []);

  const contextValue = useMemo(
    () => ({ state, setIsFirstVisit, setIsMenuAnimating, setIsMenuOpen }),
    [state, setIsFirstVisit, setIsMenuAnimating, setIsMenuOpen],
  );

  return <LayoutContext.Provider value={contextValue}>{children}</LayoutContext.Provider>;
}
