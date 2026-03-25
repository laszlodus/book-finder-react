import { useBook } from "../hooks/useBook";
import styles from "./Pagination.module.css";

function Pagination() {
  const {
    state: { page, maxPage },
    dispatch,
  } = useBook();

  return (
    <div className={styles.container}>
      <p>
        We found: <span>{maxPage}</span> pages.
      </p>
      <div>
        <button
          disabled={page === 1}
          onClick={() => dispatch({ type: "SET_PAGE", payload: page - 1 })}
        >
          Prev
        </button>

        <span>{`${page} of ${maxPage}`}</span>
        <button
          disabled={page === maxPage}
          onClick={() => dispatch({ type: "SET_PAGE", payload: page + 1 })}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
