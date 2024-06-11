import styles from "./CardImageCG.module.css";
import { useMediaInfo } from "../../context/MediaInfoContext/MediaInfoContext";
import { useMediaSize } from "../../context/ScreenContext";

type PropsType = {
  className: "cg-img" | "texture-img";
  isCharacter: boolean;
};

const CG = ({ className, isCharacter }: PropsType) => {
  const { mediaSize } = useMediaSize();
  const { mediaState } = useMediaInfo();

  const imgUrl = isCharacter
    ? `/stand-image/${mediaState.folder.standFolder[1]}/${mediaState.file.standFile[1]}`
    : `/cg-image/${mediaState.folder.cgFolder[1]}/${mediaState.file.cgFile[1]}`;

  return (
    <img
      className={styles[className]}
      src={imgUrl}
      style={{
        objectFit: mediaSize === "custom" ? "contain" : mediaSize,
        height:
          mediaSize === "none"
            ? "auto"
            : mediaSize === "custom"
            ? "900px"
            : undefined,
        width: mediaSize === "none" ? "auto" : undefined,
      }}
    />
  );
};

export default CG;
