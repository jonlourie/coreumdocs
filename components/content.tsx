import type { NextPage } from "next";
import styles from "./content.module.css";

const Content: NextPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <h1 className={styles.title1}>Smart Contracts</h1>
        <div className={styles.copy}>
          <p className={styles.akinToMost}>
            Akin to most modern blockchains, Coreum will be able to store and
            execute Smart Contracts.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.inEssenceSmart}>
            In essence, Smart Contracts are computer programs stored on a
            blockchain, which may be instantiated and executed to perform custom
            functions. That is to say, these functions are not included in the
            code of the blockchain itself, but are defined in a manner which
            enables the blockchain to execute them.
          </p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.coreumLeveragesWebassembly}>
            Coreum leverages WebAssembly (WASM) as the engine for Smart
            Contracts. WASM overcomes many of the shortcomings of other Smart
            Contract engines such as the Ethereum Virtual Machine, such as
            security flaws, data oversizing, and the necessary coupling with
            Solidity, the language in which Smart Contracts are written. Beyond
            WASM having noteworthy features such as its portability, efficiency,
            and turing completeness, it can also be accessed through other
            programming languages including C/C++, JavaScript/Typescript, Rust,
            Kotlin, and Go.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.copy1}>
          <h3 className={styles.header}>CosmWasm</h3>
          <div className={styles.copy2}>
            <p className={styles.cosmwasmIsThePlatformCoreu}>
              <span className={styles.cosmwasm}>CosmWasm</span>
              <span>
                {" "}
                is the platform Coreum uses to handle WASM Smart Contracts.
              </span>
            </p>
            <p className={styles.blankLine2}>&nbsp;</p>
            <p className={styles.itFormsAn}>
              It forms an important pillar of the Cosmos SDK, and has a number
              of advantages such as the ability to interact with Smart Contracts
              on different blockchains using the Inter-Blockchain Communication
              (IBC) protocol. This enables Smart Contracts stored on Coreum to
              enhance not only the functionality of Coreum itself, but all other
              blockchains in the Cosmos ecosystem that are compatible with
              CosmWasm Smart Contracts.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section1}>
        <div className={styles.copy3}>
          <h3 className={styles.header1}>Architecture</h3>
          <div className={styles.copy4}>
            <p className={styles.smartContractsProduceAndCo}>
              <span className={styles.smartContractsProduce}>
                Smart Contracts produce and consume messages. These messages
                follow what is commonly referred to as the 
              </span>
              <span className={styles.actorModel}>actor model</span>
              <span>
                , which means that they behave in a 'fire and forget' manner.
              </span>
            </p>
            <p className={styles.blankLine3}>&nbsp;</p>
            <p className={styles.inEffectThese}>
              In effect, these messages are designed to be synchronous in
              nature, this avoiding race-conditions and pitfalls of awaiting
              promises. Other advantages of this model are:
            </p>
            <ul className={styles.increasedSecuritySinceSma}>
              <li className={styles.increasedSecuritySinceSma1}>
                <span className={styles.increasedSecurity}>
                  Increased Security
                </span>
                <span>
                   - Since Smart Contracts are unable to call each other, it
                  avoids re-entrance attacks. Messages may be passed between
                  contracts, but they cannot directly call one another.
                </span>
              </li>
              <li className={styles.interBlockchainMessagingM}>
                <span className={styles.interBlockchainMessaging}>
                  Inter-Blockchain Messaging
                </span>
                <span className={styles.messagesCanBe}>
                   - Messages can be sent across blockchains through the IBC.
                </span>
              </li>
              <li>
                <span className={styles.easeOfSerialisation}>
                  Ease of Serialisation
                </span>
                <span className={styles.messagesCanBe1}>
                   - Messages can be easily serialized to a number of different
                  formats for easy integration with off-chain systems.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.copy5}>
          <h3 className={styles.header2}>Contract Flow</h3>
          <div className={styles.copy6}>
            The lifecycle of a Smart Contract can be split into three distinct
            phases:
          </div>
        </div>
        <div className={styles.subSection}>
          <div className={styles.copy7}>
            <div className={styles.contractCreation}>
              Contract Creation / Upload
            </div>
            <div className={styles.copy8}>
              Once the code for a Smart Contract is compiled into WASM binaries,
              they are optimised and uploaded to the blockchain. However,
              neither state nor a contract addresses exist at this stage.
            </div>
          </div>
        </div>
        <div className={styles.subSection1}>
          <div className={styles.copy9}>
            <div className={styles.contractInstantiation}>
              Contract Instantiation
            </div>
            <div className={styles.copy10}>
              The contract may then be instantiated with through a code
              reference as well as some initial state. This creates the address
              which identifies the contract. For reference, if this were an
              ERC20 Token Contract on an Ethereum Virtual Machine (EVM)
              blockchain, this is the stage at which information like the token
              name, symbol, etc. can be set.
            </div>
          </div>
        </div>
        <div className={styles.subSection2}>
          <div className={styles.copy11}>
            <div className={styles.contractExecution}>Contract execution</div>
            <div className={styles.copy12}>
              Each actor has exclusive access to its own internal state. This
              may support different calls, but they are all unprivileged; usage
              of previously instantiated contracts depends on the contract
              design.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.subSection3}>
          <h3 className={styles.header3}>CosmWasm Module</h3>
          <div className={styles.copy13}>
            Coreum makes use of a custom module for the purpose of processing
            WASM related messages in order to upload, instantiate, and execute
            Smart Contracts.
          </div>
        </div>
      </div>
      <div className={styles.section4}>
        <div className={styles.subSection4}>
          <h3 className={styles.header4}>Rust Language</h3>
          <div className={styles.copy14}>
            Although Smart Contracts may be written in a number of different
            languages as stated above, Rust remains the language of choice. This
            is due to Rust's characteristic memory model, which promotes the
            creation of memory-safe, fast, and lightweight byte code that is
            ideal for on-chain storage.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
