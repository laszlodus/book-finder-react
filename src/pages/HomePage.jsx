import Layout from "../components/Layout";
import Search from "../components/Search";
import styles from "./HomePage.module.css";
import Spinner from "../components/Spinner";

function HomePage({ dispatch }) {
  return (
    <Layout>
      <div className={styles.text}>
        <h1>You can search thousands of books</h1>
      </div>
      <Search dispatch={dispatch} />
    </Layout>
  );
}

export default HomePage;
