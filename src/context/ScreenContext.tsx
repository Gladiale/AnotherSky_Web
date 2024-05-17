import { createContext, useContext, useState } from "react";

type ScreenModeType = "cardMode" | "mangaMode" | "cgMode";

type ContextType = {
  screenMode: ScreenModeType;
  setScreenMode: React.Dispatch<React.SetStateAction<ScreenModeType>>;
};

const ScreenContext = createContext({} as ContextType);

const ScreenProvider = ({ children }: { children: React.ReactNode }) => {
  const [screenMode, setScreenMode] = useState<ScreenModeType>("cardMode");

  return (
    <ScreenContext.Provider value={{ screenMode, setScreenMode }}>
      {children}
    </ScreenContext.Provider>
  );
};

const useScreenMode = () => {
  return useContext(ScreenContext);
};

export { ScreenProvider, useScreenMode };
