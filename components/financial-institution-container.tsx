import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./financial-institution-container.module.css";

export type FinancialInstitutionContainerType = {
  financialInstitutionName?: string;
  institutionCoordinates?: string;
  transactionParticipant?: string;
  uniqueIdentifier?: string;
  institutionDimensions?: string;
  institutionId?: string;
  transactionAmount?: string;

  /** Style props */
  propOpacity?: CSSProperties["opacity"];
  propBorderRadius?: CSSProperties["borderRadius"];
};

const FinancialInstitutionContainer: NextPage<
  FinancialInstitutionContainerType
> = ({
  financialInstitutionName,
  institutionCoordinates,
  transactionParticipant,
  uniqueIdentifier,
  institutionDimensions,
  institutionId,
  transactionAmount,
  propOpacity,
  propBorderRadius,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  const cadIconStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.financialInstitutionBParent}>
        <div className={styles.financialInstitutionB}>
          {financialInstitutionName}
        </div>
        <img
          className={styles.cadIcon}
          alt=""
          src={institutionCoordinates}
          style={cadIconStyle}
        />
        <div className={styles.baseLayer}>
          <div className={styles.destination}>{transactionParticipant}</div>
        </div>
      </div>
      <div className={styles.seperator1} />
      <div className={styles.steps}>
        <div className={styles.frameGroup}>
          <div className={styles.createWalletParent}>
            <div className={styles.createWallet}>Create Wallet</div>
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.walletAddressParent}>
            <div className={styles.walletAddress}>Wallet Address</div>
            <div className={styles.stateLayer}>
              <div className={styles.testcoreefa60d747eb5d7sqeu1hkk}>
                {uniqueIdentifier}
              </div>
              <img
                className={styles.iconcopyInactive}
                alt=""
                src={institutionDimensions}
              />
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.fundWalletParent}>
            <div className={styles.fundWallet}>Fund Wallet</div>
            <img className={styles.frameItem} alt="" />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.coreBalanceParent}>
              <div className={styles.coreBalance}>CORE Balance</div>
              <div className={styles.stateLayer1}>
                <img className={styles.originalIcon} alt="" />
                <div className={styles.div}>100.00</div>
              </div>
            </div>
            <div className={styles.usdBalanceParent}>
              <div className={styles.usdBalance}>USD Balance</div>
              <div className={styles.stateLayer2}>
                <img className={styles.usdIcon} alt="" src={institutionId} />
                <div className={styles.div1}>{transactionAmount}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.generateKeysParent}>
            <div className={styles.generateKeys}>Generate Keys</div>
            <img className={styles.frameInner} alt="" />
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.publicKeyParent}>
              <div className={styles.publicKey}>Public Key</div>
              <div className={styles.stateLayer3}>
                <div className={styles.viewDetails}>View Details</div>
              </div>
            </div>
            <div className={styles.privateKeyParent}>
              <div className={styles.privateKey}>Private Key</div>
              <div className={styles.stateLayer4}>
                <div className={styles.viewDetails1}>View Details</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialInstitutionContainer;
