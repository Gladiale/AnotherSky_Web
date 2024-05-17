import { useEffect, useState } from "react";
import styles from "./AutoNext.module.css";
import { GiHeartBattery } from "react-icons/gi";
import { useMediaInfo } from "../../context/MediaInfoContext/MediaInfoContext";
import { useScene } from "../../context/SceneContext";

const AutoNext = () => {
  // 自動画像変換
  const [autoChange, setAutoChange] = useState<boolean>(false);
  const [changeSpeed, setChangeSpeed] = useState<number>(450);

  const { scene } = useScene();
  const { mediaDispatch } = useMediaInfo();

  const handleAutoMatic = (e: any) => {
    e.stopPropagation();
    setAutoChange((prev) => !prev);
  };

  const handleChangeSpeed = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    if (changeSpeed === 40) {
      setChangeSpeed(450);
    } else if (changeSpeed !== 40 && changeSpeed < 1350) {
      setChangeSpeed((prev) => (prev += 450));
    } else {
      setChangeSpeed(40);
    }
    // console.log(changeSpeed);
  };

  useEffect(() => {
    // console.log("init");
    let intervalId: number | undefined;
    if (autoChange) {
      // console.log("time start");
      intervalId = window.setInterval(() => {
        // console.log("interval running");
        mediaDispatch({ type: "next", payload: scene });
      }, changeSpeed);
    }
    return () => {
      window.clearInterval(intervalId);
      // console.log("end");
    };
  }, [autoChange, changeSpeed]);

  return (
    <div className={styles["autoMatic-box"]}>
      <GiHeartBattery
        className={`${styles.icon} ${autoChange && styles.autoMatic}`}
        onClick={handleAutoMatic}
        onContextMenu={handleChangeSpeed}
      />
      <p style={{ display: autoChange ? "block" : "none" }}>
        {changeSpeed === 450
          ? "normal"
          : changeSpeed === 900
          ? "middle"
          : changeSpeed === 1350
          ? "low"
          : "Animation"}
      </p>
    </div>
  );
};

export default AutoNext;
