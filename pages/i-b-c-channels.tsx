import type { NextPage } from "next";
import Header from "../components/header";
import TypeDropdownStateExpanded from "../components/type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "../components/type-text-state-selected-siz";
import TypeLinkStateDefault from "../components/type-link-state-default";
import ContainerCard from "../components/container-card";
import BottomFooter from "../components/bottom-footer";
import styles from "./i-b-c-channels.module.css";

const IBCChannels: NextPage = () => {
  return (
    <div className={styles.ibcChannels}>
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
                    label="IBC Channels"
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
                    label="IBC Transfer to Osmosis Using Keplr Wallet"
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
                    label="IBC Smart Contract Call Tutorial"
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
                    label="IBC WASM Transfer Tutorial"
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
                    label="IBC Transfer Using CLI"
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
            iconArrow="/iconarrow.svg"
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
          <div className={styles.expandedMenu2}>
            <TypeTextStateSelectedSiz
              label="Wallets"
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
              label="Faucet"
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
              label="Block Explorer"
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
          <TypeDropdownStateExpanded
            label="Help"
            iconArrow="/iconarrow.svg"
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
          <div className={styles.expandedMenu3}>
            <TypeTextStateSelectedSiz
              label="FAQ"
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
              label="Useful Links"
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
              <div className={styles.ibcChannels1}>IBC Channels</div>
              <div className={styles.section}>
                <div className={styles.copy}>
                  <div className={styles.copy1}>
                    <div className={styles.copy2}>
                      <span>
                        Here is a list of our IBC Channels our relayers have
                        opened. The source of truth for active channels is the
                        Cosmos Chain Registry: 
                      </span>
                      <a
                        className={styles.httpsgithubcomcosmoschai}
                        href="https://github.com/cosmos/chain-registry/tree/master/_IBC"
                        target="_blank"
                      >
                        <span>
                          https://github.com/cosmos/chain-registry/tree/master/_IBC
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={styles.cards}>
                  <div className={styles.card}>
                    <img
                      className={styles.bandLogoIcon}
                      alt=""
                      src="/band-logo.svg"
                    />
                    <div className={styles.copy3}>
                      <div className={styles.osmosis}>Osmosis</div>
                      <TypeLinkStateDefault
                        label="Details"
                        typeLinkStateDefaultAlignSelf="stretch"
                        labelLineHeight="20px"
                        labelColor="unset"
                        labelBackground="linear-gradient(180deg, #25d695, #046c45)"
                        labelWebkitBackgroundClip="unset"
                        labelWebkitTextFillColor="unset"
                      />
                    </div>
                    <div className={styles.flare} />
                    <div className={styles.flare1} />
                    <div className={styles.flare2} />
                    <div className={styles.flare3} />
                  </div>
                  <ContainerCard
                    iconId="/axelar-logo.svg"
                    blockchainNetworkLogo="Axelar"
                  />
                  <ContainerCard
                    iconId="/evmos-logo.svg"
                    blockchainNetworkLogo="Evmos"
                  />
                  <ContainerCard
                    iconId="/gravity-logo.svg"
                    blockchainNetworkLogo="GravityBridge"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ctas}>
            <div className={styles.card1}>
              <div className={styles.copy4}>
                <div className={styles.previous}>PREVIOUS</div>
                <div className={styles.smartContracts}>Smart Contracts</div>
              </div>
            </div>
            <div className={styles.card2}>
              <div className={styles.copy5}>
                <div className={styles.next}>NEXT</div>
                <div className={styles.ibcTransferTo}>
                  IBC Transfer to Osmosis Using Keplr Wallet
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider2} />
        <div className={styles.sidebarMenu1}>
          <div className={styles.tab2}>
            <div className={styles.label}>Transfer funds with CLI</div>
          </div>
          <div className={styles.expandedMenu4}>
            <div className={styles.tab3}>
              <div className={styles.label1}>
                Create multisig account and issue an asset
              </div>
            </div>
          </div>
          <div className={styles.expandedMenu5}>
            <div className={styles.tab4}>
              <div className={styles.label2}>
                Grant permission to an address to perform transactions on behalf
                of the multisig account
              </div>
            </div>
          </div>
          <div className={styles.expandedMenu6}>
            <div className={styles.tab5}>
              <div className={styles.label3}>
                Creating and managing a Multisig using a UI instead of CLI
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

export default IBCChannels;
