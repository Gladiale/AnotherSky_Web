import { RandomTargetType } from "../components/ControlIcon/RandomControl";
import { type MediaInfoType } from "../context/MediaInfoContext/mediaInfo";
import { maxInfo } from "../data/allInfo";
import {
  getRandomCG,
  getRandomFolder,
  getRandomStand,
  getRandomVideo,
} from "./getRandomFile";

type FolderNameType = {
  cgFolder?: string;
  standFolder?: string;
  videoFolder?: string;
};

type FileNameType = {
  cgFile?: string;
  standFile?: string;
  videoFile?: string;
  effectFile?: string;
};

const toRandomWithSelect = (
  randomTarget: RandomTargetType,
  state: MediaInfoType
): MediaInfoType => {
  const folderName: FolderNameType = {};
  const fileName: FileNameType = {};

  // folderがターゲットの時実行
  if (randomTarget.folder) {
    if (randomTarget.cg) {
      folderName.cgFolder = getRandomFolder(maxInfo.maxCgFolder);
      fileName.cgFile = getRandomCG(folderName.cgFolder);
    }
    if (randomTarget.stand) {
      folderName.standFolder = getRandomFolder(maxInfo.maxStandFolder);
      fileName.standFile = getRandomStand(folderName.standFolder);
    }
    if (randomTarget.video) {
      folderName.videoFolder = getRandomFolder(maxInfo.maxVideoFolder);
      fileName.videoFile = getRandomVideo(folderName.videoFolder);
    }
    return { ...state, ...folderName, ...fileName };
  }

  // folderがターゲット外の時実行
  if (randomTarget.cg) {
    fileName.cgFile = getRandomCG(state.cgFolder);
  }
  if (randomTarget.stand) {
    fileName.standFile = getRandomStand(state.standFolder);
  }
  if (randomTarget.video) {
    fileName.videoFile = getRandomVideo(state.videoFolder);
  }
  return { ...state, ...fileName };
};

export { toRandomWithSelect };
