import type { NextPage } from "next";
import styles from "./bottom-footer.module.css";

export type BottomFooterType = {
  imageDimensionsCode?: string;
};

const BottomFooter: NextPage<BottomFooterType> = ({ imageDimensionsCode }) => {
  return (
    <div className={styles.footer1441}>
      <img
        className={styles.luminaScreenIcon}
        alt=""
        src={imageDimensionsCode}
      />
      <div className={styles.left}>
        <div className={styles.sm}>
          <div className={styles.logo}>
            <img className={styles.coreumIcon} alt="" src="/coreum-1.svg" />
            <img className={styles.logoChild} alt="" src="/group-6494-1.svg" />
          </div>
          <div className={styles.icons}>
            <img className={styles.xIcon} alt="" src="/x-1.svg" />
            <img className={styles.igIcon} alt="" src="/ig-1.svg" />
            <img className={styles.telegramIcon} alt="" src="/telegram-1.svg" />
            <img className={styles.discordIcon} alt="" src="/discord-1.svg" />
            <img
              className={styles.youtubeIcon}
              alt=""
              src="/youtube-1@2x.png"
            />
            <img className={styles.mediumIcon} alt="" src="/medium.svg" />
          </div>
        </div>
        <div className={styles.disclaimer}>
          <div className={styles.coreumDevelopmentFoundation}>
            © 2021 - 2024 Coreum Development Foundation Limited. All rights
            reserved
          </div>
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
    </div>
  );
};

export default BottomFooter;
