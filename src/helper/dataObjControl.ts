import { getRandomInt } from "./getRandomInt";

type DataObjType = Record<string, string[]>;
type RandomFileType = {
  folder: [number, string];
  file: [number, string];
};

const getFolderList = (dataObj: DataObjType): string[] => {
  const keyList: string[] = Object.keys(dataObj);
  return keyList;
};

const getFileList = (dataObj: DataObjType, folder: string): string[] => {
  const fileList: string[] = dataObj[folder];
  return fileList;
};

const getRandomFile = (
  dataObj: DataObjType,
  folder: string
): [number, string] => {
  const fileList: string[] = dataObj[folder];
  const index = getRandomInt(fileList.length);
  return [index, fileList[index]];
};

const getRandomFolder = (dataObj: DataObjType): [number, string] => {
  const keyList: string[] = Object.keys(dataObj);
  const randomIndex = getRandomInt(keyList.length);
  return [randomIndex, keyList[randomIndex]];
};

const getRandomFolderFile = (dataObj: DataObjType): RandomFileType => {
  const [randomFolderIndex, randomFolderName] = getRandomFolder(dataObj);

  const fileList = dataObj[randomFolderName];
  const randomFileIndex = getRandomInt(fileList.length);
  const randomFileName = fileList[randomFileIndex];

  return {
    folder: [randomFolderIndex, randomFolderName],
    file: [randomFileIndex, randomFileName],
  };
};

export {
  getFolderList,
  getFileList,
  getRandomFile,
  getRandomFolder,
  getRandomFolderFile,
};
