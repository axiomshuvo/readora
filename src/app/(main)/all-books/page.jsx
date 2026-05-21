import { GetAllBooks } from "@/lib/dataFetch";
import Image from "next/image";
import Link from "next/link";
import { FiBookOpen, FiStar } from "react-icons/fi";

export default async function AllBooksPage() {
  const books = await GetAllBooks();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-semibold text-[#1f1a14]">
          All Books
        </h1>
        <p className="mt-1.5 text-sm text-[#6c6459]">
          {books.length} titles available to borrow
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
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
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#f5f0e8]">
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
