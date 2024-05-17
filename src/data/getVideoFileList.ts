import { type GetListType } from "../types/getListType";

// 動画のファイルリスト
let videoFileList: string[];
const getVideoList: GetListType = (folderName) => {
  switch (folderName) {
    case "01":
      videoFileList = ["001.mkv", "002.mp4", "003.mp4"];
      return videoFileList;

    case "02":
      videoFileList = [];
      return videoFileList;

    default:
      videoFileList = [];
      return videoFileList;
  }
};

export { getVideoList };
