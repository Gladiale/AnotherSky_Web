import styles from "./Container.module.css";
import { useEffect } from "react";

import Content from "../Content/Content";
import Control from "../Control/Control";
import { HoverProvider } from "../../context/HoverContext";
import { useMediaInfo } from "../../context/MediaInfoContext/MediaInfoContext";
import Information from "../Information/Information";
import { ImageSizeProvider } from "../../context/ImageSizeContext";
import { SwirlDegProvider } from "../../context/SwirlContext";
import { FilterProvider } from "../../context/FilterContext";
import { useScreenMode } from "../../context/ScreenContext";
import { useEffectState } from "../../context/EffectStateContext";

const Container = () => {
  const { mediaState, mediaDispatch } = useMediaInfo();
  const { screenMode } = useScreenMode();
  const { effectState } = useEffectState();

  useEffect(() => {
    if (mediaState.standFile === "") {
      mediaDispatch({ type: "random" });
    }
  }, []);

  return (
    <div
      className={`${styles.container}
      ${effectState.mirrorEffect && styles.mirror}
      ${screenMode === "cardMode" && styles.cardMode}
      ${screenMode === "mangaMode" && styles.mangaMode}
      ${screenMode === "cgMode" && styles.cgMode}`}
    >
      <FilterProvider>
        <SwirlDegProvider>
          <HoverProvider>
            <ImageSizeProvider>
              <Content />
              <Control />
              <Information />
            </ImageSizeProvider>
          </HoverProvider>
        </SwirlDegProvider>
      </FilterProvider>
    </div>
  );
};

export default Container;
