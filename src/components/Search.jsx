import { useState } from "react";
import styles from "./Search.module.css";
import { useNavigate } from "react-router-dom";

function Search({ query, setQuery, setPage }) {
  const [inputValue, setInputValue] = useState(query);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputValue);
    setPage(1);
    navigate("/results");
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchDisplay}>
      <input
        className={styles.searchInput}
        id="searchInput"
        placeholder="Name of Book"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
