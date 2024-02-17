"use client";

import { useState } from "react";
import { useContext, createContext } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [settings, setSettings] = useState(false);
  const [userData, setUserData] = useState({});

  return (
    <StateContext.Provider
      value={{
        settings,
        setSettings,
        userData,
        setUserData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStatetContext = () => {
  return useContext(StateContext);
};
