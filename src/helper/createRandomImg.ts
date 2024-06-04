import { type ImageListType } from "../context/ImageListState";
import { type MediaInfoType } from "../context/MediaInfoContext/mediaInfo";
import { maxInfo } from "../data/allInfo";
import { getRandomCG, getRandomFolder, getRandomStand } from "./getRandomFile";

const createRandomImg = (
  imageInfoList: string[][],
  listState: ImageListType,
  mediaState: MediaInfoType
) => {
  let folderName: string;
  let fileName: string;

  if (listState.folder) {
    if (listState.cg) {
      folderName = getRandomFolder(maxInfo.maxCgFolder);
      fileName = getRandomCG(folderName);
    } else {
      folderName = getRandomFolder(maxInfo.maxStandFolder);
      fileName = getRandomStand(folderName);
    }
    return imageInfoList.push([folderName, fileName]);
  }

  if (listState.cg) {
    folderName = mediaState.cgFolder;
    fileName = getRandomCG(folderName);
  } else {
    folderName = mediaState.standFolder;
    fileName = getRandomStand(folderName);
  }

  return imageInfoList.push([folderName, fileName]);
};

export { createRandomImg };
