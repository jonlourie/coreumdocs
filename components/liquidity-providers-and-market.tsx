import type { NextPage } from "next";
import Card from "./card";
import styles from "./liquidity-providers-and-market.module.css";

const LiquidityProvidersAndMarket: NextPage = () => {
  return (
    <div className={styles.liquidityProvidersAndMarket}>
      <div className={styles.landingSection}>
        <div className={styles.headline}>
          <div className={styles.badge}>
            <div className={styles.lastUpdated12142023639}>
              Last Updated: 12/14/2023, 6:39:40 AM
            </div>
          </div>
          <div className={styles.copy}>
            <div className={styles.titleBadge}>
              <h1 className={styles.title}>
                <span className={styles.theWorldsFirst}>The World’s First</span>
                <span>{` `}</span>
                <span className={styles.superLedger}>Super Ledger</span>
              </h1>
            </div>
            <div className={styles.copy1}>
              Coreum is a scalable, secure, and interoperable blockchain for
              business, enriched with smart tokens and smart contract
              functionalities.
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.button1}>
              <div className={styles.label}>Get Started</div>
              <img className={styles.iconlink} alt="" src="/iconlink.svg" />
            </div>
          </button>
        </div>
        <img
          className={styles.landingImgIcon}
          loading="lazy"
          alt=""
          src="/landing-img@2x.png"
        />
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.liquidityProvidersAndMarket1}>
            <div className={styles.flare} />
          </div>
          <div className={styles.stablecoinsEcosystemFrames}>
            <img
              className={styles.decentralizedExchangesIcon}
              loading="lazy"
              alt=""
              src="/decentralized-exchanges.svg"
            />
            <div className={styles.descriptionTextFrame}>
              <div className={styles.flareLogoFrame}>
                <div className={styles.title1}>Features</div>
              </div>
              <div className={styles.flare1} />
            </div>
          </div>
          <div className={styles.footerContainerBackground}>
            <div className={styles.cardContainer}>
              <div className={styles.flare2} />
            </div>
            <div className={styles.description}>
              Dive into the protocol's capabilities,. including Smart Tokens,
              CosmWasm Smart Contracts and Coreum's gas fee model.
            </div>
          </div>
          <div className={styles.flare3} />
        </div>
        <div className={styles.card1}>
          <img
            className={styles.liquidityProvidersAndMarketIcon}
            loading="lazy"
            alt=""
            src="/liquidity-providers-and-market-makers.svg"
          />
          <div className={styles.titleParent}>
            <div className={styles.title2}>Validators</div>
            <div className={styles.description1}>
              <p
                className={styles.guidesAndUpdates}
              >{`Guides and updates on node set up for deploying on devnet, testnet, or mainnet. `}</p>
            </div>
          </div>
        </div>
        <Card
          metaverseApplications="/metaverse-applications.svg"
          title="Developers "
          description="A full suite of development tooling: Coreum's CLI, Smart Contract Playground, and complete TypeScript / Go modules, and tutorials."
        />
        <Card
          metaverseApplications="/stablecoin-ecosystems.svg"
          title="Community"
          description="Explore community resources and initiatives across the Coreum ecosystem. Open-source knowledge and research materials."
        />
      </div>
    </div>
  );
};

export default LiquidityProvidersAndMarket;
