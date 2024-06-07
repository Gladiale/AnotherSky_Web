import styles from "./CardImageCG.module.css";
import { useMediaInfo } from "../../context/MediaInfoContext/MediaInfoContext";
import { useMediaSize } from "../../context/ScreenContext";

type PropsType = {
  className: "cg-img" | "texture-img";
};

const CG = ({ className }: PropsType) => {
  const { mediaSize } = useMediaSize();
  const { mediaState } = useMediaInfo();

  return (
    <img
      className={styles[className]}
      src={`/cg-image/${mediaState.folder.cgFolder[1]}/${mediaState.file.cgFile[1]}`}
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
