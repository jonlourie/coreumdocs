import type { NextPage } from "next";
import styles from "./validator-list-container.module.css";

const ValidatorListContainer: NextPage = () => {
  return (
    <div className={styles.list}>
      <div className={styles.card}>
        <div className={styles.copy}>
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
        <div className={styles.copy1}>
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
              # redelegate Redelegate illiquid tokens from one validator to
              another
            </p>
            <p className={styles.unbond}>
              # unbond Unbond shares from a validator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidatorListContainer;
