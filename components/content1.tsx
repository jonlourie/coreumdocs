import type { NextPage } from "next";
import Feature from "./feature";
import styles from "./content1.module.css";

const Content1: NextPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.introduction}>
        <h1 className={styles.systemRequirements}>System Requirements</h1>
        <div className={styles.section}>
          <div className={styles.copy}>
            <h3 className={styles.header}>Mainnet</h3>
            <div className={styles.copy1}>
              <div className={styles.card}>
                <div className={styles.copy2}>
                  <div className={styles.warning}>Warning</div>
                  <div className={styles.useOnlySsd}>
                    Use only SSD or NVMe hard drives, directly attached to the
                    motherboard.
                  </div>
                </div>
              </div>
              <div className={styles.copy3}>
                <p className={styles.recommendedRequirement}>
                  Recommended requirement - to use a dedicated bare-metal server
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.ifYouUse}>
                  If you use Cloud Computing Instance, ensure that your SSD disk
                  is directly attached to the motherboard. Otherwise, you might
                  experience IO delay and risk to be jailed of not signing
                  blocks.
                </p>
              </div>
              <div className={styles.comparisonTable}>
                <div className={styles.feature}>
                  <div className={styles.rowTitle}>
                    <div className={styles.copy4}>Node Type</div>
                  </div>
                  <div className={styles.rowTitle1}>
                    <div className={styles.copy5}>Cores</div>
                  </div>
                  <div className={styles.rowTitle2}>
                    <div className={styles.copy6}>RAM</div>
                  </div>
                  <div className={styles.rowTitle3}>
                    <div className={styles.copy7}>Storage</div>
                  </div>
                  <div className={styles.rowTitle4}>
                    <div className={styles.copy8}>Internet Connection</div>
                  </div>
                </div>
                <Feature
                  copy="Validator"
                  copy1="8"
                  copy2="64GB"
                  copy3="500GB - 2TB"
                />
                <Feature
                  copy="Full"
                  copy1="4"
                  copy2="32GB"
                  copy3="2TB"
                  propWidth="144px"
                  propFlex="1"
                />
                <Feature
                  copy="Default"
                  copy1="4"
                  copy2="32GB"
                  copy3="1TB"
                  propWidth="144px"
                  propFlex="1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copy9}>
        <h3 className={styles.header1}>Testnet</h3>
        <div className={styles.copy10}>
          <div className={styles.comparisonTable1}>
            <div className={styles.feature1}>
              <div className={styles.rowTitle5}>
                <div className={styles.copy11}>Node Type</div>
              </div>
              <div className={styles.rowTitle6}>
                <div className={styles.copy12}>Cores</div>
              </div>
              <div className={styles.rowTitle7}>
                <div className={styles.copy13}>RAM</div>
              </div>
              <div className={styles.rowTitle8}>
                <div className={styles.copy14}>Storage</div>
              </div>
              <div className={styles.rowTitle9}>
                <div className={styles.copy15}>Internet Connection</div>
              </div>
            </div>
            <Feature
              copy="Validator"
              copy1="2"
              copy2="16GB"
              copy3="500GB"
              propWidth="144px"
              propFlex="1"
            />
            <Feature
              copy="Full"
              copy1="2"
              copy2="16GB"
              copy3="500GB"
              propWidth="144px"
              propFlex="1"
            />
            <Feature
              copy="Default"
              copy1="2"
              copy2="16GB"
              copy3="500GB"
              propWidth="144px"
              propFlex="1"
            />
          </div>
        </div>
      </div>
      <div className={styles.introduction1}>
        <div className={styles.section1}>
          <div className={styles.copy16}>
            <h3 className={styles.header2}>Devnet</h3>
            <div className={styles.copy17}>
              <div className={styles.copy18}>
                <p className={styles.toEaseMaintenance}>
                  To ease maintenance efforts, we decided to support only amd64
                  architecture.
                </p>
                <p className={styles.blankLine1}>&nbsp;</p>
                <p className={styles.alsoWeRecommend}>
                  Also, we recommend you using testnet, since it is more stable.
                </p>
              </div>
              <div className={styles.comparisonTable2}>
                <div className={styles.feature2}>
                  <div className={styles.rowTitle10}>
                    <div className={styles.copy19}>Node Type</div>
                  </div>
                  <div className={styles.rowTitle11}>
                    <div className={styles.copy20}>Cores</div>
                  </div>
                  <div className={styles.rowTitle12}>
                    <div className={styles.copy21}>RAM</div>
                  </div>
                  <div className={styles.rowTitle13}>
                    <div className={styles.copy22}>Storage</div>
                  </div>
                  <div className={styles.rowTitle14}>
                    <div className={styles.copy23}>Internet Connection</div>
                  </div>
                </div>
                <Feature
                  copy="Validator"
                  copy1="2"
                  copy2="16GB"
                  copy3="100GB"
                  propWidth="144px"
                  propFlex="1"
                />
                <Feature
                  copy="Full"
                  copy1="2"
                  copy2="16GB"
                  copy3="100GB"
                  propWidth="144px"
                  propFlex="1"
                />
                <Feature
                  copy="Default"
                  copy1="2"
                  copy2="16GB"
                  copy3="100GB"
                  propWidth="144px"
                  propFlex="1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
