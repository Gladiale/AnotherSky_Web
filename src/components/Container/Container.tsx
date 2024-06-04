import styles from "./Container.module.css";
import { useEffect } from "react";

import Content from "../Content/Content";
import Control from "../Control/Control";
import { HoverProvider } from "../../context/HoverContext";
import { useMediaInfo } from "../../context/MediaInfoContext/MediaInfoContext";
import Information from "../Information/Information";
import { SwirlDegProvider } from "../../context/SwirlContext";
import { FilterProvider } from "../../context/FilterContext";
import { useScreenMode } from "../../context/ScreenContext";
import { useEffectState } from "../../context/EffectStateContext";
import { ImageListProvider } from "../../context/ImageListState";

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
      ${screenMode === "cgMode" && styles.cgMode}`}
    >
      <FilterProvider>
        <SwirlDegProvider>
          <HoverProvider>
            <ImageListProvider>
              <Content />
              <Control />
              <Information />
            </ImageListProvider>
          </HoverProvider>
        </SwirlDegProvider>
      </FilterProvider>
    </div>
  );
};

export default Container;
