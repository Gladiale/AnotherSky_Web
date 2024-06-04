import styles from "./StandImage.module.css";
import { useState } from "react";
import { useMediaInfo } from "../../context/MediaInfoContext/MediaInfoContext";
import { getRandomVoice } from "../../helper/getRandomFile";
import { useSwirlDeg } from "../../context/SwirlContext";
import { useEffectState } from "../../context/EffectStateContext";
import { useFilter } from "../../context/FilterContext";

type PropsType = {
  imgStyle?: React.CSSProperties;
};

const StandImage = ({ imgStyle }: PropsType) => {
  const [vocal, setVocal] = useState<string>("");
  const [hasVocal, setHasVocal] = useState<boolean>(false);
  const [imgMoveValue, setImgMoveValue] = useState<string>("");

  const { mediaState, mediaDispatch } = useMediaInfo();
  const { swirlState } = useSwirlDeg();
  const { effectState } = useEffectState();
  const { filterState } = useFilter();

  const changeStandImage = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      mediaDispatch({ type: "next", payload: "card-stand" });
    } else {
      mediaDispatch({ type: "prev", payload: "card-stand" });
    }
  };

  const handleVocal = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    // ランダムなボイスを取得
    // const voiceFolder = getRandomVoiceFolder();
    const voiceFile = getRandomVoice("sound");
    setVocal(`/voice/sound/${voiceFile}`);
    setHasVocal(true);
  };

  const handleAspect = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const width = e.currentTarget.naturalWidth;
    const height = e.currentTarget.naturalHeight;

    const aspectRatio = width / height;
    // console.log(aspectRatio);

    if (aspectRatio < 0.29) {
      return setImgMoveValue("-9%");
    }
    if (aspectRatio < 0.39) {
      return setImgMoveValue("-15%");
    }
    if (aspectRatio < 0.4) {
      return setImgMoveValue("-18%");
    }
    if (aspectRatio < 0.5) {
      return setImgMoveValue("-20%");
    }
    if (aspectRatio < 0.54) {
      return setImgMoveValue("-29%");
    }
    if (aspectRatio < 0.58) {
      return setImgMoveValue("-30%");
    }
    return setImgMoveValue("-32%");
  };

  return (
    <div
      className={`${styles["stand-container"]} ${
        effectState.mirrorEffect && styles.mirror
      }`}
      style={{
        transform: effectState.mirrorEffect
          ? `translateX(${imgMoveValue})`
          : imgStyle?.transform,
      }}
      onWheel={changeStandImage}
    >
      <div
        className={styles["stand-wrapper"]}
        style={{
          transform: `rotateY(${swirlState.cardSwirlDeg}deg)`,
          imageRendering: effectState.pixelEffect ? "pixelated" : undefined,
          filter: effectState.filterEffect.targetStand
            ? `drop-shadow(0 0 5px #86fff3) drop-shadow(0 0 15px #fc3eff) opacity(${filterState.opacity}%) brightness(${filterState.brightness}%) contrast(${filterState.contrast}%) grayscale(${filterState.grayscale}%) hue-rotate(${filterState.hueRotate}deg) invert(${filterState.invert}%) saturate(${filterState.saturate}%) sepia(${filterState.sepia}%)`
            : undefined,
          display:
            effectState.mirrorEffect &&
            effectState.filterEffect.targetStand &&
            filterState.opacity === 0
              ? "none"
              : undefined,
        }}
      >
        <img
          className={styles["stand-img"]}
          src={`/stand-image/folder-${mediaState.standFolder}/${mediaState.standFile}`}
          onClick={handleVocal}
          onLoad={handleAspect}
        />
      </div>
      {hasVocal && (
        <audio
          src={`${vocal}`}
          autoPlay
          onEnded={() => setHasVocal((prev) => !prev)}
        ></audio>
      )}
    </div>
  );
};

export default StandImage;
