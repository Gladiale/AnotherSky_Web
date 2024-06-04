import styles from "./ListImage.module.css";
import { useEffect, useState } from "react";
import { useImageList } from "../../context/ImageListState";
import { useMediaInfo } from "../../context/MediaInfoContext/MediaInfoContext";
import { createRandomImg } from "../../helper/createRandomImg";
import { type SpecificPayloadType } from "../../helper/toSpecificFile";
import { useScene } from "../../context/SceneContext";
import { useSwirlDeg } from "../../context/SwirlContext";
import { useEffectState } from "../../context/EffectStateContext";
import { useFilter } from "../../context/FilterContext";

const ListImage = () => {
  const { listState, listSubState, setListState } = useImageList();
  const { mediaState, mediaDispatch } = useMediaInfo();
  const { setScene } = useScene();
  const { swirlState } = useSwirlDeg();
  const { effectState } = useEffectState();
  const { filterState } = useFilter();
  const [imageInfoList, setImageInfoList] = useState<string[][]>([]);

  // 左クリック
  const changeCardCg = (
    target: SpecificPayloadType["target"],
    index: number
  ) => {
    mediaDispatch({
      type: "specific",
      payload: { target: target, fileInfo: imageInfoList[index] },
    });
    if (target === "cg-image") {
      setScene("card-cg");
    }
  };

  // 右クリック
  const resetCardScene = (e: any) => {
    e.preventDefault();
    setScene("card-cg");
  };

  let target: SpecificPayloadType["target"];
  if (listState.cg) {
    target = "cg-image";
  } else {
    target = "stand-image";
  }

  useEffect(() => {
    const imageList: string[][] = [];

    if (listState.cg) {
      target = "cg-image";
    } else {
      target = "stand-image";
    }

    for (let i = 0; i < 9; i++) {
      createRandomImg(imageList, listState, mediaState);
    }

    setImageInfoList(imageList);
  }, [listState]);

  if (imageInfoList.length === 9) {
    return (
      <div
        className={styles["list-container"]}
        style={{
          transform: `rotateY(${swirlState.listSwirlDeg}deg)`,
          filter: effectState.filterEffect.targetCard
            ? `opacity(${filterState.opacity}%) brightness(${filterState.brightness}%) contrast(${filterState.contrast}%) grayscale(${filterState.grayscale}%) hue-rotate(${filterState.hueRotate}deg) invert(${filterState.invert}%) saturate(${filterState.saturate}%) sepia(${filterState.sepia}%)`
            : undefined,
        }}
        onContextMenu={resetCardScene}
        onWheel={() =>
          setListState((prev) => ({ ...prev, random: !prev.random }))
        }
      >
        {imageInfoList.map((item, index) => (
          <div
            key={index}
            className={`${styles["list-card"]}
            ${listState.random ? styles.againAni : styles.ani}
            ${effectState.shakeEffect.active ? styles.shake : ""}
            `}
            style={{ ["--i" as any]: index - 4 }}
            data-text={`${item[0]}-${item[1].split(".")[0]}`}
          >
            <img
              className={`${listState.stand ? styles.isStand : styles.isCG} ${
                listSubState.heightAuto ? styles.heightAuto : ""
              }`}
              src={`/${target}/folder-${item[0]}/${item[1]}`}
              onClick={() => changeCardCg(target, index)}
            />
          </div>
        ))}
      </div>
    );
  }
};

export default ListImage;
