import { useEffectState } from "../../context/EffectStateContext";
import { useFilter } from "../../context/FilterContext";
import { useMediaInfo } from "../../context/MediaInfoContext/MediaInfoContext";
import { useScene } from "../../context/SceneContext";
import { useMediaSize, useScreenMode } from "../../context/ScreenContext";
import { useSwirlDeg } from "../../context/SwirlContext";
import styles from "./Video.module.css";

const Video = () => {
  const { setScene } = useScene();
  const { mediaState } = useMediaInfo();
  const { swirlState } = useSwirlDeg();
  const { screenMode } = useScreenMode();
  const { mediaSize } = useMediaSize();
  const { effectState } = useEffectState();
  const { filterState } = useFilter();

  const resetScene = (e: any) => {
    e.preventDefault();
    setScene("card-stand");
  };

  return (
    <div className={styles["video-box"]} onContextMenu={resetScene}>
      <video
        loop
        autoPlay
        className={`${screenMode === "cardMode" && styles.cardMode}
        ${screenMode === "cgMode" && styles.cgMode}
        ${mediaSize === "none" && styles.originalSize}
        ${mediaSize === "custom" && styles.customSize}
        `}
        style={{
          transform: `rotateY(${swirlState.videoSwirlDeg}deg)`,
          filter: effectState.filterEffect.targetVideo
            ? `opacity(${filterState.opacity}%) brightness(${filterState.brightness}%) contrast(${filterState.contrast}%) grayscale(${filterState.grayscale}%) hue-rotate(${filterState.hueRotate}deg) invert(${filterState.invert}%) saturate(${filterState.saturate}%) sepia(${filterState.sepia}%)`
            : undefined,
        }}
        src={`/video/folder-${mediaState.videoFolder}/${mediaState.videoFile}`}
      ></video>
    </div>
  );
};

export default Video;
