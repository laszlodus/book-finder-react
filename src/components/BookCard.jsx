import { useEffect, useState } from "react";
import { fetchBooksDetails } from "../services/apiBookDeatails";
import Spinner from "./Spinner";
import styles from "./BookCard.module.css";
import { useModal } from "../hooks/useModal";

function BookCard() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [bookDetails, setBookDetails] = useState(null);
  const coverId = bookDetails?.covers?.[1];
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : null;
  const { selectedBookId, closeModal } = useModal();

  function getDescription(desc) {
    if (!desc) return "No description available";
    if (typeof desc === "string") return desc;
    if (typeof desc === "object") return desc.value;
    return "No description available";
  }

  useEffect(() => {
    async function loadDetails() {
      try {
        setLoading(true);
        const details = await fetchBooksDetails(selectedBookId);
        if (!details) throw new Error("Failed to get details from API");
        setBookDetails(details);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadDetails();
  }, [selectedBookId]);

  if (loading) return <Spinner />;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!bookDetails) return null;

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closeModal}>
          X
        </button>
        <h5 className={styles.title}>Title</h5>
        <p>{bookDetails.title}</p>
        <h5 className={styles.title}>Description</h5>
        <p>{getDescription(bookDetails.description)}</p>
        <div>
          <h5 className={styles.title}>Carakters</h5>
          <ul>
            {bookDetails?.subject_people?.map((el, i) => (
              <li key={i}>{el}</li>
            )) || "No carakters available"}
          </ul>
        </div>
        <div>
          <h5 className={styles.title}>Places</h5>
          <ul>
            {bookDetails?.subject_places?.map((el, i) => (
              <li key={i}>{el}</li>
            )) || "No places available"}
          </ul>
        </div>
        <div>
          <h5 className={styles.title}>Time</h5>
          <ul>
            {bookDetails?.subject_times?.map((el, i) => (
              <li key={i}>{el}</li>
            )) || "No time available"}
          </ul>
        </div>
        <div>
          <h5 className={styles.title}>Subjects</h5>
          <ul>
            {bookDetails?.subjects?.map((el, i) => <li key={i}>{el}</li>) ||
              "No subjects available"}
          </ul>
        </div>
        {(coverUrl && (
          <div className={styles.picture}>
            <img src={coverUrl} alt={bookDetails.title} />
          </div>
        )) ||
          "No cover picture found!"}
      </div>
    </div>
  );
}

export default BookCard;
