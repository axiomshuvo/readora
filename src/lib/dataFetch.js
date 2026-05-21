export async function GetAllBooks() {
  const response = await fetch("https://api-server-scoy.onrender.com/books", {
    next: { revalidate: 86400 },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();
  return data;
}

export async function BookDetails({ bookId }) {
  const response = await fetch(
    `https://api-server-scoy.onrender.com/books/${bookId}`,
    { next: { revalidate: 86400 } },
  );
  if (!response.ok) {
    throw new Error("Failed to fetch book details");
  }
  const data = await response.json();
  return data;
}

export async function BookCategory() {
  const response = await fetch(
    "https://api-server-scoy.onrender.com/categories",
    { next: { revalidate: 86400 } },
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books by category");
  }
  const data = await response.json();
  return data;
}

export async function GetBooksByCategory(category) {
  const response = await fetch(
    `https://api-server-scoy.onrender.com/books?category=${encodeURIComponent(
      category,
    )}`,
    { next: { revalidate: 86400 } },
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books by category");
  }
  const data = await response.json();
  return data;
}
