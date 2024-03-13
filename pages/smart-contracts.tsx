import type { NextPage } from "next";
import NavBar2 from "../components/nav-bar2";
import SidebarMenu1 from "../components/sidebar-menu1";
import Content from "../components/content";
import Footer2 from "../components/footer2";
import styles from "./smart-contracts.module.css";

const SmartContracts: NextPage = () => {
  return (
    <div className={styles.smartContracts}>
      <NavBar2 />
      <main className={styles.sidebar}>
        <SidebarMenu1 />
        <div className={styles.divider} />
        <section className={styles.body}>
          <Content />
          <div className={styles.ctas}>
            <div className={styles.card}>
              <div className={styles.copy}>
                <div className={styles.previous}>PREVIOUS</div>
                <div className={styles.introduction}>Introduction</div>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.copy1}>
                <div className={styles.next}>NEXT</div>
                <div className={styles.smartTokens}>Smart Tokens</div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.divider1} />
        <div className={styles.sidebarMenu}>
          <div className={styles.tab}>
            <div className={styles.label}>Smart Contracts</div>
          </div>
          <div className={styles.tab1}>
            <div className={styles.expandedMenu}>
              <div className={styles.tab2}>
                <div className={styles.label1}>CosmWasm</div>
              </div>
            </div>
            <div className={styles.expandedMenu1}>
              <div className={styles.tab3}>
                <div className={styles.label2}>Architecture</div>
              </div>
            </div>
            <div className={styles.expandedMenu2}>
              <div className={styles.tab4}>
                <div className={styles.label3}>Contract Flow</div>
              </div>
            </div>
            <div className={styles.expandedMenu3}>
              <div className={styles.tab5}>
                <div className={styles.label4}>CosmWasm Module</div>
              </div>
            </div>
            <div className={styles.expandedMenu4}>
              <div className={styles.tab6}>
                <div className={styles.label5}>Rust Language</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer2 />
    </div>
  );
};

export default SmartContracts;
