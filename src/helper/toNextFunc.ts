import { type MediaInfoType } from "../context/MediaInfoContext/mediaInfo";
import { type SceneType } from "../context/SceneContext";
import { getCgList } from "../data/getCgFileList";
import { getStandList } from "../data/getStandFileList";
import { getVideoList } from "../data/getVideoFileList";

const toNextFunc = (scene: SceneType, state: MediaInfoType) => {
  if (scene === "card-stand") {
    const fileList: string[] = getStandList(state.standFolder);
    const index: number = fileList.indexOf(state.standFile);
    let fileName: string;
    if (index < fileList.length - 1) {
      fileName = fileList[index + 1];
    } else {
      fileName = fileList[0];
    }
    return { ...state, standFile: fileName };
  } else if (scene === "card-cg") {
    const fileList: string[] = getCgList(state.cgFolder);
    const index: number = fileList.indexOf(state.cgFile);
    let fileName: string;
    if (index < fileList.length - 1) {
      fileName = fileList[index + 1];
    } else {
      fileName = fileList[0];
    }
    return { ...state, cgFile: fileName };
  } else {
    const fileList: string[] = getVideoList(state.videoFolder);
    const index: number = fileList.indexOf(state.videoFile);
    let fileName: string;
    if (index < fileList.length - 1) {
      fileName = fileList[index + 1];
    } else {
      fileName = fileList[0];
    }
    return { ...state, videoFile: fileName };
  }
};

export { toNextFunc };
