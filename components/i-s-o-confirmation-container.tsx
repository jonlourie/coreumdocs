import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./i-s-o-confirmation-container.module.css";

export type ISOConfirmationContainerType = {
  dimensions?: string;
  dimensionsDescription?: string;
  financialMessagingStandar?: string;
  iso20022Description?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
};

const ISOConfirmationContainer: NextPage<ISOConfirmationContainerType> = ({
  dimensions,
  dimensionsDescription,
  financialMessagingStandar,
  iso20022Description,
  propFlex,
}) => {
  const involvesLeveragingTheStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className={styles.groupParent}>
      <img className={styles.frameChild} alt="" src={dimensions} />
      <img className={styles.flare2Icon} alt="" src={dimensionsDescription} />
      <div className={styles.isoRtgs}>{financialMessagingStandar}</div>
      <div
        className={styles.involvesLeveragingThe}
        style={involvesLeveragingTheStyle}
      >
        {iso20022Description}
      </div>
    </div>
  );
};

export default ISOConfirmationContainer;
