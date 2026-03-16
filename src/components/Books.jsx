import styles from "./Books.module.css";
import { FaRegBookmark } from "react-icons/fa";
import { IoBookmarkSharp } from "react-icons/io5";
import Spinner from "./Spinner.jsx";

function Books({ data, addToBookmarks, loading, bookmarks }) {
  if (loading) return <Spinner />;
  if (!data?.docs) return null;

  return (
    <ul className={styles.bookList}>
      {data.docs.map((book) => {
        const isBookmarked = bookmarks.some((b) => b.key === book.key);

        return (
          <li key={book.key} className={styles.bookCard}>
            <div className={styles.buttonContainer}>
              <button onClick={() => addToBookmarks(book)}>
                {isBookmarked ? <IoBookmarkSharp /> : <FaRegBookmark />}
              </button>
            </div>
            <h5>
              <strong>Title:</strong> {book.title}
            </h5>
            <p>
              <strong>Author:</strong> {book.author_name?.join(", ")}
            </p>
            <p>
              <strong>First published Year: </strong> {book.first_publish_year}
            </p>
            <p>
              <strong>Language</strong>: {book.language.join(", ")}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default Books;
