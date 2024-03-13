import type { NextPage } from "next";
import styles from "./o-s-compatibility-section.module.css";

export type OSCompatibilitySectionType = {
  osInstructions?: string;
  osSpecificInstructions?: string;
};

const OSCompatibilitySection: NextPage<OSCompatibilitySectionType> = ({
  osInstructions,
  osSpecificInstructions,
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.copy}>
        <div className={styles.header}>{osInstructions}</div>
        <div className={styles.copy1}>
          <div className={styles.copy2}>
            <p className={styles.noteThisOption}>{osSpecificInstructions}</p>
            <ul className={styles.verifyThatNetworkVariables}>
              <li className={styles.verifyThatNetworkVariables1}>
                <span>Verify that </span>
                <span className={styles.networkVariables}>
                  network variables
                </span>
                <span className={styles.areSetUp}> are set up correctly.</span>
              </li>
              <li>
                <span className={styles.createAProper}>
                  Create a proper folder structure for cored.
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <div className={styles.card}>
              <div className={styles.copy3}>
                <div className={styles.div}>1</div>
              </div>
              <img className={styles.dividerIcon} alt="" src="/divider.svg" />
              <div className={styles.copy4}>
                <div className={styles.mkdirPCoreumHomebinContainer}>
                  <span className={styles.mkdir}>mkdir</span>
                  <span>{` `}</span>
                  <span className={styles.pCoreumHome}>-p $COREUM_HOME</span>
                  <span>/bin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copy5}>
        <div className={styles.copy6}>
          <ul className={styles.installTheRequiredUtilCur}>
            <li className={styles.installTheRequired}>
              Install the required util: curl.
            </li>
            <li>Download cored and put it in the required folder.</li>
          </ul>
        </div>
        <div className={styles.list1}>
          <div className={styles.card1}>
            <div className={styles.copy7}>
              <div className={styles.div1}>
                <p className={styles.p}>1</p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.p1}>2</p>
              </div>
            </div>
            <img className={styles.dividerIcon1} alt="" src="/divider.svg" />
            <div className={styles.copy8}>
              <div className={styles.curlLoHttpsgithubcomcoContainer}>
                <p className={styles.curlLoHttpsgithubcomco}>
                  <span className={styles.curl}>{`curl `}</span>
                  <span className={styles.lo}>-LO</span>
                  <span className={styles.span}>{` `}</span>
                  <span>
                    https://github.com/CoreumFoundation/coreum/releases/download/
                  </span>
                  <span className={styles.coreumVersioncoreumBinary}>
                    $COREUM_VERSION/$COREUM_BINARY_NAME
                  </span>
                </p>
                <p className={styles.mvCoreumBinaryNameCoreum}>
                  <span className={styles.mv}>{`mv `}</span>
                  <span>$COREUM_BINARY_NAME $COREUM_HOME</span>
                  <span className={styles.bincored}>/bin/cored</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copy9}>
        <div className={styles.copy10}>
          <ul className={styles.ifYouAreGetting404ErrorA}>
            <li>If you are getting 404 error at this step, run:</li>
          </ul>
        </div>
        <div className={styles.list2}>
          <div className={styles.card2}>
            <div className={styles.copy11}>
              <div className={styles.div2}>
                <p className={styles.p2}>1</p>
                <p className={styles.blankLine1}>&nbsp;</p>
                <p className={styles.p3}>2</p>
              </div>
            </div>
            <img className={styles.dividerIcon2} alt="" src="/divider.svg" />
            <div className={styles.copy12}>
              <div className={styles.curlLoHttpsgithubcomcoContainer1}>
                <p className={styles.curlLoHttpsgithubcomco1}>
                  <span className={styles.curl1}>{`curl `}</span>
                  <span className={styles.lo1}>-LO</span>
                  <span className={styles.span1}>{` `}</span>
                  <span>
                    https://github.com/CoreumFoundation/coreum/releases/download/
                  </span>
                  <span className={styles.coreumVersioncoreumBinary1}>
                    $COREUM_VERSION/$COREUM_BINARY_NAME
                  </span>
                </p>
                <p className={styles.mvCoreumBinaryNameCoreum1}>
                  <span className={styles.mv1}>{`mv `}</span>
                  <span>$COREUM_BINARY_NAME $COREUM_HOME</span>
                  <span className={styles.bincored1}>/bin/cored</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copy13}>
          <a
            className={styles.releasesopenInNew}
            href="https://github.com/CoreumFoundation/coreum/releases"
            target="_blank"
          >
            releasesopen in new window
          </a>
        </div>
      </div>
    </div>
  );
};

export default OSCompatibilitySection;
