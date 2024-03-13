import type { NextPage } from "next";
import Header from "../components/header";
import TypeDropdownStateExpanded from "../components/type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "../components/type-text-state-selected-siz";
import ValidatorListContainer from "../components/validator-list-container";
import TokenDelegationContainer from "../components/token-delegation-container";
import PermissionGrantContainer from "../components/permission-grant-container";
import BottomFooter from "../components/bottom-footer";
import styles from "./smart-f-t-with-access-control-l.module.css";

const SmartFTWithAccessControlL: NextPage = () => {
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
              <div className={styles.smartFtWith}>
                Smart FT with Access Control List (ACL)
              </div>
              <div className={styles.section}>
                <div className={styles.copy}>
                  <div className={styles.header}>
                    Create multisig account and issue an asset
                  </div>
                  <div className={styles.copy1}>
                    <div className={styles.copy2}>
                      <ul className={styles.theDocumentationBelowExplai}>
                        <li className={styles.theDocumentationBelowExplai1}>
                          <span>
                            The documentation below explains how to create a
                            Multisig account and grant different permissions to
                            individual addresses using the Authz Module so that
                            each address has different permissions for the
                            management of Coreum assets.
                          </span>
                        </li>
                        <li className={styles.followTheInstructionToInst}>
                          <span>Follow the </span>
                          <span className={styles.instruction}>
                            instruction
                          </span>
                          <span className={styles.toInstallCored}>
                             to install cored binary.
                          </span>
                        </li>
                        <li className={styles.verifyThatNetworkVariables}>
                          <span className={styles.verifyThat}>
                            Verify that 
                          </span>
                          <span className={styles.networkVariables}>
                            network variables
                          </span>
                          <span className={styles.areSetUp}>
                             are set up correctly.
                          </span>
                        </li>
                        <li className={styles.theFirstStepIsToCreateA}>
                          <span className={styles.theFirstStep}>
                            The first step is to create a multisig account.
                            Follow the steps in 
                          </span>
                          <span className={styles.multisigCreation}>
                            multisig creation
                          </span>
                          <span className={styles.toSetIt}> to set it up.</span>
                        </li>
                        <li>
                          <span className={styles.generateTheJson}>
                            Generate the json tx to issue an FT from the
                            multisig.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <ValidatorListContainer />
                  </div>
                </div>
                <TokenDelegationContainer />
              </div>
            </div>
            <PermissionGrantContainer transactionPermissionDesc="Grant permission to an address to perform transactions on behalf of the multisig account" />
            <PermissionGrantContainer transactionPermissionDesc="Creating and managing a Multisig using a UI instead of CLI" />
          </div>
          <div className={styles.ctas}>
            <div className={styles.card}>
              <div className={styles.copy3}>
                <div className={styles.previous}>PREVIOUS</div>
                <div className={styles.smartContracts}>Smart Contracts</div>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.copy4}>
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
              Smart FT with Access Control List (ACL)
            </div>
          </div>
          <div className={styles.tab4}>
            <div className={styles.expandedMenu3}>
              <div className={styles.tab5}>
                <div className={styles.label1}>
                  Create Multisig Account and Issue an Asset
                </div>
              </div>
              <div className={styles.tab6}>
                <div className={styles.label2}>
                  Grant Permission to an Address to Perform Transactions on
                  Behalf of the Multisig Account
                </div>
              </div>
              <div className={styles.tab7}>
                <div className={styles.label3}>
                  Smart FT with Access Control List (ACL)
                </div>
              </div>
              <div className={styles.tab8}>
                <div className={styles.label4}>
                  Creating and Managing a Multisig Using a UI Instead of CLI
                </div>
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

export default SmartFTWithAccessControlL;
