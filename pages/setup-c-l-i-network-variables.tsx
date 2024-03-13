import type { NextPage } from "next";
import Header from "../components/header";
import TypeDropdownStateExpanded from "../components/type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "../components/type-text-state-selected-siz";
import OSCompatibilitySection from "../components/o-s-compatibility-section";
import BottomFooter from "../components/bottom-footer";
import styles from "./setup-c-l-i-network-variables.module.css";

const SetupCLINetworkVariables: NextPage = () => {
  return (
    <div className={styles.setupCliNetworkVariables}>
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
              <div className={styles.setupCliNetwork}>
                Setup CLI Network Variables
              </div>
              <div className={styles.copy}>
                <div className={styles.copy1}>
                  <p className={styles.ifYouAreLookingForValidat}>
                    <span className={styles.ifYouAre}>
                      If you are looking for Validator Network Variables, go to 
                    </span>
                    <span className={styles.thisPage}>this page.</span>
                  </p>
                  <p className={styles.blankLine}>
                    <span>
                      <span className={styles.blankLine1}>&nbsp;</span>
                    </span>
                  </p>
                  <p className={styles.thisDocumentDescribesTheCo}>
                    <span>
                      This document describes the command to set up the
                      environment depending on the type of network you want to
                      use.
                    </span>
                  </p>
                </div>
                <div className={styles.table}>
                  <div className={styles.feature}>
                    <div className={styles.value}>
                      <div className={styles.copy2}>MacOS</div>
                    </div>
                    <div className={styles.value1}>
                      <div className={styles.copy3}>Linux</div>
                    </div>
                    <div className={styles.divider2} />
                    <div className={styles.value2}>
                      <div className={styles.copy4}>Source</div>
                    </div>
                  </div>
                </div>
              </div>
              <OSCompatibilitySection
                osInstructions="MacOS"
                osSpecificInstructions="Note: this option supports MacOS only. Also, it should be used in case you interact with the chain with the CLI only."
              />
            </div>
          </div>
          <div className={styles.ctas}>
            <div className={styles.card}>
              <div className={styles.copy5}>
                <div className={styles.previous}>PREVIOUS</div>
                <div className={styles.smartContracts}>Smart Contracts</div>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.copy6}>
                <div className={styles.next}>NEXT</div>
                <div className={styles.installCored}>Install Cored</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider3} />
        <div className={styles.sidebarMenu1}>
          <div className={styles.tab2}>
            <div className={styles.label}>Smart Tokens</div>
          </div>
          <div className={styles.expandedMenu2}>
            <div className={styles.tab3}>
              <div className={styles.label1}>Features</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider4} />
      <BottomFooter imageDimensionsCode="/lumina-screen@2x.png" />
    </div>
  );
};

export default SetupCLINetworkVariables;
