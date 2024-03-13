import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./feature.module.css";

export type FeatureType = {
  copy?: string;
  copy1?: string;
  copy2?: string;
  copy3?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
};

const Feature: NextPage<FeatureType> = ({
  copy,
  copy1,
  copy2,
  copy3,
  propWidth,
  propFlex,
}) => {
  const valueStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const copy1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className={styles.feature}>
      <div className={styles.value}>
        <div className={styles.copy}>{copy}</div>
      </div>
      <div className={styles.value1}>
        <div className={styles.copy1}>{copy1}</div>
      </div>
      <div className={styles.value2}>
        <div className={styles.copy2}>{copy2}</div>
      </div>
      <div className={styles.value3} style={valueStyle}>
        <div className={styles.copy3} style={copy1Style}>
          {copy3}
        </div>
      </div>
      <div className={styles.value4}>
        <div className={styles.copy4}>100+ MBPS</div>
      </div>
    </div>
  );
};

export default Feature;
