import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import "./index.css";
import { useEffect, useReducer, useState } from "react";
import Results from "./pages/Results";
import SavedBooks from "./pages/savedBooks";
import About from "./pages/About";

const initialState = {
  query: "",
  data: {},
  page: 1,
  maxPage: 1,
  loading: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    case "SET_MAXPAGE":
      return {
        ...state,
        maxPage: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return { state };
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [bookmarks, setBookmarks] = useState(() => {
    const stored = localStorage.getItem("bookmarks");
    return stored ? JSON.parse(stored) : [];
  });

  function addToBookmarks(book) {
    setBookmarks((prev) => {
      const exist = prev.some((b) => b.key === book.key);

      let update;

      if (exist) {
        update = prev.filter((b) => b.key !== book.key);
      } else {
        update = [...prev, book];
      }

      localStorage.setItem("bookmarks", JSON.stringify(update));
      return update;
    });
  }

  function deleteFromBookmarks(book) {
    setBookmarks((prev) => {
      const deleted = prev.filter((b) => b.key !== book.key);
      localStorage.setItem("bookmarks", JSON.stringify(deleted));
      return deleted;
    });
  }

  useEffect(() => {
    async function fetchBooks() {
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        if (!state.query) return;
        const res = await fetch(
          `https://openlibrary.org/search.json?q=${encodeURIComponent(state.query)}&page=${state.page}&limit=8`,
        );
        const data = await res.json();
        dispatch({ type: "SET_DATA", payload: data });
        dispatch({
          type: "SET_MAXPAGE",
          payload: Math.ceil(data.numFound / 10),
        });

        console.log(data);
      } catch (error) {
        error.message(error);
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    }
    fetchBooks();
  }, [state.query, state.page]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage dispatch={dispatch} />}></Route>
        <Route
          path="results"
          element={
            <Results
              page={state.page}
              data={state.data}
              setPage={state.setPage}
              maxPage={state.maxPage}
              addToBookmarks={addToBookmarks}
              loading={state.loading}
              bookmarks={bookmarks}
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
        <Route path="about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
