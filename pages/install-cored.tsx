import type { NextPage } from "next";
import Header from "../components/header";
import TypeDropdownStateExpanded from "../components/type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "../components/type-text-state-selected-siz";
import OSCompatibilitySection from "../components/o-s-compatibility-section";
import BuildFromSourcesContainer from "../components/build-from-sources-container";
import BottomFooter from "../components/bottom-footer";
import styles from "./install-cored.module.css";

const InstallCored: NextPage = () => {
  return (
    <div className={styles.installCored}>
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
              <div className={styles.installCored1}>Install Cored</div>
              <div className={styles.copy}>
                <div className={styles.copyChild} />
                <div className={styles.copyItem} />
                <div className={styles.copy1}>
                  <p className={styles.thisDocumentProvidesTheIns}>
                    <span
                      className={styles.thisDocumentProvides}
                    >{`This document provides the instruction on how to install the release binaries of the   `}</span>
                    <span className={styles.cored}>cored</span>
                    <span className={styles.span}> .</span>
                  </p>
                  <p className={styles.choosePreferredWayToInstal}>
                    <span
                      className={styles.choosePreferredWay}
                    >{`Choose preferred way to install   `}</span>
                    <span className={styles.cored1}>cored</span>
                    <span className={styles.span1}> :</span>
                  </p>
                  <ol className={styles.installPrebuiltCoredForLi}>
                    <li className={styles.installPrebuiltCoredForLi1}>
                      <span className={styles.installPrebuiltCoredForLi2}>
                        Install prebuilt cored (for linux OS only)
                      </span>
                    </li>
                    <li className={styles.buildFromSources}>
                      <span className={styles.buildFromSources1}>
                        Build from sources
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <OSCompatibilitySection
              osInstructions="Install Prebuilt Cored"
              osSpecificInstructions="Note: this option supports linux OS only. Also, it should be used in case you interact with the chain with the CLI only."
            />
            <div className={styles.section}>
              <div className={styles.copy2}>
                <div className={styles.header}>Build from Sources</div>
                <div className={styles.copy3}>
                  <div className={styles.copy4}>
                    <p className={styles.theBuildAndPlayDocDescrib}>
                      <span className={styles.the}>The </span>
                      <span className={styles.buildAndPlay}>
                        Build and Play
                      </span>
                      <span>
                         doc describes the process of building and installation
                        the cored binary from sources.
                      </span>
                    </p>
                    <p className={styles.thatsItYou}>
                      That's it, you have cored installed! You can return to
                      previous Readme.
                    </p>
                  </div>
                </div>
              </div>
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
                <div className={styles.installCored2}>Install Cored</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider2} />
        <BuildFromSourcesContainer
          featureDescription="Install Cored"
          actionDescription="Install Prebuilt Cored"
          commandDescription="Build from Sources"
        />
      </div>
      <div className={styles.divider3} />
      <BottomFooter imageDimensionsCode="/lumina-screen@2x.png" />
    </div>
  );
};

export default InstallCored;
