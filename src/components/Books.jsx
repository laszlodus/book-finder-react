function Books({ data }) {
  if (!data?.docs) return null;

  return (
    <ul>
      {data.docs.map((book) => (
        <li key={book.key}>
          Title:<strong>{book.title}</strong>
          Author:{book.author_name?.join(", ")}
          First published: {book.first_publish_year}
          Language: {book.language.join(", ")}
        </li>
      ))}
    </ul>
  );
}

export default Books;
