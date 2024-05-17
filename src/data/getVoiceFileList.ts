import { type GetListType } from "../types/getListType";

// ボイスのファイルリスト
let voiceFileList: string[];
const getVoiceList: GetListType = (folderName) => {
  switch (folderName) {
    case "song":
      voiceFileList = [
        "LArc DAYBREAK'S BELL.mp3",
        "LArc New World.mp3",
        "LArc 瞳の住人.mp3",
        "LArc 自由への招待.mp3",
        "sin_9999.ogg",
        "アムリタ.mp3",
        "ガラスのくつ.mp3",
      ];
      return voiceFileList;

    case "music":
      voiceFileList = [
        "into the light.mp3",
        "Preparation.mp3",
        "Revolve.mp3",
        "Will.mp3",
      ];
      return voiceFileList;

    case "sound":
      voiceFileList = [
        "sin_0116.ogg",
        "sin_0159.ogg",
        "sin_0418.ogg",
        "sin_1137.ogg",
        "sin_1230.ogg",
      ];
      return voiceFileList;

    default:
      voiceFileList = [];
      return voiceFileList;
  }
};

export { getVoiceList };
