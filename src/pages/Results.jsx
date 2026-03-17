import Books from "../components/Books";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";

function Results() {
  return (
    <Layout>
      <Books />
      <Pagination />
    </Layout>
  );
}

export default Results;
