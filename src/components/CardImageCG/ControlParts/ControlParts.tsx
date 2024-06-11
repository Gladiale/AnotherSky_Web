import styles from "./ControlParts.module.css";
import { GiChessQueen } from "react-icons/gi";
import { useHover } from "../../../context/HoverContext";

type PropsType = {
  setIsCharacter: React.Dispatch<React.SetStateAction<boolean>>;
};

const ControlParts = ({ setIsCharacter }: PropsType) => {
  const { isHovered } = useHover();

  const changeContent = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCharacter((prev) => !prev);
  };

  return (
    <div
      className={`${styles["control-box"]} ${
        isHovered.cardHover && !isHovered.iconHover ? styles.show : undefined
      }`}
    >
      <GiChessQueen className={styles.icon} onClick={changeContent} />
    </div>
  );
};

export default ControlParts;
