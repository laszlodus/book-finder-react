import styles from "./Pagination.module.css";

function Pagination({ page, setPage, maxPage }) {
  return (
    <div className={styles.container}>
      <p>
        We found: <span>{maxPage}</span> pages.
      </p>
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>

        <span>{`${page} of ${maxPage}`}</span>
        <button disabled={page === maxPage} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
