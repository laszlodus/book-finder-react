import Layout from "../components/Layout";
import { useBook } from "../contexts/BookContext";
import styles from "./SavedBooks.module.css";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { LuBookOpenText } from "react-icons/lu";
import { useModal } from "../contexts/ModalContext";
import BookCard from "../components/BookCard";

function SavedBooks() {
  const { bookmarks, deleteFromBookmarks } = useBook();
  const { isModalOpen, openModal } = useModal();

  return (
    <Layout>
      {bookmarks.length === 0 ? (
        <p className={styles.warning}>Your bookmarks list is empty!</p>
      ) : (
        <ul className={styles.savedBook}>
          {bookmarks.map((book) => (
            <li key={book.key} className={styles.bookCard}>
              <div className={styles.buttonContainer}>
                <button onClick={() => deleteFromBookmarks(book)}>
                  <RiDeleteBin6Fill />
                </button>
                <button onClick={() => openModal(book.key.split("/").pop())}>
                  <LuBookOpenText />
                </button>
              </div>
              <h5>
                <strong>Title:</strong> {book.title}
              </h5>
              <p>
                <strong>Author:</strong> {book.author_name?.join(", ")}
              </p>
              <p>
                <strong>First published Year: </strong>{" "}
                {book.first_publish_year}
              </p>
              <p>
                <strong>Language</strong>: {book.language.join(", ")}
              </p>
            </li>
          ))}
        </ul>
      )}
      {isModalOpen && <BookCard />}
    </Layout>
  );
}

export default SavedBooks;
