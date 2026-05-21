import SearchBar from "@/components/SearchBar";
import { BookCategory, GetAllBooks } from "@/lib/dataFetch";
import Image from "next/image";
import Link from "next/link";
import { FiBookOpen, FiGrid, FiStar } from "react-icons/fi";

export default async function AllBooksPage({ searchParams }) {
  const { category } = await searchParams;
  const [allBooks, categories] = await Promise.all([
    GetAllBooks(),
    BookCategory(),
  ]);

  const books = category
    ? allBooks.filter(
        (book) => book.category?.toLowerCase() === category.toLowerCase(),
      )
    : allBooks;
  // console.log("Books in category", books);

  const heading = category ? category : "All Books";

  return (
    <main className="mx-auto container px-4 pb-10 sm:px-6 lg:px-8">
      {/* Search bar */}

      <div className="flex gap-6">
        {/* Sidebar — desktop */}
        <aside className="hidden w-48 shrink-0 lg:block">
          <div className="sticky top-6 rounded-2xl border border-[#e8e0d4] bg-white p-4">
            <div className="mb-3 flex items-center gap-2">
              <FiGrid className="h-4 w-4 text-[#314f36]" />
              <span className="text-xs font-semibold uppercase tracking-wide text-[#6c6459]">
                Categories
              </span>
            </div>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/all-books"
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                    !category
                      ? "bg-[#314f36] font-semibold text-white"
                      : "text-[#1f1a14] hover:bg-[#f5f0e8]"
                  }`}
                >
                  <span>All Books</span>
                  <span className="text-[10px] opacity-60">
                    {allBooks.length}
                  </span>
                </Link>
              </li>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/all-books?category=${encodeURIComponent(cat.name)}`}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                      category?.toLowerCase() === cat.name.toLowerCase()
                        ? "bg-[#314f36] font-semibold text-white"
                        : "text-[#1f1a14] hover:bg-[#f5f0e8]"
                    }`}
                  >
                    <span>{cat.name}</span>
                    {cat.total_books && (
                      <span className="text-[10px] opacity-60">
                        {cat.total_books}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <div className="min-w-0 flex-1">
          {/* Heading */}
          <div className="flex justify-between">
            <div className="mb-6 w-100">
              <h1 className="font-heading text-2xl font-semibold text-[#1f1a14]">
                {heading}
              </h1>
              <p className="mt-1 text-sm text-[#6c6459]">
                {books.length} title{books.length !== 1 ? "s" : ""} found
              </p>
            </div>
            <div className="mb-8 w-full flex items-center gap-3 rounded-lg border border-[#d8d0c8] bg-white py-2.5">
              <SearchBar />
            </div>
          </div>

          {/* Category pills — mobile */}
          <div className="mb-5 flex gap-2 overflow-x-auto pb-1 lg:hidden">
            <Link
              href="/all-books"
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                !category
                  ? "bg-[#314f36] text-white"
                  : "bg-[#f5f0e8] text-[#6c6459] hover:bg-[#e8e0d4]"
              }`}
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/all-books?category=${encodeURIComponent(cat.name)}`}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  category?.toLowerCase() === cat.name.toLowerCase()
                    ? "bg-[#314f36] text-white"
                    : "bg-[#f5f0e8] text-[#6c6459] hover:bg-[#e8e0d4]"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Grid */}
          {books.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {books.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-sm text-[#6c6459]">
              No books found. Try a different search.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <FiStar
          key={i}
          className={`h-3 w-3 ${
            i < full
              ? "fill-amber-400 text-amber-400"
              : i === full && half
                ? "fill-amber-200 text-amber-400"
                : "text-[#d8d0c8]"
          }`}
        />
      ))}
    </span>
  );
}

function AvailabilityBadge({ available, total }) {
  const pct = available / total;
  const color =
    available === 0
      ? "bg-red-50 text-red-500"
      : pct <= 0.3
        ? "bg-amber-50 text-amber-600"
        : "bg-[#eef4ef] text-[#314f36]";
  const label =
    available === 0 ? "Unavailable" : `${available} / ${total} left`;
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${color}`}
    >
      {label}
    </span>
  );
}

function BookCard({ book }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-[#e8e0d4] bg-white shadow-[0_2px_8px_rgba(26,26,26,0.04)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(49,79,54,0.10)]">
      {/* Cover */}
      <div className="relative aspect-2/3 w-full overflow-hidden bg-[#f5f0e8]">
        {book.image_url ? (
          <Image
            src={book.image_url}
            alt={book.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            className="object-cover transition group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <FiBookOpen className="h-10 w-10 text-[#c8bfb0]" />
          </div>
        )}

        {/* Badges overlay */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {book.is_new_arrival && (
            <span className="rounded-full bg-[#314f36] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white">
              New
            </span>
          )}
          {book.is_popular && (
            <span className="rounded-full bg-amber-400 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white">
              Popular
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-3">
        {/* Genre pill */}
        <span className="self-start rounded-full bg-[#f5f0e8] px-2 py-0.5 text-[10px] font-medium text-[#6c6459]">
          {book.genre}
        </span>

        {/* Title */}
        <h2 className="line-clamp-2 text-sm font-semibold leading-snug text-[#1f1a14]">
          {book.title}
        </h2>

        {/* Author */}
        <p className="truncate text-xs text-[#6c6459]">{book.author}</p>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <StarRating rating={book.rating} />
          <span className="text-[10px] text-[#a89e92]">
            {book.rating.toFixed(1)}
          </span>
        </div>

        {/* Availability */}
        <div className="mt-auto pt-1">
          <AvailabilityBadge
            available={book.available_quantity}
            total={book.total_quantity}
          />
        </div>

        {/* View Details button */}
        <Link
          href={`/books/${book.id}`}
          className="mt-2 block w-full rounded-xl bg-[#314f36] py-1.5 text-center text-xs font-semibold text-white transition hover:bg-[#26402b] active:scale-95"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
