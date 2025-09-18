import { useContext, type Context } from "react";

export const useContextHook = <T>(context: Context<T>) => {
  const value = useContext(context);

  if (!value) {
    throw new Error("This hook must be used within a Provider");
  }

  return value;
};
