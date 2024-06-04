import { type MediaInfoType } from "../context/MediaInfoContext/mediaInfo";

type SpecificPayloadType = {
  target: "cg-image" | "stand-image";
  fileInfo: string[];
};

const toSpecificFile = (
  payload: SpecificPayloadType,
  state: MediaInfoType
): MediaInfoType => {
  const { target, fileInfo } = payload;
  if (target === "cg-image") {
    return { ...state, cgFolder: fileInfo[0], cgFile: fileInfo[1] };
  } else {
    return { ...state, standFolder: fileInfo[0], standFile: fileInfo[1] };
  }
};

export { type SpecificPayloadType, toSpecificFile };
