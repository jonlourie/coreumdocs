import type { NextPage } from "next";
import NavBar4 from "../components/nav-bar4";
import SidebarMenu8 from "../components/sidebar-menu8";
import Footer4 from "../components/footer4";
import styles from "./setup-network-variables3.module.css";

const SetupNetworkVariables3: NextPage = () => {
  return (
    <div className={styles.setupNetworkVariables}>
      <NavBar4
        leafNodeHeight="64px"
        propBorderTop="1.5px solid var(--shades-dark-1)"
      />
      <main className={styles.cTASCard}>
        <SidebarMenu8 />
        <div className={styles.divider} />
        <section className={styles.body}>
          <div className={styles.content}>
            <div className={styles.introduction}>
              <h1 className={styles.scalarValueTypes}>Scalar Value Types</h1>
              <div className={styles.section}>
                <div className={styles.copy}>
                  <div className={styles.table}>
                    <div className={styles.feature}>
                      <div className={styles.rowTitle}>
                        <div className={styles.copy1}>Field</div>
                      </div>
                      <div className={styles.rowTitle1}>
                        <div className={styles.copy2}>Type</div>
                      </div>
                      <div className={styles.rowTitle2}>
                        <div className={styles.copy3}>Label</div>
                      </div>
                      <div className={styles.rowTitle3}>
                        <div className={styles.copy4}>Description</div>
                      </div>
                    </div>
                    <div className={styles.feature1}>
                      <div className={styles.value}>
                        <div className={styles.highlightCommand}>
                          <div className={styles.label}>class_id</div>
                        </div>
                      </div>
                      <div className={styles.value1}>
                        <div className={styles.copy5}>string</div>
                      </div>
                      <div className={styles.value2}>
                        <div className={styles.copy6}>repeated</div>
                      </div>
                      <div className={styles.value3}>
                        <div className={styles.copy7}>
                          class_id defines the unique identifier of the nft
                          classification, similar to the contract address of
                          ERC721
                        </div>
                      </div>
                    </div>
                    <div className={styles.feature2}>
                      <div className={styles.value4}>
                        <div className={styles.highlightCommand1}>
                          <div className={styles.label1}>id</div>
                        </div>
                      </div>
                      <div className={styles.value5}>
                        <div className={styles.copy8}>string</div>
                      </div>
                      <div className={styles.value6}>
                        <div className={styles.copy9}>repeated</div>
                      </div>
                      <div className={styles.value7}>
                        <div className={styles.copy10}>
                          id defines the unique identification of nft
                        </div>
                      </div>
                    </div>
                    <div className={styles.feature3}>
                      <div className={styles.value8}>
                        <div className={styles.highlightCommand2}>
                          <div className={styles.label2}>id</div>
                        </div>
                      </div>
                      <div className={styles.value9}>
                        <div className={styles.copy11}>string</div>
                      </div>
                      <div className={styles.value10}>
                        <div className={styles.copy12}>repeated</div>
                      </div>
                      <div className={styles.value11}>
                        <div className={styles.copy13}>
                          id defines the unique identification of nft
                        </div>
                      </div>
                    </div>
                    <div className={styles.feature4}>
                      <div className={styles.value12}>
                        <div className={styles.highlightCommand3}>
                          <div className={styles.label3}>id</div>
                        </div>
                      </div>
                      <div className={styles.value13}>
                        <div className={styles.copy14}>string</div>
                      </div>
                      <div className={styles.value14}>
                        <div className={styles.copy15}>repeated</div>
                      </div>
                      <div className={styles.value15}>
                        <div className={styles.copy16}>
                          id defines the unique identification of nft
                        </div>
                      </div>
                    </div>
                    <div className={styles.feature5}>
                      <div className={styles.value16}>
                        <div className={styles.highlightCommand4}>
                          <div className={styles.label4}>id</div>
                        </div>
                      </div>
                      <div className={styles.value17}>
                        <div className={styles.copy17}>string</div>
                      </div>
                      <div className={styles.value18}>
                        <div className={styles.copy18}>repeated</div>
                      </div>
                      <div className={styles.value19}>
                        <div className={styles.copy19}>
                          id defines the unique identification of nft
                        </div>
                      </div>
                    </div>
                    <div className={styles.feature6}>
                      <div className={styles.value20}>
                        <div className={styles.highlightCommand5}>
                          <div className={styles.label5}>id</div>
                        </div>
                      </div>
                      <div className={styles.value21}>
                        <div className={styles.copy20}>string</div>
                      </div>
                      <div className={styles.value22}>
                        <div className={styles.copy21}>repeated</div>
                      </div>
                      <div className={styles.value23}>
                        <div className={styles.copy22}>
                          id defines the unique identification of nft
                        </div>
                      </div>
                    </div>
                    <div className={styles.feature7}>
                      <div className={styles.value24}>
                        <div className={styles.highlightCommand6}>
                          <div className={styles.label6}>id</div>
                        </div>
                      </div>
                      <div className={styles.value25}>
                        <div className={styles.copy23}>string</div>
                      </div>
                      <div className={styles.value26}>
                        <div className={styles.copy24}>repeated</div>
                      </div>
                      <div className={styles.value27}>
                        <div className={styles.copy25}>
                          id defines the unique identification of nft
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ctas}>
            <div className={styles.card}>
              <div className={styles.copy26}>
                <div className={styles.previous}>PREVIOUS</div>
                <div className={styles.ibcChannels}>IBC Channels</div>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.copy27}>
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
            <div className={styles.label7}>coreum/asset/nft</div>
          </div>
          <div className={styles.tab1}>
            <div className={styles.expandedMenu}>
              <div className={styles.tab2}>
                <div className={styles.label8}>authz.proto</div>
              </div>
              <div className={styles.tab3}>
                <div className={styles.label9}>event.proto</div>
              </div>
              <div className={styles.tab4}>
                <div className={styles.label10}>params.proto</div>
              </div>
              <div className={styles.tab5}>
                <div className={styles.label11}>query.proto</div>
              </div>
              <div className={styles.tab6}>
                <div className={styles.label12}>tx.proto</div>
              </div>
              <div className={styles.tab7}>
                <div className={styles.label13}>types.proto</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer4
        luminaScreen="/lumina-screen@2x.png"
        propBorderTop="1.5px solid var(--shades-dark-1)"
      />
    </div>
  );
};

export default SetupNetworkVariables3;
