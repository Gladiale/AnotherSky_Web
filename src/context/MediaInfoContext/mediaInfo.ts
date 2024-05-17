export const voiceFolderList = ["song", "music", "sound"];

type MediaInfoType = {
  cgFolder: string;
  standFolder: string;
  videoFolder: string;
  voiceFolder: string;

  cgFile: string;
  standFile: string;
  videoFile: string;
  voiceFile: string;
  effectFile: string;
};

const mediaInfoInit: MediaInfoType = {
  cgFolder: "",
  standFolder: "",
  videoFolder: "",
  voiceFolder: voiceFolderList[0],

  cgFile: "",
  standFile: "",
  videoFile: "",
  voiceFile: "",
  effectFile: "",
};

export { mediaInfoInit, type MediaInfoType };
