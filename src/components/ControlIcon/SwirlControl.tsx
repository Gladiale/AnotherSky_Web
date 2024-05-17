import { GiStarSwirl } from "react-icons/gi";
import styles from "./Icon.module.css";
import { useSwirlDeg } from "../../context/SwirlContext";
import { useScene } from "../../context/SceneContext";

const SwirlControl = () => {
  const { scene } = useScene();
  const { swirlDispatch } = useSwirlDeg();

  return (
    <GiStarSwirl
      className={styles.icon}
      onClick={() => swirlDispatch({ type: scene })}
    />
  );
};

export default SwirlControl;
