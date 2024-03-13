import type { NextPage } from "next";
import styles from "./content3.module.css";

const Content3: NextPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.introduction}>
        <h1 className={styles.apiList}>API List</h1>
        <div className={styles.card}>
          <div className={styles.copy}>
            <img
              className={styles.errorHandlerIcon}
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
            <div className={styles.coreum}>Coreum:</div>
          </div>
          <div className={styles.cards}>
            <input className={styles.card1} placeholder="Asset" type="text" />
            <input
              className={styles.card2}
              placeholder="Custom Params"
              type="text"
            />
            <input className={styles.card3} placeholder="Delay" type="text" />
            <input
              className={styles.card4}
              placeholder="Fee Model"
              type="text"
            />
            <input className={styles.card5} placeholder="NFT" type="text" />
          </div>
        </div>
      </div>
      <div className={styles.card6}>
        <div className={styles.copy1}>
          <img
            className={styles.cliLogoIcon}
            loading="lazy"
            alt=""
            src="/cli-logo.svg"
          />
          <div className={styles.amino}>Amino:</div>
        </div>
        <div className={styles.wrapperCards}>
          <input
            className={styles.cards1}
            placeholder="Amino.proto"
            type="text"
          />
          <div className={styles.card7}>
            <div className={styles.outputHandler}>
              <div className={styles.aminoproto}>Amino.proto</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.card8}>
        <div className={styles.copy2}>
          <img
            className={styles.cosmosLogoIcon}
            loading="lazy"
            alt=""
            src="/cosmos-logo@2x.png"
          />
          <div className={styles.cosmos}>Cosmos:</div>
        </div>
        <div className={styles.cards2}>
          <input className={styles.card9} placeholder="App" type="text" />
          <input className={styles.card10} placeholder="Auth" type="text" />
          <input
            className={styles.card11}
            placeholder="Authorization"
            type="text"
          />
          <input className={styles.card12} placeholder="Auto CLI" type="text" />
          <input className={styles.card13} placeholder="Bank" type="text" />
          <input className={styles.card14} placeholder="Base" type="text" />
          <input
            className={styles.card15}
            placeholder="Capability"
            type="text"
          />
          <input
            className={styles.card16}
            placeholder="Consensus"
            type="text"
          />
          <input className={styles.card17} placeholder="Crisis" type="text" />
          <input className={styles.card18} placeholder="Crypto" type="text" />
          <input
            className={styles.card19}
            placeholder="Distribution"
            type="text"
          />
          <input className={styles.card20} placeholder="Evidence" type="text" />
          <input
            className={styles.card21}
            placeholder="Fee Grant"
            type="text"
          />
          <input
            className={styles.card22}
            placeholder="Genesis Utility"
            type="text"
          />
          <input
            className={styles.card23}
            placeholder="Governance"
            type="text"
          />
          <input className={styles.card24} placeholder="Group" type="text" />
          <input className={styles.card25} placeholder="Mint" type="text" />
          <input className={styles.card26} placeholder="Message" type="text" />
          <input className={styles.card27} placeholder="ORM" type="text" />
          <input className={styles.card28} placeholder="Params" type="text" />
          <input className={styles.card29} placeholder="Query" type="text" />
          <input
            className={styles.card30}
            placeholder="Reflection"
            type="text"
          />
          <input className={styles.card31} placeholder="Slashing" type="text" />
          <input className={styles.card32} placeholder="Staking" type="text" />
          <input
            className={styles.card33}
            placeholder="Transaction"
            type="text"
          />
          <input className={styles.card34} placeholder="Upgrade" type="text" />
          <input className={styles.card35} placeholder="VEsting" type="text" />
        </div>
      </div>
      <div className={styles.card36}>
        <div className={styles.copy3}>
          <img
            className={styles.copyChild}
            loading="lazy"
            alt=""
            src="/group-1597883278.svg"
          />
          <div className={styles.tendermint}>Tendermint:</div>
        </div>
        <div className={styles.cards3}>
          <input
            className={styles.card37}
            placeholder="ABCI - Application Blockchain Interface"
            type="text"
          />
          <input className={styles.card38} placeholder="Crypto" type="text" />
          <input className={styles.card39} placeholder="Libs" type="text" />
          <input className={styles.card40} placeholder="P2P" type="text" />
          <input className={styles.card41} placeholder="Types" type="text" />
          <input className={styles.card42} placeholder="Version" type="text" />
        </div>
      </div>
      <div className={styles.card43}>
        <div className={styles.copy4}>
          <img
            className={styles.copyItem}
            loading="lazy"
            alt=""
            src="/group-1597883278-1@2x.png"
          />
          <div className={styles.cosmwasm}>CosmWasm</div>
        </div>
        <div className={styles.cards4}>
          <div className={styles.card44}>
            <div className={styles.wasmWrapper}>
              <div className={styles.wasm}>WASM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content3;
