import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import LiquidityProvidersAndMarket from "../components/liquidity-providers-and-market";
import Footer from "../components/footer";
import styles from "./index.module.css";

const HomePage: NextPage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.divider} />
      <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
      <main className={styles.navBarContainer}>
        <NavBar />
        <section className={styles.cardContainer}>
          <LiquidityProvidersAndMarket />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
