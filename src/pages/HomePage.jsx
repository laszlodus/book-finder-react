import Layout from "../components/Layout";
import Search from "../components/Search";
import styles from "./HomePage.module.css";

function HomePage({ query, setQuery, setPage }) {
  return (
    <Layout>
      <div className={styles.text}>
        <h1>You can search thousands of books</h1>
      </div>
      <Search query={query} setQuery={setQuery} setPage={setPage} />
    </Layout>
  );
}

export default HomePage;
