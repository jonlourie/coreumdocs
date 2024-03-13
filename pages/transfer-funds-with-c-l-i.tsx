import type { NextPage } from "next";
import Header from "../components/header";
import TypeDropdownStateExpanded from "../components/type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "../components/type-text-state-selected-siz";
import PermissionGrantContainer from "../components/permission-grant-container";
import BuildFromSourcesContainer from "../components/build-from-sources-container";
import BottomFooter from "../components/bottom-footer";
import styles from "./transfer-funds-with-c-l-i.module.css";

const TransferFundsWithCLI: NextPage = () => {
  return (
    <div className={styles.transferFundsWithCli}>
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
                        label="Send Multisig Transaction"
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
              <div className={styles.transferFundsWith}>
                Transfer Funds With CLI
              </div>
              <div className={styles.copy}>
                <div className={styles.copy1}>
                  <p className={styles.theSectionProvides}>
                    The section provides a tutorial on how to use cored cli. You
                    can follow this flow with any other cli command.
                  </p>
                  <p className={styles.noteWeAreGoing}>
                    Note: we are going to use testnet for this example.
                  </p>
                  <ul className={styles.installCoredBinaryPointCor}>
                    <li className={styles.installCoredBinary}>
                      <span className={styles.installCoredBinary1}>
                        Install cored binary
                      </span>
                    </li>
                    <li>
                      <span className={styles.pointCoredBinaryToTestnet}>
                        Point cored binary to testnet network:
                      </span>
                    </li>
                  </ul>
                </div>
                <div className={styles.list}>
                  <div className={styles.card}>
                    <div className={styles.copy2}>
                      <div className={styles.div}>
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
                    <div className={styles.copy3}>
                      <div className={styles.exportCoredNodehttpsfull}>
                        <p className={styles.blankLine}>&nbsp;</p>
                        <p
                          className={styles.exportCoredNodehttpsfull1}
                        >{`export CORED_NODE=https://full-node.testnet-1.coreum.dev:26657 `}</p>
                        <p className={styles.exportChainIdcoreumTestne}>
                          export CHAIN_ID="coreum-testnet-1"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.copy4}>
                <div className={styles.copy5}>
                  <p className={styles.ifYouWantToTargetOtherNe}>
                    <span>
                      If you want to target other network than testnet, replace
                      it with values at 
                    </span>
                    <span className={styles.networkVariablesPage}>
                      network variables page
                    </span>
                  </p>
                  <ul className={styles.toCheckVerifyThatEverythin}>
                    <li className={styles.toCheckVerifyThatEverythin1}>
                      <span>
                        To check verify that everything is set correctly, you
                        can run cored status | jq and check network name. If you
                        don't have jq installed you can run cored status, but we
                        strongly recommend using this awesome tool 😃
                      </span>
                    </li>
                    <li className={styles.youShouldHaveFundedAccount}>
                      <span>
                        You should have funded account. If you don't have it, do
                        next:
                      </span>
                    </li>
                    <li className={styles.goToFaucetPageAndClickGe}>
                      <span>Go to </span>
                      <span className={styles.faucetPage}>faucet page</span>
                      <span className={styles.andClickGenerateFunded}>
                         and click Generate Funded Wallet.
                      </span>
                    </li>
                    <li>
                      <span className={styles.copyWalletMnemonicAndGo}>
                        Copy Wallet Mnemonic and go to your terminal and run:
                      </span>
                    </li>
                  </ul>
                </div>
                <div className={styles.list1}>
                  <div className={styles.card1}>
                    <div className={styles.copy6}>
                      <div className={styles.div1}>
                        <p className={styles.p3}>1</p>
                        <p className={styles.p4}>2</p>
                      </div>
                    </div>
                    <img
                      className={styles.dividerIcon1}
                      alt=""
                      src="/divider.svg"
                    />
                    <div className={styles.copy7}>
                      <div className={styles.coredKeysAddContainer}>
                        <p className={styles.coredKeysAddMySenderWalle}>
                          <span
                            className={styles.coredKeys}
                          >{`cored keys `}</span>
                          <span className={styles.add}>add</span>
                          <span>{` my-sender-wallet `}</span>
                          <span className={styles.recover}>--recover</span>
                          <span className={styles.chainId}> --chain-id</span>
                          <span className={styles.chainId1}>=$CHAIN_ID</span>
                        </p>
                        <p className={styles.whereMySenderWalletIs}>
                          # Where `my-sender-wallet` is your local account name.
                          It will be used later.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.copy8}>
                  <ul className={styles.enterYourMnemonicNowYouI}>
                    <li className={styles.enterYourMnemonic}>
                      Enter your mnemonic. Now you imported account into your
                      local machine!
                    </li>
                    <li>
                      Store the mnemonic in safe place, this is the only way to
                      recover your account.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.copy9}>
                <div className={styles.copy10}>
                  <ul className={styles.transferFundsLetsGoStep}>
                    <li className={styles.transferFundsLets}>
                      Transfer funds. Let's go step by step, --help command will
                      lead us through:
                    </li>
                    <li>Let's check available commands for cored:</li>
                  </ul>
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
                      <div className={styles.coredHelp}>
                        <span>{`cored `}</span>
                        <span className={styles.help}>--help</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.copy13}>
                  <ul className={styles.sendingFundsChangesTheStat}>
                    <li>
                      Sending funds changes the state of the network, so this is
                      a transaction. Let's check modules that has own
                      transactions:
                    </li>
                  </ul>
                </div>
                <div className={styles.list3}>
                  <div className={styles.card3}>
                    <div className={styles.copy14}>
                      <div className={styles.div3}>1</div>
                    </div>
                    <img
                      className={styles.dividerIcon3}
                      alt=""
                      src="/divider.svg"
                    />
                    <div className={styles.copy15}>
                      <div className={styles.coredTxHelpContainer}>
                        <span>{`cored tx `}</span>
                        <span className={styles.help1}>--help</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.copy16}>
                  <ul className={styles.bankModuleIsResponsibleFor}>
                    <li className={styles.bankModuleIsResponsible}>
                      bank module is responsible for transferring funds:
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <PermissionGrantContainer transactionPermissionDesc="Send Staking TX with CLI" />
            <PermissionGrantContainer transactionPermissionDesc="Send Staking TX with CLI" />
          </div>
          <div className={styles.ctas}>
            <div className={styles.card4}>
              <div className={styles.copy17}>
                <div className={styles.previous}>PREVIOUS</div>
                <div className={styles.smartContracts}>Smart Contracts</div>
              </div>
            </div>
            <div className={styles.card5}>
              <div className={styles.copy18}>
                <div className={styles.next}>NEXT</div>
                <a
                  className={styles.sendMultisigTransaction}
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
        <BuildFromSourcesContainer
          featureDescription="Transfer funds with CLI"
          actionDescription="Send Staking TX with CLI"
          commandDescription="Send Staking TX with CLI"
        />
      </div>
      <div className={styles.divider3} />
      <BottomFooter imageDimensionsCode="/lumina-screen@2x.png" />
    </div>
  );
};

export default TransferFundsWithCLI;
