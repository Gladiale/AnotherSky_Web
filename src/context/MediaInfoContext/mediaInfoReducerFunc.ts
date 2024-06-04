import { RandomTargetType } from "../../components/ControlIcon/RandomControl";
import { toFirstFolder } from "../../helper/toFirstFolder";
import { toFirstFunc } from "../../helper/toFirstFunc";
import { toFirsVoice } from "../../helper/toFirstVoice";
import { toLastFolder } from "../../helper/toLastFolder";
import { toLastFunc } from "../../helper/toLastFunc";
import { toLastVoice } from "../../helper/toLastVoice";
import { toNextFolder } from "../../helper/toNextFolder";
import { toNextFunc } from "../../helper/toNextFunc";
import { toNextVoice } from "../../helper/toNextVoice";
import { toNextVoiceFolder } from "../../helper/toNextVoiceFolder";
import { toPrevFolder } from "../../helper/toPrevFolder";
import { toPrevFunc } from "../../helper/toPrevFunc";
import { toPrevVoice } from "../../helper/toPrevVoice";
import { toRandomFunc } from "../../helper/toRandomFunc";
import { toRandomWithSelect } from "../../helper/toRandomWithSelect";
import {
  type SpecificPayloadType,
  toSpecificFile,
} from "../../helper/toSpecificFile";
import { type SceneType } from "../SceneContext";
import { type MediaInfoType } from "./mediaInfo";

type MainActionType = {
  type:
    | "next"
    | "prev"
    | "first"
    | "last"
    | "folderNext"
    | "folderPrev"
    | "folderFirst"
    | "folderLast";
  payload: SceneType;
};

type SubActionType = {
  type:
    | "random"
    | "voiceNext"
    | "voicePrev"
    | "voiceFolderNext"
    | "voiceFirst"
    | "voiceLast";
};

type OtherActionType = {
  type: "randomWithSelect";
  payload: RandomTargetType;
};

type SpecificActionType = {
  type: "specific";
  payload: SpecificPayloadType;
};

type ActionType =
  | MainActionType
  | SubActionType
  | OtherActionType
  | SpecificActionType;

function reducerFunc(state: MediaInfoType, action: ActionType) {
  switch (action.type) {
    case "next":
      const nextMedia = toNextFunc(action.payload, state);
      return { ...state, ...nextMedia };
    case "prev":
      const prevMedia = toPrevFunc(action.payload, state);
      return { ...state, ...prevMedia };
    case "first":
      const firstMedia = toFirstFunc(action.payload, state);
      return { ...state, ...firstMedia };
    case "last":
      const lastMedia = toLastFunc(action.payload, state);
      return { ...state, ...lastMedia };
    case "folderNext":
      const folderNextMedia = toNextFolder(action.payload, state);
      return { ...state, ...folderNextMedia };
    case "folderPrev":
      const folderPrevMedia = toPrevFolder(action.payload, state);
      return { ...state, ...folderPrevMedia };
    case "folderFirst":
      const folderFirstMedia = toFirstFolder(action.payload, state);
      return { ...state, ...folderFirstMedia };
    case "folderLast":
      const folderLastMedia = toLastFolder(action.payload, state);
      return { ...state, ...folderLastMedia };
    case "voiceNext":
      const voiceNextMedia = toNextVoice(state);
      return { ...state, ...voiceNextMedia };
    case "voicePrev":
      const voicePrevMedia = toPrevVoice(state);
      return { ...state, ...voicePrevMedia };
    case "voiceFirst":
      const voiceFirstMedia = toFirsVoice(state);
      return { ...state, ...voiceFirstMedia };
    case "voiceLast":
      const voiceLastMedia = toLastVoice(state);
      return { ...state, ...voiceLastMedia };
    case "voiceFolderNext":
      const voiceFolderNextMedia = toNextVoiceFolder(state);
      return { ...state, ...voiceFolderNextMedia };
    case "random":
      const randomMedia = toRandomFunc();
      return { ...state, ...randomMedia };
    case "randomWithSelect":
      const randomNotVoiceMedia = toRandomWithSelect(action.payload, state);
      return { ...state, ...randomNotVoiceMedia };
    case "specific":
      const specificMedia = toSpecificFile(action.payload, state);
      return { ...state, ...specificMedia };
    default:
      throw new Error("不明なactionです");
  }
}

export { reducerFunc, type ActionType };
