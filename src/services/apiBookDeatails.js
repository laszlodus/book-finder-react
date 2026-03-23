export async function fetchBooksDetails(workId) {
  const res = await fetch(`https://openlibrary.org/works/${workId}.json`);
  if (!res.ok) throw new Error("Failed to fetch details.");
  return await res.json();
}
