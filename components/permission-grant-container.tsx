import type { NextPage } from "next";
import styles from "./permission-grant-container.module.css";

export type PermissionGrantContainerType = {
  transactionPermissionDesc?: string;
};

const PermissionGrantContainer: NextPage<PermissionGrantContainerType> = ({
  transactionPermissionDesc,
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.copy}>
        <div className={styles.header}>{transactionPermissionDesc}</div>
        <div className={styles.copy1}>
          <div className={styles.copy2}>
            <ul className={styles.toStakeYourTokensWithCli}>
              <li>
                To stake your tokens with CLI you should use staking module.
                Let's check available commands:
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <div className={styles.card}>
              <div className={styles.copy3}>
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
              <div className={styles.copy4}>
                <div className={styles.coredTxStakingContainer}>
                  <p className={styles.coredTxStakingHelp}>
                    <span>{`cored tx staking `}</span>
                    <span className={styles.help}>--help</span>
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
                    # redelegate Redelegate illiquid tokens from one validator
                    to another
                  </p>
                  <p className={styles.unbond}>
                    # unbond Unbond shares from a validator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copy5}>
        <div className={styles.copy6}>
          <ul className={styles.letsDelegateSomeTokens}>
            <li>Let's delegate some tokens:</li>
          </ul>
        </div>
        <div className={styles.list1}>
          <div className={styles.card1}>
            <div className={styles.copy7}>
              <div className={styles.div1}>
                <p className={styles.p6}>1</p>
                <p className={styles.p7}>2</p>
                <p className={styles.p8}>3</p>
                <p className={styles.p9}>4</p>
                <p className={styles.p10}>5</p>
                <p className={styles.p11}>6</p>
              </div>
            </div>
            <img className={styles.dividerIcon1} alt="" src="/divider.svg" />
            <div className={styles.copy8}>
              <div className={styles.coredTxBankContainer}>
                <p className={styles.coredTxBank}>
                  cored tx bank send my-sender-wallet
                  testcore1snn05vrzvnwy7t0g00rr7hva63hmwxuuv7nrj0
                  1000000utestcore --node=$CORED_NODE --chain-id=$CHAIN_ID
                </p>
                <p className={styles.createValidatorCreateNew1}>
                  # create-validator create new validator initialized with a
                  self-delegation to it
                </p>
                <p className={styles.delegate1}>
                  # delegate Delegate liquid tokens to a validator
                </p>
                <p className={styles.editValidator1}>
                  # edit-validator edit an existing validator account
                </p>
                <p className={styles.redelegate1}>
                  # redelegate Redelegate illiquid tokens from one validator to
                  another
                </p>
                <p className={styles.unbond1}>
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
        <div className={styles.copy9}>
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
                If output code is not 0, your transaction failed local
                validation and was not broadcasted. Fix the problem and run the
                command again.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PermissionGrantContainer;
