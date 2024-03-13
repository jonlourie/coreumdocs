import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./card1.module.css";

export type Card1Type = {
  cLILogo?: string;
  cLI?: string;
  transferFundsWithCLI?: string;
  sendMultisigTransaction?: string;
  smartFTWithAccessControlL?: string;
  ledgerNanoWithCLISupportA?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
  propWidth3?: CSSProperties["width"];
  propWidth4?: CSSProperties["width"];
};

const Card1: NextPage<Card1Type> = ({
  cLILogo,
  cLI,
  transferFundsWithCLI,
  sendMultisigTransaction,
  smartFTWithAccessControlL,
  ledgerNanoWithCLISupportA,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
  propWidth4,
}) => {
  const cLIStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const usingCosmJSWithStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  return (
    <div className={styles.card}>
      <div className={styles.copy}>
        <img
          className={styles.cliLogoIcon}
          loading="lazy"
          alt=""
          src={cLILogo}
        />
        <div className={styles.cli} style={cLIStyle}>
          {cLI}
        </div>
      </div>
      <div className={styles.cards}>
        <input
          className={styles.card1}
          placeholder="Transfer funds with CLI"
          type="text"
        />
        <input
          className={styles.card2}
          placeholder="Send multisig Transaction"
          type="text"
        />
        <input
          className={styles.card3}
          placeholder="Smart FT with Access Control List (ACL)"
          type="text"
        />
        <input
          className={styles.card4}
          placeholder="Ledger Nano with CLI: Support and Usage"
          type="text"
        />
      </div>
    </div>
  );
};

export default Card1;
