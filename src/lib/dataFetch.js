export async function GetAllBooks() {
  const response = await fetch("https://api-server-scoy.onrender.com/books");
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();
  console.log("Fetched books:", data);
  return data;
}

export async function BookDetails({ bookId }) {
  const response = await fetch(
    `https://api-server-scoy.onrender.com/books/${bookId}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch book details");
  }
  const data = await response.json();
  //   console.log("Fetched book details:", data);
  return data;
}

export async function BookCategory() {
  const response = await fetch(
    "https://api-server-scoy.onrender.com/categories",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books by category");
  }
  const data = await response.json();
  console.log("Fetched book categories:", data);
  return data;
}

export async function GetBooksByCategory(category) {
  const response = await fetch(
    `https://api-server-scoy.onrender.com/books?category=${encodeURIComponent(
      category,
    )}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books by category");
  }
  const data = await response.json();
  console.log(`Fetched books for category "${category}":`, data);
  return data;
}
