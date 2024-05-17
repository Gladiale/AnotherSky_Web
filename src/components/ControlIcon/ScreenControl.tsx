import { useScreenMode } from "../../context/ScreenContext";
import styles from "./Icon.module.css";
import { GiSnowflake2 } from "react-icons/gi";

const ScreenControl = () => {
  const { screenMode, setScreenMode } = useScreenMode();

  const screenControl = () => {
    switch (screenMode) {
      case "cardMode":
        setScreenMode("mangaMode");
        break;
      case "mangaMode":
        setScreenMode("cgMode");
        break;
      default:
        setScreenMode("cardMode");
    }
  };

  return <GiSnowflake2 className={styles.icon} onClick={screenControl} />;
};

export default ScreenControl;
