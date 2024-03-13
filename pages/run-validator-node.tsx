import type { NextPage } from "next";
import NavBar3 from "../components/nav-bar3";
import SidebarMenu4 from "../components/sidebar-menu4";
import CoreumLogoFrameShape from "../components/coreum-logo-frame-shape";
import Footer3 from "../components/footer3";
import styles from "./run-validator-node.module.css";

const RunValidatorNode: NextPage = () => {
  return (
    <div className={styles.runValidatorNode}>
      <NavBar3
        leafNodeHeight="unset"
        propBorderTop="1px solid var(--shades-dark-1)"
      />
      <div className={styles.divider} />
      <main className={styles.coreumVectorLogoFrame}>
        <SidebarMenu4 />
        <div className={styles.divider1} />
        <section className={styles.nestedContainerFrame}>
          <CoreumLogoFrameShape />
          <div className={styles.ctas}>
            <div className={styles.card}>
              <div className={styles.copy}>
                <div className={styles.previous}>PREVIOUS</div>
                <div className={styles.ibcChannels}>IBC Channels</div>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.copy1}>
                <div className={styles.next}>NEXT</div>
                <div className={styles.ibcSmartContract}>
                  IBC Smart Contract Call Tutorial
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer3
        luminaScreen="/lumina-screen@2x.png"
        propBorderTop="1px solid var(--shades-dark-1)"
      />
    </div>
  );
};

export default RunValidatorNode;
