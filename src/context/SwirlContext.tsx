import { createContext, useContext, useReducer } from "react";
import { SceneType } from "./SceneContext";

type SwirlDegType = {
  cardSwirlDeg: number;
  cgSwirlDeg: number;
  videoSwirlDeg: number;
};

const swirlDegInit = {
  cardSwirlDeg: 0,
  cgSwirlDeg: 0,
  videoSwirlDeg: 0,
};

type SwirlActionType = {
  type: SceneType;
};

function reducer(state: SwirlDegType, action: SwirlActionType) {
  switch (action.type) {
    case "card-stand":
      if (state.cardSwirlDeg === 0) {
        return { ...state, cardSwirlDeg: 180 };
      }
      return { ...state, cardSwirlDeg: 0 };
    case "card-cg":
      if (state.cgSwirlDeg === 0) {
        return { ...state, cgSwirlDeg: 180 };
      }
      return { ...state, cgSwirlDeg: 0 };
    case "card-video":
      if (state.videoSwirlDeg === 0) {
        return { ...state, videoSwirlDeg: 180 };
      }
      return { ...state, videoSwirlDeg: 0 };
    default:
      throw new Error("不明なactionです");
  }
}

type ContextType = {
  swirlState: SwirlDegType;
  swirlDispatch: React.Dispatch<SwirlActionType>;
};

const SwirlDegContext = createContext({} as ContextType);

const SwirlDegProvider = ({ children }: { children: React.ReactNode }) => {
  const [swirlState, swirlDispatch] = useReducer(reducer, swirlDegInit);

  return (
    <SwirlDegContext.Provider value={{ swirlState, swirlDispatch }}>
      {children}
    </SwirlDegContext.Provider>
  );
};

const useSwirlDeg = () => {
  return useContext(SwirlDegContext);
};

export { SwirlDegProvider, useSwirlDeg };
