import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./footer3.module.css";

export type Footer3Type = {
  luminaScreen?: string;

  /** Style props */
  propBorderTop?: CSSProperties["borderTop"];
};

const Footer3: NextPage<Footer3Type> = ({ luminaScreen, propBorderTop }) => {
  const divider1Style: CSSProperties = useMemo(() => {
    return {
      borderTop: propBorderTop,
    };
  }, [propBorderTop]);

  return (
    <footer className={styles.footer1441}>
      <div className={styles.divider} style={divider1Style} />
      <img className={styles.luminaScreenIcon} alt="" src={luminaScreen} />
      <div className={styles.left}>
        <div className={styles.dataValidator}>
          <div className={styles.dataVerifier}>
            <img
              className={styles.dataVerifierChild}
              alt=""
              src="/group-6494-1.svg"
            />
            <div className={styles.dataSecurity}>
              <img
                className={styles.coreumIcon}
                loading="lazy"
                alt=""
                src="/coreum-1.svg"
              />
            </div>
          </div>
          <div className={styles.dataRestore}>
            <img
              className={styles.xIcon}
              loading="lazy"
              alt=""
              src="/x-1.svg"
            />
            <img
              className={styles.igIcon}
              loading="lazy"
              alt=""
              src="/ig-1.svg"
            />
            <img
              className={styles.telegramIcon}
              loading="lazy"
              alt=""
              src="/telegram-1.svg"
            />
            <img
              className={styles.discordIcon}
              loading="lazy"
              alt=""
              src="/discord-1.svg"
            />
            <img
              className={styles.youtubeIcon}
              loading="lazy"
              alt=""
              src="/youtube-1@2x.png"
            />
            <img
              className={styles.mediumIcon}
              loading="lazy"
              alt=""
              src="/medium.svg"
            />
          </div>
        </div>
        <div className={styles.coreumDevelopmentFoundation}>
          © 2021 - 2024 Coreum Development Foundation Limited. All rights
          reserved
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.sitemap}>
          <div className={styles.bottom}>
            <div className={styles.resources}>
              <div className={styles.label}>Products</div>
              <div className={styles.tabs}>
                <div className={styles.item}>
                  <div className={styles.label1}>Explorer</div>
                  <img
                    className={styles.iconlink}
                    loading="lazy"
                    alt=""
                    src="/iconlink-1.svg"
                  />
                </div>
                <div className={styles.item1}>
                  <div className={styles.label2}>ISO Simulator</div>
                  <img
                    className={styles.iconlink1}
                    loading="lazy"
                    alt=""
                    src="/iconlink-1.svg"
                  />
                </div>
                <div className={styles.item2}>
                  <div className={styles.label3}>Developer Playground</div>
                  <img
                    className={styles.iconlink2}
                    alt=""
                    src="/iconlink-1.svg"
                  />
                </div>
                <div className={styles.item3}>
                  <div className={styles.label4}>Whitepaper</div>
                  <img
                    className={styles.iconlink3}
                    loading="lazy"
                    alt=""
                    src="/iconlink-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
