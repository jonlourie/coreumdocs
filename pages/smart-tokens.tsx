import type { NextPage } from "next";
import NavBar1 from "../components/nav-bar1";
import SidebarMenu2 from "../components/sidebar-menu2";
import AncestorFiveTimesRemovedNo from "../components/ancestor-five-times-removed-no";
import Footer1 from "../components/footer1";
import styles from "./smart-tokens.module.css";

const SmartTokens: NextPage = () => {
  return (
    <div className={styles.smartTokens}>
      <NavBar1 />
      <div className={styles.divider} />
      <main className={styles.ancestorThriceRemovedNodes}>
        <SidebarMenu2 />
        <div className={styles.divider1} />
        <section className={styles.cousinFourTimesRemovedNode}>
          <AncestorFiveTimesRemovedNo />
          <div className={styles.dataValidator}>
            <div className={styles.details}>
              <div className={styles.introduction}>
                <h3 className={styles.features}>Features</h3>
              </div>
              <div className={styles.card}>
                <div className={styles.copy}>
                  <div className={styles.issuance}>Issuance</div>
                  <div className={styles.assetIssuanceIs}>
                    Asset issuance is the initial phase of the asset lifecycle.
                    On issuance, the issuer defines the asset settings, initial
                    amount, allowed features, and default Access Control List.
                    After the creation, the initial amount will be minted for
                    the provided recipient and sent to the corresponding
                    account. The allowed features are the asset features, which
                    can be used with the asset but can't be changed after the
                    issuance. Meaning, if you set no features, you won't be able
                    to use any of them.
                  </div>
                </div>
              </div>
              <div className={styles.card1}>
                <div className={styles.copy1}>
                  <div className={styles.minting}>Minting</div>
                  <div className={styles.tokensCanBe}>
                    Tokens can be initially minted on asset instantiation or on
                    the fly if the can_mint feature flag is set at the issuance
                    level. This feature is useful for a wide variety of use
                    cases, such as CBDCs, Stablecoins, Tokenized Securities,
                    Wrapped Crypto Currencies and so on. If a token gives up the
                    ability to mint at the time of issuance, it can never mint
                    more tokens and the total supply of the token will not ever
                    increase.
                  </div>
                </div>
              </div>
              <div className={styles.card2}>
                <div className={styles.copy2}>
                  <div className={styles.accessControlList}>
                    Access Control List
                  </div>
                  <div className={styles.theAclaccessControlContainer}>
                    <p className={styles.theAclaccessControl}>
                      The ACL(Access Control List) provides a flexible way for
                      asset administration and is the relationships of the chain
                      accounts and allowed features set on the asset issuance.
                      The administrators might be set in the same ACL.
                    </p>
                    <p className={styles.exampleOfThe}>Example of the ACL:</p>
                  </div>
                </div>
                <div className={styles.list}>
                  <div className={styles.card3}>
                    <div className={styles.copy3}>
                      <div className={styles.dataAggregator}>
                        <p className={styles.p}>1</p>
                        <p className={styles.p1}>2</p>
                        <p className={styles.p2}>3</p>
                        <p className={styles.p3}>4</p>
                      </div>
                    </div>
                    <img
                      className={styles.dividerIcon}
                      loading="lazy"
                      alt=""
                      src="/divider-1.svg"
                    />
                    <div className={styles.copy4}>
                      <div className={styles.canAdministrateAccount1Can}>
                        <p className={styles.canAdministrateAccount1}>
                          can_administrate: account1
                        </p>
                        <p className={styles.canPartialFreezeAccount2}>
                          can_partial_freeze: account2
                        </p>
                        <p className={styles.canMintAccount3Account4}>
                          can_mint: account3, account4
                        </p>
                        <p className={styles.canBurnAll}>can_burn: all</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.card4}>
                <div className={styles.copy5}>
                  <div className={styles.burning}>Burning</div>
                  <div className={styles.whenThisFeature}>
                    When this feature is enabled on a token, then the holders of
                    the token who have the right permission will be able to burn
                    some of the tokens they hold to reduce the total supply of
                    that token. To give an example use case, if shares of a
                    company are tokenized, then the total supply will represent
                    the total shares of the company on the chain. And burning
                    those tokens would mean those shares are now moved out of
                    the blockchain and total supplies will correctly represent
                    that fact.
                  </div>
                </div>
              </div>
              <div className={styles.card5}>
                <div className={styles.copy6}>
                  <div className={styles.freezing}>Freezing</div>
                  <div className={styles.ifThisFeatureContainer}>
                    <p className={styles.ifThisFeature}>
                      If this feature is enabled when the token is first issued,
                      freezing allows the administrator of the token to freeze a
                      portion of or the balance of the token held by a user.
                      There are many use cases that are enforced by law to
                      freeze a token. An example use case is when the token
                      administrator sends tokens to an address but does not want
                      the user to spend them until some time has passed such as
                      clearing a cheque.
                    </p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.tokenMightBe}>
                      Token might be frozen globally. It means that it might be
                      transferred only to the issuer. All the other transfers
                      are rejected until it is unfrozen back.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.card6}>
                <div className={styles.copy7}>
                  <div className={styles.freezing1}>Freezing</div>
                  <div className={styles.ifThisFeatureContainer1}>
                    <p className={styles.ifThisFeature1}>
                      If this feature is enabled when the token is first issued,
                      freezing allows the administrator of the token to freeze a
                      portion of or the balance of the token held by a user.
                      There are many use cases that are enforced by law to
                      freeze a token. An example use case is when the token
                      administrator sends tokens to an address but does not want
                      the user to spend them until some time has passed such as
                      clearing a cheque.
                    </p>
                    <p className={styles.blankLine1}>&nbsp;</p>
                    <p className={styles.tokenMightBe1}>
                      Token might be frozen globally. It means that it might be
                      transferred only to the issuer. All the other transfers
                      are rejected until it is unfrozen back.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.card7}>
                <div className={styles.copy8}>
                  <div className={styles.whitelisting}>Whitelisting</div>
                  <div className={styles.whitelistingIsDesignedContainer}>
                    <p className={styles.whitelistingIsDesigned}>
                      Whitelisting is designed to support scenarios when, due to
                      KYC/AML or any other policy enforced by the issuer, the
                      Smart Token might be held by a limited scope of accounts
                      that passed the verification procedure. Its possible use
                      cases include tokens representing stock shares, CBDC or
                      any other rights enforced by the legal system where the
                      identity of the holder must be confirmed.
                    </p>
                    <p className={styles.blankLine2}>&nbsp;</p>
                    <p className={styles.ifTheCanWhitelist}>
                      If the can_whitelist flag is enabled on the Smart Token,
                      the issuer defines the list of accounts (addresses) that
                      are allowed to receive that token. If an account is not on
                      that list and someone tries to send tokens to it, the
                      transfer is rejected. Alternatively, a special flag
                      whitelist_everyone may be set to true to whitelist all the
                      accounts. If whitelisting was enabled during Smart Token
                      issuance, the issuer may update the list of whitelisted
                      accounts and enable or disable the whitelist_everyone flag
                      at any time.
                    </p>
                    <p className={styles.blankLine3}>&nbsp;</p>
                    <p className={styles.ifAnAccount}>
                      If an account holding the token is removed from the
                      whitelist, its current balance stays unaffected but it
                      cannot receive tokens anymore until whitelisted back.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.card8}>
                <div className={styles.copy9}>
                  <div className={styles.blockSmartContracts}>
                    Block Smart Contracts
                  </div>
                  <div className={styles.whenATokenContainer}>
                    <p className={styles.whenAToken}>
                      When a token is issued, it is possible to define Burn
                      Rate. It is a number between 0 and 1, defining the portion
                      of transferred amount to be burnt. The burnt amount is
                      charged on the sender in addition to the original amount
                      being transferred.
                    </p>
                    <p className={styles.blankLine4}>&nbsp;</p>
                    <p className={styles.burnRateIs}>
                      Burn Rate is not applied on transfers sent or received by
                      the token issuer.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.card9}>
                <div className={styles.copy10}>
                  <div className={styles.sendFee}>Send Fee</div>
                  <div className={styles.similarlyToBurnContainer}>
                    <p className={styles.similarlyToBurn}>
                      Similarly to Burn Rate, the issuer may define a Send Fee.
                      It is a number between 0 and 1 too, which defines the
                      portion of transferred amount which is sent to the issuer.
                      This tax is charged on the sender in addition to the
                      original amount.
                    </p>
                    <p className={styles.blankLine5}>&nbsp;</p>
                    <p className={styles.sendFeeIs}>
                      Send Fee is not applied on transfers sent or received by
                      the token issuer.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.card10}>
                <div className={styles.copy11}>
                  <div className={styles.ibcCompatibility}>
                    IBC Compatibility
                  </div>
                  <div className={styles.assetsAreBased}>
                    Assets are based on the Cosmos SDK modules and extend the
                    Cosmos IBC (Inter Blockchain Communication) capability.
                    Hence, they can be transferred to and from IBC-supported
                    chains within the cosmos ecosystem or outside it given
                    proper relayers are present. When an asset is transferred to
                    another chain, it’s represented as a tokenized version of
                    the underlying asset in the Coreum Blockchain.
                  </div>
                </div>
              </div>
              <div className={styles.card11}>
                <div className={styles.copy12}>
                  <div className={styles.smartContractIntegration}>
                    Smart Contract Integration
                  </div>
                  <div className={styles.anIntegralPartContainer}>
                    <p className={styles.anIntegralPart}>
                      An integral part of the Coreum blockchain is to support
                      the deployment and execution of Smart Contracts, which
                      already bring countless possibilities. By implementing
                      Smart Tokens, Coreum is able to extend their
                      functionalities and flexibility through Smart Contracts.
                    </p>
                    <p className={styles.blankLine6}>&nbsp;</p>
                    <p className={styles.developersCanDeploy}>
                      Developers can deploy their own logic by writing Smart
                      Contracts, being able to issue Smart Tokens, mint and burn
                      them, whitelist and blacklist accounts, freeze and
                      unfreeze their balances, and block or allow sending them
                      to other smart contracts.
                    </p>
                    <p className={styles.blankLine7}>&nbsp;</p>
                    <p className={styles.nowTheBehavior}>
                      Now the behavior of the Smart Token might be driven by
                      actions taken by ordinary people, departments of your
                      organization or even different ones cooperating together,
                      meaning that the final action taken on the Smart Token
                      might be the result of the process involving different
                      actors following the transparent logic provided by the
                      Smart Contract, leading to greater reliability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ctas}>
            <div className={styles.card12}>
              <div className={styles.copy13}>
                <div className={styles.previous}>PREVIOUS</div>
                <div className={styles.smartContracts}>Smart Contracts</div>
              </div>
            </div>
            <div className={styles.card13}>
              <div className={styles.copy14}>
                <div className={styles.next}>NEXT</div>
                <div className={styles.tutorials}>Tutorials</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer1 luminaScreen="/lumina-screen3@2x.png" />
    </div>
  );
};

export default SmartTokens;
