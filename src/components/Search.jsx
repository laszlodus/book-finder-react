import { useState } from "react";
import styles from "./Search.module.css";
import { useNavigate } from "react-router-dom";
import { useBook } from "../hooks/useBook";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useBook();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_QUERY", payload: inputValue });
    dispatch({ type: "SET_PAGE", payload: 1 });
    navigate("/results");
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchDisplay}>
      <input
        type="text"
        className={styles.searchInput}
        id="searchInput"
        placeholder="Search books..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button className={styles.searchButton} type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
