import { useEffect, useState } from "react";
import { fetchBooksDetails } from "../services/apiBookDeatails";
import Spinner from "./Spinner";
import styles from "./BookCard.module.css";
import { useModal } from "../hooks/useModal";

function BookCard() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [bookDetails, setBookDetails] = useState(null);
  const coverId = bookDetails?.covers?.[1] || bookDetails?.covers?.[0];
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
    if (!selectedBookId) return;
    let isMounted = true;

    async function loadDetails() {
      try {
        setLoading(true);
        setError("");

        const details = await fetchBooksDetails(selectedBookId);
        if (!details) throw new Error("Failed to get details from API");

        if (isMounted) setBookDetails(details);
      } catch (err) {
        if (isMounted) setError(err.message || "Something went wrong");
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadDetails();

    return () => {
      isMounted = false;
    };
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
          <h5 className={styles.title}>Characters</h5>
          <ul>
            {bookDetails?.subject_people?.length > 0 ? (
              bookDetails?.subject_people?.map((el) => <li key={el}>{el}</li>)
            ) : (
              <li>No characters available</li>
            )}
          </ul>
        </div>
        <div>
          <h5 className={styles.title}>Places</h5>
          <ul>
            {bookDetails?.subject_places?.length > 0 ? (
              bookDetails?.subject_places?.map((el) => <li key={el}>{el}</li>)
            ) : (
              <li>No places available</li>
            )}
          </ul>
        </div>
        <div>
          <h5 className={styles.title}>Time</h5>
          <ul>
            {bookDetails?.subject_times?.length > 0 ? (
              bookDetails?.subject_times?.map((el) => <li key={el}>{el}</li>)
            ) : (
              <li>No time available</li>
            )}
          </ul>
        </div>
        <div>
          <h5 className={styles.title}>Subjects</h5>
          <ul>
            {bookDetails?.subjects?.length > 0 ? (
              bookDetails?.subjects?.map((el) => <li key={el}>{el}</li>)
            ) : (
              <li>No subjects available</li>
            )}
          </ul>
        </div>
        {coverUrl ? (
          <div className={styles.picture}>
            <img src={coverUrl} alt={bookDetails.title} />
          </div>
        ) : (
          <p>No cover picture found!</p>
        )}
      </div>
    </div>
  );
}

export default BookCard;
