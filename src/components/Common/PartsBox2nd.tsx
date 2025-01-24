import styles from "./PartsBox2nd.module.css";
import IconSmall from "./IconSmall";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BiFirstPage, BiLastPage } from "react-icons/bi";

type PropsType = {
  title?: string;
  message: string;
  onPrevClick: () => void;
  onNextClick: () => void;
  onFirstClick: () => void;
  onLastClick: () => void;
  onBoxClick?: () => void;
  onBoxContextMenu?: () => void;
};

const PartsBox2nd = (props: PropsType) => {
  const {
    title,
    message,
    onPrevClick,
    onNextClick,
    onFirstClick,
    onLastClick,
    onBoxClick,
    onBoxContextMenu,
  } = props;

  return (
    <div className={styles["parts-box"]}>
      {title && <p className={styles.title}>{title}</p>}

      <div className={styles["control"]}>
        <IconSmall shape="rabbet" children={<BiFirstPage />} onClick={onFirstClick} />
        <IconSmall shape="rabbet" children={<BsChevronLeft />} onClick={onPrevClick} />
        <p
          className={`${styles["message"]} ${onBoxClick && styles.ani}`}
          onClick={onBoxClick}
          onContextMenu={(e) => {
            e.preventDefault();
            onBoxContextMenu && onBoxContextMenu();
          }}
        >
          {message}
        </p>
        <IconSmall shape="rabbet" children={<BsChevronRight />} onClick={onNextClick} />
        <IconSmall shape="rabbet" children={<BiLastPage />} onClick={onLastClick} />
      </div>
    </div>
  );
};

export default PartsBox2nd;
