export async function fetchBooksApi(query, page) {
  if (!query) return null;

  const res = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&page=${page}&limit=10`,
  );

  if (!res.ok) throw new Error("Failed to fetch");

  const data = await res.json();
  return data;
}
