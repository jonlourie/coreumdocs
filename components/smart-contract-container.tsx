import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import TypeLinkStateDefault from "./type-link-state-default";
import styles from "./smart-contract-container.module.css";

export type SmartContractContainerType = {
  featureDescription?: string;
  smartContractDefinitionTe?: string;
  featureDescriptionText?: string;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
  propGap?: CSSProperties["gap"];
  propPadding?: CSSProperties["padding"];
  propGap1?: CSSProperties["gap"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const SmartContractContainer: NextPage<SmartContractContainerType> = ({
  featureDescription,
  smartContractDefinitionTe,
  featureDescriptionText,
  propBorderRadius,
  propGap,
  propPadding,
  propGap1,
  propAlignSelf,
}) => {
  const subSectionStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      gap: propGap,
      padding: propPadding,
    };
  }, [propBorderRadius, propGap, propPadding]);

  const copyStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  const typeLinkStateDefaultStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={styles.subSection} style={subSectionStyle}>
      <div className={styles.copy} style={copyStyle}>
        <div className={styles.smartContracts}>{featureDescription}</div>
        <div className={styles.copy1}>{smartContractDefinitionTe}</div>
      </div>
      <TypeLinkStateDefault
        label="Details"
        typeLinkStateDefaultAlignSelf="unset"
        labelLineHeight="20px"
        labelColor="unset"
        labelBackground="linear-gradient(180deg, #25d695, #046c45)"
        labelWebkitBackgroundClip="unset"
        labelWebkitTextFillColor="unset"
      />
    </div>
  );
};

export default SmartContractContainer;
