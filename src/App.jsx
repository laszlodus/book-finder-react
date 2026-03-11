import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import "./index.css";
import { useEffect, useState } from "react";
import Results from "./pages/Results";
import SavedBooks from "./pages/savedBooks";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [bookmarks, setBookmarks] = useState([]);

  function addToBookmarks(book) {
    setBookmarks((prev) => [...prev, book]);
    console.log(bookmarks);
  }

  function deleteFromBookmarks(book) {
    setBookmarks((prev) => prev.filter((b) => b.key !== book.key));
  }

  useEffect(() => {
    async function fetchBooks() {
      try {
        if (!query) return;
        const res = await fetch(
          `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&page=${page}&limit=8`,
        );
        const data = await res.json();
        setData(data);
        setMaxPage(Math.ceil(data.numFound / 10));
        console.log(data);
      } catch (error) {
        error.message(error);
      }
    }
    fetchBooks();
  }, [query, page]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage query={query} setQuery={setQuery} setPage={setPage} />
          }
        ></Route>
        <Route
          path="results"
          element={
            <Results
              data={data}
              page={page}
              setPage={setPage}
              maxPage={maxPage}
              addToBookmarks={addToBookmarks}
            />
          }
        ></Route>
        <Route
          path="savedBooks"
          element={
            <SavedBooks
              bookmarks={bookmarks}
              deleteFromBookmarks={deleteFromBookmarks}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
