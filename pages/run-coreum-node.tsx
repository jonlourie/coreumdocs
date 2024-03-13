import type { NextPage } from "next";
import NavBar1 from "../components/nav-bar1";
import TypeDropdownStateExpanded from "../components/type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "../components/type-text-state-selected-siz";
import Card2 from "../components/card2";
import Card1 from "../components/card1";
import Footer1 from "../components/footer1";
import styles from "./run-coreum-node.module.css";

const RunCoreumNode: NextPage = () => {
  return (
    <div className={styles.runCoreumNode}>
      <NavBar1 />
      <main className={styles.sidebarMenuParent}>
        <div className={styles.sidebarMenu}>
          <TypeDropdownStateExpanded
            label="Overview"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="20px"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="24px"
          />
          <TypeDropdownStateExpanded
            label="Tutorials"
            iconArrow="/iconarrow-1.svg"
            typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="20px"
            typeDropdownStateExpandedBackgroundColor="#17191e"
            labelLineHeight="24px"
            labelColor="#eee"
            labelFontWeight="500"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="24px"
          />
          <div className={styles.tab}>
            <div className={styles.expandedMenu}>
              <TypeDropdownStateExpanded
                label="Get Started"
                iconArrow="/iconarrow-3@2x.png"
                typeDropdownStateExpandedPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="20px"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#868991"
                labelFontWeight="unset"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="20px"
              />
              <TypeDropdownStateExpanded
                label="Use Tokens"
                iconArrow="/iconarrow-3@2x.png"
                typeDropdownStateExpandedPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="20px"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#868991"
                labelFontWeight="unset"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="20px"
              />
              <TypeDropdownStateExpanded
                label="Integrate Coreum"
                iconArrow="/iconarrow-3@2x.png"
                typeDropdownStateExpandedPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="20px"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#868991"
                labelFontWeight="unset"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="20px"
              />
              <TypeDropdownStateExpanded
                label="Build Apps"
                iconArrow="/iconarrow-3@2x.png"
                typeDropdownStateExpandedPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="20px"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#868991"
                labelFontWeight="unset"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="20px"
              />
              <TypeDropdownStateExpanded
                label="IBC"
                iconArrow="/iconarrow-3@2x.png"
                typeDropdownStateExpandedPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="20px"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#868991"
                labelFontWeight="unset"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="20px"
              />
              <div className={styles.tab1}>
                <div className={styles.expandedMenu1}>
                  <TypeTextStateSelectedSiz
                    label="IBC Channels"
                    typeTextStateSelectedSizPadding="var(--padding-5xs) var(--padding-xs)"
                    typeTextStateSelectedSizBackgroundColor="unset"
                    typeTextStateSelectedSizWidth="unset"
                    typeTextStateSelectedSizBorder="unset"
                    typeTextStateSelectedSizOutline="unset"
                    typeTextStateSelectedSizHeight="unset"
                    typeTextStateSelectedSizFontFamily="unset"
                    typeTextStateSelectedSizFontWeight="unset"
                    typeTextStateSelectedSizFontSize="unset"
                    typeTextStateSelectedSizColor="unset"
                    typeTextStateSelectedSizMinWidth="unset"
                    typeTextStateSelectedSizAlignSelf="stretch"
                    labelFontWeight="unset"
                    labelLineHeight="20px"
                    labelColor="#868991"
                    labelDisplay="flex"
                    labelWidth="106px"
                    labelPaddingRight="16px 16px 16px 20px"
                    labelFlex="unset"
                  />
                  <TypeTextStateSelectedSiz
                    label="IBC Transfer to Osmosis Using Keplr Wallet"
                    typeTextStateSelectedSizPadding="var(--padding-5xs) var(--padding-xs)"
                    typeTextStateSelectedSizBackgroundColor="unset"
                    typeTextStateSelectedSizWidth="unset"
                    typeTextStateSelectedSizBorder="unset"
                    typeTextStateSelectedSizOutline="unset"
                    typeTextStateSelectedSizHeight="unset"
                    typeTextStateSelectedSizFontFamily="unset"
                    typeTextStateSelectedSizFontWeight="unset"
                    typeTextStateSelectedSizFontSize="unset"
                    typeTextStateSelectedSizColor="unset"
                    typeTextStateSelectedSizMinWidth="unset"
                    typeTextStateSelectedSizAlignSelf="stretch"
                    labelFontWeight="unset"
                    labelLineHeight="20px"
                    labelColor="#868991"
                    labelDisplay="inline-block"
                    labelWidth="unset"
                    labelPaddingRight="unset"
                    labelFlex="1"
                  />
                  <TypeTextStateSelectedSiz
                    label="IBC Smart Contract Call Tutorial"
                    typeTextStateSelectedSizPadding="var(--padding-5xs) var(--padding-xs)"
                    typeTextStateSelectedSizBackgroundColor="unset"
                    typeTextStateSelectedSizWidth="unset"
                    typeTextStateSelectedSizBorder="unset"
                    typeTextStateSelectedSizOutline="unset"
                    typeTextStateSelectedSizHeight="unset"
                    typeTextStateSelectedSizFontFamily="unset"
                    typeTextStateSelectedSizFontWeight="unset"
                    typeTextStateSelectedSizFontSize="unset"
                    typeTextStateSelectedSizColor="unset"
                    typeTextStateSelectedSizMinWidth="unset"
                    typeTextStateSelectedSizAlignSelf="stretch"
                    labelFontWeight="unset"
                    labelLineHeight="20px"
                    labelColor="#868991"
                    labelDisplay="inline-block"
                    labelWidth="unset"
                    labelPaddingRight="unset"
                    labelFlex="1"
                  />
                  <TypeTextStateSelectedSiz
                    label="IBC WASM Transfer Tutorial"
                    typeTextStateSelectedSizPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
                    typeTextStateSelectedSizBackgroundColor="unset"
                    typeTextStateSelectedSizWidth="unset"
                    typeTextStateSelectedSizBorder="unset"
                    typeTextStateSelectedSizOutline="unset"
                    typeTextStateSelectedSizHeight="unset"
                    typeTextStateSelectedSizFontFamily="unset"
                    typeTextStateSelectedSizFontWeight="unset"
                    typeTextStateSelectedSizFontSize="unset"
                    typeTextStateSelectedSizColor="unset"
                    typeTextStateSelectedSizMinWidth="unset"
                    typeTextStateSelectedSizAlignSelf="unset"
                    labelFontWeight="unset"
                    labelLineHeight="20px"
                    labelColor="#868991"
                    labelDisplay="inline-block"
                    labelWidth="unset"
                    labelPaddingRight="unset"
                    labelFlex="unset"
                  />
                  <TypeTextStateSelectedSiz
                    label="IBC Transfer Using CLI"
                    typeTextStateSelectedSizPadding="var(--padding-5xs) 41px var(--padding-5xs) var(--padding-xs)"
                    typeTextStateSelectedSizBackgroundColor="unset"
                    typeTextStateSelectedSizWidth="unset"
                    typeTextStateSelectedSizBorder="unset"
                    typeTextStateSelectedSizOutline="unset"
                    typeTextStateSelectedSizHeight="unset"
                    typeTextStateSelectedSizFontFamily="unset"
                    typeTextStateSelectedSizFontWeight="unset"
                    typeTextStateSelectedSizFontSize="unset"
                    typeTextStateSelectedSizColor="unset"
                    typeTextStateSelectedSizMinWidth="unset"
                    typeTextStateSelectedSizAlignSelf="unset"
                    labelFontWeight="unset"
                    labelLineHeight="20px"
                    labelColor="#868991"
                    labelDisplay="inline-block"
                    labelWidth="unset"
                    labelPaddingRight="unset"
                    labelFlex="unset"
                  />
                </div>
              </div>
            </div>
          </div>
          <TypeDropdownStateExpanded
            label="Modules"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="20px"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="24px"
          />
          <TypeDropdownStateExpanded
            label="Validator"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="20px"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="24px"
          />
          <TypeDropdownStateExpanded
            label="API"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="20px"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="24px"
          />
          <TypeDropdownStateExpanded
            label="Tools/Ecosystem"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="20px"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="24px"
          />
          <TypeDropdownStateExpanded
            label="Help"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="20px"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="24px"
          />
          <TypeDropdownStateExpanded
            label="Bug Bounty"
            iconArrow="/iconlink-11.svg"
            typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="4px"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="24px"
          />
          <div className={styles.scrollbar}>
            <div className={styles.active} />
          </div>
        </div>
        <div className={styles.dividerParent}>
          <div className={styles.divider} />
          <div className={styles.divider1} />
        </div>
        <section className={styles.dataProtectorParent}>
          <div className={styles.dataProtector}>
            <div className={styles.dataSharer}>
              <div className={styles.dataReceiver}>
                <div className={styles.dataSender}>
                  <h1 className={styles.coreumTutorials}>Coreum Tutorials</h1>
                  <div className={styles.card}>
                    <h3 className={styles.getStarted}>Get started</h3>
                    <div className={styles.cards}>
                      <Card2 />
                      <input
                        className={styles.card1}
                        placeholder="Set up CLI Network Variables"
                        type="text"
                      />
                      <input
                        className={styles.card2}
                        placeholder="Install cored"
                        type="text"
                      />
                    </div>
                  </div>
                  <Card1 cLILogo="/cli-logo.svg" cLI="CLI:" />
                  <div className={styles.card3}>
                    <div className={styles.copy}>
                      <div className={styles.cliLogo}>
                        <img
                          className={styles.image25Icon}
                          loading="lazy"
                          alt=""
                          src="/image-25@2x.png"
                        />
                      </div>
                      <div className={styles.golang}>Golang:</div>
                    </div>
                    <div className={styles.cards1}>
                      <input
                        className={styles.card4}
                        placeholder="Transfer funds with Golang"
                        type="text"
                      />
                      <input
                        className={styles.card5}
                        placeholder="Create and manage my first FT with Golang"
                        type="text"
                      />
                      <button className={styles.card6}>
                        <div
                          className={styles.createAndManageMyFirstNftWrapper}
                        >
                          <div className={styles.createAndManage}>
                            Create and manage my first NFT with Golang
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className={styles.card7}>
                    <div className={styles.copy1}>
                      <img
                        className={styles.cliLogoIcon}
                        loading="lazy"
                        alt=""
                        src="/cli-logo-1@2x.png"
                      />
                      <div className={styles.tsjs}>TS/JS:</div>
                    </div>
                    <div className={styles.cards2}>
                      <input
                        className={styles.card8}
                        placeholder="Transfer funds with Typescript"
                        type="text"
                      />
                      <input
                        className={styles.card9}
                        placeholder="Using CosmJS"
                        type="text"
                      />
                      <input
                        className={styles.card10}
                        placeholder="Using coreum-js - js sdk to interact with Coreum network"
                        type="text"
                      />
                    </div>
                  </div>
                  <Card1
                    cLILogo="/cli-logo-2.svg"
                    cLI="WASM:"
                    ledgerNanoWithCLISupportA="Using CosmJS with WASM contracts"
                    propWidth="unset"
                    propWidth4="354px"
                  />
                </div>
              </div>
              <div className={styles.sidebarMenu1}>
                <div className={styles.tab2}>
                  <div className={styles.label}>Transfer funds with CLI</div>
                </div>
                <div className={styles.expandedMenu2}>
                  <div className={styles.tab3}>
                    <div className={styles.label1}>
                      Create multisig account and issue an asset
                    </div>
                  </div>
                </div>
                <div className={styles.expandedMenu3}>
                  <div className={styles.tab4}>
                    <div className={styles.label2}>
                      Grant permission to an address to perform transactions on
                      behalf of the multisig account
                    </div>
                  </div>
                </div>
                <div className={styles.expandedMenu4}>
                  <div className={styles.tab5}>
                    <div className={styles.label3}>
                      Creating and managing a Multisig using a UI instead of CLI
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.card11}>
              <h3 className={styles.useTokens}>Use Tokens</h3>
              <form className={styles.cards3}>
                <button className={styles.card12}>
                  <div className={styles.dataAggregator}>
                    <div className={styles.flare} />
                  </div>
                  <div className={styles.inputProcessor}>
                    <div className={styles.outputHandler}>
                      <div className={styles.flare1} />
                    </div>
                    <div className={styles.loopControl}>
                      <div className={styles.createAndManage1}>
                        Create and manage my first FT with CLI
                      </div>
                    </div>
                    <div className={styles.flare2} />
                  </div>
                  <div className={styles.flare3} />
                </button>
                <input
                  className={styles.card13}
                  placeholder="Create and manage my first FT with Golang"
                  type="text"
                />
                <input
                  className={styles.card14}
                  placeholder="Create and manage my first NFT with CLI"
                  type="text"
                />
                <button className={styles.card15}>
                  <div className={styles.createAndManage2}>
                    Create and manage my first NFT with Golang
                  </div>
                </button>
                <input
                  className={styles.card16}
                  placeholder="Smart FT with WASM"
                  type="text"
                />
                <input
                  className={styles.card17}
                  placeholder="Create and send FT with coreum-js"
                  type="text"
                />
              </form>
            </div>
          </div>
          <div className={styles.compositeNode}>
            <div className={styles.card18}>
              <h3 className={styles.integrateCoreum}>Integrate Coreum</h3>
              <div className={styles.cards4}>
                <Card2 />
                <input
                  className={styles.card19}
                  placeholder="Wallet integration"
                  type="text"
                />
                <input
                  className={styles.card20}
                  placeholder="Explorer API - Beta"
                  type="text"
                />
                <input
                  className={styles.card21}
                  placeholder="Gas Price"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className={styles.hashTableNode}>
            <div className={styles.card22}>
              <h3 className={styles.buildApps}>Build Apps</h3>
              <div className={styles.cards5}>
                <div className={styles.card23}>
                  <div className={styles.clusterNode}>
                    <div className={styles.flare4} />
                  </div>
                  <div className={styles.edgeNode}>
                    <div className={styles.flare5} />
                    <input
                      className={styles.pathNode}
                      placeholder="Web app"
                      type="text"
                    />
                    <div className={styles.shortestPathNode}>
                      <div className={styles.flare6} />
                    </div>
                  </div>
                  <div className={styles.bellmanFordNode}>
                    <div className={styles.flare7} />
                  </div>
                </div>
                <div className={styles.card24}>
                  <div className={styles.amm}>AMM</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.card25}>
              <h3 className={styles.ibc}>IBC</h3>
              <div className={styles.cards6}>
                <Card2 />
                <input
                  className={styles.card26}
                  placeholder="IBC User Tutorials"
                  type="text"
                />
                <input
                  className={styles.card27}
                  placeholder="IBC WASM Transfer Tutorial"
                  type="text"
                />
                <input
                  className={styles.card28}
                  placeholder="IBC CLI Tutorial"
                  type="text"
                />
                <input
                  className={styles.card29}
                  placeholder="IBC Contracts Tutorial"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className={styles.ctas}>
            <div className={styles.card30}>
              <div className={styles.copy2}>
                <div className={styles.previous}>PREVIOUS</div>
                <div className={styles.smartContracts}>Smart Contracts</div>
              </div>
            </div>
            <div className={styles.card31}>
              <div className={styles.copy3}>
                <div className={styles.next}>NEXT</div>
                <div className={styles.ibcTransferTo}>
                  IBC Transfer to Osmosis Using Keplr Wallet
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer1 luminaScreen="/lumina-screen2@2x.png" />
    </div>
  );
};

export default RunCoreumNode;
