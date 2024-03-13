import type { NextPage } from "next";
import styles from "./card2.module.css";

export type Card2Type = {
  coreumCheatsheet?: string;
};

const Card2: NextPage<Card2Type> = ({ coreumCheatsheet }) => {
  return (
    <div className={styles.card}>
      <div className={styles.dataStream}>
        <div className={styles.flare} />
      </div>
      <div className={styles.dataMatrix}>
        <div className={styles.flare1} />
        <input
          className={styles.conditionSplitter}
          placeholder="Coreum cheatsheet"
          type="text"
        />
        <div className={styles.textParser}>
          <div className={styles.flare2} />
        </div>
      </div>
      <div className={styles.dateHandler}>
        <div className={styles.flare3} />
      </div>
    </div>
  );
};

export default Card2;
