import type { NextPage } from "next";
import Header from "../components/header";
import SidebarMenuContainer from "../components/sidebar-menu-container";
import AccountGenerationContainer from "../components/account-generation-container";
import BottomFooter from "../components/bottom-footer";
import styles from "./faucet.module.css";

const Faucet: NextPage = () => {
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
                  <div className={styles.divider2} />
                  <div className={styles.value2}>
                    <div className={styles.copy2}>Devnet</div>
                  </div>
                </div>
              </div>
              <div className={styles.section}>
                <div className={styles.copy3}>
                  <div className={styles.copy4}>
                    <div className={styles.copy5}>
                      <p className={styles.youCanGenerateYourAddress}>
                        <span className={styles.youCanGenerateYourAddress1}>
                          <span className={styles.youCanGenerate}>
                            You can generate your address at
                          </span>
                          <span className={styles.span}> </span>
                        </span>
                        <span className={styles.walletPage}>
                          <span className={styles.walletPage1}>
                            wallet page
                          </span>
                        </span>
                        <span className={styles.andYouCan}>
                          , and you can find the list of Coreum Markets 
                        </span>
                        <span className={styles.here}>here</span>
                        <span>.</span>
                      </p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.noteCheckIf}>
                        Note: Check if EX supports withdrawal into Coreum
                        Network beforehand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ctas}>
            <div className={styles.card}>
              <div className={styles.copy6}>
                <div className={styles.previous}>PREVIOUS</div>
                <div className={styles.wallets}>Wallets</div>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.copy7}>
                <div className={styles.next}>NEXT</div>
                <div className={styles.blockExplorers}>Block Explorers</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider3} />
        <div className={styles.sidebarMenu}>
          <div className={styles.tab}>
            <div className={styles.label}>Smart Tokens</div>
          </div>
          <div className={styles.expandedMenu}>
            <div className={styles.tab1}>
              <div className={styles.label1}>Features</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider4} />
      <BottomFooter imageDimensionsCode="/lumina-screen@2x.png" />
    </div>
  );
};

export default Faucet;
