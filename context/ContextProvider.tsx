"use client";
// import React and Next.js dependencies
import React, { ReactNode, createContext, useContext, useState } from "react";

// create a context for the menu active state
interface StateContextProps {
  menuActive: false | true;
  setMenuActive: (item: boolean) => void;
}

const StateContext = createContext<StateContextProps>({
  menuActive: false,
  setMenuActive: () => {},
});

export const ContextProvider = ({
  children,
}: {
  children: any | (Element | ReactNode)[];
}) => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  return (
    <StateContext.Provider value={{ menuActive, setMenuActive }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
