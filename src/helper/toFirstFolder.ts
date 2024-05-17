import { type MediaInfoType } from "../context/MediaInfoContext/mediaInfo";
import { type SceneType } from "../context/SceneContext";
import { getCgList } from "../data/getCgFileList";
import { getStandList } from "../data/getStandFileList";
import { getVideoList } from "../data/getVideoFileList";

const toFirstFolder = (scene: SceneType, state: MediaInfoType) => {
  if (scene === "card-stand") {
    const standFolder: string = "01";
    const standFile: string = getStandList(standFolder)[0];
    return { ...state, standFolder, standFile };
  } else if (scene === "card-cg") {
    const cgFolder: string = "01";
    const cgFile: string = getCgList(cgFolder)[0];
    return { ...state, cgFolder, cgFile };
  } else {
    const videoFolder: string = "01";
    const videoFile: string = getVideoList(videoFolder)[0];
    return { ...state, videoFolder, videoFile };
  }
};

export { toFirstFolder };
