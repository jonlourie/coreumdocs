import type { NextPage } from "next";
import TypeDropdownStateExpanded from "./type-dropdown-state-expanded";
import styles from "./nav-bar.module.css";

const NavBar: NextPage = () => {
  return (
    <header className={styles.navBar}>
      <div className={styles.githubMark}>
        <div className={styles.xFrame}>
          <img className={styles.xFrameChild} alt="" src="/group-6494.svg" />
          <div className={styles.telegramFrame}>
            <img
              className={styles.coreumIcon}
              loading="lazy"
              alt=""
              src="/coreum.svg"
            />
          </div>
          <div className={styles.youtubeFrame}>
            <img
              className={styles.docsIcon}
              loading="lazy"
              alt=""
              src="/docs.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.searchBar}>
        <div className={styles.modeToggle}>
          <div className={styles.headlineText}>
            <TypeDropdownStateExpanded
              label="Join Coreum"
              iconArrow="/iconarrow.svg"
              typeDropdownStateExpandedPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
              typeDropdownStateExpandedAlignSelf="unset"
              typeDropdownStateExpandedGap="unset"
              typeDropdownStateExpandedBackgroundColor="unset"
              labelLineHeight="20px"
              labelColor="#868991"
              labelFontWeight="unset"
              labelFlex="unset"
              iconArrowWidth="20px"
              iconArrowHeight="20px"
              iconArrowMinHeight="20px"
            />
          </div>
          <div className={styles.dividerAndIcons}>
            <div className={styles.divider} />
          </div>
          <div className={styles.dividerAndIcons1}>
            <img
              className={styles.githubMark1Icon}
              loading="lazy"
              alt=""
              src="/githubmark-1.svg"
            />
          </div>
          <div className={styles.dividerAndIcons2}>
            <img className={styles.xIcon} loading="lazy" alt="" src="/x.svg" />
          </div>
          <div className={styles.dividerAndIcons3}>
            <img
              className={styles.igIcon}
              loading="lazy"
              alt=""
              src="/ig.svg"
            />
          </div>
          <div className={styles.dividerAndIcons4}>
            <img
              className={styles.telegramIcon}
              loading="lazy"
              alt=""
              src="/telegram.svg"
            />
          </div>
          <div className={styles.dividerAndIcons5}>
            <img
              className={styles.discordIcon}
              loading="lazy"
              alt=""
              src="/discord.svg"
            />
          </div>
          <div className={styles.dividerAndIcons6}>
            <img
              className={styles.youtubeIcon}
              loading="lazy"
              alt=""
              src="/youtube@2x.png"
            />
          </div>
          <div className={styles.dividerAndIcons7}>
            <div className={styles.divider1} />
          </div>
          <div className={styles.search}>
            <img className={styles.iconsearch} alt="" src="/iconsearch.svg" />
            <input
              className={styles.search1}
              placeholder="Search"
              type="text"
            />
          </div>
          <div className={styles.dividerAndIcons8}>
            <div className={styles.divider2} />
          </div>
        </div>
        <div className={styles.modeToggle1}>
          <div className={styles.lightMode}>
            <img className={styles.iconsun} alt="" src="/iconsun.svg" />
          </div>
          <div className={styles.darkMode}>
            <img className={styles.iconmoon} alt="" src="/iconmoon.svg" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
