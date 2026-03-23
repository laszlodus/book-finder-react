import styles from "./Books.module.css";
import { FaRegBookmark } from "react-icons/fa";
import { IoBookmarkSharp } from "react-icons/io5";
import { LuBookOpenText } from "react-icons/lu";
import Spinner from "./Spinner.jsx";
import { useBook } from "../contexts/BookContext.jsx";
import { useModal } from "../contexts/ModalContext.jsx";
import BookCard from "./BookCard.jsx";

function Books() {
  const {
    state: { data, loading, error },
    addToBookmarks,
    bookmarks,
  } = useBook();
  const { isModalOpen, openModal } = useModal();

  if (loading) return <Spinner />;
  if (error) {
    return <p className={styles.error}>{error}</p>;
  }
  if (!data?.docs) return <p className={styles.error}>No books found!</p>;

  return (
    <>
      <ul className={styles.bookList}>
        {data.docs.map((book) => {
          const isBookmarked = bookmarks.some((b) => b.key === book.key);

          return (
            <li key={book.key} className={styles.bookCard}>
              <div className={styles.buttonContainer}>
                <button onClick={() => addToBookmarks(book)}>
                  {isBookmarked ? <IoBookmarkSharp /> : <FaRegBookmark />}
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
                <strong>Language</strong>: {book.language?.join(", ")}
              </p>
            </li>
          );
        })}
      </ul>
      {isModalOpen && <BookCard />}
    </>
  );
}

export default Books;
