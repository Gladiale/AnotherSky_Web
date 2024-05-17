import { type MediaInfoType } from "../context/MediaInfoContext/mediaInfo";
import { getVoiceList } from "../data/getVoiceFileList";

const toPrevVoice = (state: MediaInfoType) => {
  const fileList: string[] = getVoiceList(state.voiceFolder);
  const index = fileList.indexOf(state.voiceFile);
  let fileName: string;
  if (index === 0) {
    fileName = fileList.slice(-1)[0];
  } else {
    fileName = fileList[index - 1];
  }
  return { ...state, voiceFile: fileName };
};

export { toPrevVoice };
