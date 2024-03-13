import type { NextPage } from "next";
import TypeLinkStateDefault from "./type-link-state-default";
import styles from "./container-card.module.css";

export type ContainerCardType = {
  iconId?: string;
  blockchainNetworkLogo?: string;
};

const ContainerCard: NextPage<ContainerCardType> = ({
  iconId,
  blockchainNetworkLogo,
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.axelarLogoIcon} alt="" src={iconId} />
      <div className={styles.axelarParent}>
        <div className={styles.axelar}>{blockchainNetworkLogo}</div>
        <TypeLinkStateDefault
          label="Details"
          typeLinkStateDefaultAlignSelf="stretch"
          labelLineHeight="20px"
          labelColor="unset"
          labelBackground="linear-gradient(180deg, #25d695, #046c45)"
          labelWebkitBackgroundClip="unset"
          labelWebkitTextFillColor="unset"
        />
      </div>
    </div>
  );
};

export default ContainerCard;
