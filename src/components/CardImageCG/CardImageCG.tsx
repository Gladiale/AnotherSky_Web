import { useImageSize } from "../../context/ImageSizeContext";
import { useMediaInfo } from "../../context/MediaInfoContext/MediaInfoContext";
import styles from "./CardImageCG.module.css";

type PropsType = {
  isPictureMode: boolean;
  setIsPictureMode: React.Dispatch<React.SetStateAction<boolean>>;
  pictureScale: number;
  setPictureScale: React.Dispatch<React.SetStateAction<number>>;
  picturePosition: { x: number; y: number };
  setPicturePosition: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
    }>
  >;
};

const CardImageCG = ({ data }: { data: PropsType }) => {
  const {
    isPictureMode,
    setIsPictureMode,
    pictureScale,
    setPictureScale,
    // picturePosition,
    setPicturePosition,
  } = data;

  const { imageSize } = useImageSize();

  const triggerPictureMode = (e: any) => {
    if (e.button === 1) {
      setIsPictureMode((prev) => !prev);
      setPicturePosition({
        x: 0,
        y: 0,
      });
      setPictureScale(1.5);
    }
  };

  const enterPictureMode = (e: any) => {
    if (isPictureMode) {
      const maxMoveX =
        (e.target.clientWidth * pictureScale - e.target.clientWidth) / 2;
      const maxMoveY =
        (e.target.clientHeight * pictureScale - e.target.clientHeight) / 2;

      const positionX: number =
        -(
          Math.floor(e.nativeEvent.layerX - e.target.clientWidth / 2) /
          e.target.clientWidth
        ) * maxMoveX;
      const positionY: number =
        -(
          Math.floor(e.nativeEvent.layerY - e.target.clientHeight / 2) /
          e.target.clientHeight
        ) * maxMoveY;

      setPicturePosition({
        x: positionX,
        y: positionY,
      });
    }
  };

  const changeScale = (e: any) => {
    if (isPictureMode) {
      if (e.deltaY > 0) {
        setPictureScale((prev) => Number((prev - 0.1).toFixed(1)));
      } else {
        setPictureScale((prev) => Number((prev + 0.1).toFixed(1)));
      }
    }
  };

  const { mediaState } = useMediaInfo();

  return (
    <img
      className={styles["cg-img"]}
      src={`/cg-image/folder-${mediaState.cgFolder}/${mediaState.cgFile}`}
      style={{
        // scale: isPictureMode ? String(pictureScale) : "1",
        objectFit: imageSize,
        height: imageSize === "none" ? "auto" : undefined,
        width: imageSize === "none" ? "auto" : undefined,
      }}
      onMouseDown={triggerPictureMode}
      onMouseMove={enterPictureMode}
      onWheel={changeScale}
    />
  );
};

export default CardImageCG;
