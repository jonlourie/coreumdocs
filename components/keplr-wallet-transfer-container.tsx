import type { NextPage } from "next";
import styles from "./keplr-wallet-transfer-container.module.css";

export type KeplrWalletTransferContainerType = {
  stepDescription?: string;
  imageDimensions?: string;
  keplrWalletInstructions?: string;
};

const KeplrWalletTransferContainer: NextPage<
  KeplrWalletTransferContainerType
> = ({ stepDescription, imageDimensions, keplrWalletInstructions }) => {
  return (
    <div className={styles.copy}>
      <div className={styles.header}>{stepDescription}</div>
      <div className={styles.copy1}>
        <img className={styles.image24Icon} alt="" src={imageDimensions} />
        <div className={styles.copy2}>{keplrWalletInstructions}</div>
      </div>
    </div>
  );
};

export default KeplrWalletTransferContainer;
