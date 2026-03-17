import Layout from "../components/Layout";
import Search from "../components/Search";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <Layout>
      <div className={styles.text}>
        <h1>You can search thousands of books</h1>
      </div>
      <Search />
    </Layout>
  );
}

export default HomePage;
