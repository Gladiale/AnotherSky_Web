import { type MediaInfoType } from "../context/MediaInfoContext/mediaInfo";
import { type SceneType } from "../context/SceneContext";
import { maxInfo } from "../data/allInfo";
import { getCgList } from "../data/getCgFileList";
import { getStandList } from "../data/getStandFileList";
import { getVideoList } from "../data/getVideoFileList";

const toPrevFolder = (scene: SceneType, state: MediaInfoType) => {
  if (scene === "card-stand") {
    const folderNumber = Number(state.standFolder);
    let standFolder: string;
    if (folderNumber === 1) {
      standFolder = String(maxInfo.maxStandFolder).padStart(2, "0");
    } else {
      standFolder = String(folderNumber - 1).padStart(2, "0");
    }
    const standFile: string = getStandList(standFolder)[0];
    return { ...state, standFolder, standFile };
  } else if (scene === "card-cg") {
    const folderNumber = Number(state.cgFolder);
    let cgFolder: string;
    if (folderNumber === 1) {
      cgFolder = String(maxInfo.maxCgFolder).padStart(2, "0");
    } else {
      cgFolder = String(folderNumber - 1).padStart(2, "0");
    }
    const cgFile: string = getCgList(cgFolder)[0];
    return { ...state, cgFolder, cgFile };
  } else {
    const folderNumber = Number(state.videoFolder);
    let videoFolder: string;
    if (folderNumber === 1) {
      videoFolder = String(maxInfo.maxVideoFolder).padStart(2, "0");
    } else {
      videoFolder = String(folderNumber - 1).padStart(2, "0");
    }
    const videoFile: string = getVideoList(videoFolder)[0];
    return { ...state, videoFolder, videoFile };
  }
};

export { toPrevFolder };
