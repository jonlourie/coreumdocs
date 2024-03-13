import type { NextPage } from "next";
import NavBar4 from "../components/nav-bar4";
import SidebarMenu6 from "../components/sidebar-menu6";
import Footer4 from "../components/footer4";
import styles from "./setup-network-variables.module.css";

const SetupNetworkVariables: NextPage = () => {
  return (
    <div className={styles.setupNetworkVariables}>
      <NavBar4 />
      <main className={styles.cousinTwiceRemovedNodes}>
        <SidebarMenu6 />
        <div className={styles.divider} />
        <section className={styles.body}>
          <div className={styles.content}>
            <div className={styles.introduction}>
              <h1 className={styles.setupNetworkVariables1}>
                Setup Network Variables
              </h1>
              <div className={styles.section}>
                <div className={styles.copy}>
                  <div className={styles.copy1}>
                    <div className={styles.copy2}>
                      This document describes the command to set up the
                      environment depending on the type of network you want to
                      use.
                    </div>
                    <div className={styles.comparisonTable}>
                      <div className={styles.feature}>
                        <div className={styles.rowTitle}>
                          <div className={styles.copy3}>-</div>
                        </div>
                        <div className={styles.rowTitle1}>
                          <div className={styles.copy4}>mainnet</div>
                        </div>
                        <div className={styles.rowTitle2}>
                          <div className={styles.copy5}>testnet</div>
                        </div>
                        <div className={styles.rowTitle3}>
                          <div className={styles.copy6}>devnet</div>
                        </div>
                        <div className={styles.rowTitle4}>
                          <div className={styles.copy7}>znet (localnet)</div>
                        </div>
                      </div>
                      <div className={styles.feature1}>
                        <div className={styles.value}>
                          <div className={styles.copy8}>Chain ID</div>
                        </div>
                        <div className={styles.value1}>
                          <div className={styles.copy9}>coreum-mainnet-1</div>
                        </div>
                        <div className={styles.value2}>
                          <div className={styles.copy10}>coreum-testnet-1</div>
                        </div>
                        <div className={styles.value3}>
                          <div className={styles.copy11}>coreum-devnet-1</div>
                        </div>
                        <div className={styles.value4}>
                          <div className={styles.copy12}>coreum-devnet-1</div>
                        </div>
                      </div>
                      <div className={styles.feature2}>
                        <div className={styles.value5}>
                          <div className={styles.copy13}>Denom</div>
                        </div>
                        <div className={styles.value6}>
                          <div className={styles.copy14}>ucore</div>
                        </div>
                        <div className={styles.value7}>
                          <div className={styles.copy15}>utestcore</div>
                        </div>
                        <div className={styles.value8}>
                          <div className={styles.copy16}>udevcore</div>
                        </div>
                        <div className={styles.value9}>
                          <div className={styles.copy17}>udevcore</div>
                        </div>
                      </div>
                      <div className={styles.feature3}>
                        <div className={styles.value10}>
                          <div className={styles.copy18}>RPC URL</div>
                        </div>
                        <div className={styles.value11}>
                          <div className={styles.copy19}>
                            https://full-node.mainnet-1.coreum.dev:26657
                          </div>
                        </div>
                        <div className={styles.value12}>
                          <a
                            className={styles.copy20}
                            href="https://full-node.testnet-1.coreum.dev:26657"
                            target="_blank"
                          >
                            https://full-node.testnet-1.coreum.dev:26657
                          </a>
                        </div>
                        <div className={styles.value13}>
                          <div className={styles.copy21}>
                            https://full-node.devnet-1.coreum.dev:26657
                          </div>
                        </div>
                        <div className={styles.value14}>
                          <div className={styles.copy22}>
                            http://localhost:26657
                          </div>
                        </div>
                      </div>
                      <div className={styles.feature4}>
                        <div className={styles.value15}>
                          <div className={styles.copy23}>
                            Cosmosvisor Version
                          </div>
                        </div>
                        <div className={styles.value16}>
                          <div className={styles.copy24}>v1.5.0</div>
                        </div>
                        <div className={styles.value17}>
                          <div className={styles.copy25}>v1.5.0</div>
                        </div>
                        <div className={styles.value18}>
                          <div className={styles.copy26}>v1.5.0</div>
                        </div>
                        <div className={styles.value19}>
                          <div className={styles.copy27}>v1.5.0</div>
                        </div>
                      </div>
                      <div className={styles.feature5}>
                        <div className={styles.value20}>
                          <div className={styles.copy28}>Cored Version</div>
                        </div>
                        <div className={styles.value21}>
                          <div className={styles.copy29}>v2.0.2</div>
                        </div>
                        <div className={styles.value22}>
                          <div className={styles.copy30}>v3.0.0</div>
                        </div>
                        <div className={styles.value23}>
                          <div className={styles.copy31}>
                            <span>You can find the link to binary at </span>
                            <span className={styles.thisPage}>this page</span>
                          </div>
                        </div>
                        <div className={styles.value24}>
                          <div className={styles.copy32}>
                            Already installed via crust
                          </div>
                        </div>
                      </div>
                      <div className={styles.feature6}>
                        <div className={styles.value25}>
                          <div className={styles.copy33}>Upgrade Name</div>
                        </div>
                        <div className={styles.value26}>
                          <div className={styles.copy34}>
                            <span>{`Check the Name column `}</span>
                            <span className={styles.here}>here</span>
                          </div>
                        </div>
                        <div className={styles.value27}>
                          <div className={styles.copy35}>
                            <span>{`Check the Name column `}</span>
                            <span className={styles.here1}>here</span>
                          </div>
                        </div>
                        <div className={styles.value28}>
                          <div className={styles.copy36}>genesis</div>
                        </div>
                        <div className={styles.value29}>
                          <div className={styles.copy37}>genesis</div>
                        </div>
                      </div>
                      <div className={styles.feature7}>
                        <div className={styles.value30}>
                          <div className={styles.copy38}>
                            State Sync Servers
                          </div>
                        </div>
                        <div className={styles.value31}>
                          <div className={styles.copy39}>
                            https://full-node-californium.mainnet-1.coreum.dev:26657,https://full-node-curium.mainnet-1.coreum.dev:26657
                          </div>
                        </div>
                        <div className={styles.value32}>
                          <div className={styles.copy40}>
                            https://full-node-eris.testnet-1.coreum.dev:26657,https://full-node-pluto.testnet-1.coreum.dev:26657,https://full-node-nickel.testnet-1.coreum.dev:26657
                          </div>
                        </div>
                        <div className={styles.value33}>
                          <div className={styles.copy41}>Not supported</div>
                        </div>
                        <div className={styles.value34}>
                          <div className={styles.copy42}>Not supported</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.section1}>
              <div className={styles.copy43}>
                <div className={styles.copy44}>
                  <div className={styles.copy45}>
                    <ul className={styles.keepInMindThatOurPublic}>
                      <li className={styles.keepInMind}>
                        ⚠️ Keep in mind, that our Public RPC Node is stable, but
                        there is always a risk of DDoS attacks, and if you build
                        your own product(wallet, etc), it is recommended to rely
                        on your own RPC Node.
                      </li>
                      <li className={styles.alsoHavingOwn}>
                        ⚠️ Also, having own RPC node is recommended if you
                        frequently query the Node(for instance, for indexing),
                        since we have rate limiting there.
                      </li>
                      <li>
                        Set the chain env variables with the values
                        corresponding to the network you want to connect to,
                        from the table above.
                      </li>
                    </ul>
                  </div>
                  <div className={styles.list}>
                    <div className={styles.card}>
                      <div className={styles.copy46}>
                        <div className={styles.dataFinder}>
                          <p className={styles.p}>1</p>
                          <p className={styles.p1}>2</p>
                          <p className={styles.p2}>3</p>
                          <p className={styles.p3}>4</p>
                          <p className={styles.p4}>5</p>
                          <p className={styles.p5}>6</p>
                          <p className={styles.blankLine}>&nbsp;</p>
                          <p className={styles.p6}>7</p>
                          <p className={styles.p7}>8</p>
                          <p className={styles.blankLine1}>&nbsp;</p>
                          <p className={styles.p8}>9</p>
                          <p className={styles.blankLine2}>&nbsp;</p>
                          <p className={styles.p9}>10</p>
                          <p className={styles.p10}>11</p>
                        </div>
                      </div>
                      <img
                        className={styles.dividerIcon}
                        loading="lazy"
                        alt=""
                        src="/divider1.svg"
                      />
                      <div className={styles.copy47}>
                        <div className={styles.exportCoreumChainIdchain}>
                          <p
                            className={styles.exportCoreumChainIdchain1}
                          >{`export COREUM_CHAIN_ID="{Chain ID}"`}</p>
                          <p
                            className={styles.exportCoreumDenomdenom}
                          >{`export COREUM_DENOM="{Denom}"`}</p>
                          <p
                            className={styles.exportCoreumNoderpcUrl}
                          >{`export COREUM_NODE="{RPC URL}"`}</p>
                          <p
                            className={styles.exportCoreumCosmovisorVersi}
                          >{`export COREUM_COSMOVISOR_VERSION="{Cosmovisor version}"`}</p>
                          <p
                            className={styles.exportCoreumVersioncored}
                          >{`export COREUM_VERSION="{Cored version}"`}</p>
                          <p
                            className={styles.exportUpgradeNameupgrade}
                          >{`export UPGRADE_NAME="{Upgrade name}"`}</p>
                          <p className={styles.blankLine3}>&nbsp;</p>
                          <p className={styles.exportCoreumChainIdArgs}>
                            export
                            COREUM_CHAIN_ID_ARGS="--chain-id=$COREUM_CHAIN_ID"
                          </p>
                          <p className={styles.exportCoreumNodeArgsNod}>
                            export COREUM_NODE_ARGS="--node=$COREUM_NODE"
                          </p>
                          <p className={styles.blankLine4}>&nbsp;</p>
                          <p className={styles.exportCoreumHomehomecore}>
                            export COREUM_HOME=$HOME/.core/"$COREUM_CHAIN_ID"
                          </p>
                          <p className={styles.blankLine5}>&nbsp;</p>
                          <p className={styles.exportCoreumBinaryNamear}>
                            export COREUM_BINARY_NAME=$(arch | sed
                            s/aarch64/cored-linux-arm64/ | sed
                            s/x86_64/cored-linux-amd64/)
                          </p>
                          <p className={styles.exportCosmovisorTarNamecos}>
                            export
                            COSMOVISOR_TAR_NAME=cosmovisor-$COREUM_COSMOVISOR_VERSION-linux-$(arch
                            | sed s/aarch64/arm64/ | sed s/x86_64/amd64/).tar.gz
                          </p>
                        </div>
                      </div>
                      <img
                        className={styles.scrollbarIcon}
                        loading="lazy"
                        alt=""
                        src="/scrollbar@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.card1}>
                    <div className={styles.copy48}>
                      <div className={styles.attention}>Attention</div>
                      <div className={styles.setThoseVariables}>
                        Set those variables globally so it is automatically set
                        after starting a new terminal session.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ctas}>
            <div className={styles.card2}>
              <div className={styles.copy49}>
                <div className={styles.previous}>PREVIOUS</div>
                <div className={styles.ibcChannels}>IBC Channels</div>
              </div>
            </div>
            <div className={styles.card3}>
              <div className={styles.copy50}>
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
          <div className={styles.expandedMenu}>
            <div className={styles.tab1}>
              <div className={styles.label1}>Mainnet</div>
            </div>
          </div>
          <div className={styles.expandedMenu1}>
            <div className={styles.tab2}>
              <div className={styles.label2}>Testnet</div>
            </div>
          </div>
          <div className={styles.expandedMenu2}>
            <div className={styles.tab3}>
              <div className={styles.label3}>Devnet</div>
            </div>
          </div>
        </div>
      </main>
      <Footer4 luminaScreen="/lumina-screen@2x.png" />
    </div>
  );
};

export default SetupNetworkVariables;
