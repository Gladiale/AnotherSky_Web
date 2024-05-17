import {
  voiceFolderList,
  type MediaInfoType,
} from "../context/MediaInfoContext/mediaInfo";
import { getRandomVoice } from "./getRandomFile";

const toNextVoiceFolder = (state: MediaInfoType) => {
  const index = voiceFolderList.indexOf(state.voiceFolder);
  let voiceFolder: string;
  if (index < voiceFolderList.length - 1) {
    voiceFolder = voiceFolderList[index + 1];
  } else {
    voiceFolder = voiceFolderList[0];
  }
  const voiceFile = getRandomVoice(voiceFolder);
  return { ...state, voiceFolder, voiceFile };
};

export { toNextVoiceFolder };
