import type { NextPage } from "next";
import styles from "./content2.module.css";

const Content2: NextPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <h1 className={styles.title1}>Coreum Non-Fungible Token</h1>
        <div className={styles.copy}>
          This document specifies assetnft module, which allows public users of
          the blockchain to create non-fungible tokens on the Coreum blockchain.
        </div>
      </div>
      <div className={styles.title2}>
        <h1 className={styles.title3}>Concepts</h1>
        <div className={styles.copy1}>
          <span>
            This module provides transactions and queries which allows public
            users of the blockchain to issue non-fungible tokens. The
            information for the NFTs themselves are stored in the nft module
            developed by Cosmos team, but that module does not allow public
            users to issue NFT classes or mint NFTs, and that's where this
            module comes in. The interaction between the two modules is
            described 
          </span>
          <span className={styles.here}>here</span>
          <span>
            . This module also introduces features that defines specific
            behavior for the nft (described 
          </span>
          <span className={styles.here1}>here</span>
          <span>).</span>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.copy2}>
          <h3 className={styles.header}>
            Interaction with NFT Module, Introducing WNFT Module
          </h3>
          <div className={styles.copy3}>
            <p className={styles.theCosmosTeam}>
              The Cosmos team has developed the nft module (which we hereby
              refer to as the original nft module), which can be used to store
              the information about NFTs, their classes, their ownership, etc.
              But as mentioned earlier this module does not provide any
              functionalities to public users to create their own NFTs, or
              define custom behavior for transferring tokens. Because of this
              reason we have wrapped the original nft module into
              the wnft module, which allows injecting custom logic into the
              transfer method of the original nft module. We have also created
              the assetnft module (this module), to allow public users to create
              their own NFTs with their own custom behavior.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.inOtherWords}>
              In other words the assetnft module defines the custom behavior for
              NFTs, enforces that behavior by injecting custom logic
              into wnft module, and keeps most NFT related information on
              the original nft moduel.
            </p>
            <p className={styles.blankLine1}>&nbsp;</p>
            <p className={styles.thisDesignMeans}>
              This design means that some portion of data relating to NFTs will
              live in this module, and some will live in the original nft
              module, so to get the final NFT functionality one should be aware
              and understand that they should make some of the queries to
              the original nft module.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section1}>
        <div className={styles.copy4}>
          <h3 className={styles.header1}>Token Features</h3>
          <div className={styles.copy5}>
            <p className={styles.nftTokensCome}>
              NFT tokens come with a set of features that the issuer can specify
              at the time of issuing a class, and then in some cases configured
              on each NFT level later.
            </p>
            <p className={styles.hereIsThe}>Here is the list of features:</p>
            <ul className={styles.burningFreezingWhitelisting}>
              <li className={styles.burning}>burning</li>
              <li className={styles.freezing}>freezing</li>
              <li className={styles.whitelisting}>whitelisting</li>
              <li className={styles.disableSending}>disable sending</li>
              <li className={styles.soulbound}>soulbound</li>
            </ul>
            <p className={styles.weWillDiscuss}>
              We will discuss each feature separately.
            </p>
          </div>
        </div>
        <div className={styles.subSection}>
          <div className={styles.copy6}>
            <div className={styles.burning1}>Burning</div>
            <div className={styles.copy7}>
              If this feature is enabled, it allows the holders of the token to
              burn the tokens they hold. It should be noted here that the issuer
              can burn their token regardless of this feature.
            </div>
          </div>
        </div>
        <div className={styles.subSection1}>
          <div className={styles.copy8}>
            <div className={styles.freezing1}>Freezing</div>
            <div className={styles.copy9}>
              If this feature is enabled, it allows the issuer of the class to
              freeze any NFT token in that class. A frozen token cannot be
              transferred until it is unfrozen by the issuer.
            </div>
          </div>
        </div>
        <div className={styles.subSection2}>
          <div className={styles.copy10}>
            <div className={styles.whitelisting1}>Whitelisting</div>
            <div className={styles.copy11}>
              If this feature is enabled, then for any user to receive any NFT
              of that class, they must be whitelisted to receive that specific
              NFT. It follows that this feature allows the issuer of the class
              to whitelist an account to hold a specific NFT of that class, or
              remove an account from whitelisted accounts for that NFT.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.subSection3}>
          <h3 className={styles.header2}>Disable Sending</h3>
          <div className={styles.copy12}>
            If this feature is enabled, then the NFT cannot be directly
            transferred between users, meaning that user A cannot send the
            tokens they hold directly to user B. This feature opens up the door
            for different use cases in the future, one of which is that it might
            be used to force transfer of ownership to go via DEX, so that the
            royalty fee is applied and the creator of the NFT always gets a
            royalty fee.
          </div>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.subSection4}>
          <h3 className={styles.header3}>Soulbound</h3>
          <div className={styles.copy13}>
            If this feature is enabled, then the NFT can not be sent by anyone,
            except the issuer. This feature is useful for NFTs that are created
            for a specific user, and the issuer wants to make sure that the NFT
            is not transferred to anyone else.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
