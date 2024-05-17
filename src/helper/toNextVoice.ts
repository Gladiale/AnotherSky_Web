import { type MediaInfoType } from "../context/MediaInfoContext/mediaInfo";
import { getVoiceList } from "../data/getVoiceFileList";

const toNextVoice = (state: MediaInfoType) => {
  const fileList: string[] = getVoiceList(state.voiceFolder);
  const index = fileList.indexOf(state.voiceFile);
  let fileName: string;
  if (index < fileList.length - 1) {
    fileName = fileList[index + 1];
  } else {
    fileName = fileList[0];
  }
  return { ...state, voiceFile: fileName };
};

export { toNextVoice };
