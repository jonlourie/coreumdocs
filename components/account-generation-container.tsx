import type { NextPage } from "next";
import styles from "./account-generation-container.module.css";

const AccountGenerationContainer: NextPage = () => {
  return (
    <div className={styles.copy}>
      <div className={styles.copy1}>
        <p className={styles.youCanFund}>You can fund your account here.</p>
        <p className={styles.ifYouDont}>
          If you don't have an account, there are three ways to generate it:
        </p>
        <ul className={styles.forAllUsersGoToWalletPa}>
          <li className={styles.forAllUsersGoToWalletPa1}>
            <span className={styles.forAllUsers}>(for all users) Go to </span>
            <span className={styles.wallet}>wallet</span>
            <span>
               page, connect(install) wallet and create account there;
            </span>
          </li>
          <li className={styles.forAdvancedUsersClickGene}>
            <span>
              (for advanced users) Click Generate Funded Wallet button below;
            </span>
          </li>
          <li>
            <span>(for advanced users) Or run cored CLI command:</span>
          </li>
        </ul>
      </div>
      <div className={styles.copy2}>
        <div className={styles.list}>
          <div className={styles.card}>
            <div className={styles.copy3}>
              <div className={styles.div}>
                <p className={styles.p}>1</p>
                <p className={styles.p1}>2</p>
              </div>
            </div>
            <img className={styles.dividerIcon} alt="" src="/divider.svg" />
            <div className={styles.copy4}>
              <div className={styles.exportCoreumChainIdchain}>
                <p
                  className={styles.exportCoreumChainIdchain1}
                >{`export COREUM_CHAIN_ID="{Chain ID}"`}</p>
                <p
                  className={styles.coredKeysAdd}
                >{`cored keys add <name-of-the-key> --chain-id=$COREUM_CHAIN_ID`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.highlightCommandParent}>
          <div className={styles.highlightCommand}>
            <div className={styles.label}>{`{Chain ID}`}</div>
          </div>
          <div className={styles.copy5}>
            <span>depends on the Network, you can find value at </span>
            <span className={styles.networkVariablesPage}>
              <span className={styles.networkVariablesPage1}>
                network variables page
              </span>
              <span className={styles.span}>.</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountGenerationContainer;
