import { createContext, useContext, useState } from "react";

export type SceneType = "card" | "cg" | "video" | "listImg" | "directoryMode";

export type DirectoryTargetType = "cg" | "character" | "video";

type SceneContextType = {
  scene: SceneType;
  setScene: React.Dispatch<React.SetStateAction<SceneType>>;
};

type DirectoryContextType = {
  directoryTarget: DirectoryTargetType;
  setDirectoryTarget: React.Dispatch<React.SetStateAction<DirectoryTargetType>>;
  pageIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
};

const SceneContext = createContext({} as SceneContextType);
const DirectoryInfoContext = createContext({} as DirectoryContextType);

const SceneProvider = ({ children }: { children: React.ReactNode }) => {
  const [scene, setScene] = useState<SceneType>("card");

  const [directoryTarget, setDirectoryTarget] = useState<DirectoryTargetType>("cg");
  const [pageIndex, setPageIndex] = useState<number>(0);

  return (
    <SceneContext.Provider value={{ scene, setScene }}>
      <DirectoryInfoContext.Provider
        value={{ directoryTarget, setDirectoryTarget, pageIndex, setPageIndex }}
      >
        {children}
      </DirectoryInfoContext.Provider>
    </SceneContext.Provider>
  );
};

const useScene = () => {
  return useContext(SceneContext);
};

const useDirectoryInfo = () => {
  return useContext(DirectoryInfoContext);
};

export { SceneProvider, useScene, useDirectoryInfo };
