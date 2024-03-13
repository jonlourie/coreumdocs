import type { NextPage } from "next";
import styles from "./token-delegation-container.module.css";

const TokenDelegationContainer: NextPage = () => {
  return (
    <div className={styles.copy}>
      <div className={styles.copy1}>
        <ul className={styles.letsDelegateSomeTokens}>
          <li>Let's delegate some tokens:</li>
        </ul>
      </div>
      <div className={styles.list}>
        <div className={styles.card}>
          <div className={styles.copy2}>
            <div className={styles.div}>
              <p className={styles.p}>1</p>
              <p className={styles.p1}>2</p>
              <p className={styles.p2}>3</p>
              <p className={styles.p3}>4</p>
              <p className={styles.p4}>5</p>
              <p className={styles.p5}>6</p>
            </div>
          </div>
          <img className={styles.dividerIcon} alt="" src="/divider.svg" />
          <div className={styles.copy3}>
            <div className={styles.coredTxBankContainer}>
              <p className={styles.coredTxBank}>
                cored tx bank send my-sender-wallet
                testcore1snn05vrzvnwy7t0g00rr7hva63hmwxuuv7nrj0 1000000utestcore
                --node=$CORED_NODE --chain-id=$CHAIN_ID
              </p>
              <p className={styles.createValidatorCreateNew}>
                # create-validator create new validator initialized with a
                self-delegation to it
              </p>
              <p className={styles.delegate}>
                # delegate Delegate liquid tokens to a validator
              </p>
              <p className={styles.editValidator}>
                # edit-validator edit an existing validator account
              </p>
              <p className={styles.redelegate}>
                # redelegate Redelegate illiquid tokens from one validator to
                another
              </p>
              <p className={styles.unbond}>
                # unbond Unbond shares from a validator
              </p>
            </div>
          </div>
          <img
            className={styles.scrollbarIcon}
            alt=""
            src="/scrollbar@2x.png"
          />
        </div>
      </div>
      <div className={styles.copy4}>
        <ul className={styles.ifTheOutputCodeIs0GetT}>
          <li className={styles.ifTheOutputCodeIs0GetT1}>
            <span className={styles.ifTheOutput}>
              If the output code is 0, get the transaction hash, go to 
            </span>
            <span className={styles.blockExplorer}>Block Explorer</span>
            <span>{` and put it into the search line. `}</span>
          </li>
          <li>
            <span>
              If output code is not 0, your transaction failed local validation
              and was not broadcasted. Fix the problem and run the command
              again.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TokenDelegationContainer;
