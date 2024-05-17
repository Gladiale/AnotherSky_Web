import { voiceFolderList } from "../context/MediaInfoContext/mediaInfo";
import { getCgList } from "../data/getCgFileList";
import { getEffectList } from "../data/getEffectFileList";
import { getStandList } from "../data/getStandFileList";
import { getVideoList } from "../data/getVideoFileList";
import { getVoiceList } from "../data/getVoiceFileList";
import { getRandomInt, getRandomIntNotZero } from "../helper/getRandomInt";

const getRandomFolder = (maxNum: number): string => {
  return String(getRandomIntNotZero(maxNum)).padStart(2, "0");
};

const getRandomVoiceFolder = () => {
  const index = getRandomInt(voiceFolderList.length);
  return voiceFolderList[index];
};

const getRandomCG = (folderName: string): string => {
  const cgList = getCgList(folderName);
  const index = getRandomInt(cgList.length);
  return cgList[index];
};

const getRandomStand = (folderName: string): string => {
  const standList = getStandList(folderName);
  const index = getRandomInt(standList.length);
  return standList[index];
};

const getRandomVideo = (folderName: string): string => {
  const videoList = getVideoList(folderName);
  const index = getRandomInt(videoList.length);
  return videoList[index];
};

const getRandomVoice = (folderName: string): string => {
  const voiceList = getVoiceList(folderName);
  const index = getRandomInt(voiceList.length);
  return voiceList[index];
};

const getRandomEffect = (): string => {
  const effectList = getEffectList();
  const index = getRandomInt(effectList.length);
  return effectList[index];
};

export {
  getRandomFolder,
  getRandomVoiceFolder,
  getRandomCG,
  getRandomStand,
  getRandomVideo,
  getRandomVoice,
  getRandomEffect,
};
