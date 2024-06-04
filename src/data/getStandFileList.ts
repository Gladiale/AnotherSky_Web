import { type GetListType } from "../types/getListType";

// 立ち絵のファイルリスト
let standFileList: string[];
const getStandList: GetListType = (folderName) => {
  switch (folderName) {
    case "01":
      standFileList = [
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
        "011.png",
        "012.png",
        "013.png",
        "014.png",
        "015.png",
        "016.png",
      ];
      return standFileList;

    case "02":
      standFileList = [
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
        "011.png",
        "012.png",
        "013.png",
        "014.png",
        "015.png",
        "016.png",
        "017.png",
        "018.png",
        "019.png",
        "020.png",
        "021.png",
        "022.png",
        "023.png",
        "024.png",
        "025.png",
        "026.png",
      ];
      return standFileList;

    case "03":
      standFileList = [
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
        "011.png",
        "012.png",
        "013.png",
        "014.png",
        "015.png",
        "016.png",
        "017.png",
        "018.png",
        "019.png",
        "020.png",
        "021.png",
      ];
      return standFileList;

    case "04":
      standFileList = [
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
        "011.png",
        "012.png",
        "013.png",
        "014.png",
        "015.png",
        "016.png",
        "017.png",
        "018.png",
        "019.png",
        "020.png",
        "021.png",
        "022.png",
        "023.png",
        "024.png",
        "025.png",
        "026.png",
        "027.png",
        "028.png",
        "029.png",
        "030.png",
        "031.png",
        "032.png",
        "033.png",
        "034.png",
        "035.png",
        "036.png",
        "037.png",
        "038.png",
        "039.png",
        "040.png",
        "041.png",
        "042.png",
        "043.png",
        "044.png",
        "045.png",
        "046.png",
        "047.png",
        "048.png",
        "049.png",
        "050.png",
        "051.png",
        "052.png",
      ];
      return standFileList;

    case "05":
      standFileList = [];
      return standFileList;

    default:
      standFileList = [];
      return standFileList;
  }
};

export { getStandList };
