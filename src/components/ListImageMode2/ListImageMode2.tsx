import styles from "./ListImageMode2.module.css";
import { useEffect, useRef, useState } from "react";
import { useEffectState } from "../../context/EffectStateContext";
import { useFilter } from "../../context/FilterContext";
import { useImageList } from "../../context/ImageListState";
import { useMediaInfo } from "../../context/MediaInfoContext/MediaInfoContext";
import { useScene } from "../../context/SceneContext";
import { useSwirlDeg } from "../../context/SwirlContext";
import { type SpecificPayloadType } from "../../helper/toSpecificFile";
import { createRandomImg } from "../../helper/createRandomImg";
import { useScreenMode } from "../../context/ScreenContext";

const ListImageMode2 = () => {
  const { listState, listSubState, setListState } = useImageList();
  const { mediaState, mediaDispatch } = useMediaInfo();
  const { setScene } = useScene();
  const { swirlState } = useSwirlDeg();
  const { effectState } = useEffectState();
  const { filterState } = useFilter();
  const { screenMode } = useScreenMode();

  const [imageInfoList, setImageInfoList] = useState<string[][]>([]);
  const imgBoxRef = useRef<HTMLDivElement>(null);
  const [changeInfo, setChangeInfo] = useState({
    changed: false,
    direction: false,
    page: 0,
  });

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
    for (let i = 0; i < 7; i++) {
      createRandomImg(imageList, listState, mediaState);
    }
    setImageInfoList(imageList);
  }, [listState]);

  const moveImg = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      setChangeInfo((prev) => ({
        changed: true,
        direction: true,
        page: prev.page + 1,
      }));
    } else {
      setChangeInfo((prev) => ({
        changed: true,
        direction: false,
        page: prev.page - 1,
      }));
    }
  };

  useEffect(() => {
    if (changeInfo.changed) {
      const items = document.querySelectorAll(".itemQuery");
      if (changeInfo.direction) {
        imgBoxRef.current?.appendChild(items[0]);
      } else {
        imgBoxRef.current?.prepend(items[items.length - 1]);
      }

      if (changeInfo.page >= 7 || changeInfo.page <= -7) {
        setChangeInfo((prev) => ({ ...prev, changed: false, page: 0 }));
        setListState((prev) => ({ ...prev, random: !prev.random }));
      } else {
        setChangeInfo((prev) => ({ ...prev, changed: false }));
      }
    }
  }, [changeInfo.changed]);

  if (imageInfoList.length === 7) {
    return (
      <div
        className={`${styles["list-container"]}  ${
          screenMode != "cardMode" ? styles.big : ""
        }`}
        style={{
          transform: `rotateY(${swirlState.listSwirlDeg}deg)`,
          filter: effectState.filterEffect.targetCard
            ? `opacity(${filterState.opacity}%) brightness(${filterState.brightness}%) contrast(${filterState.contrast}%) grayscale(${filterState.grayscale}%) hue-rotate(${filterState.hueRotate}deg) invert(${filterState.invert}%) saturate(${filterState.saturate}%) sepia(${filterState.sepia}%)`
            : undefined,
        }}
        onContextMenu={resetCardScene}
      >
        <div className={styles["img-box"]} ref={imgBoxRef} onWheel={moveImg}>
          {imageInfoList.map((item, index) => (
            <div
              key={index}
              className={`${styles["item-wrapper"]}  itemQuery`}
              data-text={`${item[0]}-${item[1].split(".")[0]}`}
            >
              <div
                className={`${styles.item} ${
                  effectState.shakeEffect.active ? styles.shake : ""
                }`}
                style={{
                  ["--img" as any]: `url(/${target}/folder-${item[0]}/${item[1]})`,
                  backgroundSize: listSubState.heightAuto ? "cover" : "contain",
                  backgroundPosition:
                    target === "stand-image" ? "center" : "unset",
                }}
                onClick={() => changeCardCg(target, index)}
              />
            </div>
          ))}

          {imageInfoList.map((item, index) => (
            <div
              key={index + 7}
              className={`${styles["item-wrapper"]}  itemQuery`}
              data-text={`${item[0]}-${item[1].split(".")[0]}`}
            >
              <div
                className={`${styles.item} ${
                  effectState.shakeEffect.active ? styles.shake : ""
                }`}
                style={{
                  ["--img" as any]: `url(/${target}/folder-${item[0]}/${item[1]})`,
                  backgroundSize: listSubState.heightAuto ? "cover" : "contain",
                  backgroundPosition:
                    target === "stand-image" ? "center" : "unset",
                }}
                onClick={() => changeCardCg(target, index)}
              />
            </div>
          ))}

          {imageInfoList.map((item, index) => (
            <div
              key={index + 14}
              className={`${styles["item-wrapper"]}  itemQuery`}
              data-text={`${item[0]}-${item[1].split(".")[0]}`}
            >
              <div
                className={`${styles.item} ${
                  effectState.shakeEffect.active ? styles.shake : ""
                }`}
                style={{
                  ["--img" as any]: `url(/${target}/folder-${item[0]}/${item[1]})`,
                  backgroundSize: listSubState.heightAuto ? "cover" : "contain",
                  backgroundPosition:
                    target === "stand-image" ? "center" : "unset",
                }}
                onClick={() => changeCardCg(target, index)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default ListImageMode2;
