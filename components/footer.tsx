import type { NextPage } from "next";
import styles from "./footer.module.css";

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer1440}>
      <img
        className={styles.luminaScreenIcon}
        alt=""
        src="/lumina-screen@2x.png"
      />
      <div className={styles.left}>
        <div className={styles.leftColumn}>
          <div className={styles.frameParent}>
            <img className={styles.frameChild} alt="" src="/group-6494-1.svg" />
            <div className={styles.coreumWrapper}>
              <img className={styles.coreumIcon} alt="" src="/coreum-1.svg" />
            </div>
          </div>
          <div className={styles.socialMediaLinks}>
            <img className={styles.xIcon} alt="" src="/x-1.svg" />
            <img className={styles.igIcon} alt="" src="/ig-1.svg" />
            <img className={styles.telegramIcon} alt="" src="/telegram-1.svg" />
            <img className={styles.discordIcon} alt="" src="/discord-1.svg" />
            <img
              className={styles.youtubeIcon}
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
                    alt=""
                    src="/iconlink-1.svg"
                  />
                </div>
                <div className={styles.item1}>
                  <div className={styles.label2}>ISO Simulator</div>
                  <img
                    className={styles.iconlink1}
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
                    alt=""
                    src="/iconlink-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.frameContainerIcon}
        loading="lazy"
        alt=""
        src="/frame-42540.svg"
      />
    </footer>
  );
};

export default Footer;
