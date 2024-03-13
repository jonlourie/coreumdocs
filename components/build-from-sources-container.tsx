import type { NextPage } from "next";
import styles from "./build-from-sources-container.module.css";

export type BuildFromSourcesContainerType = {
  featureDescription?: string;
  actionDescription?: string;
  commandDescription?: string;
};

const BuildFromSourcesContainer: NextPage<BuildFromSourcesContainerType> = ({
  featureDescription,
  actionDescription,
  commandDescription,
}) => {
  return (
    <div className={styles.sidebarMenu}>
      <div className={styles.tab}>
        <div className={styles.label}>{featureDescription}</div>
      </div>
      <div className={styles.tab1}>
        <div className={styles.expandedMenu}>
          <div className={styles.tab2}>
            <div className={styles.label1}>{actionDescription}</div>
          </div>
          <div className={styles.tab3}>
            <div className={styles.label2}>{commandDescription}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildFromSourcesContainer;
