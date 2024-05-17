import { useState } from "react";
import styles from "./CardImage.module.css";
import CardImageCG from "../CardImageCG/CardImageCG";
import CardImageStand from "../CardImageStand/CardImageStand";
import { useSwirlDeg } from "../../context/SwirlContext";

type PropsType = {
  scene: "card-stand" | "card-cg" | "card-video";
  isPictureMode: boolean;
  setIsPictureMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const CardImage = (props: PropsType) => {
  const { scene, isPictureMode, setIsPictureMode } = props;

  const [pictureScale, setPictureScale] = useState<number>(1.5);
  const [picturePosition, setPicturePosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const { swirlState } = useSwirlDeg();

  return (
    <div
      className={styles["cg-wrapper"]}
      style={{
        scale: isPictureMode ? String(pictureScale) : "1",
        transform: `translate(${picturePosition.x}px, ${picturePosition.y}px) rotateY(${swirlState.cgSwirlDeg}deg)`,
      }}
    >
      {scene === "card-stand" ? (
        <CardImageStand />
      ) : (
        <CardImageCG
          data={{
            isPictureMode,
            setIsPictureMode,
            pictureScale,
            setPictureScale,
            picturePosition,
            setPicturePosition,
          }}
        />
      )}
    </div>
  );
};

export default CardImage;
