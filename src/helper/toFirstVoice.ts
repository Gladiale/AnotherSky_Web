import { type MediaInfoType } from "../context/MediaInfoContext/mediaInfo";
import { getVoiceList } from "../data/getVoiceFileList";

const toFirsVoice = (state: MediaInfoType) => {
  const fileList: string[] = getVoiceList(state.voiceFolder);
  return { ...state, voiceFile: fileList[0] };
};

export { toFirsVoice };
