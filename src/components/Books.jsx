import styles from "./Books.module.css";
import { FaRegBookmark } from "react-icons/fa";
import { IoBookmarkSharp } from "react-icons/io5";
import { LuBookOpenText } from "react-icons/lu";
import { useBook } from "../hooks/useBook.js";
import { useModal } from "../hooks/useModal.js";
import BookCard from "./BookCard.jsx";

function Books() {
  const {
    state: { data },
    addToBookmarks,
    bookmarks,
  } = useBook();
  const { isModalOpen, openModal } = useModal();

  return (
    <>
      <h1 className={styles.title}>Search Results</h1>
      <ul className={styles.bookList}>
        {data.docs.map((book) => {
          const isBookmarked = bookmarks.some((b) => b.key === book.key);

          return (
            <li key={book.key} className={styles.bookCard}>
              <div className={styles.buttonContainer}>
                <button onClick={() => addToBookmarks(book)}>
                  {isBookmarked ? <IoBookmarkSharp /> : <FaRegBookmark />}
                </button>
                <h5>{book.title}</h5>
                <button onClick={() => openModal(book.key.split("/").pop())}>
                  <LuBookOpenText />
                </button>
              </div>
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
