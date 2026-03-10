import Books from "../components/Books";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";

function Results({ data, page, setPage, maxPage }) {
  return (
    <Layout>
      <Books data={data} />
      <Pagination page={page} setPage={setPage} maxPage={maxPage} />
    </Layout>
  );
}

export default Results;
