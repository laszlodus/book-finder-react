import { useState } from "react";
import styles from "./Search.module.css";
import { useNavigate } from "react-router-dom";

function Search({ dispatch }) {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

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
