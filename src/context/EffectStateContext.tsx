import { createContext, useContext, useReducer } from "react";

export type EffectStateType = {
  imageEffect: boolean;
  mirrorEffect: boolean;
  filterEffect: {
    targetCard: boolean;
    targetStand: boolean;
    targetVideo: boolean;
  };
  pixelEffect: boolean;
  shakeEffect: {
    active: boolean;
    heavy: "low" | "normal" | "high";
  };
};

const effectSateInit: EffectStateType = {
  imageEffect: false,
  mirrorEffect: false,
  filterEffect: {
    targetCard: false,
    targetStand: false,
    targetVideo: false,
  },
  pixelEffect: false,
  shakeEffect: {
    active: false,
    heavy: "low",
  },
};

type ActionTypeNoPayload = {
  type: "image" | "mirror" | "pixel" | "shake";
};

export type EffectSatePayloadType =
  | "card"
  | "stand"
  | "video"
  | "allOpen"
  | "allClose";

type ActionTypeWithPayload = {
  type: "filter";
  payload: EffectSatePayloadType;
};

type ActionTypeShake = {
  type: "shakeHeavy";
  payload: EffectStateType["shakeEffect"]["heavy"];
};

type ActionType = ActionTypeNoPayload | ActionTypeWithPayload | ActionTypeShake;

const targetSelect = (
  state: EffectStateType,
  target: EffectSatePayloadType
) => {
  switch (target) {
    case "card":
      return {
        ...state,
        filterEffect: {
          ...state.filterEffect,
          targetCard: !state.filterEffect.targetCard,
        },
      };
    case "stand":
      return {
        ...state,
        filterEffect: {
          ...state.filterEffect,
          targetStand: !state.filterEffect.targetStand,
        },
      };
    case "video":
      return {
        ...state,
        filterEffect: {
          ...state.filterEffect,
          targetVideo: !state.filterEffect.targetVideo,
        },
      };
    case "allOpen":
      return {
        ...state,
        filterEffect: {
          targetCard: true,
          targetStand: true,
          targetVideo: true,
        },
      };
    case "allClose":
      return {
        ...state,
        pixelEffect: false,
        filterEffect: {
          targetCard: false,
          targetStand: false,
          targetVideo: false,
        },
        shakeEffect: {
          ...state.shakeEffect,
          active: false,
        },
      };
    default:
      throw new Error("不明なエラーです");
  }
};

const heavySelect = (
  state: EffectStateType,
  heavy: EffectStateType["shakeEffect"]["heavy"]
) => {
  return {
    ...state,
    shakeEffect: {
      ...state.shakeEffect,
      heavy: heavy,
    },
  };
};

const reducer = (state: EffectStateType, action: ActionType) => {
  switch (action.type) {
    case "image":
      return { ...state, imageEffect: !state.imageEffect };
    case "mirror":
      return { ...state, mirrorEffect: !state.mirrorEffect };
    case "filter":
      return targetSelect(state, action.payload);
    case "pixel":
      return { ...state, pixelEffect: !state.pixelEffect };
    case "shake":
      return {
        ...state,
        shakeEffect: {
          ...state.shakeEffect,
          active: !state.shakeEffect.active,
        },
      };
    case "shakeHeavy":
      return heavySelect(state, action.payload);
    default:
      throw new Error("不明なactionです");
  }
};

type ContextType = {
  effectState: EffectStateType;
  effectStateDispatch: React.Dispatch<ActionType>;
};

const EffectStateContext = createContext({} as ContextType);

const EffectStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [effectState, effectStateDispatch] = useReducer(
    reducer,
    effectSateInit
  );

  return (
    <EffectStateContext.Provider value={{ effectState, effectStateDispatch }}>
      {children}
    </EffectStateContext.Provider>
  );
};

const useEffectState = () => {
  return useContext(EffectStateContext);
};

export { EffectStateProvider, useEffectState };
