import type { NextPage } from "next";
import styles from "./footer2.module.css";

const Footer2: NextPage = () => {
  return (
    <footer className={styles.footer1441}>
      <div className={styles.divider} />
      <img
        className={styles.luminaScreenIcon}
        alt=""
        src="/lumina-screen2@2x.png"
      />
      <div className={styles.left}>
        <div className={styles.group}>
          <div className={styles.frameParent}>
            <img className={styles.frameChild} alt="" src="/group-6494-1.svg" />
            <div className={styles.vector}>
              <img
                className={styles.coreumIcon}
                loading="lazy"
                alt=""
                src="/coreum-1.svg"
              />
            </div>
          </div>
          <div className={styles.x}>
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

export default Footer2;
