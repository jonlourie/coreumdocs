import type { NextPage } from "next";
import NavBar4 from "../components/nav-bar4";
import SidebarMenu7 from "../components/sidebar-menu7";
import Footer4 from "../components/footer4";
import styles from "./setup-network-variables2.module.css";

const SetupNetworkVariables2: NextPage = () => {
  return (
    <div className={styles.setupNetworkVariables}>
      <NavBar4
        leafNodeHeight="64px"
        propBorderTop="1.5px solid var(--shades-dark-1)"
      />
      <main className={styles.linkedList}>
        <SidebarMenu7 />
        <div className={styles.divider} />
        <section className={styles.body}>
          <div className={styles.content}>
            <div className={styles.introduction}>
              <h1 className={styles.coreumassetnft}>coreum/asset/nft</h1>
              <div className={styles.section}>
                <div className={styles.copy}>
                  <h3 className={styles.header}>authz.proto</h3>
                </div>
                <div className={styles.copy1}>
                  <div className={styles.subSection}>
                    <div className={styles.copy2}>
                      <div className={styles.nftidentifier}>NFTIdentifier</div>
                    </div>
                  </div>
                  <div className={styles.table}>
                    <div className={styles.feature}>
                      <div className={styles.rowTitle}>
                        <div className={styles.copy3}>Field</div>
                      </div>
                      <div className={styles.rowTitle1}>
                        <div className={styles.copy4}>Type</div>
                      </div>
                      <div className={styles.rowTitle2}>
                        <div className={styles.copy5}>Label</div>
                      </div>
                      <div className={styles.rowTitle3}>
                        <div className={styles.copy6}>Description</div>
                      </div>
                    </div>
                    <div className={styles.feature1}>
                      <div className={styles.value}>
                        <div className={styles.highlightCommand}>
                          <div className={styles.label}>class_id</div>
                        </div>
                      </div>
                      <div className={styles.value1}>
                        <div className={styles.copy7}>string</div>
                      </div>
                      <div className={styles.value2}>
                        <div className={styles.copy8}>repeated</div>
                      </div>
                      <div className={styles.value3}>
                        <div className={styles.copy9}>
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
                        <div className={styles.copy10}>string</div>
                      </div>
                      <div className={styles.value6}>
                        <div className={styles.copy11}>repeated</div>
                      </div>
                      <div className={styles.value7}>
                        <div className={styles.copy12}>
                          id defines the unique identification of nft
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.copy13}>
                  <div className={styles.subSection1}>
                    <div className={styles.copy14}>
                      <div className={styles.sendauthorization}>
                        SendAuthorization
                      </div>
                      <div className={styles.copy15}>
                        SendAuthorization allows the grantee to send specific
                        NFTs from the granter's account.
                      </div>
                    </div>
                  </div>
                  <div className={styles.table1}>
                    <div className={styles.feature3}>
                      <div className={styles.rowTitle4}>
                        <div className={styles.copy16}>Field</div>
                      </div>
                      <div className={styles.rowTitle5}>
                        <div className={styles.copy17}>Type</div>
                      </div>
                      <div className={styles.rowTitle6}>
                        <div className={styles.copy18}>Label</div>
                      </div>
                      <div className={styles.rowTitle7}>
                        <div className={styles.copy19}>Description</div>
                      </div>
                    </div>
                    <div className={styles.feature4}>
                      <div className={styles.value8}>
                        <div className={styles.highlightCommand2}>
                          <div className={styles.label2}>nfts</div>
                        </div>
                      </div>
                      <div className={styles.value9}>
                        <div className={styles.copy20}>NFTIdentifier</div>
                      </div>
                      <div className={styles.value10}>
                        <div className={styles.copy21}>repeated</div>
                      </div>
                      <div className={styles.value11}>
                        <div className={styles.copy22}>
                          staking_params defines staking parameters of the
                          module.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.section1}>
              <div className={styles.copy23}>
                <h3 className={styles.header1}>event.proto</h3>
              </div>
              <div className={styles.copy24}>
                <div className={styles.subSection2}>
                  <div className={styles.copy25}>
                    <div className={styles.eventaddedtoclasswhitelist}>
                      EventAddedToClassWhitelist
                    </div>
                  </div>
                </div>
                <div className={styles.table2}>
                  <div className={styles.feature5}>
                    <div className={styles.rowTitle8}>
                      <div className={styles.copy26}>Field</div>
                    </div>
                    <div className={styles.rowTitle9}>
                      <div className={styles.copy27}>Type</div>
                    </div>
                    <div className={styles.rowTitle10}>
                      <div className={styles.copy28}>Label</div>
                    </div>
                    <div className={styles.rowTitle11}>
                      <div className={styles.copy29}>Description</div>
                    </div>
                  </div>
                  <div className={styles.feature6}>
                    <div className={styles.value12}>
                      <div className={styles.highlightCommand3}>
                        <div className={styles.label3}>class_id</div>
                      </div>
                    </div>
                    <div className={styles.value13}>
                      <div className={styles.copy30}>string</div>
                    </div>
                    <div className={styles.value14}>
                      <div className={styles.copy31}>repeated</div>
                    </div>
                    <div className={styles.value15}>
                      <div className={styles.copy32}>
                        class_id defines the unique id
                      </div>
                    </div>
                  </div>
                  <div className={styles.feature7}>
                    <div className={styles.value16}>
                      <div className={styles.highlightCommand4}>
                        <div className={styles.label4}>account</div>
                      </div>
                    </div>
                    <div className={styles.value17}>
                      <div className={styles.copy33}>string</div>
                    </div>
                    <div className={styles.value18}>
                      <div className={styles.copy34}>repeated</div>
                    </div>
                    <div className={styles.value19}>
                      <div className={styles.copy35}>
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.copy36}>
                <div className={styles.subSection3}>
                  <div className={styles.copy37}>
                    <div className={styles.eventaddedtowhitelist}>
                      EventAddedToWhitelist
                    </div>
                  </div>
                </div>
                <div className={styles.table3}>
                  <div className={styles.feature8}>
                    <div className={styles.rowTitle12}>
                      <div className={styles.copy38}>Field</div>
                    </div>
                    <div className={styles.rowTitle13}>
                      <div className={styles.copy39}>Type</div>
                    </div>
                    <div className={styles.rowTitle14}>
                      <div className={styles.copy40}>Label</div>
                    </div>
                    <div className={styles.rowTitle15}>
                      <div className={styles.copy41}>Description</div>
                    </div>
                  </div>
                  <div className={styles.feature9}>
                    <div className={styles.value20}>
                      <div className={styles.highlightCommand5}>
                        <div className={styles.label5}>class_id</div>
                      </div>
                    </div>
                    <div className={styles.value21}>
                      <div className={styles.copy42}>string</div>
                    </div>
                    <div className={styles.value22}>
                      <div className={styles.copy43}>repeated</div>
                    </div>
                    <div className={styles.value23}>
                      <div className={styles.copy44}>
                        class_id defines the unique id
                      </div>
                    </div>
                  </div>
                  <div className={styles.feature10}>
                    <div className={styles.value24}>
                      <div className={styles.highlightCommand6}>
                        <div className={styles.label6}>id</div>
                      </div>
                    </div>
                    <div className={styles.value25}>
                      <div className={styles.copy45}>string</div>
                    </div>
                    <div className={styles.value26}>
                      <div className={styles.copy46}>repeated</div>
                    </div>
                    <div className={styles.value27}>
                      <div className={styles.copy47}>
                        class_id defines the unique id
                      </div>
                    </div>
                  </div>
                  <div className={styles.feature11}>
                    <div className={styles.value28}>
                      <div className={styles.highlightCommand7}>
                        <div className={styles.label7}>account</div>
                      </div>
                    </div>
                    <div className={styles.value29}>
                      <div className={styles.copy48}>string</div>
                    </div>
                    <div className={styles.value30}>
                      <div className={styles.copy49}>repeated</div>
                    </div>
                    <div className={styles.value31}>
                      <div className={styles.copy50}>
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.copy51}>
                <div className={styles.subSection4}>
                  <div className={styles.copy52}>
                    <div className={styles.eventclassfrozen}>
                      EventClassFrozen
                    </div>
                  </div>
                </div>
                <div className={styles.table4}>
                  <div className={styles.feature12}>
                    <div className={styles.rowTitle16}>
                      <div className={styles.copy53}>Field</div>
                    </div>
                    <div className={styles.rowTitle17}>
                      <div className={styles.copy54}>Type</div>
                    </div>
                    <div className={styles.rowTitle18}>
                      <div className={styles.copy55}>Label</div>
                    </div>
                    <div className={styles.rowTitle19}>
                      <div className={styles.copy56}>Description</div>
                    </div>
                  </div>
                  <div className={styles.feature13}>
                    <div className={styles.value32}>
                      <div className={styles.highlightCommand8}>
                        <div className={styles.label8}>class_id</div>
                      </div>
                    </div>
                    <div className={styles.value33}>
                      <div className={styles.copy57}>string</div>
                    </div>
                    <div className={styles.value34}>
                      <div className={styles.copy58}>repeated</div>
                    </div>
                    <div className={styles.value35}>
                      <div className={styles.copy59}>
                        class_id defines the unique id
                      </div>
                    </div>
                  </div>
                  <div className={styles.feature14}>
                    <div className={styles.value36}>
                      <div className={styles.highlightCommand9}>
                        <div className={styles.label9}>account</div>
                      </div>
                    </div>
                    <div className={styles.value37}>
                      <div className={styles.copy60}>string</div>
                    </div>
                    <div className={styles.value38}>
                      <div className={styles.copy61}>repeated</div>
                    </div>
                    <div className={styles.value39}>
                      <div className={styles.copy62}>
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.copy63}>
                <div className={styles.subSection5}>
                  <div className={styles.copy64}>
                    <div className={styles.eventclassissued}>
                      EventClassIssued
                    </div>
                  </div>
                </div>
                <div className={styles.table5}>
                  <div className={styles.feature15}>
                    <div className={styles.rowTitle20}>
                      <div className={styles.copy65}>Field</div>
                    </div>
                    <div className={styles.rowTitle21}>
                      <div className={styles.copy66}>Type</div>
                    </div>
                    <div className={styles.rowTitle22}>
                      <div className={styles.copy67}>Label</div>
                    </div>
                    <div className={styles.rowTitle23}>
                      <div className={styles.copy68}>Description</div>
                    </div>
                  </div>
                  <div className={styles.feature16}>
                    <div className={styles.value40}>
                      <div className={styles.highlightCommand10}>
                        <div className={styles.label10}>id</div>
                      </div>
                    </div>
                    <div className={styles.value41}>
                      <div className={styles.copy69}>string</div>
                    </div>
                    <div className={styles.value42}>
                      <div className={styles.copy70}>repeated</div>
                    </div>
                    <div className={styles.value43}>
                      <div className={styles.copy71}>
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                  <div className={styles.feature17}>
                    <div className={styles.value44}>
                      <div className={styles.highlightCommand11}>
                        <div className={styles.label11}>issuer</div>
                      </div>
                    </div>
                    <div className={styles.value45}>
                      <div className={styles.copy72}>string</div>
                    </div>
                    <div className={styles.value46}>
                      <div className={styles.copy73}>repeated</div>
                    </div>
                    <div className={styles.value47}>
                      <div className={styles.copy74}>
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                  <div className={styles.feature18}>
                    <div className={styles.value48}>
                      <div className={styles.highlightCommand12}>
                        <div className={styles.label12}>symbol</div>
                      </div>
                    </div>
                    <div className={styles.value49}>
                      <div className={styles.copy75}>string</div>
                    </div>
                    <div className={styles.value50}>
                      <div className={styles.copy76}>repeated</div>
                    </div>
                    <div className={styles.value51}>
                      <div className={styles.copy77}>
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                  <div className={styles.feature19}>
                    <div className={styles.value52}>
                      <div className={styles.highlightCommand13}>
                        <div className={styles.label13}>name</div>
                      </div>
                    </div>
                    <div className={styles.value53}>
                      <div className={styles.copy78}>string</div>
                    </div>
                    <div className={styles.value54}>
                      <div className={styles.copy79}>repeated</div>
                    </div>
                    <div className={styles.value55}>
                      <div className={styles.copy80}>
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                  <div className={styles.feature20}>
                    <div className={styles.value56}>
                      <div className={styles.highlightCommand14}>
                        <div className={styles.label14}>description</div>
                      </div>
                    </div>
                    <div className={styles.value57}>
                      <div className={styles.copy81}>string</div>
                    </div>
                    <div className={styles.value58}>
                      <div className={styles.copy82}>repeated</div>
                    </div>
                    <div className={styles.value59}>
                      <div className={styles.copy83}>
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                  <div className={styles.feature21}>
                    <div className={styles.value60}>
                      <div className={styles.highlightCommand15}>
                        <div className={styles.label15}>uri</div>
                      </div>
                    </div>
                    <div className={styles.value61}>
                      <div className={styles.copy84}>string</div>
                    </div>
                    <div className={styles.value62}>
                      <div className={styles.copy85}>repeated</div>
                    </div>
                    <div className={styles.value63}>
                      <div className={styles.copy86}>
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                  <div className={styles.feature22}>
                    <div className={styles.wrapperValue}>
                      <input
                        className={styles.value64}
                        placeholder="features"
                        type="text"
                      />
                      <div className={styles.highlightCommand16}>
                        <div className={styles.label16}>features</div>
                      </div>
                    </div>
                    <div className={styles.value65}>
                      <div className={styles.copy87}>ClassFeature</div>
                    </div>
                    <div className={styles.value66}>
                      <div className={styles.copy88}>repeated</div>
                    </div>
                    <div className={styles.value67}>
                      <div className={styles.copy89}>
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                  <div className={styles.feature23}>
                    <div className={styles.value68}>
                      <div className={styles.highlightCommand17}>
                        <div className={styles.label17}>royalty_rate</div>
                      </div>
                    </div>
                    <div className={styles.value69}>
                      <div className={styles.copy90}>string</div>
                    </div>
                    <div className={styles.value70}>
                      <div className={styles.copy91}>repeated</div>
                    </div>
                    <div className={styles.value71}>
                      <div className={styles.copy92}>
                        class_id defines the unique id
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.copy93}>
                <div className={styles.subSection6}>
                  <div className={styles.copy94}>
                    <div className={styles.eventclassunfrozen}>
                      EventClassUnfrozen
                    </div>
                  </div>
                </div>
                <div className={styles.table6}>
                  <div className={styles.feature24}>
                    <div className={styles.rowTitle24}>
                      <div className={styles.copy95}>Field</div>
                    </div>
                    <div className={styles.rowTitle25}>
                      <div className={styles.copy96}>Type</div>
                    </div>
                    <div className={styles.rowTitle26}>
                      <div className={styles.copy97}>Label</div>
                    </div>
                    <div className={styles.rowTitle27}>
                      <div className={styles.copy98}>Description</div>
                    </div>
                  </div>
                  <div className={styles.feature25}>
                    <div className={styles.value72}>
                      <div className={styles.highlightCommand18}>
                        <div className={styles.label18}>class_id</div>
                      </div>
                    </div>
                    <div className={styles.value73}>
                      <div className={styles.copy99}>string</div>
                    </div>
                    <div className={styles.value74}>
                      <div className={styles.copy100}>repeated</div>
                    </div>
                    <div className={styles.value75}>
                      <div className={styles.copy101}>
                        class_id defines the unique id
                      </div>
                    </div>
                  </div>
                  <div className={styles.feature26}>
                    <div className={styles.value76}>
                      <div className={styles.highlightCommand19}>
                        <div className={styles.label19}>account</div>
                      </div>
                    </div>
                    <div className={styles.value77}>
                      <div className={styles.copy102}>string</div>
                    </div>
                    <div className={styles.value78}>
                      <div className={styles.copy103}>repeated</div>
                    </div>
                    <div className={styles.value79}>
                      <div className={styles.copy104}>
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ctas}>
            <div className={styles.card}>
              <div className={styles.copy105}>
                <div className={styles.previous}>PREVIOUS</div>
                <div className={styles.ibcChannels}>IBC Channels</div>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.copy106}>
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
            <div className={styles.label20}>coreum/asset/nft</div>
          </div>
          <div className={styles.tab1}>
            <div className={styles.expandedMenu}>
              <div className={styles.tab2}>
                <div className={styles.label21}>authz.proto</div>
              </div>
              <div className={styles.tab3}>
                <div className={styles.label22}>event.proto</div>
              </div>
              <div className={styles.tab4}>
                <div className={styles.label23}>params.proto</div>
              </div>
              <div className={styles.tab5}>
                <div className={styles.label24}>query.proto</div>
              </div>
              <div className={styles.tab6}>
                <div className={styles.label25}>tx.proto</div>
              </div>
              <div className={styles.tab7}>
                <div className={styles.label26}>types.proto</div>
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

export default SetupNetworkVariables2;
