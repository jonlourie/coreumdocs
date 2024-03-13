import type { NextPage } from "next";
import NavBar3 from "../components/nav-bar3";
import SidebarMenu3 from "../components/sidebar-menu3";
import AncestorFiveTimesRemovedNo1 from "../components/ancestor-five-times-removed-no1";
import Footer3 from "../components/footer3";
import styles from "./run-coreum-node1.module.css";

const RunCoreumNode1: NextPage = () => {
  return (
    <div className={styles.runCoreumNode}>
      <NavBar3 />
      <div className={styles.divider} />
      <main className={styles.ancestorThriceRemovedNodes}>
        <SidebarMenu3 />
        <div className={styles.divider1} />
        <section className={styles.cousinFourTimesRemovedNode}>
          <AncestorFiveTimesRemovedNo1 />
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
      <Footer3 luminaScreen="/lumina-screen@2x.png" />
    </div>
  );
};

export default RunCoreumNode1;
