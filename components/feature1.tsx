import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./feature1.module.css";

export type Feature1Type = {
  valuePlaceholder?: string;
  label?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
  propWidth3?: CSSProperties["width"];
};

const Feature1: NextPage<Feature1Type> = ({
  valuePlaceholder,
  label,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
}) => {
  const highlightCommandStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const label3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const value1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const value2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  return (
    <div className={styles.feature}>
      <div className={styles.wrapperValue}>
        <input
          className={styles.value}
          placeholder={valuePlaceholder}
          type="text"
        />
        <div className={styles.highlightCommand} style={highlightCommandStyle}>
          <div className={styles.label} style={label3Style}>
            {label}
          </div>
        </div>
      </div>
      <div className={styles.value1}>
        <div className={styles.copy}>string</div>
      </div>
      <div className={styles.value2} style={value1Style}>
        <div className={styles.copy1}>--</div>
      </div>
      <div className={styles.value3} style={value2Style}>
        <div className={styles.copy2}>--</div>
      </div>
    </div>
  );
};

export default Feature1;
