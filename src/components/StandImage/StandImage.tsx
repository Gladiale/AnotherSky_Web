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

  const { mediaState } = useMediaInfo();
  const { swirlState } = useSwirlDeg();
  const { effectState } = useEffectState();
  const { filterState } = useFilter();

  const handleVocal = (e: any) => {
    e.stopPropagation();
    // ランダムなボイスを取得
    // const voiceFolder = getRandomVoiceFolder();
    const voiceFile = getRandomVoice("sound");
    setVocal(`/voice/sound/${voiceFile}`);
    setHasVocal(true);
  };

  return (
    <div
      className={`${styles["stand-container"]} ${
        effectState.mirrorEffect && styles.mirror
      }`}
      style={imgStyle}
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
