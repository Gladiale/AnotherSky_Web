import { useHover } from "../../context/HoverContext";
import { useMediaInfo } from "../../context/MediaInfoContext/MediaInfoContext";
import styles from "./Information.module.css";

const Information = () => {
  const { mediaState } = useMediaInfo();
  const { isHovered } = useHover();

  return (
    <div
      className={`${styles.information} ${
        isHovered.iconHover ? styles["Info-hovered"] : ""
      }`}
    >
      <p>{`立ち絵「${mediaState.standFolder}-${
        mediaState.standFile.split(".")[0]
      }」`}</p>
      <p>{`ボイス「${mediaState.voiceFile.split(".")[0]}」画像「${
        mediaState.cgFolder
      }-${mediaState.cgFile.split(".")[0]}」動画「${mediaState.videoFolder}-${
        mediaState.videoFile.split(".")[0]
      }」`}</p>
    </div>
  );
};

export default Information;
