import type { NextPage } from "next";
import styles from "./sitemap-link.module.css";

const SitemapLink: NextPage = () => {
  return (
    <div className={styles.sitemapLink}>
      <h1 className={styles.coreumModules}>Coreum Modules</h1>
      <div className={styles.card}>
        <div className={styles.eachInstructionIs}>
          Each instruction is comprehensive and has links to all dependencies:
        </div>
        <div className={styles.cards}>
          <div className={styles.card1}>
            <div className={styles.flareWrapper}>
              <div className={styles.flare} />
            </div>
            <div className={styles.flareParent}>
              <div className={styles.flare1} />
              <input
                className={styles.socialMediaLinks}
                placeholder="Fungible Tokens"
                type="text"
              />
              <div className={styles.secondaryTabs}>
                <div className={styles.flare2} />
              </div>
            </div>
            <div className={styles.coreumModules1}>
              <div className={styles.flare3} />
            </div>
          </div>
          <input
            className={styles.card2}
            placeholder="Non-Fungible Tokens"
            type="text"
          />
          <input
            className={styles.card3}
            placeholder="Deterministic Gas"
            type="text"
          />
          <input className={styles.card4} placeholder="Fee Model" type="text" />
          <input
            className={styles.card5}
            placeholder="Cosmos Non-Fungible Tokens"
            type="text"
          />
        </div>
      </div>
      <div className={styles.ctas}>
        <div className={styles.card6}>
          <div className={styles.copy}>
            <div className={styles.previous}>PREVIOUS</div>
            <div className={styles.ibcChannels}>IBC Channels</div>
          </div>
        </div>
        <div className={styles.card7}>
          <div className={styles.copy1}>
            <div className={styles.next}>NEXT</div>
            <div className={styles.ibcSmartContract}>
              IBC Smart Contract Call Tutorial
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sidebarMenu}>
        <div className={styles.tab}>
          <div className={styles.label}>
            IBC Transfer to Osmosis Using Keplr Wallet
          </div>
        </div>
        <div className={styles.expandedMenu}>
          <div className={styles.tab1}>
            <div className={styles.label1}>1. Open Keplr Wallet</div>
          </div>
        </div>
        <div className={styles.expandedMenu1}>
          <div className={styles.tab2}>
            <div className={styles.label2}>
              2. Navigate to Advanced IBC Transaction
            </div>
          </div>
        </div>
        <div className={styles.expandedMenu2}>
          <div className={styles.tab3}>
            <div className={styles.label3}>3. Select Asset</div>
          </div>
        </div>
        <div className={styles.expandedMenu3}>
          <div className={styles.tab4}>
            <div className={styles.label4}>4. Choose Destination Chain</div>
          </div>
        </div>
        <div className={styles.expandedMenu4}>
          <div className={styles.tab5}>
            <div className={styles.label5}>5. Enter Wallet Address</div>
          </div>
        </div>
        <div className={styles.expandedMenu5}>
          <div className={styles.tab6}>
            <div className={styles.label6}>6. Enter Amount</div>
          </div>
        </div>
        <div className={styles.expandedMenu6}>
          <div className={styles.tab7}>
            <div className={styles.label7}>7. Review Transaction</div>
          </div>
        </div>
        <div className={styles.expandedMenu7}>
          <div className={styles.tab8}>
            <div className={styles.label8}>
              10. Final Transaction Confirmation
            </div>
          </div>
        </div>
        <div className={styles.expandedMenu8}>
          <div className={styles.tab9}>
            <div className={styles.label9}>11. Transaction Explorer</div>
          </div>
        </div>
        <div className={styles.expandedMenu9}>
          <div className={styles.tab10}>
            <div className={styles.label10}>12. Transaction Hash</div>
          </div>
        </div>
        <div className={styles.expandedMenu10}>
          <div className={styles.tab11}>
            <div className={styles.label11}>
              13. Explorer Transaction Messages
            </div>
          </div>
        </div>
        <div className={styles.expandedMenu11}>
          <div className={styles.tab12}>
            <div className={styles.label12}>Transfer Logs</div>
          </div>
        </div>
        <div className={styles.expandedMenu12}>
          <div className={styles.tab13}>
            <div className={styles.label13}>
              14. Verify Successful Transfer to Osmosis
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapLink;
