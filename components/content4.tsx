import type { NextPage } from "next";
import Feature1 from "./feature1";
import styles from "./content4.module.css";

const Content4: NextPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.introduction}>
        <h1 className={styles.coreumassetft}>coreum/asset/ft</h1>
        <div className={styles.section}>
          <div className={styles.copy}>
            <h3 className={styles.header}>authz.proto</h3>
          </div>
          <div className={styles.copy1}>
            <div className={styles.subSection}>
              <div className={styles.copy2}>
                <div className={styles.burnauthorization}>
                  BurnAuthorization
                </div>
                <div className={styles.copy3}>
                  BurnAuthorization allows the grantee to burn up to burn_limit
                  coin from the granter's account.
                </div>
              </div>
            </div>
            <div className={styles.table}>
              <div className={styles.feature}>
                <div className={styles.rowTitle}>
                  <div className={styles.copy4}>Field</div>
                </div>
                <div className={styles.rowTitle1}>
                  <div className={styles.copy5}>Type</div>
                </div>
                <div className={styles.rowTitle2}>
                  <div className={styles.copy6}>Label</div>
                </div>
                <div className={styles.rowTitle3}>
                  <div className={styles.copy7}>Description</div>
                </div>
              </div>
              <div className={styles.feature1}>
                <div className={styles.value}>
                  <div className={styles.highlightCommand}>
                    <div className={styles.label}>burn_limit</div>
                  </div>
                </div>
                <div className={styles.value1}>
                  <div className={styles.copy8}>cosmos.base.v1beta1.Coin</div>
                </div>
                <div className={styles.value2}>
                  <div className={styles.copy9}>repeated</div>
                </div>
                <div className={styles.value3}>
                  <div className={styles.copy10}>--</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.copy11}>
            <div className={styles.subSection1}>
              <div className={styles.copy12}>
                <div className={styles.mintauthorization}>
                  MintAuthorization
                </div>
                <div className={styles.copy13}>
                  MintAuthorization allows the grantee to mint up to mint_limit
                  coin from the granter's account.
                </div>
              </div>
            </div>
            <div className={styles.table1}>
              <div className={styles.feature2}>
                <div className={styles.rowTitle4}>
                  <div className={styles.copy14}>Field</div>
                </div>
                <div className={styles.rowTitle5}>
                  <div className={styles.copy15}>Type</div>
                </div>
                <div className={styles.rowTitle6}>
                  <div className={styles.copy16}>Label</div>
                </div>
                <div className={styles.rowTitle7}>
                  <div className={styles.copy17}>Description</div>
                </div>
              </div>
              <div className={styles.feature3}>
                <div className={styles.value4}>
                  <div className={styles.highlightCommand1}>
                    <div className={styles.label1}>mint_limit</div>
                  </div>
                </div>
                <div className={styles.value5}>
                  <div className={styles.copy18}>cosmos.base.v1beta1.Coin</div>
                </div>
                <div className={styles.value6}>
                  <div className={styles.copy19}>repeated</div>
                </div>
                <div className={styles.value7}>
                  <div className={styles.copy20}>--</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section1}>
        <div className={styles.copy21}>
          <h3 className={styles.header1}>event.proto</h3>
        </div>
        <div className={styles.copy22}>
          <div className={styles.subSection2}>
            <div className={styles.copy23}>
              <div className={styles.eventfrozenamountchanged}>
                EventFrozenAmountChanged
              </div>
            </div>
          </div>
          <div className={styles.table2}>
            <div className={styles.feature4}>
              <div className={styles.rowTitle8}>
                <div className={styles.copy24}>Field</div>
              </div>
              <div className={styles.rowTitle9}>
                <div className={styles.copy25}>Type</div>
              </div>
              <div className={styles.rowTitle10}>
                <div className={styles.copy26}>Label</div>
              </div>
              <div className={styles.rowTitle11}>
                <div className={styles.copy27}>Description</div>
              </div>
            </div>
            <Feature1 valuePlaceholder="burn_limit" label="burn_limit" />
            <div className={styles.feature5}>
              <div className={styles.value8}>
                <div className={styles.highlightCommand2}>
                  <div className={styles.label2}>denom</div>
                </div>
              </div>
              <div className={styles.value9}>
                <div className={styles.copy28}>string</div>
              </div>
              <div className={styles.value10}>
                <div className={styles.copy29}>--</div>
              </div>
              <div className={styles.value11}>
                <div className={styles.copy30}>--</div>
              </div>
            </div>
            <div className={styles.feature6}>
              <div className={styles.value12}>
                <div className={styles.highlightCommand3}>
                  <div className={styles.label3}>previous_amount</div>
                </div>
              </div>
              <div className={styles.value13}>
                <div className={styles.copy31}>string</div>
              </div>
              <div className={styles.value14}>
                <div className={styles.copy32}>--</div>
              </div>
              <div className={styles.value15}>
                <div className={styles.copy33}>--</div>
              </div>
            </div>
            <div className={styles.feature7}>
              <div className={styles.value16}>
                <div className={styles.highlightCommand4}>
                  <div className={styles.label4}>current_amount</div>
                </div>
              </div>
              <div className={styles.value17}>
                <div className={styles.copy34}>string</div>
              </div>
              <div className={styles.value18}>
                <div className={styles.copy35}>--</div>
              </div>
              <div className={styles.value19}>
                <div className={styles.copy36}>--</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copy37}>
          <div className={styles.subSection3}>
            <div className={styles.copy38}>
              <div className={styles.eventissued}>EventIssued</div>
              <div className={styles.copy39}>
                EventIssued is emitted on MsgIssue.
              </div>
            </div>
          </div>
          <div className={styles.table3}>
            <div className={styles.feature8}>
              <div className={styles.rowTitle12}>
                <div className={styles.copy40}>Field</div>
              </div>
              <div className={styles.rowTitle13}>
                <div className={styles.copy41}>Type</div>
              </div>
              <div className={styles.rowTitle14}>
                <div className={styles.copy42}>Label</div>
              </div>
              <div className={styles.rowTitle15}>
                <div className={styles.copy43}>Description</div>
              </div>
            </div>
            <div className={styles.feature9}>
              <div className={styles.value20}>
                <div className={styles.highlightCommand5}>
                  <div className={styles.label5}>denom</div>
                </div>
              </div>
              <div className={styles.value21}>
                <div className={styles.copy44}>string</div>
              </div>
              <div className={styles.value22}>
                <div className={styles.copy45}>--</div>
              </div>
              <div className={styles.value23}>
                <div className={styles.copy46}>--</div>
              </div>
            </div>
            <div className={styles.feature10}>
              <div className={styles.value24}>
                <div className={styles.highlightCommand6}>
                  <div className={styles.label6}>issuer</div>
                </div>
              </div>
              <div className={styles.value25}>
                <div className={styles.copy47}>string</div>
              </div>
              <div className={styles.value26}>
                <div className={styles.copy48}>--</div>
              </div>
              <div className={styles.value27}>
                <div className={styles.copy49}>--</div>
              </div>
            </div>
            <div className={styles.feature11}>
              <div className={styles.value28}>
                <div className={styles.highlightCommand7}>
                  <div className={styles.label7}>symbol</div>
                </div>
              </div>
              <div className={styles.value29}>
                <div className={styles.copy50}>string</div>
              </div>
              <div className={styles.value30}>
                <div className={styles.copy51}>--</div>
              </div>
              <div className={styles.value31}>
                <div className={styles.copy52}>--</div>
              </div>
            </div>
            <div className={styles.feature12}>
              <div className={styles.value32}>
                <button className={styles.highlightCommand8}>
                  <div className={styles.label8}>submit</div>
                </button>
              </div>
              <div className={styles.value33}>
                <div className={styles.copy53}>string</div>
              </div>
              <div className={styles.value34}>
                <div className={styles.copy54}>--</div>
              </div>
              <div className={styles.value35}>
                <div className={styles.copy55}>--</div>
              </div>
            </div>
            <div className={styles.feature13}>
              <div className={styles.value36}>
                <div className={styles.highlightCommand9}>
                  <div className={styles.label9}>precision</div>
                </div>
              </div>
              <div className={styles.value37}>
                <div className={styles.copy56}>uint32</div>
              </div>
              <div className={styles.value38}>
                <div className={styles.copy57}>--</div>
              </div>
              <div className={styles.value39}>
                <div className={styles.copy58}>--</div>
              </div>
            </div>
            <Feature1
              valuePlaceholder="initial_amount"
              label="initial_amount"
              propWidth="65%"
              propWidth1="133px"
              propWidth2="182px"
              propWidth3="183px"
            />
            <Feature1
              valuePlaceholder="description"
              label="description"
              propWidth="52%"
              propWidth1="104px"
              propWidth2="182px"
              propWidth3="183px"
            />
            <div className={styles.feature14}>
              <div className={styles.value40}>
                <div className={styles.highlightCommand10}>
                  <div className={styles.label10}>features</div>
                </div>
              </div>
              <div className={styles.value41}>
                <div className={styles.copy59}>Feature</div>
              </div>
              <div className={styles.value42}>
                <div className={styles.copy60}>repeated</div>
              </div>
              <div className={styles.value43}>
                <div className={styles.copy61}>--</div>
              </div>
            </div>
            <div className={styles.feature15}>
              <div className={styles.value44}>
                <div className={styles.highlightCommand11}>
                  <div className={styles.label11}>burn_rate</div>
                </div>
              </div>
              <div className={styles.value45}>
                <div className={styles.copy62}>string</div>
              </div>
              <div className={styles.value46}>
                <div className={styles.copy63}>--</div>
              </div>
              <div className={styles.value47}>
                <div className={styles.copy64}>--</div>
              </div>
            </div>
            <div className={styles.feature16}>
              <div className={styles.value48}>
                <div className={styles.highlightCommand12}>
                  <div className={styles.label12}>send_commission_rate</div>
                </div>
              </div>
              <div className={styles.value49}>
                <div className={styles.copy65}>string</div>
              </div>
              <div className={styles.value50}>
                <div className={styles.copy66}>--</div>
              </div>
              <div className={styles.value51}>
                <div className={styles.copy67}>--</div>
              </div>
            </div>
            <div className={styles.feature17}>
              <div className={styles.value52}>
                <div className={styles.highlightCommand13}>
                  <div className={styles.label13}>uri</div>
                </div>
              </div>
              <div className={styles.value53}>
                <div className={styles.copy68}>string</div>
              </div>
              <div className={styles.value54}>
                <div className={styles.copy69}>--</div>
              </div>
              <div className={styles.value55}>
                <div className={styles.copy70}>--</div>
              </div>
            </div>
            <div className={styles.feature18}>
              <div className={styles.value56}>
                <div className={styles.highlightCommand14}>
                  <div className={styles.label14}>uri_hash</div>
                </div>
              </div>
              <div className={styles.value57}>
                <div className={styles.copy71}>string</div>
              </div>
              <div className={styles.value58}>
                <div className={styles.copy72}>--</div>
              </div>
              <div className={styles.value59}>
                <div className={styles.copy73}>--</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copy74}>
          <div className={styles.subSection4}>
            <div className={styles.copy75}>
              <div className={styles.eventwhitelistedamountchanged}>
                EventWhitelistedAmountChanged
              </div>
            </div>
          </div>
          <div className={styles.table4}>
            <div className={styles.feature19}>
              <div className={styles.rowTitle16}>
                <div className={styles.copy76}>Field</div>
              </div>
              <div className={styles.rowTitle17}>
                <div className={styles.copy77}>Type</div>
              </div>
              <div className={styles.rowTitle18}>
                <div className={styles.copy78}>Label</div>
              </div>
              <div className={styles.rowTitle19}>
                <div className={styles.copy79}>Description</div>
              </div>
            </div>
            <div className={styles.feature20}>
              <div className={styles.value60}>
                <div className={styles.highlightCommand15}>
                  <div className={styles.label15}>account</div>
                </div>
              </div>
              <div className={styles.value61}>
                <div className={styles.copy80}>string</div>
              </div>
              <div className={styles.value62}>
                <div className={styles.copy81}>--</div>
              </div>
              <div className={styles.value63}>
                <div className={styles.copy82}>--</div>
              </div>
            </div>
            <div className={styles.feature21}>
              <div className={styles.value64}>
                <div className={styles.highlightCommand16}>
                  <div className={styles.label16}>denom</div>
                </div>
              </div>
              <div className={styles.value65}>
                <div className={styles.copy83}>string</div>
              </div>
              <div className={styles.value66}>
                <div className={styles.copy84}>--</div>
              </div>
              <div className={styles.value67}>
                <div className={styles.copy85}>--</div>
              </div>
            </div>
            <div className={styles.feature22}>
              <div className={styles.value68}>
                <div className={styles.highlightCommand17}>
                  <div className={styles.label17}>previous_amount</div>
                </div>
              </div>
              <div className={styles.value69}>
                <div className={styles.copy86}>string</div>
              </div>
              <div className={styles.value70}>
                <div className={styles.copy87}>--</div>
              </div>
              <div className={styles.value71}>
                <div className={styles.copy88}>--</div>
              </div>
            </div>
            <div className={styles.feature23}>
              <div className={styles.value72}>
                <div className={styles.highlightCommand18}>
                  <div className={styles.label18}>current_amount</div>
                </div>
              </div>
              <div className={styles.value73}>
                <div className={styles.copy89}>string</div>
              </div>
              <div className={styles.value74}>
                <div className={styles.copy90}>--</div>
              </div>
              <div className={styles.value75}>
                <div className={styles.copy91}>--</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.copy92}>
          <h3 className={styles.header2}>genesis.proto</h3>
        </div>
        <div className={styles.copy93}>
          <div className={styles.subSection5}>
            <div className={styles.copy94}>
              <div className={styles.balance}>Balance</div>
              <div className={styles.copy95}>
                Balance defines an account address and balance pair used module
                genesis genesis state.
              </div>
            </div>
          </div>
          <div className={styles.table5}>
            <div className={styles.feature24}>
              <div className={styles.rowTitle20}>
                <div className={styles.copy96}>Field</div>
              </div>
              <div className={styles.rowTitle21}>
                <div className={styles.copy97}>Type</div>
              </div>
              <div className={styles.rowTitle22}>
                <div className={styles.copy98}>Label</div>
              </div>
              <div className={styles.rowTitle23}>
                <div className={styles.copy99}>Description</div>
              </div>
            </div>
            <div className={styles.feature25}>
              <div className={styles.value76}>
                <div className={styles.highlightCommand19}>
                  <div className={styles.label19}>address</div>
                </div>
              </div>
              <div className={styles.value77}>
                <div className={styles.copy100}>string</div>
              </div>
              <div className={styles.value78}>
                <div className={styles.copy101}>--</div>
              </div>
              <div className={styles.value79}>
                <div className={styles.copy102}>
                  address is the address of the balance holder
                </div>
              </div>
            </div>
            <div className={styles.feature26}>
              <div className={styles.value80}>
                <div className={styles.highlightCommand20}>
                  <div className={styles.label20}>coins</div>
                </div>
              </div>
              <div className={styles.value81}>
                <div className={styles.copy103}>cosmos.base.v1beta1.Coin</div>
              </div>
              <div className={styles.value82}>
                <div className={styles.copy104}>repeated</div>
              </div>
              <div className={styles.value83}>
                <div className={styles.copy105}>
                  coins defines the different coins this balance holds
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copy106}>
          <div className={styles.subSection6}>
            <div className={styles.copy107}>
              <div className={styles.genesisstate}>GenesisState</div>
              <div className={styles.copy108}>
                GenesisState defines the module genesis state.
              </div>
            </div>
          </div>
          <div className={styles.table6}>
            <div className={styles.feature27}>
              <div className={styles.rowTitle24}>
                <div className={styles.copy109}>Field</div>
              </div>
              <div className={styles.rowTitle25}>
                <div className={styles.copy110}>Type</div>
              </div>
              <div className={styles.rowTitle26}>
                <div className={styles.copy111}>Label</div>
              </div>
              <div className={styles.rowTitle27}>
                <div className={styles.copy112}>Description</div>
              </div>
            </div>
            <div className={styles.feature28}>
              <div className={styles.value84}>
                <div className={styles.highlightCommand21}>
                  <div className={styles.label21}>params</div>
                </div>
              </div>
              <div className={styles.value85}>
                <div className={styles.copy113}>Params</div>
              </div>
              <div className={styles.value86}>
                <div className={styles.copy114}>--</div>
              </div>
              <div className={styles.value87}>
                <div className={styles.copy115}>
                  params defines all the parameters of the module
                </div>
              </div>
            </div>
            <div className={styles.feature29}>
              <div className={styles.value88}>
                <div className={styles.highlightCommand22}>
                  <div className={styles.label22}>tokens</div>
                </div>
              </div>
              <div className={styles.value89}>
                <div className={styles.copy116}>Tokens</div>
              </div>
              <div className={styles.value90}>
                <div className={styles.copy117}>repeated</div>
              </div>
              <div className={styles.value91}>
                <div className={styles.copy118}>
                  tokens keep the fungible token state
                </div>
              </div>
            </div>
            <div className={styles.feature30}>
              <div className={styles.wrapperValue}>
                <input
                  className={styles.value92}
                  placeholder="frozen_balances"
                  type="text"
                />
                <div className={styles.highlightCommand23}>
                  <div className={styles.label23}>frozen_balances</div>
                </div>
              </div>
              <div className={styles.value93}>
                <div className={styles.copy119}>Balance</div>
              </div>
              <div className={styles.value94}>
                <div className={styles.copy120}>repeated</div>
              </div>
              <div className={styles.value95}>
                <div className={styles.copy121}>
                  dfrozen_balances contains the frozen balances on all of the
                  accounts
                </div>
              </div>
            </div>
            <div className={styles.feature31}>
              <div className={styles.value96}>
                <div className={styles.highlightCommand24}>
                  <div className={styles.label24}>whitelisted_balances</div>
                </div>
              </div>
              <div className={styles.value97}>
                <div className={styles.copy122}>Balance</div>
              </div>
              <div className={styles.value98}>
                <div className={styles.copy123}>repeated</div>
              </div>
              <div className={styles.value99}>
                <div className={styles.copy124}>
                  whitelisted_balances contains the whitelisted balances on all
                  of the accounts
                </div>
              </div>
            </div>
            <div className={styles.feature32}>
              <div className={styles.value100}>
                <div className={styles.highlightCommand25}>
                  <div className={styles.label25}>pending_token_upgrades</div>
                </div>
              </div>
              <div className={styles.value101}>
                <div className={styles.copy125}>PendingTokenUpgrade</div>
              </div>
              <div className={styles.value102}>
                <div className={styles.copy126}>repeated</div>
              </div>
              <div className={styles.value103}>
                <div className={styles.copy127}>
                  pending_token_upgrades contains pending token upgrades.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copy128}>
          <div className={styles.subSection7}>
            <div className={styles.copy129}>
              <div className={styles.pendingtokenupgrade}>
                PendingTokenUpgrade
              </div>
            </div>
          </div>
          <div className={styles.table7}>
            <div className={styles.feature33}>
              <div className={styles.rowTitle28}>
                <div className={styles.copy130}>Field</div>
              </div>
              <div className={styles.rowTitle29}>
                <div className={styles.copy131}>Type</div>
              </div>
              <div className={styles.rowTitle30}>
                <div className={styles.copy132}>Label</div>
              </div>
              <div className={styles.rowTitle31}>
                <div className={styles.copy133}>Description</div>
              </div>
            </div>
            <div className={styles.feature34}>
              <div className={styles.value104}>
                <div className={styles.highlightCommand26}>
                  <div className={styles.label26}>denom</div>
                </div>
              </div>
              <div className={styles.value105}>
                <div className={styles.copy134}>string</div>
              </div>
              <div className={styles.value106}>
                <div className={styles.copy135}>--</div>
              </div>
              <div className={styles.value107}>
                <div className={styles.copy136}>--</div>
              </div>
            </div>
            <div className={styles.feature35}>
              <div className={styles.value108}>
                <div className={styles.highlightCommand27}>
                  <div className={styles.label27}>version</div>
                </div>
              </div>
              <div className={styles.value109}>
                <div className={styles.copy137}>uint32</div>
              </div>
              <div className={styles.value110}>
                <div className={styles.copy138}>--</div>
              </div>
              <div className={styles.value111}>
                <div className={styles.copy139}>--</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content4;
