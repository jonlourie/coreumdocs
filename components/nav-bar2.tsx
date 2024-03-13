import type { NextPage } from "next";
import TypeDropdownStateExpanded from "./type-dropdown-state-expanded";
import styles from "./nav-bar2.module.css";

const NavBar2: NextPage = () => {
  return (
    <header className={styles.navBar}>
      <div className={styles.contentFrame}>
        <div className={styles.sidebarMenu}>
          <div className={styles.tab}>
            <div className={styles.search}>
              <img
                className={styles.searchChild}
                alt=""
                src="/group-6494.svg"
              />
              <div className={styles.divider}>
                <img
                  className={styles.coreumIcon}
                  loading="lazy"
                  alt=""
                  src="/coreum.svg"
                />
              </div>
              <div className={styles.docsLink}>
                <img className={styles.docsIcon} alt="" src="/docs.svg" />
              </div>
            </div>
          </div>
          <div className={styles.tabsContainer}>
            <div className={styles.tabLabel}>
              <div className={styles.body}>
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
              <div className={styles.tabDivider}>
                <div className={styles.divider1} />
              </div>
              <div className={styles.tabDivider1}>
                <img
                  className={styles.githubMark1Icon}
                  loading="lazy"
                  alt=""
                  src="/githubmark-1.svg"
                />
              </div>
              <div className={styles.tabDivider2}>
                <img
                  className={styles.xIcon}
                  loading="lazy"
                  alt=""
                  src="/x.svg"
                />
              </div>
              <div className={styles.tabDivider3}>
                <img
                  className={styles.igIcon}
                  loading="lazy"
                  alt=""
                  src="/ig.svg"
                />
              </div>
              <div className={styles.tabDivider4}>
                <img
                  className={styles.telegramIcon}
                  loading="lazy"
                  alt=""
                  src="/telegram.svg"
                />
              </div>
              <div className={styles.tabDivider5}>
                <img
                  className={styles.discordIcon}
                  loading="lazy"
                  alt=""
                  src="/discord.svg"
                />
              </div>
              <div className={styles.tabDivider6}>
                <img
                  className={styles.youtubeIcon}
                  loading="lazy"
                  alt=""
                  src="/youtube@2x.png"
                />
              </div>
              <div className={styles.tabDivider7}>
                <div className={styles.divider2} />
              </div>
              <div className={styles.search1}>
                <img
                  className={styles.iconsearch}
                  alt=""
                  src="/iconsearch.svg"
                />
                <input
                  className={styles.search2}
                  placeholder="Search"
                  type="text"
                />
              </div>
              <div className={styles.tabDivider8}>
                <div className={styles.divider3} />
              </div>
            </div>
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
      </div>
      <div className={styles.divider4} />
    </header>
  );
};

export default NavBar2;
