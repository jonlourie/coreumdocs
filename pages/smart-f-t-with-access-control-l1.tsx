import type { NextPage } from "next";
import Header from "../components/header";
import TypeDropdownStateExpanded from "../components/type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "../components/type-text-state-selected-siz";
import GoCodeSkeletonContainer from "../components/go-code-skeleton-container";
import NFTMintingContainer from "../components/n-f-t-minting-container";
import ValidatorListContainer from "../components/validator-list-container";
import TokenDelegationContainer from "../components/token-delegation-container";
import BottomFooter from "../components/bottom-footer";
import styles from "./smart-f-t-with-access-control-l1.module.css";

const SmartFTWithAccessControlL1: NextPage = () => {
  return (
    <div className={styles.smartFtWithAccessControlL}>
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
                    iconArrow="/iconarrow-3@2x.png"
                    typeDropdownStateExpandedPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
                    typeDropdownStateExpandedAlignSelf="stretch"
                    typeDropdownStateExpandedGap="unset"
                    typeDropdownStateExpandedBackgroundColor="unset"
                    labelLineHeight="20px"
                    labelColor="#868991"
                    labelFontWeight="unset"
                    labelFlex="1"
                    iconArrowWidth="20px"
                    iconArrowHeight="20px"
                    iconArrowMinHeight="unset"
                  />
                  <TypeDropdownStateExpanded
                    label="Golang"
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
                  <div className={styles.tab2}>
                    <div className={styles.expandedMenu2}>
                      <TypeTextStateSelectedSiz
                        label="Transfer funds with Golang"
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
                        label="Create Fungible Token with Golang"
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
                        label="Create Non-Fungible Token with Golang"
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
                    </div>
                  </div>
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
              <div className={styles.createNonFungibleToken}>
                Create Non-Fungible Token with Golang
              </div>
              <div className={styles.copy}>
                <div className={styles.copy1}>
                  This document gives instructions and examples on how to use
                  our pkg/client package to create and manage non-fungible
                  token.
                </div>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.section1}>
                <div className={styles.copy2}>
                  <div className={styles.header}>Complete Code</div>
                  <div className={styles.copy3}>
                    <div className={styles.copy4}>
                      <p className={styles.completeCodeWithGomodFile}>
                        Complete code with go.mod file you can find 
                        <a
                          className={styles.hereopenInNew}
                          href="https://github.com/CoreumFoundation/tutorials/tree/main/go/create-non-fungible-token"
                          target="_blank"
                        >
                          hereopen in new window
                        </a>
                      </p>
                      <p className={styles.psIfYou}>
                        P.S. If you have issues with go mod tidy command, just
                        copy go.mod file from the example above.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.section2}>
              <div className={styles.copy5}>
                <div className={styles.header1}>Go Code Skeleton</div>
              </div>
              <GoCodeSkeletonContainer
                codeSnippetTitle="Imports and main function"
                mainGoFileContentSnippet="Create standard main.go file containing this skeleton importing pkg/client:"
              />
              <div className={styles.copy6}>
                <div className={styles.subSection}>
                  <div className={styles.copy7}>
                    <div className={styles.preparingTestAccount}>
                      Preparing test account
                    </div>
                    <div className={styles.copy8}>
                      <p className={styles.beforeYouMay}>
                        Before you may broadcast transactions, you need to have
                        access to a funded account. Normally you would create a
                        private key stored securely in local keystore. Here, for
                        simplicity, we will use private key generated by our
                        faucet. Never ever use mnemonic directly in code and
                        never ever use key generated by faucet in production. It
                        might cause complete funds loss! Please reference
                        keyring documentation to learn on using keyring:
                        https://docs.cosmos.network/v0.47/user/run-node/keyring
                        and
                        https://pkg.go.dev/github.com/cosmos/cosmos-sdk/crypto/keyring.
                      </p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.toGetFunded}>
                        To get funded account, go to our faucet website:
                        https://docs.coreum.dev/tools-ecosystem/faucet and click
                        on "Generate Funded Wallet" button in "Testnet" section.
                      </p>
                      <p className={styles.blankLine1}>&nbsp;</p>
                      <p className={styles.inResponseYou}>
                        In response, you get your wallet address on our testnet
                        chain and mnemonic used to generate the private key.
                        Assign mnemonic to the constant senderMnemonic in the
                        code snippet above.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <GoCodeSkeletonContainer
                codeSnippetTitle="Setting Cosmos SDK configuration"
                mainGoFileContentSnippet="Before we are able to broadcast transaction, we must create and configure client context and tx factory:"
              />
            </div>
            <div className={styles.section3}>
              <NFTMintingContainer
                actionDescription="Minting NFT"
                nftMintingStep="Then we mint new NFT for that class:"
              />
            </div>
            <div className={styles.copy9}>
              <div className={styles.header2}>Querying The Owner</div>
              <div className={styles.copy10}>
                <div className={styles.copy11}>
                  We query the owner of the NFT to verify that it is owned by
                  the creator:
                </div>
                <ValidatorListContainer />
              </div>
              <TokenDelegationContainer />
            </div>
            <NFTMintingContainer
              actionDescription="Querying The Owner"
              nftMintingStep="We query the owner of the NFT to verify that it is owned by the creator:"
            />
            <div className={styles.section4}>
              <NFTMintingContainer
                actionDescription="Sending NFT"
                nftMintingStep="Now we send NFT to someone else:"
              />
              <div className={styles.copy12}>
                <div className={styles.copy13}>
                  Let's verify that recipient is the owner now:
                </div>
                <div className={styles.list}>
                  <div className={styles.card}>
                    <div className={styles.copy14}>
                      <div className={styles.div}>
                        <p className={styles.p}>1</p>
                        <p className={styles.p1}>2</p>
                        <p className={styles.p2}>3</p>
                        <p className={styles.p3}>4</p>
                        <p className={styles.p4}>5</p>
                        <p className={styles.p5}>6</p>
                      </div>
                    </div>
                    <img
                      className={styles.dividerIcon}
                      alt=""
                      src="/divider.svg"
                    />
                    <div className={styles.copy15}>
                      <div className={styles.coredTxBankContainer}>
                        <p className={styles.coredTxBank}>
                          cored tx bank send my-sender-wallet
                          testcore1snn05vrzvnwy7t0g00rr7hva63hmwxuuv7nrj0
                          1000000utestcore --node=$CORED_NODE
                          --chain-id=$CHAIN_ID
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
                    <img
                      className={styles.scrollbarIcon}
                      alt=""
                      src="/scrollbar@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ctas}>
            <div className={styles.card1}>
              <div className={styles.copy16}>
                <div className={styles.previous}>PREVIOUS</div>
                <div className={styles.createFungibleToken}>
                  Create Fungible Token with Golang
                </div>
              </div>
            </div>
            <div className={styles.card2}>
              <div className={styles.copy17}>
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
        <div className={styles.sidebarMenu1}>
          <div className={styles.tab3}>
            <div className={styles.label}>
              Create Non-Fungible Token with Golang
            </div>
          </div>
          <div className={styles.tab4}>
            <div className={styles.expandedMenu3}>
              <div className={styles.tab5}>
                <div className={styles.label1}>Complete Code</div>
              </div>
              <div className={styles.tab6}>
                <div className={styles.label2}>Go Code Skeleton</div>
              </div>
              <div className={styles.tab7}>
                <div className={styles.label3}>Creating NFT Class</div>
              </div>
              <div className={styles.tab8}>
                <div className={styles.label4}>Minting NFT</div>
              </div>
              <div className={styles.tab9}>
                <div className={styles.label5}>Querying the Owener</div>
              </div>
              <div className={styles.tab10}>
                <div className={styles.label6}>Sending NFT</div>
              </div>
              <div className={styles.tab11}>
                <div className={styles.label7}>Freezing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider3} />
      <BottomFooter imageDimensionsCode="/lumina-screen@2x.png" />
    </div>
  );
};

export default SmartFTWithAccessControlL1;
