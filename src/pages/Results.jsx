import { Link } from "react-router-dom";
import Books from "../components/Books";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import { useBook } from "../contexts/BookContext";
import Spinner from "../components/Spinner";
import styles from "./Results.module.css";

function Results() {
  const {
    state: { data, loading, error },
  } = useBook();

  if (loading) return <Spinner />;
  if (error) {
    return <p className={styles.error}>{error}</p>;
  }
  if (!data?.docs)
    return (
      <Layout>
        <div className={styles.error}>
          <p>No books found!</p>
          <Link to="/">
            <button className={styles.backButton}>Back</button>
          </Link>
        </div>
        <div className={styles.noBookPic}></div>
      </Layout>
    );

  return (
    <Layout>
      <Books />
      <Pagination />
    </Layout>
  );
}

export default Results;
