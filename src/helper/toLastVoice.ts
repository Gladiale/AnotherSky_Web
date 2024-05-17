import { type MediaInfoType } from "../context/MediaInfoContext/mediaInfo";
import { getVoiceList } from "../data/getVoiceFileList";

const toLastVoice = (state: MediaInfoType) => {
  const fileList: string[] = getVoiceList(state.voiceFolder);
  return { ...state, voiceFile: fileList.slice(-1)[0] };
};

export { toLastVoice };
