import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <h1 className={styles.title}>Welcome to Sardar Dragon</h1>

        <p className={styles.description}>
          Discover our selection of fresh fruits, bursting with flavor and
          vitality. Delivered straight from the farm to your table.
        </p>

        <Link to="/store">
          <button className={styles.storeButton}>Shop Now</button>
        </Link>

        <HomeCarousel />
      </div>
      <Footer />
    </>
  );
};

export default Home;
