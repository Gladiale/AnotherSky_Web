import styles from "./FilterControl.module.css";
import { GiFairyWand } from "react-icons/gi";
import FilterMenu from "./FilterMenu";
import { useEffectState } from "../../context/EffectStateContext";

const FilterControl = () => {
  const { effectState, effectStateDispatch } = useEffectState();

  const openCloseFilter = () => {
    if (
      effectState.pixelEffect ||
      effectState.filterEffect.targetCard ||
      effectState.filterEffect.targetStand ||
      effectState.filterEffect.targetVideo
    ) {
      effectStateDispatch({ type: "filter", payload: "allClose" });
    } else {
      effectStateDispatch({ type: "filter", payload: "allOpen" });
    }
  };

  return (
    <div className={styles["filter-container"]}>
      <GiFairyWand
        className={`${styles.icon} ${
          (effectState.pixelEffect ||
            effectState.filterEffect.targetCard ||
            effectState.filterEffect.targetStand ||
            effectState.filterEffect.targetVideo) &&
          styles.toggleFilter
        }`}
        onClick={openCloseFilter}
      />
      {(effectState.pixelEffect ||
        effectState.filterEffect.targetCard ||
        effectState.filterEffect.targetStand ||
        effectState.filterEffect.targetVideo) && <FilterMenu />}
    </div>
  );
};

export default FilterControl;
