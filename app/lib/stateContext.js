"use client";

import { useState } from "react";
import { useContext, createContext } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [settings, setSettings] = useState(false);

  return (
    <StateContext.Provider
      value={{
        settings,
        setSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );s
};

export const usestatetContext = () => {
  return useContext(StateContext);
};
