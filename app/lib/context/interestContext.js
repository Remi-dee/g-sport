"use client";

import { useState } from "react";
import { useContext,  createContext } from "react";

export const InterestContext = createContext();

export const InterestContextProvider = ({ children }) => {
  const [interest, setInterest] = useState([]);

  return (
    <InterestContext.Provider
      value={{
        interest,
        setInterest,
      }}
    >
      {children}
    </InterestContext.Provider>
  );
};

export const useInterestContext = () => {
  return useContext(InterestContext);
};
