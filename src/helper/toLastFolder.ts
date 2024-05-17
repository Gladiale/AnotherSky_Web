import { type MediaInfoType } from "../context/MediaInfoContext/mediaInfo";
import { type SceneType } from "../context/SceneContext";
import { maxInfo } from "../data/allInfo";
import { getCgList } from "../data/getCgFileList";
import { getStandList } from "../data/getStandFileList";
import { getVideoList } from "../data/getVideoFileList";

const toLastFolder = (scene: SceneType, state: MediaInfoType) => {
  if (scene === "card-stand") {
    const standFolder: string = String(maxInfo.maxStandFolder).padStart(2, "0");
    const standFile: string = getStandList(standFolder)[0];
    return { ...state, standFolder, standFile };
  } else if (scene === "card-cg") {
    const cgFolder: string = String(maxInfo.maxCgFolder).padStart(2, "0");
    const cgFile: string = getCgList(cgFolder)[0];
    return { ...state, cgFolder, cgFile };
  } else {
    const videoFolder: string = String(maxInfo.maxVideoFolder).padStart(2, "0");
    const videoFile: string = getVideoList(videoFolder)[0];
    return { ...state, videoFolder, videoFile };
  }
};

export { toLastFolder };
