import type { NextPage } from "next";
import styles from "./coreum-logo-frame-shape.module.css";

const CoreumLogoFrameShape: NextPage = () => {
  return (
    <div className={styles.coreumLogoFrameShape}>
      <div className={styles.shapeCopyNodeShape}>
        <div className={styles.interactiveCardShape}>
          <div className={styles.collapsedMenuLabelTabInsta}>
            <h1 className={styles.runValidatorNode}>Run Validator Node</h1>
            <div className={styles.shapeLogoFrame}>
              <div className={styles.interactiveShapeShapeCopyN}>
                <div className={styles.clickableShapeCardClickable}>
                  <div className={styles.coreumIcon} />
                  <div className={styles.copy}>
                    <ul className={styles.followInstructionsInFullNo}>
                      <li className={styles.followInstructionsInFullNo1}>
                        <span className={styles.followInstructionsIn}>
                          Follow instructions in 
                        </span>
                        <span className={styles.fullNodeInstruction}>
                          full node instruction
                        </span>
                        <span>
                           first, but set the following config before you start
                          the node. These configurations will reduce the storage
                          size and in turn will make upgrades faster, and the
                          downside is that the node will not have historical
                          data, and cannot be used as a state-sync server.
                        </span>
                      </li>
                    </ul>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.checkIfCoreumNodeConfig}>
                      <span>{`(Check if   `}</span>
                      <span className={styles.coreumNodeConfig}>
                        $COREUM_NODE_CONFIG
                      </span>
                      <span className={styles.isSetitShould}>
                          is set(it should be there, if you haven't exited from
                        the beginning of installation))
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.list}>
                <div className={styles.card}>
                  <div className={styles.copy1}>
                    <div className={styles.rectangleShape}>
                      <p className={styles.p}>1</p>
                      <p className={styles.p1}>2</p>
                      <p className={styles.p2}>3</p>
                    </div>
                  </div>
                  <img
                    className={styles.dividerIcon}
                    alt=""
                    src="/divider.svg"
                  />
                  <div className={styles.copy2}>
                    <div className={styles.crudiniSetCoreumAppConfContainer}>
                      <p className={styles.crudiniSetCoreumAppConf}>
                        <span className={styles.crudini}>{` crudini `}</span>
                        <span className={styles.setCoreumAppConfig}>
                          --set $COREUM_APP_CONFIG
                        </span>
                        <span>{` state-sync snapshot-interval `}</span>
                        <span className={styles.span}>0</span>
                      </p>
                      <p className={styles.crudiniSetCoreumAppConf1}>
                        <span className={styles.crudini1}>{` crudini `}</span>
                        <span className={styles.setCoreumAppConfig1}>
                          --set $COREUM_APP_CONFIG
                        </span>
                        <span> "" pruning \"everything\"</span>
                      </p>
                      <p className={styles.crudiniSetCoreumAppConf2}>
                        <span>{` crudini `}</span>
                        <span className={styles.setCoreumAppConfig2}>
                          --set $COREUM_APP_CONFIG
                        </span>
                        <span
                          className={styles.minRetainBlocks}
                        >{` "" min-retain-blocks `}</span>
                        <span className={styles.span1}>10</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.luminaLogo}>
              <div className={styles.copy3}>
                <p className={styles.keepCoreumHomeconfignode}>
                  Keep $COREUM_HOME/config/node_key.json and
                  $COREUM_HOME/config/priv_validator_key.json files in a safe
                  place, since they can be used to recover the validator node!
                </p>
                <p className={styles.p3}>{` `}</p>
                <ul className={styles.setTheMonikerVariableToRe}>
                  <li>
                    Set the moniker variable to reuse it in the following
                    instructions.
                  </li>
                </ul>
              </div>
              <div className={styles.list1}>
                <div className={styles.card1}>
                  <div className={styles.copy4}>
                    <div className={styles.previousButton}>1</div>
                  </div>
                  <img
                    className={styles.dividerIcon1}
                    alt=""
                    src="/divider.svg"
                  />
                  <div className={styles.copy5}>
                    <div className={styles.exportMonikervalidator}>
                      <span>export</span>
                      <span className={styles.span2}>{` `}</span>
                      <span className={styles.monikervalidator}>
                        MONIKER="validator"
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.sitemapLink}>
                <div className={styles.bottomFrame} />
                <div className={styles.copy6}>
                  <ul className={styles.optionalYouCanSetWaiting}>
                    <li className={styles.optionalYouCanSetWaiting1}>
                      <span>
                        (Optional) You can set waiting window between validator
                        restart to avoid double signing. If you set this option,
                        the node will not restart if there is another node
                        running with the same key. This option will help avoid
                        double signing, and is particularly useful if you are
                        migrating your node, or are planing to run a back up
                        node. You can learn more about it 
                      </span>
                      <span className={styles.here}>here.</span>
                    </li>
                  </ul>
                  <p className={styles.blankLine1}>&nbsp;</p>
                  <p className={styles.checkIfCoreumNodeConfig1}>
                    <span className={styles.checkIf}>{`(Check if   `}</span>
                    <span className={styles.coreumNodeConfig1}>
                      $COREUM_NODE_CONFIG
                    </span>
                    <span>
                        is set(it should be there, if you haven't exited from
                      the beginning of installation))
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.list2}>
                <div className={styles.card2}>
                  <div className={styles.copy7}>
                    <div className={styles.div}>1</div>
                  </div>
                  <img
                    className={styles.dividerIcon2}
                    alt=""
                    src="/divider.svg"
                  />
                  <div className={styles.copy8}>
                    <div className={styles.crudiniSetCoreumNodeConContainer}>
                      <span className={styles.crudini2}>crudini</span>
                      <span>{` `}</span>
                      <span className={styles.setCoreumNodeConfig}>
                        --set $COREUM_NODE_CONFIG
                      </span>
                      <span>{` `}</span>
                      <span className={styles.consensusDoubleSignCheckHe}>
                        consensus double_sign_check_height
                      </span>
                      <span>{` `}</span>
                      <span className={styles.span3}>10</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.copy9}>
                <ul className={styles.initNewAccountIfYouDont}>
                  <li>
                    Init new account (if you don't have existing), which will be
                    used for validator control, delegation and staking
                    rewards/commission receiving
                  </li>
                </ul>
              </div>
              <div className={styles.list3}>
                <div className={styles.card3}>
                  <div className={styles.copy10}>
                    <div className={styles.div1}>1</div>
                  </div>
                  <img
                    className={styles.dividerIcon3}
                    alt=""
                    src="/divider.svg"
                  />
                  <div className={styles.copy11}>
                    <div className={styles.coredKeysAdd}>
                      cored keys add $MONIKER --keyring-backend os
                      --chain-id=$COREUM_CHAIN_ID
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sidebarMenu}>
          <div className={styles.tab}>
            <div className={styles.label}>{`Validator `}</div>
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
    </div>
  );
};

export default CoreumLogoFrameShape;
