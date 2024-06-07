import styles from "./Video.module.css";
import { useEffectState } from "../../context/EffectState/EffectStateContext";
import { useFilter } from "../../context/FilterContext";
import { useMediaInfo } from "../../context/MediaInfoContext/MediaInfoContext";
import { useScene } from "../../context/SceneContext";
import { useMediaSize, useScreenMode } from "../../context/ScreenContext";
import { useRotateY } from "../../context/RotateYContext";
import EffectImage from "../EffectImage/EffectImage";

const Video = () => {
  const { setScene } = useScene();
  const { mediaState } = useMediaInfo();
  const { rotateYState } = useRotateY();
  const { screenMode } = useScreenMode();
  const { mediaSize } = useMediaSize();
  const { effectState } = useEffectState();
  const { filterState } = useFilter();

  const resetScene = (e: any) => {
    e.preventDefault();
    setScene("card-stand");
  };

  return (
    <div className={styles["video-content"]} onContextMenu={resetScene}>
      <div className={styles["video-box"]}>
        <video
          loop
          autoPlay
          className={`${screenMode === "cardMode" && styles.cardMode}
        ${screenMode === "cgMode" && styles.cgMode}
        ${mediaSize === "none" && styles.originalSize}
        ${mediaSize === "custom" && styles.customSize}
        `}
          style={{
            transform: `rotateY(${rotateYState.videoRotateY ? 180 : 0}deg)`,
            filter: effectState.filterEffect.targetVideo
              ? `opacity(${filterState.opacity}%) brightness(${filterState.brightness}%) contrast(${filterState.contrast}%) grayscale(${filterState.grayscale}%) hue-rotate(${filterState.hueRotate}deg) invert(${filterState.invert}%) saturate(${filterState.saturate}%) sepia(${filterState.sepia}%)`
              : undefined,
          }}
          src={`/video/${mediaState.folder.videoFolder[1]}/${mediaState.file.videoFile[1]}`}
        ></video>
        {effectState.imageEF.activeImage && <EffectImage />}
      </div>
    </div>
  );
};

export default Video;
