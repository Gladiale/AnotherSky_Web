import styles from "./Icon.module.css";
import { GiSnowBottle } from "react-icons/gi";
import { useImageSize } from "../../context/ImageSizeContext";

const ImageSizeControl = () => {
  const { imageSize, setImageSize } = useImageSize();

  const changeImageSize = () => {
    switch (imageSize) {
      case "contain":
        setImageSize("cover");
        break;
      case "cover":
        setImageSize("none");
        break;
      default:
        setImageSize("contain");
    }
  };

  return (
    <GiSnowBottle
      className={`${styles.icon}
      ${imageSize === "cover" && styles.imageSizeCover}
      ${imageSize === "none" && styles.imageSizeNone}`}
      onClick={changeImageSize}
    />
  );
};

export default ImageSizeControl;
