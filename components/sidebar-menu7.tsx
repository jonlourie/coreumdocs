import type { NextPage } from "next";
import TypeDropdownStateExpanded from "./type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "./type-text-state-selected-siz";
import styles from "./sidebar-menu7.module.css";

const SidebarMenu7: NextPage = () => {
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
        iconArrow="/iconarrow-1.svg"
        typeDropdownStateExpandedPadding="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
        typeDropdownStateExpandedAlignSelf="stretch"
        typeDropdownStateExpandedGap="20px"
        typeDropdownStateExpandedBackgroundColor="unset"
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
          <TypeDropdownStateExpanded
            label="Coreum"
            iconArrow="/iconarrow.svg"
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
          <div className={styles.tab1}>
            <div className={styles.expandedMenu1}>
              <TypeDropdownStateExpanded
                label="Asset"
                iconArrow="/iconarrow.svg"
                typeDropdownStateExpandedPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="20px"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#eee"
                labelFontWeight="500"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="20px"
              />
              <div className={styles.tab2}>
                <div className={styles.expandedMenu2}>
                  <TypeTextStateSelectedSiz
                    label="Fungible Token"
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
                    label="Non-Fungible Token"
                    typeTextStateSelectedSizPadding="var(--padding-5xs) var(--padding-9xl) var(--padding-5xs) var(--padding-xs)"
                    typeTextStateSelectedSizBackgroundColor="#17191e"
                    typeTextStateSelectedSizWidth="unset"
                    typeTextStateSelectedSizBorder="none"
                    typeTextStateSelectedSizOutline="unset"
                    typeTextStateSelectedSizHeight="unset"
                    typeTextStateSelectedSizFontFamily="unset"
                    typeTextStateSelectedSizFontWeight="unset"
                    typeTextStateSelectedSizFontSize="unset"
                    typeTextStateSelectedSizColor="unset"
                    typeTextStateSelectedSizMinWidth="unset"
                    typeTextStateSelectedSizAlignSelf="unset"
                    labelFontWeight="500"
                    labelLineHeight="20px"
                    labelColor="#eee"
                    labelDisplay="inline-block"
                    labelWidth="unset"
                    labelPaddingRight="unset"
                    labelFlex="unset"
                  />
                </div>
              </div>
              <TypeTextStateSelectedSiz
                label="Custom Params"
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
                label="Delay"
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
                label="Fee Model"
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
                label="NFT"
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
          <TypeTextStateSelectedSiz
            label="Amino"
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
            label="Cosmos"
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
            label="Tendermint"
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
            label="CosmWasm"
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
            label="Scalar Value Types"
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

export default SidebarMenu7;
