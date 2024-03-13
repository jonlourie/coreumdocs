import type { NextPage } from "next";
import Header from "../components/header";
import TypeDropdownStateExpanded from "../components/type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "../components/type-text-state-selected-siz";
import SmartContractContainer from "../components/smart-contract-container";
import FinancialInstitutionContainer from "../components/financial-institution-container";
import ISOConfirmationContainer from "../components/i-s-o-confirmation-container";
import BottomFooter from "../components/bottom-footer";
import styles from "./apps.module.css";

const Apps: NextPage = () => {
  return (
    <div className={styles.apps}>
      <Header />
      <div className={styles.divider} />
      <div className={styles.body}>
        <div className={styles.sidebarMenu}>
          <TypeDropdownStateExpanded
            label="Overview"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="unset"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="unset"
          />
          <TypeDropdownStateExpanded
            label="Tutorials"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="unset"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="unset"
          />
          <TypeDropdownStateExpanded
            label="Modules"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="unset"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="unset"
          />
          <TypeDropdownStateExpanded
            label="Validator"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="unset"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="unset"
          />
          <TypeDropdownStateExpanded
            label="API"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="unset"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="unset"
          />
          <TypeDropdownStateExpanded
            label="Tools/Ecosystem"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="unset"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="unset"
          />
          <TypeTextStateSelectedSiz
            label="Apps"
            typeTextStateSelectedSizPadding="8px 12px"
            typeTextStateSelectedSizBackgroundColor="#17191e"
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
            labelLineHeight="24px"
            labelColor="#eee"
            labelDisplay="inline-block"
            labelWidth="unset"
            labelPaddingRight="unset"
            labelFlex="unset"
          />
          <TypeDropdownStateExpanded
            label="Help"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="unset"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="unset"
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
            iconArrowMinHeight="unset"
          />
          <div className={styles.scrollbar}>
            <div className={styles.active} />
          </div>
        </div>
        <div className={styles.divider1} />
        <div className={styles.body1}>
          <div className={styles.content}>
            <div className={styles.introduction}>
              <div className={styles.coreumTools}>Coreum Tools</div>
              <div className={styles.section}>
                <div className={styles.copy}>
                  <div className={styles.copy1}>
                    <div className={styles.copy2}>
                      Here is a list of our tools that was developed for our
                      developers in the community
                    </div>
                  </div>
                </div>
                <div className={styles.cards}>
                  <div className={styles.card}>
                    <div className={styles.img}>
                      <div className={styles.leftNavigationParent}>
                        <img
                          className={styles.leftNavigationIcon}
                          alt=""
                          src="/left-navigation.svg"
                        />
                        <div className={styles.groupParent}>
                          <div className={styles.rectangleParent}>
                            <div className={styles.groupChild} />
                            <div className={styles.groupItem} />
                            <div className={styles.groupContainer}>
                              <div className={styles.validatorsParent}>
                                <div className={styles.validators}>
                                  Validators
                                </div>
                                <div className={styles.div}>100</div>
                              </div>
                              <div className={styles.votingPowerParent}>
                                <div className={styles.votingPower}>
                                  Voting Power
                                </div>
                                <div className={styles.div1}>164,882,263</div>
                              </div>
                              <div className={styles.votingPowerGroup}>
                                <div className={styles.votingPower1}>
                                  Voting Power %
                                </div>
                                <div className={styles.div2}>99.99%</div>
                              </div>
                              <div className={styles.totalVotingPowerParent}>
                                <div className={styles.totalVotingPower}>
                                  Total Voting Power
                                </div>
                                <div className={styles.div3}>164,882,297</div>
                              </div>
                            </div>
                            <div className={styles.onlineVotingPower}>
                              Online Voting Power
                            </div>
                            <div className={styles.groupDiv}>
                              <img
                                className={styles.groupInner}
                                alt=""
                                src="/group-8516.svg"
                              />
                              <div className={styles.parent}>
                                <div className={styles.div4}>
                                  <span>
                                    <span className={styles.span}>
                                      272,513.54
                                    </span>
                                  </span>
                                  <span className={styles.span1}>
                                    <span>{` `}</span>
                                    <span>/ 500,000.00</span>
                                  </span>
                                </div>
                                <div className={styles.title}>99.99%</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.rectangleGroup}>
                            <div className={styles.rectangleDiv} />
                            <img
                              className={styles.frameIcon}
                              alt=""
                              src="/frame-6053.svg"
                            />
                            <div className={styles.coreParent}>
                              <div className={styles.core}>
                                <span
                                  className={styles.span2}
                                >{`834,608,353 `}</span>
                                <span className={styles.core1}>CORE</span>
                              </div>
                              <div className={styles.unbondedParent}>
                                <div className={styles.unbonded}>Unbonded</div>
                                <div className={styles.ellipseDiv} />
                              </div>
                            </div>
                            <div className={styles.groupParent1}>
                              <div className={styles.bondedParent}>
                                <div className={styles.bonded}>Bonded</div>
                                <div className={styles.groupChild1} />
                              </div>
                              <div className={styles.core2}>
                                <span
                                  className={styles.span3}
                                >{`164,882,297 `}</span>
                                <span className={styles.core3}>CORE</span>
                              </div>
                            </div>
                            <div className={styles.tokenomics}>Tokenomics</div>
                            <div className={styles.wrapperUnionParent}>
                              <div className={styles.wrapperUnion}>
                                <img
                                  className={styles.unionIcon}
                                  alt=""
                                  src="/union.svg"
                                />
                              </div>
                              <div className={styles.div5}>75%</div>
                            </div>
                            <div className={styles.unionParent}>
                              <img
                                className={styles.unionIcon1}
                                alt=""
                                src="/union@2x.png"
                              />
                              <div className={styles.div6}>25%</div>
                            </div>
                          </div>
                          <div className={styles.rectangleContainer}>
                            <div className={styles.groupChild2} />
                            <div className={styles.heightParent}>
                              <div className={styles.height}>Height</div>
                              <div className={styles.div7}>961</div>
                            </div>
                            <div className={styles.proposerParent}>
                              <div className={styles.proposer}>Proposer</div>
                              <div className={styles.proposer1}>
                                <div className={styles.name}>
                                  Rockaway Blockc...
                                </div>
                                <img
                                  className={styles.profilePicIcon}
                                  alt=""
                                  src="/profile-pic@2x.png"
                                />
                              </div>
                            </div>
                            <div className={styles.consensus}>Consensus</div>
                            <div className={styles.frame}>
                              <img
                                className={styles.frameChild}
                                alt=""
                                src="/group-8897.svg"
                              />
                              <div className={styles.step1}>Step 1</div>
                              <div className={styles.round1}>Round 1</div>
                            </div>
                          </div>
                          <div className={styles.latestBlock}>
                            <div className={styles.background} />
                            <img
                              className={styles.headerBackgroundIcon}
                              alt=""
                              src="/header-background.svg"
                            />
                            <div className={styles.time}>
                              <div className={styles.time7}>11m ago</div>
                              <div className={styles.time6}>12m ago</div>
                              <div className={styles.time5}>11m ago</div>
                              <div className={styles.time4}>10m ago</div>
                              <div className={styles.time3}>2m ago</div>
                              <div className={styles.time2}>1m ago</div>
                              <div className={styles.time1}>9s ago</div>
                              <div className={styles.timeColumnHeader}>
                                Time
                              </div>
                            </div>
                            <div className={styles.txs}>
                              <div className={styles.txs7}>0</div>
                              <div className={styles.txs6}>0</div>
                              <div className={styles.txs5}>0</div>
                              <div className={styles.txs4}>0</div>
                              <div className={styles.txs3}>0</div>
                              <div className={styles.txs2}>0</div>
                              <div className={styles.txs1}>0</div>
                              <div className={styles.txsColumnHeader}>Txs</div>
                            </div>
                            <div className={styles.hash}>
                              <div className={styles.hash7}>
                                {" "}
                                270AA7...6B6B4
                              </div>
                              <div className={styles.hash6}>498D1A...7F1B0</div>
                              <div className={styles.hash5}>B672CF...D8206</div>
                              <div className={styles.hash4}>6D7DD0...E6C4A</div>
                              <div className={styles.hash3}>A95F46...A0603</div>
                              <div className={styles.hash2}>8C7BD2...56941</div>
                              <div className={styles.hash1}>6F2A68...8EEF7</div>
                              <div className={styles.hashColumnHeader}>
                                Hash
                              </div>
                            </div>
                            <div className={styles.proposer7}>
                              <div className={styles.name1}>AI Art</div>
                              <img
                                className={styles.profilePicIcon1}
                                alt=""
                                src="/profile-pic@2x.png"
                              />
                            </div>
                            <div className={styles.proposer6}>
                              <div className={styles.hackerDrawerParent}>
                                <div className={styles.hackerDrawer}>
                                  Hacker Drawer
                                </div>
                                <img
                                  className={styles.maskGroupIcon}
                                  alt=""
                                  src="/mask-group@2x.png"
                                />
                              </div>
                            </div>
                            <div className={styles.proposer5}>
                              <div className={styles.name2}>GreeK_GOD</div>
                              <img
                                className={styles.profilePicIcon2}
                                alt=""
                                src="/profile-pic@2x.png"
                              />
                            </div>
                            <div className={styles.proposer4}>
                              <div className={styles.name3}>
                                Modern Art of Th...
                              </div>
                              <img
                                className={styles.profilePicIcon3}
                                alt=""
                                src="/profile-pic@2x.png"
                              />
                            </div>
                            <div className={styles.proposer3}>
                              <div className={styles.name4}>Abstractiozzzz</div>
                              <img
                                className={styles.profilePicIcon4}
                                alt=""
                                src="/profile-pic@2x.png"
                              />
                            </div>
                            <div className={styles.proposer2}>
                              <div className={styles.name5}>Our_GalaxY</div>
                              <img
                                className={styles.profilePicIcon5}
                                alt=""
                                src="/profile-pic@2x.png"
                              />
                            </div>
                            <div className={styles.proposer11}>
                              <div className={styles.name6}>
                                Rockaway Blockc...
                              </div>
                              <img
                                className={styles.profilePicIcon6}
                                alt=""
                                src="/profile-pic@2x.png"
                              />
                            </div>
                            <div className={styles.proposerColumnHeader}>
                              Proposer
                            </div>
                            <div className={styles.height1}>
                              <div className={styles.height7}>1092</div>
                              <div className={styles.height6}>1091</div>
                              <div className={styles.height5}>1092</div>
                              <div className={styles.height4}>1093</div>
                              <div className={styles.height3}>1094</div>
                              <div className={styles.height2}>1095</div>
                              <div className={styles.height11}>1096</div>
                              <div className={styles.heightColumnHeader}>
                                Height
                              </div>
                            </div>
                            <div className={styles.seperator6} />
                            <div className={styles.seperator5} />
                            <div className={styles.seperator4} />
                            <div className={styles.seperator3} />
                            <div className={styles.seperator2} />
                            <div className={styles.seperator1} />
                            <div
                              className={styles.viewAllButton}
                            >{`View All >>`}</div>
                            <div className={styles.title1}>Latest Blocks</div>
                          </div>
                          <div className={styles.latestBlock1}>
                            <div className={styles.background1} />
                            <img
                              className={styles.iconSuccessful}
                              alt=""
                              src="/icon-successful.svg"
                            />
                            <img
                              className={styles.iconSuccessful1}
                              alt=""
                              src="/icon-successful.svg"
                            />
                            <img
                              className={styles.iconSuccessful2}
                              alt=""
                              src="/icon-successful.svg"
                            />
                            <img
                              className={styles.iconSuccessful3}
                              alt=""
                              src="/icon-successful.svg"
                            />
                            <img
                              className={styles.iconSuccessful4}
                              alt=""
                              src="/icon-successful.svg"
                            />
                            <img
                              className={styles.iconSuccessful5}
                              alt=""
                              src="/icon-successful.svg"
                            />
                            <img
                              className={styles.iconSuccessful6}
                              alt=""
                              src="/icon-successful.svg"
                            />
                            <div className={styles.seperator61} />
                            <div className={styles.seperator51} />
                            <div className={styles.seperator41} />
                            <div className={styles.seperator31} />
                            <div className={styles.seperator21} />
                            <div className={styles.seperator11} />
                            <img
                              className={styles.headerBackgroundIcon1}
                              alt=""
                              src="/header-background.svg"
                            />
                            <div className={styles.time8}>
                              <div className={styles.time71}>35m ago</div>
                              <div className={styles.time61}>32m ago</div>
                              <div className={styles.time51}>31m ago</div>
                              <div className={styles.time41}>30m ago</div>
                              <div className={styles.time31}>21m ago</div>
                              <div className={styles.time21}>17m ago</div>
                              <div className={styles.time11}>15m ago</div>
                              <div className={styles.timeColumnHeader1}>
                                Time
                              </div>
                            </div>
                            <div className={styles.time9}>
                              <div className={styles.time72}>
                                <span>{`XXX `}</span>
                                <span className={styles.core4}>CORE</span>
                              </div>
                              <div className={styles.time62}>
                                <span>{`XXX `}</span>
                                <span className={styles.core5}>CORE</span>
                              </div>
                              <div className={styles.time52}>
                                <span>{`XXX `}</span>
                                <span className={styles.core6}>CORE</span>
                              </div>
                              <div className={styles.time42}>
                                <span>{`XXX `}</span>
                                <span className={styles.core7}>CORE</span>
                              </div>
                              <div className={styles.time32}>
                                <span>{`XXX `}</span>
                                <span className={styles.core8}>CORE</span>
                              </div>
                              <div className={styles.time22}>
                                <span>{`XXX `}</span>
                                <span className={styles.core9}>CORE</span>
                              </div>
                              <div className={styles.time12}>
                                <span>{`XXX `}</span>
                                <span className={styles.core10}>CORE</span>
                              </div>
                              <div className={styles.timeColumnHeader2}>
                                Amount
                              </div>
                            </div>
                            <div className={styles.hash8}>
                              <div className={styles.hash71}>
                                118C0DDCC7A5D80...2DD94{" "}
                              </div>
                              <div className={styles.hash61}>
                                44BC8E9CE704D6E...83DDD{" "}
                              </div>
                              <div className={styles.hash51}>
                                6FE2CC540D952FE...0DE6C{" "}
                              </div>
                              <div className={styles.hash41}>
                                C81639115354A37...A4522{" "}
                              </div>
                              <div className={styles.hash31}>
                                8990BCBF652C6DB...E2822
                              </div>
                              <div className={styles.hash21}>
                                EFA60D747EB5D78...13666
                              </div>
                              <div className={styles.hash11}>
                                F9E5D3218498934...1E163
                              </div>
                              <div className={styles.hashColumnHeader1}>
                                Hash
                              </div>
                            </div>
                            <div className={styles.height8}>
                              <div className={styles.height71}>977</div>
                              <div className={styles.height61}>978</div>
                              <div className={styles.height51}>979</div>
                              <div className={styles.height41}>980</div>
                              <div className={styles.height31}>981</div>
                              <div className={styles.height21}>982</div>
                              <div className={styles.height12}>983</div>
                              <div className={styles.heightColumnHeader1}>
                                Height
                              </div>
                            </div>
                            <div
                              className={styles.viewAllButton1}
                            >{`View All >>`}</div>
                            <div className={styles.title2}>
                              Latest Transactions
                            </div>
                          </div>
                          <div className={styles.rectangleParent1}>
                            <div className={styles.groupChild3} />
                            <div className={styles.lineDiv} />
                            <div className={styles.groupParent2}>
                              <div className={styles.marketCapParent}>
                                <div className={styles.marketCap}>
                                  Market Cap
                                </div>
                                <div className={styles.div8}>$27,594,411</div>
                              </div>
                              <div className={styles.hVolParent}>
                                <div className={styles.hVol}>24h Vol</div>
                                <div className={styles.div9}>$120,980</div>
                              </div>
                              <div className={styles.supplyParent}>
                                <div className={styles.supply}>Supply</div>
                                <div className={styles.core11}>
                                  <span>{`100,000,000.00 `}</span>
                                  <span className={styles.core12}>CORE</span>
                                </div>
                              </div>
                              <div className={styles.aprParent}>
                                <div className={styles.apr}>APR%</div>
                                <div className={styles.div10}>0.00%</div>
                              </div>
                              <div className={styles.communityPoolParent}>
                                <div className={styles.communityPool}>
                                  Community Pool
                                </div>
                                <div className={styles.div11}>0</div>
                              </div>
                              <div className={styles.inflationParent}>
                                <div className={styles.inflation}>
                                  Inflation
                                </div>
                                <div className={styles.div12}>0</div>
                              </div>
                            </div>
                            <div className={styles.graph}>
                              <div className={styles.price}>
                                <div className={styles.div13}>0.650</div>
                                <div className={styles.div14}>0.600</div>
                                <div className={styles.div15}>0.550</div>
                                <div className={styles.div16}>0.500</div>
                              </div>
                              <div className={styles.mainGraphParent}>
                                <img
                                  className={styles.mainGraphIcon}
                                  alt=""
                                  src="/main-graph@2x.png"
                                />
                                <div className={styles.time10}>
                                  <div className={styles.div17}>08:05</div>
                                  <div className={styles.div18}>08:10</div>
                                  <div className={styles.div19}>08:15</div>
                                  <div className={styles.div20}>08:20</div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.groupParent3}>
                              <div className={styles.coreumParent}>
                                <div className={styles.coreum}>Coreum</div>
                                <img
                                  className={styles.originalIcon}
                                  alt=""
                                  src="/original.svg"
                                />
                              </div>
                              <div className={styles.group}>
                                <div className={styles.div21}>$0.5405</div>
                                <div className={styles.rectangleParent2}>
                                  <div className={styles.groupChild4} />
                                  <div className={styles.div22}>+1.24%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.rectangleParent3}>
                            <div className={styles.groupChild5} />
                            <div className={styles.latestBlock2}>
                              Latest Block
                            </div>
                            <div className={styles.div23}>$120,980</div>
                          </div>
                          <div className={styles.rectangleParent4}>
                            <div className={styles.groupChild6} />
                            <div className={styles.averageBlockTime}>
                              Average Block Time
                            </div>
                            <div className={styles.s}>6.72 s</div>
                          </div>
                          <div className={styles.rectangleParent5}>
                            <div className={styles.groupChild7} />
                            <div className={styles.activeValidators}>
                              Active Validators
                            </div>
                            <div className={styles.div24}>/ 143</div>
                            <div className={styles.div25}>100</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <SmartContractContainer
                      featureDescription="Explorer"
                      smartContractDefinitionTe="Track all transactions and accounts on the network."
                      featureDescriptionText="Try Explorer"
                      propBorderRadius="unset"
                      propGap="24px"
                      propPadding="12px 24px"
                      propGap1="8px"
                      propAlignSelf="stretch"
                    />
                    <div className={styles.flare} />
                    <div className={styles.flare1} />
                    <div className={styles.flare2} />
                    <div className={styles.flare3} />
                  </div>
                  <div className={styles.card1}>
                    <img className={styles.imgIcon} alt="" src="/img@2x.png" />
                    <SmartContractContainer
                      featureDescription="Faucet"
                      smartContractDefinitionTe="Fund your testnet and devnet account for testing purposes."
                      featureDescriptionText="Open Faucet"
                      propBorderRadius="unset"
                      propGap="24px"
                      propPadding="12px 24px"
                      propGap1="8px"
                      propAlignSelf="stretch"
                    />
                  </div>
                  <div className={styles.card2}>
                    <div className={styles.img1}>
                      <div className={styles.devPlayground}>
                        <img
                          className={styles.devPlaygroundChild}
                          alt=""
                          src="/frame-10200.svg"
                        />
                        <img
                          className={styles.screenshot20231120At421}
                          alt=""
                          src="/screenshot-20231120-at-421-2@2x.png"
                        />
                        <img
                          className={styles.logoIcon}
                          alt=""
                          src="/logo.svg"
                        />
                        <div className={styles.button}>
                          <div className={styles.stateLayer}>
                            <img
                              className={styles.iconwallet}
                              alt=""
                              src="/iconwallet@2x.png"
                            />
                            <div className={styles.connectWallet}>
                              Connect Wallet
                            </div>
                          </div>
                        </div>
                        <div className={styles.tabToggle}>
                          <div className={styles.tabToggle1}>
                            <div className={styles.baseLayer}>
                              <img
                                className={styles.iconProposals}
                                alt=""
                                src="/icon-proposals.svg"
                              />
                              <div className={styles.contractrs}>
                                contract.rs
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.dividerIcon}
                            alt=""
                            src="/divider.svg"
                          />
                          <div className={styles.tabToggle2}>
                            <div className={styles.baseLayer1}>
                              <img
                                className={styles.iconProposals1}
                                alt=""
                                src="/icon-proposals.svg"
                              />
                              <div className={styles.staters}>state.rs</div>
                            </div>
                          </div>
                          <img
                            className={styles.dividerIcon1}
                            alt=""
                            src="/divider.svg"
                          />
                          <div className={styles.tabToggle3}>
                            <div className={styles.baseLayer2}>
                              <img
                                className={styles.iconProposals2}
                                alt=""
                                src="/icon-proposals.svg"
                              />
                              <div className={styles.msgrs}>msg.rs</div>
                            </div>
                          </div>
                          <img
                            className={styles.dividerIcon2}
                            alt=""
                            src="/divider.svg"
                          />
                          <div className={styles.tabToggle4}>
                            <div className={styles.baseLayer3}>
                              <img
                                className={styles.iconProposals3}
                                alt=""
                                src="/icon-proposals.svg"
                              />
                              <div className={styles.ilbrs}>ilb.rs</div>
                            </div>
                          </div>
                          <img
                            className={styles.dividerIcon3}
                            alt=""
                            src="/divider.svg"
                          />
                          <div className={styles.tabToggle5}>
                            <div className={styles.baseLayer4}>
                              <img
                                className={styles.iconProposals4}
                                alt=""
                                src="/icon-proposals.svg"
                              />
                              <div className={styles.cargotoml}>Cargo.toml</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.button1}>
                          <div className={styles.stateLayer1}>
                            <div className={styles.smartToken}>Smart Token</div>
                            <img
                              className={styles.iconarrowInactive}
                              alt=""
                              src="/iconarrow-inactive@2x.png"
                            />
                          </div>
                        </div>
                        <div className={styles.frameParent}>
                          <div className={styles.iconButtonParent}>
                            <div className={styles.iconButton}>
                              <div className={styles.stateLayer2}>
                                <img
                                  className={styles.icon}
                                  alt=""
                                  src="/icon@2x.png"
                                />
                              </div>
                            </div>
                            <div className={styles.buttonText}>Test</div>
                          </div>
                          <div className={styles.iconButtonGroup}>
                            <div className={styles.iconButton1}>
                              <div className={styles.stateLayer3}>
                                <img
                                  className={styles.icon1}
                                  alt=""
                                  src="/icon.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.buttonText1}>Compile</div>
                          </div>
                          <div className={styles.iconButtonContainer}>
                            <div className={styles.iconButton2}>
                              <div className={styles.stateLayer4}>
                                <img
                                  className={styles.icon2}
                                  alt=""
                                  src="/icon.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.buttonText2}>Generate</div>
                          </div>
                          <div className={styles.frameDiv}>
                            <div className={styles.iconButton3}>
                              <div className={styles.stateLayer5}>
                                <img
                                  className={styles.icon3}
                                  alt=""
                                  src="/icon.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.buttonText3}>Deploy</div>
                          </div>
                          <div className={styles.iconButtonParent1}>
                            <div className={styles.iconButton4}>
                              <div className={styles.stateLayer6}>
                                <img
                                  className={styles.icon4}
                                  alt=""
                                  src="/icon.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.buttonText4}>
                              Open Terminal
                            </div>
                          </div>
                        </div>
                        <div className={styles.codeParent}>
                          <div className={styles.code}>
                            <div className={styles.code1}>Code</div>
                          </div>
                          <div className={styles.query}>
                            <div className={styles.query1}>Query</div>
                          </div>
                          <div className={styles.execute}>
                            <div className={styles.execute1}>Execute</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <SmartContractContainer
                      featureDescription="Dev Playground"
                      smartContractDefinitionTe="Interact with Coreum blockchain through our developer playground."
                      featureDescriptionText="Access playground"
                      propBorderRadius="unset"
                      propGap="24px"
                      propPadding="12px 24px"
                      propGap1="8px"
                      propAlignSelf="stretch"
                    />
                  </div>
                  <div className={styles.card3}>
                    <div className={styles.img2}>
                      <div className={styles.ui}>
                        <div className={styles.devPlayground1}>
                          <img
                            className={styles.devPlaygroundItem}
                            alt=""
                            src="/group-9793@2x.png"
                          />
                          <div className={styles.frameGroup}>
                            <FinancialInstitutionContainer
                              financialInstitutionName="Financial Institution B"
                              institutionCoordinates="/cad@2x.png"
                              transactionParticipant="Destination"
                              uniqueIdentifier="testcoreEFA60D747EB5D7sqeu1hkk666..."
                              institutionDimensions="/iconcopy-inactive@2x.png"
                              institutionId="/usd@2x.png"
                              transactionAmount="0.00"
                            />
                            <FinancialInstitutionContainer
                              financialInstitutionName="Financial Institution A"
                              institutionCoordinates="/usd@2x.png"
                              transactionParticipant="Initiator"
                              uniqueIdentifier="testcorePUL1suhgf5svhu4usrurvxzlgn54ks..."
                              institutionDimensions="/iconcopy-inactive@2x.png"
                              institutionId="/usd@2x.png"
                              transactionAmount="2,000.00"
                              propOpacity="unset"
                              propBorderRadius="7.26px"
                            />
                          </div>
                          <div className={styles.leftNavigation}>
                            <div className={styles.navigationBackground} />
                            <div className={styles.sessions}>Sessions</div>
                            <div className={styles.divider2} />
                            <div className={styles.button2}>
                              <div className={styles.stateLayer7}>
                                <img
                                  className={styles.iconadd}
                                  alt=""
                                  src="/iconadd.svg"
                                />
                                <div className={styles.newSession}>
                                  New Session
                                </div>
                              </div>
                            </div>
                            <img
                              className={styles.logoIcon1}
                              alt=""
                              src="/logo.svg"
                            />
                            <div className={styles.network}>
                              <div className={styles.iconConnectedParent}>
                                <img
                                  className={styles.iconConnected}
                                  alt=""
                                  src="/icon-connected.svg"
                                />
                                <div className={styles.network1}>
                                  <div className={styles.details}>TESTNET</div>
                                </div>
                              </div>
                              <img
                                className={styles.iconNetworkExpand}
                                alt=""
                                src="/icon-network-expand.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.selectScenario}>
                            Select Scenario
                          </div>
                          <div className={styles.frameContainer}>
                            <ISOConfirmationContainer
                              dimensions="/group-9793@2x.png"
                              dimensionsDescription="/flare-2@2x.png"
                              financialMessagingStandar="ISO + RTGS Confirmation"
                              iso20022Description="Involves leveraging the global financial messaging standard, ISO 20022, to enhance the real-time gross settlement (RTGS) process."
                            />
                            <ISOConfirmationContainer
                              dimensions="/bg@2x.png"
                              dimensionsDescription="/flare-2@2x.png"
                              financialMessagingStandar="ISO Confirmation"
                              iso20022Description="Entails utilizing the universal financial messaging standard, ISO 20022, to streamline and standardize communication in financial transactions."
                              propFlex="1"
                            />
                            <div className={styles.groupParent4}>
                              <img
                                className={styles.frameItem}
                                alt=""
                                src="/group-9793@2x.png"
                              />
                              <img
                                className={styles.maskGroupIcon1}
                                alt=""
                                src="/mask-group@2x.png"
                              />
                              <div className={styles.isoRejection}>
                                ISO Rejection
                              </div>
                              <div className={styles.involvesEmployingThe}>
                                Involves employing the standardized financial
                                messaging framework, ISO 20022, to communicate
                                and formalize the rejection of a financial
                                transaction.
                              </div>
                            </div>
                          </div>
                          <div className={styles.stateLayer8}>
                            <div className={styles.run}>Run</div>
                          </div>
                          <div className={styles.devPlaygroundInner} />
                        </div>
                        <div className={styles.shadow}>
                          <div className={styles.shadowLayer} />
                        </div>
                        <div className={styles.session}>
                          <div className={styles.left}>
                            <div className={styles.wrapper}>
                              <div className={styles.div26}>1</div>
                            </div>
                            <div className={styles.usdParent}>
                              <img
                                className={styles.usdIcon}
                                alt=""
                                src="/usd@2x.png"
                              />
                              <img
                                className={styles.cadIcon}
                                alt=""
                                src="/cad@2x.png"
                              />
                            </div>
                            <div className={styles.e791929cf}>
                              0e791929cf....
                            </div>
                          </div>
                          <img
                            className={styles.rightIcon}
                            alt=""
                            src="/right.svg"
                          />
                          <div className={styles.graph1} />
                        </div>
                        <div className={styles.shadowLayer1} />
                        <div className={styles.flare4} />
                        <div className={styles.flare5} />
                        <div className={styles.flare6} />
                        <div className={styles.destination}>
                          <div className={styles.financialInstitutionBParent}>
                            <div className={styles.financialInstitutionB}>
                              Financial Institution B
                            </div>
                            <img
                              className={styles.cadIcon1}
                              alt=""
                              src="/cad@2x.png"
                            />
                            <div className={styles.baseLayer5}>
                              <div className={styles.destination1}>
                                Destination
                              </div>
                            </div>
                          </div>
                          <div className={styles.seperator12} />
                          <div className={styles.steps}>
                            <div className={styles.frameParent1}>
                              <div className={styles.createWalletParent}>
                                <div className={styles.createWallet}>
                                  Create Wallet
                                </div>
                                <img
                                  className={styles.frameInner}
                                  alt=""
                                  src="/group-42373.svg"
                                />
                              </div>
                              <div className={styles.walletAddressParent}>
                                <div className={styles.walletAddress}>
                                  Wallet Address
                                </div>
                                <div className={styles.stateLayer9}>
                                  <div
                                    className={
                                      styles.testcoreefa60d747eb5d7sqeu1hkk
                                    }
                                  >
                                    testcoreEFA60D747EB5D7sqeu1hkk666...
                                  </div>
                                  <img
                                    className={styles.iconcopyInactive}
                                    alt=""
                                    src="/iconcopy-inactive@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.frameParent2}>
                              <div className={styles.fundWalletParent}>
                                <div className={styles.fundWallet}>
                                  Fund Wallet
                                </div>
                                <img
                                  className={styles.groupIcon}
                                  alt=""
                                  src="/group-42373.svg"
                                />
                              </div>
                              <div className={styles.frameParent3}>
                                <div className={styles.coreBalanceParent}>
                                  <div className={styles.coreBalance}>
                                    CORE Balance
                                  </div>
                                  <div className={styles.stateLayer10}>
                                    <img
                                      className={styles.originalIcon1}
                                      alt=""
                                      src="/original.svg"
                                    />
                                    <div className={styles.div27}>100.00</div>
                                  </div>
                                </div>
                                <div className={styles.usdBalanceParent}>
                                  <div className={styles.usdBalance}>
                                    USD Balance
                                  </div>
                                  <div className={styles.stateLayer11}>
                                    <img
                                      className={styles.usdIcon1}
                                      alt=""
                                      src="/usd@2x.png"
                                    />
                                    <div className={styles.div28}>0.00</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.frameParent4}>
                              <div className={styles.generateKeysParent}>
                                <div className={styles.generateKeys}>
                                  Generate Keys
                                </div>
                                <img
                                  className={styles.frameChild1}
                                  alt=""
                                  src="/group-42373.svg"
                                />
                              </div>
                              <div className={styles.frameParent5}>
                                <div className={styles.publicKeyParent}>
                                  <div className={styles.publicKey}>
                                    Public Key
                                  </div>
                                  <div className={styles.stateLayer12}>
                                    <div className={styles.viewDetails}>
                                      View Details
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.privateKeyParent}>
                                  <div className={styles.privateKey}>
                                    Private Key
                                  </div>
                                  <div className={styles.stateLayer13}>
                                    <div className={styles.viewDetails1}>
                                      View Details
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.graph2} />
                        </div>
                      </div>
                    </div>
                    <SmartContractContainer
                      featureDescription="ISO Simulator"
                      smartContractDefinitionTe="Find out how ISO 20022 can be used by financial institution with our simulator."
                      featureDescriptionText="Enter simulator"
                      propBorderRadius="unset"
                      propGap="24px"
                      propPadding="12px 24px"
                      propGap1="8px"
                      propAlignSelf="stretch"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider3} />
        <div className={styles.sidebarMenu1}>
          <div className={styles.tab}>
            <div className={styles.label}>Transfer funds with CLI</div>
          </div>
          <div className={styles.expandedMenu}>
            <div className={styles.tab1}>
              <div className={styles.label1}>
                Create multisig account and issue an asset
              </div>
            </div>
          </div>
          <div className={styles.expandedMenu1}>
            <div className={styles.tab2}>
              <div className={styles.label2}>
                Grant permission to an address to perform transactions on behalf
                of the multisig account
              </div>
            </div>
          </div>
          <div className={styles.expandedMenu2}>
            <div className={styles.tab3}>
              <div className={styles.label3}>
                Creating and managing a Multisig using a UI instead of CLI
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider4} />
      <BottomFooter imageDimensionsCode="/lumina-screen@2x.png" />
    </div>
  );
};

export default Apps;
