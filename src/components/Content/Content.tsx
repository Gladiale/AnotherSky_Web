import styles from "./Content.module.css";
import Card from "../Card/Card";
import StandImage from "../StandImage/StandImage";
import { useScene } from "../../context/SceneContext";
import Video from "../Video/Video";
import { useEffectState } from "../../context/EffectStateContext";

const Content = () => {
  const { scene } = useScene();
  const { effectState } = useEffectState();

  return (
    <div
      className={`${styles.content} ${
        effectState.mirrorEffect ? styles.mirror : ""
      }`}
    >
      {scene != "card-stand" && <StandImage />}
      {(scene === "card-cg" || scene === "card-stand") && <Card />}
      {scene === "card-video" && <Video />}
      {scene != "card-stand" && !effectState.mirrorEffect && (
        <StandImage imgStyle={{ transform: "rotateY(180deg)" }} />
      )}
    </div>
  );
};

export default Content;
