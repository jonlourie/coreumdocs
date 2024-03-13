import type { NextPage } from "next";
import styles from "./card.module.css";

export type CardType = {
  metaverseApplications?: string;
  title?: string;
  description?: string;
};

const Card: NextPage<CardType> = ({
  metaverseApplications,
  title,
  description,
}) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.metaverseApplicationsIcon}
        loading="lazy"
        alt=""
        src={metaverseApplications}
      />
      <div className={styles.titleParent}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default Card;
