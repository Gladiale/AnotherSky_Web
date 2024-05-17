import { type MediaInfoType } from "../context/MediaInfoContext/mediaInfo";
import { type SceneType } from "../context/SceneContext";
import { getCgList } from "../data/getCgFileList";
import { getStandList } from "../data/getStandFileList";
import { getVideoList } from "../data/getVideoFileList";

const toLastFunc = (scene: SceneType, state: MediaInfoType) => {
  if (scene === "card-stand") {
    const fileList: string[] = getStandList(state.standFolder);
    const fileName: string = fileList.slice(-1)[0];
    return { ...state, standFile: fileName };
  } else if (scene === "card-cg") {
    const fileList: string[] = getCgList(state.cgFolder);
    const fileName: string = fileList.slice(-1)[0];
    return { ...state, cgFile: fileName };
  } else {
    const fileList: string[] = getVideoList(state.videoFolder);
    const fileName: string = fileList.slice(-1)[0];
    return { ...state, videoFile: fileName };
  }
};

export { toLastFunc };
