import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./type-link-state-default.module.css";

export type TypeLinkStateDefaultType = {
  label?: string;

  /** Style props */
  typeLinkStateDefaultAlignSelf?: CSSProperties["alignSelf"];
  labelLineHeight?: CSSProperties["lineHeight"];
  labelColor?: CSSProperties["color"];
  labelBackground?: CSSProperties["background"];
  labelWebkitBackgroundClip?: CSSProperties["webkitBackgroundClip"];
  labelWebkitTextFillColor?: CSSProperties["webkitTextFillColor"];
};

const TypeLinkStateDefault: NextPage<TypeLinkStateDefaultType> = ({
  label = "Label",
  typeLinkStateDefaultAlignSelf,
  labelLineHeight,
  labelColor,
  labelBackground,
  labelWebkitBackgroundClip,
  labelWebkitTextFillColor,
}) => {
  const typeLinkStateDefaultStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: typeLinkStateDefaultAlignSelf,
    };
  }, [typeLinkStateDefaultAlignSelf]);

  const label2Style: CSSProperties = useMemo(() => {
    return {
      lineHeight: labelLineHeight,
      color: labelColor,
      background: labelBackground,
      webkitBackgroundClip: labelWebkitBackgroundClip,
      webkitTextFillColor: labelWebkitTextFillColor,
    };
  }, [
    labelLineHeight,
    labelColor,
    labelBackground,
    labelWebkitBackgroundClip,
    labelWebkitTextFillColor,
  ]);

  return (
    <div
      className={styles.typelinkStatedefault}
      style={typeLinkStateDefaultStyle}
    >
      <div className={styles.label} style={label2Style}>
        {label}
      </div>
      <img className={styles.iconlink} alt="" src="/iconlink-1.svg" />
    </div>
  );
};

export default TypeLinkStateDefault;
