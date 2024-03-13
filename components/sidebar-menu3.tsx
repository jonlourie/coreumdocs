import type { NextPage } from "next";
import TypeDropdownStateExpanded from "./type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "./type-text-state-selected-siz";
import styles from "./sidebar-menu3.module.css";

const SidebarMenu3: NextPage = () => {
  return (
    <div className={styles.sidebarMenu}>
      <TypeDropdownStateExpanded
        label="Overview"
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
        iconArrow="/iconarrow-1.svg"
        typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
        typeDropdownStateExpandedAlignSelf="stretch"
        typeDropdownStateExpandedGap="20px"
        typeDropdownStateExpandedBackgroundColor="#17191e"
        labelLineHeight="24px"
        labelColor="#eee"
        labelFontWeight="unset"
        labelFlex="unset"
        iconArrowWidth="24px"
        iconArrowHeight="24px"
        iconArrowMinHeight="24px"
      />
      <div className={styles.tab}>
        <div className={styles.expandedMenu}>
          <TypeTextStateSelectedSiz
            label="Full Node"
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
          <TypeDropdownStateExpanded
            label="Validator"
            iconArrow="/iconarrow-3@2x.png"
            typeDropdownStateExpandedPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="20px"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="20px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="20px"
            iconArrowHeight="20px"
            iconArrowMinHeight="20px"
          />
          <TypeDropdownStateExpanded
            label="Essentials"
            iconArrow="/iconarrow-3@2x.png"
            typeDropdownStateExpandedPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="20px"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="20px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="20px"
            iconArrowHeight="20px"
            iconArrowMinHeight="20px"
          />
          <TypeTextStateSelectedSiz
            label="Troubleshooting"
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
            label="Upgrades"
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
        </div>
      </div>
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

export default SidebarMenu3;
