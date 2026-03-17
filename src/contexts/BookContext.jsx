import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const BooksContext = createContext();

const initialState = {
  query: "",
  data: {},
  page: 1,
  maxPage: 1,
  loading: false,
  error: "",
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
    case "REJECTED":
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error("Unkonown action type!");
  }
};

function BooksProvider({ children }) {
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
          `https://openlibrary.org/search.json?q=${encodeURIComponent(state.query)}&page=${state.page}&limit=10`,
        );
        const data = await res.json();
        dispatch({ type: "SET_DATA", payload: data });
        dispatch({
          type: "SET_MAXPAGE",
          payload: Math.ceil(data.numFound / 10),
        });

        console.log(data);
      } catch {
        dispatch({ type: "REJECTED", payload: "There was an error at fetch!" });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    }
    fetchBooks();
  }, [state.query, state.page]);

  return (
    <BooksContext.Provider
      value={{
        state,
        dispatch,
        bookmarks,
        addToBookmarks,
        deleteFromBookmarks,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

function useBook() {
  const context = useContext(BooksContext);
  return context;
}

export { BooksProvider, useBook };
