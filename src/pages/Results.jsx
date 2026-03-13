import Books from "../components/Books";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";

function Results({ data, page, setPage, maxPage, addToBookmarks, loading }) {
  return (
    <Layout>
      <Books data={data} addToBookmarks={addToBookmarks} loading={loading} />
      <Pagination page={page} setPage={setPage} maxPage={maxPage} />
    </Layout>
  );
}

export default Results;
