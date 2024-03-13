import type { NextPage } from "next";
import Header from "../components/header";
import TypeDropdownStateExpanded from "../components/type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "../components/type-text-state-selected-siz";
import PermissionGrantContainer from "../components/permission-grant-container";
import BottomFooter from "../components/bottom-footer";
import styles from "./send-multisig-transaction.module.css";

const SendMultisigTransaction: NextPage = () => {
  return (
    <div className={styles.sendMultisigTransaction}>
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
            iconArrow="/iconarrow-1.svg"
            typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="unset"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#eee"
            labelFontWeight="500"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="unset"
          />
          <div className={styles.tab}>
            <div className={styles.expandedMenu}>
              <TypeDropdownStateExpanded
                label="Get Started"
                iconArrow="/iconarrow.svg"
                typeDropdownStateExpandedPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="unset"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#eee"
                labelFontWeight="500"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="unset"
              />
              <div className={styles.tab1}>
                <div className={styles.expandedMenu1}>
                  <TypeTextStateSelectedSiz
                    label="Setup CLI Network Variables"
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
                    label="Install Cored"
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
                  <TypeDropdownStateExpanded
                    label="CLI"
                    iconArrow="/iconarrow.svg"
                    typeDropdownStateExpandedPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
                    typeDropdownStateExpandedAlignSelf="stretch"
                    typeDropdownStateExpandedGap="unset"
                    typeDropdownStateExpandedBackgroundColor="unset"
                    labelLineHeight="20px"
                    labelColor="#eee"
                    labelFontWeight="500"
                    labelFlex="1"
                    iconArrowWidth="20px"
                    iconArrowHeight="20px"
                    iconArrowMinHeight="unset"
                  />
                  <div className={styles.tab2}>
                    <div className={styles.expandedMenu2}>
                      <TypeTextStateSelectedSiz
                        label="Transfer funds with CLI"
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
                        label="Send Multisig Transaction"
                        typeTextStateSelectedSizPadding="var(--padding-5xs) var(--padding-xs)"
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
                        labelFontWeight="500"
                        labelLineHeight="20px"
                        labelColor="#eee"
                        labelDisplay="inline-block"
                        labelWidth="unset"
                        labelPaddingRight="unset"
                        labelFlex="1"
                      />
                      <TypeTextStateSelectedSiz
                        label="Smart FT with Access Control List (ACL)"
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
                        label="Ledger Nano with CLI"
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
                    </div>
                  </div>
                  <TypeDropdownStateExpanded
                    label="Golang"
                    iconArrow="/iconarrow-3@2x.png"
                    typeDropdownStateExpandedPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
                    typeDropdownStateExpandedAlignSelf="stretch"
                    typeDropdownStateExpandedGap="unset"
                    typeDropdownStateExpandedBackgroundColor="unset"
                    labelLineHeight="20px"
                    labelColor="#868991"
                    labelFontWeight="unset"
                    labelFlex="unset"
                    iconArrowWidth="20px"
                    iconArrowHeight="20px"
                    iconArrowMinHeight="unset"
                  />
                  <TypeDropdownStateExpanded
                    label="Typescript"
                    iconArrow="/iconarrow-3@2x.png"
                    typeDropdownStateExpandedPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
                    typeDropdownStateExpandedAlignSelf="stretch"
                    typeDropdownStateExpandedGap="unset"
                    typeDropdownStateExpandedBackgroundColor="unset"
                    labelLineHeight="20px"
                    labelColor="#868991"
                    labelFontWeight="unset"
                    labelFlex="unset"
                    iconArrowWidth="20px"
                    iconArrowHeight="20px"
                    iconArrowMinHeight="unset"
                  />
                  <TypeDropdownStateExpanded
                    label="WASM"
                    iconArrow="/iconarrow-3@2x.png"
                    typeDropdownStateExpandedPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
                    typeDropdownStateExpandedAlignSelf="stretch"
                    typeDropdownStateExpandedGap="unset"
                    typeDropdownStateExpandedBackgroundColor="unset"
                    labelLineHeight="20px"
                    labelColor="#868991"
                    labelFontWeight="unset"
                    labelFlex="unset"
                    iconArrowWidth="20px"
                    iconArrowHeight="20px"
                    iconArrowMinHeight="unset"
                  />
                </div>
              </div>
              <TypeDropdownStateExpanded
                label="Use Tokens"
                iconArrow="/iconarrow-3@2x.png"
                typeDropdownStateExpandedPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="unset"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#868991"
                labelFontWeight="unset"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="unset"
              />
              <TypeDropdownStateExpanded
                label="Integrate Coreum"
                iconArrow="/iconarrow-3@2x.png"
                typeDropdownStateExpandedPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="unset"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#868991"
                labelFontWeight="unset"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="unset"
              />
              <TypeDropdownStateExpanded
                label="Build Apps"
                iconArrow="/iconarrow-3@2x.png"
                typeDropdownStateExpandedPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="unset"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#868991"
                labelFontWeight="unset"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="unset"
              />
              <TypeDropdownStateExpanded
                label="IBC"
                iconArrow="/iconarrow-3@2x.png"
                typeDropdownStateExpandedPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="unset"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#868991"
                labelFontWeight="unset"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="unset"
              />
            </div>
          </div>
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
        </div>
        <div className={styles.divider1} />
        <div className={styles.body1}>
          <div className={styles.content}>
            <div className={styles.introduction}>
              <div className={styles.sendMultisigTransaction1}>
                Send Multisig Transaction
              </div>
              <div className={styles.copy}>
                <div className={styles.copy1}>
                  <p className={styles.theSampleBelow}>
                    The sample below describes the full flow from the creation
                    of the multisig account to the tx broadcast.
                  </p>
                  <ul className={styles.followTheInstructionToInst}>
                    <li className={styles.followTheInstructionToInst1}>
                      <span>Follow the </span>
                      <span className={styles.instruction}>instruction</span>
                      <span className={styles.toInstallCored}>
                         to install cored binary.
                      </span>
                    </li>
                    <li className={styles.verifyThatNetworkVariables}>
                      <span className={styles.verifyThat}>Verify that </span>
                      <span className={styles.networkVariables}>
                        network variables
                      </span>
                      <span className={styles.areSetUp}>
                         are set up correctly.
                      </span>
                    </li>
                    <li>
                      <span className={styles.addTheKeys}>
                        Add the keys that we are going to use for the multisig.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className={styles.copy2}>
                  Option 1: generate the keys ourselves.
                </div>
                <div className={styles.list}>
                  <div className={styles.card}>
                    <div className={styles.copy3}>
                      <div className={styles.div}>
                        <p className={styles.p}>1</p>
                        <p className={styles.p1}>2</p>
                        <p className={styles.p2}>3</p>
                        <p className={styles.p3}>4</p>
                      </div>
                    </div>
                    <img
                      className={styles.dividerIcon}
                      alt=""
                      src="/divider-1.svg"
                    />
                    <div className={styles.copy4}>
                      <div className={styles.coredKeysAddContainer}>
                        <p className={styles.coredKeysAddK1CoreumChai}>
                          <span
                            className={styles.coredKeys}
                          >{`cored keys `}</span>
                          <span className={styles.add}>add</span>
                          <span className={styles.k1}>{` k1 `}</span>
                          <span>$COREUM_CHAIN_ID_ARGS</span>
                        </p>
                        <p className={styles.coredKeysAddK2CoreumChai}>
                          <span
                            className={styles.coredKeys1}
                          >{`cored keys `}</span>
                          <span className={styles.add1}>add</span>
                          <span className={styles.k2}>{` k2 `}</span>
                          <span>$COREUM_CHAIN_ID_ARGS</span>
                        </p>
                        <p className={styles.coredKeysAddK3CoreumChai}>
                          <span
                            className={styles.coredKeys2}
                          >{`cored keys `}</span>
                          <span className={styles.add2}>add</span>
                          <span className={styles.k3}>{` k3 `}</span>
                          <span>$COREUM_CHAIN_ID_ARGS</span>
                        </p>
                        <p className={styles.coredKeysAddRecipientCore}>
                          <span
                            className={styles.coredKeys3}
                          >{`cored keys `}</span>
                          <span className={styles.add3}>add</span>
                          <span
                            className={styles.recipient}
                          >{` recipient `}</span>
                          <span>$COREUM_CHAIN_ID_ARGS</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.copy5}>
                <div className={styles.copy6}>
                  Option 2: add the public keys provided by the people who are
                  going to be part of the multisig.
                </div>
                <div className={styles.list1}>
                  <div className={styles.card1}>
                    <div className={styles.copy7}>
                      <div className={styles.div1}>
                        <p className={styles.p4}>1</p>
                        <p className={styles.p5}>2</p>
                        <p className={styles.p6}>3</p>
                      </div>
                    </div>
                    <img
                      className={styles.dividerIcon1}
                      alt=""
                      src="/divider.svg"
                    />
                    <div className={styles.copy8}>
                      <div className={styles.coredKeysAddContainer1}>
                        <p className={styles.coredKeysAddK1Pubkey}>
                          <span
                            className={styles.coredKeys4}
                          >{`cored keys `}</span>
                          <span className={styles.add4}>add</span>
                          <span className={styles.k11}>{` k1 `}</span>
                          <span>{`--pubkey='{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A8kOpeBMbmri5rvLjlqN6kOuNzRVUnr2vtinCkKMmwKU"}' $COREUM_CHAIN_ID_ARGS`}</span>
                        </p>
                        <p className={styles.coredKeysAddK2Pubkey}>
                          <span
                            className={styles.coredKeys5}
                          >{`cored keys `}</span>
                          <span className={styles.add5}>add</span>
                          <span className={styles.k21}>{` k2 `}</span>
                          <span>{`--pubkey='{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"Aul+q9bj3zZTADlKbLcpmn/roDj2d0DJIHIQiyCQM8Fk"}' $COREUM_CHAIN_ID_ARGS`}</span>
                        </p>
                        <p className={styles.coredKeysAddK3Pubkey}>
                          <span
                            className={styles.coredKeys6}
                          >{`cored keys `}</span>
                          <span className={styles.add6}>add</span>
                          <span className={styles.k31}>{` k3 `}</span>
                          <span>{`--pubkey='{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A3AcsNQ+FNwnUovxN/6/sa/vVN+Lc89IksZQKpLyAQ16"}' $COREUM_CHAIN_ID_ARGS`}</span>
                        </p>
                      </div>
                    </div>
                    <img
                      className={styles.scrollbarIcon}
                      alt=""
                      src="/scrollbar@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.copy9}>
                <div className={styles.copy10}>
                  For this option, each member needs to provide the public key.
                </div>
                <div className={styles.list2}>
                  <div className={styles.card2}>
                    <div className={styles.copy11}>
                      <div className={styles.div2}>1</div>
                    </div>
                    <img
                      className={styles.dividerIcon2}
                      alt=""
                      src="/divider.svg"
                    />
                    <div className={styles.copy12}>
                      <div className={styles.coredKeysList}>
                        cored keys list
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.copy13}>
                <div className={styles.copy14}>Output example:</div>
                <div className={styles.list3}>
                  <div className={styles.card3}>
                    <div className={styles.copy15}>
                      <div className={styles.div3}>
                        <p className={styles.p7}>1</p>
                        <p className={styles.p8}>2</p>
                        <p className={styles.p9}>3</p>
                        <p className={styles.p10}>4</p>
                        <p className={styles.p11}>5</p>
                      </div>
                    </div>
                    <img
                      className={styles.dividerIcon3}
                      alt=""
                      src="/divider.svg"
                    />
                    <div className={styles.copy16}>
                      <div className={styles.nameK1TypeContainer}>
                        <p className={styles.nameK1}>- name: k1</p>
                        <p className={styles.typeLocal}>
                          <span className={styles.type}>{`  type: `}</span>
                          <span className={styles.local}>local</span>
                        </p>
                        <p className={styles.addressCore1qj7d46j56khz4ysv}>
                          {" "}
                          address: core1qj7d46j56khz4ysvvgt5elghhu6p3fxepzme7y
                        </p>
                        <p className={styles.pubkeyTypecosmoscry}>
                          <span className={styles.pubkey}>{`  pubkey: `}</span>
                          <span>{`'{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A8kOpeBMbmri5rvLjlqN6kOuNzRVUnr2vtinCkK`}</span>
                          <span className={styles.mmwku}>{`MmwKU"}'`}</span>
                        </p>
                        <p className={styles.mnemonic}> mnemonic: ""</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.copy17}>
                <div className={styles.header}>Send Staking TX with CLI</div>
                <div className={styles.copy18}>
                  <div className={styles.copy19}>
                    <ul className={styles.toStakeYourTokensWithCli}>
                      <li>
                        To stake your tokens with CLI you should
                        use staking module. Let's check available commands:
                      </li>
                    </ul>
                  </div>
                  <div className={styles.list4}>
                    <div className={styles.card4}>
                      <div className={styles.copy20}>
                        <div className={styles.div4}>
                          <p className={styles.p12}>1</p>
                          <p className={styles.p13}>2</p>
                          <p className={styles.p14}>3</p>
                          <p className={styles.p15}>4</p>
                          <p className={styles.p16}>5</p>
                          <p className={styles.p17}>6</p>
                        </div>
                      </div>
                      <img
                        className={styles.dividerIcon4}
                        alt=""
                        src="/divider.svg"
                      />
                      <div className={styles.copy21}>
                        <div className={styles.coredTxStakingContainer}>
                          <p className={styles.coredTxStakingHelp}>
                            <span>{`cored tx staking `}</span>
                            <span className={styles.help}>--help</span>
                          </p>
                          <p className={styles.createValidatorCreateNew}>
                            # create-validator create new validator initialized
                            with a self-delegation to it
                          </p>
                          <p className={styles.delegate}>
                            # delegate Delegate liquid tokens to a validator
                          </p>
                          <p className={styles.editValidator}>
                            # edit-validator edit an existing validator account
                          </p>
                          <p className={styles.redelegate}>
                            # redelegate Redelegate illiquid tokens from one
                            validator to another
                          </p>
                          <p className={styles.unbond}>
                            # unbond Unbond shares from a validator
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.copy22}>
                <div className={styles.copy23}>
                  <ul className={styles.letsDelegateSomeTokens}>
                    <li>Let's delegate some tokens:</li>
                  </ul>
                </div>
                <div className={styles.list5}>
                  <div className={styles.card5}>
                    <div className={styles.copy24}>
                      <div className={styles.div5}>
                        <p className={styles.p18}>1</p>
                        <p className={styles.p19}>2</p>
                        <p className={styles.p20}>3</p>
                        <p className={styles.p21}>4</p>
                        <p className={styles.p22}>5</p>
                        <p className={styles.p23}>6</p>
                      </div>
                    </div>
                    <img
                      className={styles.dividerIcon5}
                      alt=""
                      src="/divider.svg"
                    />
                    <div className={styles.copy25}>
                      <div className={styles.coredTxBankContainer}>
                        <p className={styles.coredTxBank}>
                          cored tx bank send my-sender-wallet
                          testcore1snn05vrzvnwy7t0g00rr7hva63hmwxuuv7nrj0
                          1000000utestcore --node=$CORED_NODE
                          --chain-id=$CHAIN_ID
                        </p>
                        <p className={styles.createValidatorCreateNew1}>
                          # create-validator create new validator initialized
                          with a self-delegation to it
                        </p>
                        <p className={styles.delegate1}>
                          # delegate Delegate liquid tokens to a validator
                        </p>
                        <p className={styles.editValidator1}>
                          # edit-validator edit an existing validator account
                        </p>
                        <p className={styles.redelegate1}>
                          # redelegate Redelegate illiquid tokens from one
                          validator to another
                        </p>
                        <p className={styles.unbond1}>
                          # unbond Unbond shares from a validator
                        </p>
                      </div>
                    </div>
                    <img
                      className={styles.scrollbarIcon1}
                      alt=""
                      src="/scrollbar@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.copy26}>
                  <ul className={styles.ifTheOutputCodeIs0GetT}>
                    <li className={styles.ifTheOutputCodeIs0GetT1}>
                      <span className={styles.ifTheOutput}>
                        If the output code is 0, get the transaction hash, go
                        to 
                      </span>
                      <span className={styles.blockExplorer}>
                        Block Explorer
                      </span>
                      <span>{` and put it into the search line. `}</span>
                    </li>
                    <li>
                      <span>
                        If output code is not 0, your transaction failed local
                        validation and was not broadcasted. Fix the problem and
                        run the command again.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <PermissionGrantContainer transactionPermissionDesc="Send Staking TX with CLI" />
          </div>
          <div className={styles.ctas}>
            <div className={styles.card6}>
              <div className={styles.copy27}>
                <div className={styles.previous}>PREVIOUS</div>
                <div className={styles.smartContracts}>Smart Contracts</div>
              </div>
            </div>
            <div className={styles.card7}>
              <div className={styles.copy28}>
                <div className={styles.next}>NEXT</div>
                <a
                  className={styles.sendMultisigTransaction2}
                  href="https://docs.coreum.dev/tutorials/multisig.html"
                  target="_blank"
                >
                  Send Multisig Transaction
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider2} />
        <div className={styles.sidebarMenu1}>
          <div className={styles.tab3}>
            <div className={styles.label}>Transfer funds with CLI</div>
          </div>
          <div className={styles.expandedMenu3}>
            <div className={styles.tab4}>
              <div className={styles.label1}>Send Staking TX with CLI</div>
            </div>
          </div>
          <div className={styles.expandedMenu4}>
            <div className={styles.tab5}>
              <div className={styles.label2}>Send Staking TX with CLI</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider3} />
      <BottomFooter imageDimensionsCode="/lumina-screen@2x.png" />
    </div>
  );
};

export default SendMultisigTransaction;
