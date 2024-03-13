import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import TypeDropdownStateExpanded from "./type-dropdown-state-expanded";
import styles from "./nav-bar3.module.css";

export type NavBar3Type = {
  /** Style props */
  leafNodeHeight?: CSSProperties["height"];
  propBorderTop?: CSSProperties["borderTop"];
};

const NavBar3: NextPage<NavBar3Type> = ({ leafNodeHeight, propBorderTop }) => {
  const navBarStyle: CSSProperties = useMemo(() => {
    return {
      height: leafNodeHeight,
    };
  }, [leafNodeHeight]);

  const dividerStyle: CSSProperties = useMemo(() => {
    return {
      borderTop: propBorderTop,
    };
  }, [propBorderTop]);

  return (
    <header className={styles.navBar} style={navBarStyle}>
      <div className={styles.leafNode}>
        <div className={styles.parentNode}>
          <div className={styles.siblingNodes}>
            <div className={styles.childNodes}>
              <img
                className={styles.childNodesChild}
                alt=""
                src="/group-6494.svg"
              />
              <div className={styles.isolatedNode}>
                <img
                  className={styles.coreumIcon}
                  loading="lazy"
                  alt=""
                  src="/coreum.svg"
                />
              </div>
              <div className={styles.descendantNodes}>
                <img className={styles.docsIcon} alt="" src="/docs.svg" />
              </div>
            </div>
          </div>
          <div className={styles.uncleNodes}>
            <div className={styles.auntNodes}>
              <div className={styles.ancestorOnceRemovedNodes}>
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
              <div className={styles.nephewNodes}>
                <div className={styles.divider} />
              </div>
              <div className={styles.nephewNodes1}>
                <img
                  className={styles.githubMark1Icon}
                  loading="lazy"
                  alt=""
                  src="/githubmark-1.svg"
                />
              </div>
              <div className={styles.nephewNodes2}>
                <img
                  className={styles.xIcon}
                  loading="lazy"
                  alt=""
                  src="/x.svg"
                />
              </div>
              <div className={styles.nephewNodes3}>
                <img
                  className={styles.igIcon}
                  loading="lazy"
                  alt=""
                  src="/ig.svg"
                />
              </div>
              <div className={styles.nephewNodes4}>
                <img
                  className={styles.telegramIcon}
                  loading="lazy"
                  alt=""
                  src="/telegram.svg"
                />
              </div>
              <div className={styles.nephewNodes5}>
                <img
                  className={styles.discordIcon}
                  loading="lazy"
                  alt=""
                  src="/discord.svg"
                />
              </div>
              <div className={styles.nephewNodes6}>
                <img
                  className={styles.youtubeIcon}
                  loading="lazy"
                  alt=""
                  src="/youtube@2x.png"
                />
              </div>
              <div className={styles.nephewNodes7}>
                <div className={styles.divider1} />
              </div>
              <div className={styles.search}>
                <img
                  className={styles.iconsearch}
                  alt=""
                  src="/iconsearch.svg"
                />
                <input
                  className={styles.search1}
                  placeholder="Search"
                  type="text"
                />
              </div>
              <div className={styles.nephewNodes8}>
                <div className={styles.divider2} />
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
      <div className={styles.divider3} style={dividerStyle} />
    </header>
  );
};

export default NavBar3;
