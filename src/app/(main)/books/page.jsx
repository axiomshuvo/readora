import SearchBar from "@/components/SearchBar";
import { GetAllBooks } from "@/lib/dataFetch";
import Image from "next/image";
import Link from "next/link";
import { FiBookOpen, FiSearch, FiStar } from "react-icons/fi";

export default async function BooksPage({ searchParams }) {
  const { search } = await searchParams;
  const allBooks = await GetAllBooks();

  const books = search
    ? allBooks.filter((b) => {
        const q = search.toLowerCase();
        return (
          b.title?.toLowerCase().includes(q) ||
          b.author?.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <>
      <div className="mx-auto container px-4 py-10 sm:px-6 lg:px-8">
        <div className=" border border-[#d8d0c8] rounded-lg py-2.5 bg-white">
          <SearchBar />
        </div>
        <div className="my-8  text-center">
          <h1 className="font-heading text-3xl font-semibold text-[#1f1a14]">
            {search ? `Results for "${search}"` : "Search Books"}
          </h1>
          {search && (
            <p className="mt-1.5 text-sm text-[#6c6459]">
              {books.length} title{books.length !== 1 ? "s" : ""} found
            </p>
          )}
        </div>

        {!search ? (
          <div className="flex flex-col items-center gap-3 py-24 text-[#6c6459]">
            <FiSearch className="h-10 w-10 opacity-30" />
            <p className="text-sm">Use the search bar above to find books.</p>
          </div>
        ) : books.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
    </>
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
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${color}`}
    >
      {available === 0 ? "Unavailable" : `${available} / ${total} left`}
    </span>
  );
}

function BookCard({ book }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-[#e8e0d4] bg-white shadow-[0_2px_8px_rgba(26,26,26,0.04)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(49,79,54,0.10)]">
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
      <div className="flex flex-1 flex-col gap-2 p-3">
        <span className="self-start rounded-full bg-[#f5f0e8] px-2 py-0.5 text-[10px] font-medium text-[#6c6459]">
          {book.genre}
        </span>
        <h2 className="line-clamp-2 text-sm font-semibold leading-snug text-[#1f1a14]">
          {book.title}
        </h2>
        <p className="truncate text-xs text-[#6c6459]">{book.author}</p>
        <div className="flex items-center gap-1.5">
          <StarRating rating={book.rating} />
          <span className="text-[10px] text-[#a89e92]">
            {book.rating.toFixed(1)}
          </span>
        </div>
        <div className="mt-auto pt-1">
          <AvailabilityBadge
            available={book.available_quantity}
            total={book.total_quantity}
          />
        </div>
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
