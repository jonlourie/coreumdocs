import type { NextPage } from "next";
import NavBar1 from "../components/nav-bar1";
import SidebarMenu from "../components/sidebar-menu";
import SmartContractContainer from "../components/smart-contract-container";
import TypeLinkStateDefault from "../components/type-link-state-default";
import Footer1 from "../components/footer1";
import styles from "./introduction.module.css";

const Introduction: NextPage = () => {
  return (
    <div className={styles.introduction}>
      <NavBar1 />
      <main className={styles.dividerFrame}>
        <SidebarMenu />
        <div className={styles.divider} />
        <section className={styles.body}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h1 className={styles.title1}>Introduction</h1>
              <div className={styles.copy}>
                <p className={styles.coreumIsA3rdGenerationLay}>
                  <span className={styles.coreum}>Coreum</span>
                  <span className={styles.isA3rdGeneration}>
                    {" "}
                    is a 3rd-generation layer-1 enterprise-grade blockchain
                    built to serve as a core infrastructure for decentralized
                    applications with ISO20022 compatibility, IBC
                    interoperability, and novel 
                  </span>
                  <span className={styles.smartTokens}>Smart Tokens</span>
                  <span>.</span>
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.coreumNetworkGuarantees}>
                  Coreum network guarantees elevated throughput, cost-effective
                  fees, and unparalleled scalability. WASM-based smart contracts
                  enable diverse use cases, while the low-latency, PoS network
                  propels rapid, secure, and modular applications, expediting
                  decentralized tech adoption in large-scale organizations.
                </p>
                <p className={styles.blankLine1}>&nbsp;</p>
                <p className={styles.coreIsTheNative}>
                  $CORE is the native token for Coreum, and is used for
                  interacting with the blockchain's various features, from the
                  consensus protocol, to the decentralised exchange, and so on.
                </p>
                <p className={styles.blankLine2}>&nbsp;</p>
                <p className={styles.anEstablishedUsecaseForAN}>
                  <span>
                    An established usecase for a network like Coreum is the 
                  </span>
                  <span className={styles.sologenicEcosystem}>
                    Sologenic Ecosystem
                  </span>
                  <span className={styles.whichCurrentlyResides}>
                    , which currently resides on the XRP Ledger.
                  </span>
                </p>
                <p className={styles.blankLine3}>&nbsp;</p>
                <p className={styles.coreumIsFast}>
                  Coreum is fast, low cost, and environmentally friendly. By
                  leveraging a Bonded Proof of Stake (BPoS) consensus mechanism,
                  Coreum is not subject to the high energy costs that other
                  blockchains are criticised for. Furthermore, Coreum's
                  scalability and throughput ensure that the operation of the
                  network does not incur the exorbitant fees that hinder other
                  blockchains.
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.copy1}>
                <h3 className={styles.header}>Features</h3>
                <div className={styles.copy2}>
                  The ecosystem natively supports next features:
                </div>
              </div>
              <SmartContractContainer
                featureDescription="Smart Contracts"
                smartContractDefinitionTe="A Smart Contract is an executable piece of code that runs on top of the blockchain to facilitate, execute and enforce an agreement between parties without the involvement of a trusted third party."
                featureDescriptionText="Details"
              />
              <div className={styles.subSection}>
                <div className={styles.copy3}>
                  <div className={styles.smartTokens1}>Smart Tokens</div>
                  <div className={styles.copy4}>
                    <p className={styles.exceptNativeTokenCoreumC}>
                      <span className={styles.exceptNativeToken}>
                        Except native token 
                      </span>
                      <span className={styles.coreum1}>$COREUM</span>
                      <span>
                        , Coreum Network also provides ability to create custom
                        tokens with next features:
                      </span>
                    </p>
                    <ul className={styles.issuanceMintingAccessCont}>
                      <li className={styles.issuanceMinting}>
                        <span>Issuance (Minting)</span>
                      </li>
                      <li className={styles.accessControlListAcl}>
                        <span>Access Control List (ACL)</span>
                      </li>
                      <li className={styles.burning}>
                        <span>Burning</span>
                      </li>
                      <li className={styles.freezingAndGlobalFreezing}>
                        <span>Freezing and Global Freezing</span>
                      </li>
                      <li className={styles.whitelisting}>
                        <span>Whitelisting</span>
                      </li>
                      <li className={styles.blacklisting}>
                        <span>Blacklisting</span>
                      </li>
                      <li className={styles.burnRate}>
                        <span>Burn Rate</span>
                      </li>
                      <li className={styles.sendFee}>
                        <span>Send Fee</span>
                      </li>
                      <li className={styles.ibcInterBlockchainCommunic}>
                        <span>
                          IBC (Inter Blockchain Communication) compatibility
                        </span>
                      </li>
                      <li>
                        <span>Smart Contract integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <TypeLinkStateDefault
                  label="Details"
                  typeLinkStateDefaultAlignSelf="unset"
                  labelLineHeight="20px"
                  labelColor="unset"
                  labelBackground="linear-gradient(180deg, #25d695, #046c45)"
                  labelWebkitBackgroundClip="unset"
                  labelWebkitTextFillColor="unset"
                />
              </div>
              <div className={styles.subSection1}>
                <div className={styles.copy5}>
                  <div className={styles.feeModel}>Fee Model</div>
                  <div className={styles.copy6}>
                    <p className={styles.coreumsFeeModel}>
                      Coreum's Fee Model introduces few novel ideas into the
                      Cosmos Ecosystem, which makes the chain more resilient to
                      load pikes and also makes it simpler to interact with the
                      chain.
                    </p>
                    <ul className={styles.gasIsDeterministicForMost}>
                      <li className={styles.gasIsDeterministic}>
                        Gas is deterministic for most of the transaction types.
                        For example, if you want to transfer tokens, you know
                        how gas amount you need, without interacting with the
                        chain in any way.
                      </li>
                      <li>
                        The gas price is determined based on the load on the
                        system. This module is responsible for calculating
                        minimum gas price required by the chain based on the
                        parameters of Fee Model.
                      </li>
                    </ul>
                  </div>
                </div>
                <TypeLinkStateDefault
                  label="Details"
                  typeLinkStateDefaultAlignSelf="unset"
                  labelLineHeight="20px"
                  labelColor="unset"
                  labelBackground="linear-gradient(180deg, #25d695, #046c45)"
                  labelWebkitBackgroundClip="unset"
                  labelWebkitTextFillColor="unset"
                />
              </div>
              <div className={styles.subSection2}>
                <div className={styles.copy7}>
                  <div className={styles.decentralisedExchangeDex}>
                    Decentralised Exchange (DEX)
                  </div>
                  <div className={styles.copy8}>
                    <p className={styles.theDexSupports}>
                      The DEX supports the trading of $CORE, as well as any
                      issued assets found on Coreum.
                    </p>
                    <p className={styles.blankLine4}>&nbsp;</p>
                    <p className={styles.theDexIs}>
                      The DEX is native to the blockchain, enabling low-fee,
                      secure, and fast trading activities.
                    </p>
                    <p className={styles.blankLine5}>&nbsp;</p>
                    <p className={styles.moreoverAnyUser}>
                      Moreover, any user is able to trade assets by choosing any
                      trading pair.
                    </p>
                    <p className={styles.blankLine6}>&nbsp;</p>
                    <p className={styles.checkCoreumsRoadmap}>
                      Check Coreum's Roadmap for DEX release date.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.subSection3}>
                <div className={styles.copy9}>
                  <div className={styles.bridges}>Bridges</div>
                  <div className={styles.copy10}>
                    <p className={styles.bridgesOrCrossChain}>
                      Bridges or Cross-chain crypto bridges are applications
                      that enable the transfer of assets between different
                      blockchains.
                    </p>
                    <p className={styles.blankLine7}>&nbsp;</p>
                    <p className={styles.coreumHasDecentralized}>
                      Coreum has Decentralized Bridge, which is provided by IBC,
                      and Centralized Bridge, which is handled by Coreum.
                    </p>
                    <p className={styles.blankLine8}>&nbsp;</p>
                    <p className={styles.checkCoreumsRoadmap1}>
                      Check Coreum's Roadmap for Bridge release date.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ctas}>
            <div className={styles.card}>
              <div className={styles.copy11}>
                <div className={styles.previous}>PREVIOUS</div>
                <div className={styles.text}>Text</div>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.copy12}>
                <div className={styles.next}>NEXT</div>
                <div className={styles.smartContracts}>Smart Contracts</div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.divider1} />
        <div className={styles.sidebarMenu}>
          <div className={styles.tab}>
            <div className={styles.label}>Introduction</div>
          </div>
          <div className={styles.expandedMenu}>
            <div className={styles.tab1}>
              <div className={styles.label1}>Features</div>
            </div>
          </div>
        </div>
      </main>
      <Footer1 luminaScreen="/lumina-screen1@2x.png" />
    </div>
  );
};

export default Introduction;
