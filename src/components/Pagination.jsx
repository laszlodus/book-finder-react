function Pagination({ page, setPage, maxPage }) {
  const pages = Array.from({ length: maxPage }, (_, i) => i + 1);

  return (
    <div>
      <p>
        We found: <span>{maxPage}</span> pages.
      </p>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      {/* {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          style={{ fontWeight: p === page ? "bold" : "normal" }}
        >
          {p}
        </button>
      ))} */}

      <span>{`${page} of ${maxPage}`}</span>
      <button disabled={page === maxPage} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
