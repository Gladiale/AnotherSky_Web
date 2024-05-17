import { type GetListType } from "../types/getListType";

// 画像のファイルリスト
let cgFileList: string[];
const getCgList: GetListType = (folderName) => {
  switch (folderName) {
    case "01":
      cgFileList = [
        "001.png",
        "002.png",
        "003.jpg",
        "004.jpg",
        "005.jpg",
        "006.jpg",
        "007.jpg",
        "008.jpg",
      ];
      return cgFileList;

    case "02":
      cgFileList = [
        "001.jpg",
        "002.jpg",
        "003.jpg",
        "004.jpg",
        "005.jpg",
        "006.jpg",
        "007.jpg",
        "008.jpg",
        "009.jpg",
        "010.jpg",
        "011.jpg",
      ];
      return cgFileList;

    case "03":
      cgFileList = [
        "001.png",
        "002.png",
        "003.png",
        "004.png",
        "005.png",
        "006.png",
        "007.png",
        "008.png",
        "009.png",
        "010.png",
      ];
      return cgFileList;

    case "04":
      cgFileList = [];
      return cgFileList;

    case "05":
      cgFileList = [];
      return cgFileList;

    default:
      cgFileList = [];
      return cgFileList;
  }
};

export { getCgList };
