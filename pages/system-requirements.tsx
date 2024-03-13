import type { NextPage } from "next";
import NavBar3 from "../components/nav-bar3";
import SidebarMenu5 from "../components/sidebar-menu5";
import Content1 from "../components/content1";
import Footer3 from "../components/footer3";
import styles from "./system-requirements.module.css";

const SystemRequirements: NextPage = () => {
  return (
    <div className={styles.systemRequirements}>
      <NavBar3
        leafNodeHeight="unset"
        propBorderTop="1px solid var(--shades-dark-1)"
      />
      <main className={styles.cousinTwiceRemovedNodes}>
        <SidebarMenu5 />
        <div className={styles.divider} />
        <section className={styles.body}>
          <Content1 />
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
        <div className={styles.divider1} />
        <div className={styles.sidebarMenu}>
          <div className={styles.tab}>
            <div className={styles.label}>Essentials</div>
          </div>
          <div className={styles.tab1}>
            <div className={styles.expandedMenu}>
              <div className={styles.tab2}>
                <div className={styles.label1}>Mainnet</div>
              </div>
              <div className={styles.tab3}>
                <div className={styles.label2}>Testnet</div>
              </div>
              <div className={styles.tab4}>
                <div className={styles.label3}>Devnet</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer3
        luminaScreen="/lumina-screen@2x.png"
        propBorderTop="1px solid var(--shades-dark-1)"
      />
    </div>
  );
};

export default SystemRequirements;
