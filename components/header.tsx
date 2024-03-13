import type { NextPage } from "next";
import TypeDropdownStateExpanded from "./type-dropdown-state-expanded";
import styles from "./header.module.css";

const Header: NextPage = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.menu}>
        <div className={styles.coreumdocsLogo}>
          <div className={styles.docsParent}>
            <img className={styles.docsIcon} alt="" src="/docs.svg" />
            <img className={styles.coreumIcon} alt="" src="/coreum.svg" />
            <img className={styles.groupChild} alt="" src="/group-6494.svg" />
          </div>
        </div>
      </div>
      <div className={styles.menu1}>
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
          iconArrowMinHeight="unset"
        />
        <div className={styles.divider} />
        <img
          className={styles.githubMark1Icon}
          alt=""
          src="/githubmark-1.svg"
        />
        <img className={styles.xIcon} alt="" src="/x.svg" />
        <img className={styles.igIcon} alt="" src="/ig.svg" />
        <img className={styles.telegramIcon} alt="" src="/telegram.svg" />
        <img className={styles.discordIcon} alt="" src="/discord.svg" />
        <img className={styles.youtubeIcon} alt="" src="/youtube@2x.png" />
        <div className={styles.divider1} />
        <div className={styles.search}>
          <img className={styles.iconsearch} alt="" src="/iconsearch.svg" />
          <div className={styles.search1}>Search</div>
        </div>
        <div className={styles.divider2} />
        <div className={styles.modeToggle}>
          <div className={styles.lightMode}>
            <img className={styles.iconsun} alt="" src="/iconsun.svg" />
          </div>
          <div className={styles.darkMode}>
            <img className={styles.iconmoon} alt="" src="/iconmoon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
