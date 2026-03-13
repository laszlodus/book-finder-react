import Layout from "../components/Layout";
import styles from "./SavedBooks.module.css";
import { RiDeleteBin6Fill } from "react-icons/ri";

function SavedBooks({ bookmarks, deleteFromBookmarks }) {
  return (
    <Layout>
      <ul className={styles.savedBook}>
        {bookmarks.map((book) => (
          <li key={book.key} className={styles.bookCard}>
            <div className={styles.buttonContainer}>
              <button onClick={() => deleteFromBookmarks(book)}>
                <RiDeleteBin6Fill />
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
        ))}
      </ul>
    </Layout>
  );
}

export default SavedBooks;
