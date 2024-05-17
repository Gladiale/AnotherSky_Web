import styles from "./Icon.module.css";
import { useEffectState } from "../../context/EffectStateContext";
import { GiAbstract024 } from "react-icons/gi";

const MirrorEffectControl = () => {
  const { effectState, effectStateDispatch } = useEffectState();

  return (
    <GiAbstract024
      className={`${styles.icon} 
      ${effectState.mirrorEffect && styles.toggleState}`}
      onClick={() => effectStateDispatch({ type: "mirror" })}
    />
  );
};

export default MirrorEffectControl;
