import type { NextPage } from "next";
import Header from "../components/header";
import SidebarMenuContainer from "../components/sidebar-menu-container";
import AccountGenerationContainer from "../components/account-generation-container";
import BottomFooter from "../components/bottom-footer";
import styles from "./faucet1.module.css";

const Faucet1: NextPage = () => {
  return (
    <div className={styles.faucet}>
      <Header />
      <div className={styles.divider} />
      <div className={styles.body}>
        <SidebarMenuContainer />
        <div className={styles.divider1} />
        <div className={styles.body1}>
          <div className={styles.content}>
            <div className={styles.introduction}>
              <div className={styles.faucet1}>Faucet</div>
              <AccountGenerationContainer />
              <div className={styles.table}>
                <div className={styles.feature}>
                  <div className={styles.value}>
                    <div className={styles.copy}>Mainnet</div>
                  </div>
                  <div className={styles.value1}>
                    <div className={styles.copy1}>Testnet</div>
                  </div>
                  <div className={styles.value2}>
                    <div className={styles.copy2}>Devnet</div>
                  </div>
                </div>
              </div>
              <div className={styles.section}>
                <div className={styles.card}>
                  <div className={styles.copy3}>
                    <div className={styles.generateFundedWallet}>
                      Generate Funded Wallet
                    </div>
                  </div>
                  <div className={styles.flare} />
                  <div className={styles.flare1} />
                  <div className={styles.flare2} />
                  <div className={styles.flare3} />
                  <img
                    className={styles.object2Icon}
                    alt=""
                    src="/object-2@2x.png"
                  />
                  <img
                    className={styles.object1Icon}
                    alt=""
                    src="/object-1@2x.png"
                  />
                  <img
                    className={styles.object3Icon}
                    alt=""
                    src="/object-3@2x.png"
                  />
                </div>
                <div className={styles.copy4}>Or</div>
                <div className={styles.input}>
                  <div className={styles.stateLayer}>
                    <div className={styles.enterWalletAddress}>
                      Enter wallet address
                    </div>
                    <div className={styles.button}>
                      <div className={styles.label}>Request Fund</div>
                      <img
                        className={styles.iconlink}
                        alt=""
                        src="/iconlink-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ctas}>
            <div className={styles.card1}>
              <div className={styles.copy5}>
                <div className={styles.previous}>PREVIOUS</div>
                <div className={styles.wallets}>Wallets</div>
              </div>
            </div>
            <div className={styles.card2}>
              <div className={styles.copy6}>
                <div className={styles.next}>NEXT</div>
                <div className={styles.blockExplorers}>Block Explorers</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider2} />
        <div className={styles.sidebarMenu}>
          <div className={styles.tab}>
            <div className={styles.label1}>Smart Tokens</div>
          </div>
          <div className={styles.expandedMenu}>
            <div className={styles.tab1}>
              <div className={styles.label2}>Features</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider3} />
      <BottomFooter imageDimensionsCode="/lumina-screen@2x.png" />
    </div>
  );
};

export default Faucet1;
