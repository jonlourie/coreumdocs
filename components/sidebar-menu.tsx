import type { NextPage } from "next";
import TypeDropdownStateExpanded from "./type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "./type-text-state-selected-siz";
import styles from "./sidebar-menu.module.css";

const SidebarMenu: NextPage = () => {
  return (
    <div className={styles.sidebarMenu}>
      <TypeDropdownStateExpanded
        label="Overview"
        iconArrow="/iconarrow-1.svg"
        typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
        typeDropdownStateExpandedAlignSelf="stretch"
        typeDropdownStateExpandedGap="20px"
        typeDropdownStateExpandedBackgroundColor="unset"
        labelLineHeight="24px"
        labelColor="#eee"
        labelFontWeight="500"
        labelFlex="unset"
        iconArrowWidth="24px"
        iconArrowHeight="24px"
        iconArrowMinHeight="24px"
      />
      <div className={styles.tab}>
        <div className={styles.expandedMenu}>
          <TypeTextStateSelectedSiz
            typeTextStateSelectedSizPadding="var(--padding-5xs) var(--padding-xs)"
            typeTextStateSelectedSizBackgroundColor="#17191e"
            typeTextStateSelectedSizWidth="100%"
            typeTextStateSelectedSizBorder="none"
            typeTextStateSelectedSizOutline="none"
            typeTextStateSelectedSizHeight="36px"
            typeTextStateSelectedSizFontFamily="'Space Grotesk'"
            typeTextStateSelectedSizFontWeight="500"
            typeTextStateSelectedSizFontSize="14px"
            typeTextStateSelectedSizColor="#eee"
            typeTextStateSelectedSizMinWidth="132px"
            typeTextStateSelectedSizAlignSelf="stretch"
          />
          <TypeTextStateSelectedSiz
            label="Smart Contracts"
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
            labelFlex="unset"
          />
          <TypeTextStateSelectedSiz
            label="Smart Tokens"
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
            labelFlex="unset"
          />
          <div className={styles.tab1}>
            <div className={styles.label}>Technical Whitepaper</div>
            <img className={styles.iconlink} alt="" src="/iconlink1.svg" />
          </div>
        </div>
      </div>
      <TypeDropdownStateExpanded
        label="Tutorials"
        iconArrow="/iconarrow-2@2x.png"
        typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
        typeDropdownStateExpandedAlignSelf="stretch"
        typeDropdownStateExpandedGap="20px"
        typeDropdownStateExpandedBackgroundColor="unset"
        labelLineHeight="24px"
        labelColor="#868991"
        labelFontWeight="unset"
        labelFlex="unset"
        iconArrowWidth="24px"
        iconArrowHeight="24px"
        iconArrowMinHeight="24px"
      />
      <TypeDropdownStateExpanded
        label="Modules"
        iconArrow="/iconarrow-2@2x.png"
        typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
        typeDropdownStateExpandedAlignSelf="stretch"
        typeDropdownStateExpandedGap="20px"
        typeDropdownStateExpandedBackgroundColor="unset"
        labelLineHeight="24px"
        labelColor="#868991"
        labelFontWeight="unset"
        labelFlex="unset"
        iconArrowWidth="24px"
        iconArrowHeight="24px"
        iconArrowMinHeight="24px"
      />
      <TypeDropdownStateExpanded
        label="Validator"
        iconArrow="/iconarrow-2@2x.png"
        typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
        typeDropdownStateExpandedAlignSelf="stretch"
        typeDropdownStateExpandedGap="20px"
        typeDropdownStateExpandedBackgroundColor="unset"
        labelLineHeight="24px"
        labelColor="#868991"
        labelFontWeight="unset"
        labelFlex="unset"
        iconArrowWidth="24px"
        iconArrowHeight="24px"
        iconArrowMinHeight="24px"
      />
      <TypeDropdownStateExpanded
        label="API"
        iconArrow="/iconarrow-2@2x.png"
        typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
        typeDropdownStateExpandedAlignSelf="stretch"
        typeDropdownStateExpandedGap="20px"
        typeDropdownStateExpandedBackgroundColor="unset"
        labelLineHeight="24px"
        labelColor="#868991"
        labelFontWeight="unset"
        labelFlex="unset"
        iconArrowWidth="24px"
        iconArrowHeight="24px"
        iconArrowMinHeight="24px"
      />
      <TypeDropdownStateExpanded
        label="Tools/Ecosystem"
        iconArrow="/iconarrow-2@2x.png"
        typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
        typeDropdownStateExpandedAlignSelf="stretch"
        typeDropdownStateExpandedGap="20px"
        typeDropdownStateExpandedBackgroundColor="unset"
        labelLineHeight="24px"
        labelColor="#868991"
        labelFontWeight="unset"
        labelFlex="unset"
        iconArrowWidth="24px"
        iconArrowHeight="24px"
        iconArrowMinHeight="24px"
      />
      <div className={styles.tab2}>
        <div className={styles.label1}>Apps</div>
      </div>
      <TypeDropdownStateExpanded
        label="Help"
        iconArrow="/iconarrow-2@2x.png"
        typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
        typeDropdownStateExpandedAlignSelf="stretch"
        typeDropdownStateExpandedGap="20px"
        typeDropdownStateExpandedBackgroundColor="unset"
        labelLineHeight="24px"
        labelColor="#868991"
        labelFontWeight="unset"
        labelFlex="unset"
        iconArrowWidth="24px"
        iconArrowHeight="24px"
        iconArrowMinHeight="24px"
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
        iconArrowMinHeight="24px"
      />
    </div>
  );
};

export default SidebarMenu;
