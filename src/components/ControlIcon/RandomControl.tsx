import styles from "./RandomControl.module.css";
import { useState } from "react";
import { useMediaInfo } from "../../context/MediaInfoContext/MediaInfoContext";
import { GiDiceEightFacesEight, GiDiceTwentyFacesTwenty } from "react-icons/gi";
import IconDefault from "../Common/IconDefault";

export type RandomTargetType = {
  folder: boolean;
  cg: boolean;
  character: boolean;
  video: boolean;
};

const RandomControl = () => {
  const { mediaInfoDispatch } = useMediaInfo();

  const [randomTarget, setRandomTarget] = useState<RandomTargetType>({
    folder: true,
    cg: true,
    character: true,
    video: true,
  });

  // keyから新しい型を生成
  // 参考 https://typescriptbook.jp/tips/generates-type-from-object-key
  const selectTarget = (target: keyof RandomTargetType) => {
    setRandomTarget({ ...randomTarget, [target]: !randomTarget[target] });
  };

  return (
    <div className={styles["random-container"]}>
      {randomTarget.folder ? (
        <IconDefault
          children={<GiDiceTwentyFacesTwenty />}
          onClick={() =>
            mediaInfoDispatch({ type: "randomWithSelect", payload: randomTarget })
          }
        />
      ) : (
        <IconDefault
          children={<GiDiceEightFacesEight />}
          onClick={() =>
            mediaInfoDispatch({ type: "randomWithSelect", payload: randomTarget })
          }
        />
      )}
      <div className={styles.itemSelect}>
        <div className={styles.folderCheck}>
          <label>
            <span>Folder乱数</span>
            <input
              type="checkbox"
              checked={randomTarget.folder}
              onChange={() => selectTarget("folder")}
            />
          </label>
        </div>
        <div className={styles.targetSelect}>
          <label>
            <input
              type="checkbox"
              checked={randomTarget.cg}
              onChange={() => selectTarget("cg")}
            />
            <span>画像</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={randomTarget.character}
              onChange={() => selectTarget("character")}
            />
            <span>立ち絵</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={randomTarget.video}
              onChange={() => selectTarget("video")}
            />
            <span>動画</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default RandomControl;
