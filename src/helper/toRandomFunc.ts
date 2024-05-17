import { type MediaInfoType } from "../context/MediaInfoContext/mediaInfo";
import { maxInfo } from "../data/allInfo";
import {
  getRandomCG,
  getRandomEffect,
  getRandomFolder,
  getRandomStand,
  getRandomVideo,
  getRandomVoice,
  getRandomVoiceFolder,
} from "./getRandomFile";

const toRandomFunc = (): MediaInfoType => {
  const folderName = {
    cgFolder: getRandomFolder(maxInfo.maxCgFolder),
    standFolder: getRandomFolder(maxInfo.maxStandFolder),
    videoFolder: getRandomFolder(maxInfo.maxVideoFolder),
    voiceFolder: getRandomVoiceFolder(),
  };
  const fileName = {
    cgFile: getRandomCG(folderName.cgFolder),
    standFile: getRandomStand(folderName.standFolder),
    videoFile: getRandomVideo(folderName.videoFolder),
    voiceFile: getRandomVoice(folderName.voiceFolder),
    effectFile: getRandomEffect(),
  };
  return {
    ...folderName,
    ...fileName,
  };
};

export { toRandomFunc };
