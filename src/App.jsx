import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import "./index.css";
import { useEffect, useState } from "react";
import Results from "./pages/Results";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    async function fetchBooks() {
      try {
        if (!query) return;
        const res = await fetch(
          `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&page=${page}&limit=10`,
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
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
