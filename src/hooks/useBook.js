import { BooksContext } from "../contexts/BookContext";
import { useContext } from "react";

export function useBook() {
  const context = useContext(BooksContext);
  return context;
}
