import { GetAllBooks } from "@/lib/dataFetch";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiBookOpen, FiStar } from "react-icons/fi";

const categoryColors = {
  Fiction: "bg-rose-100 text-rose-700",
  Science: "bg-blue-100 text-blue-700",
  Tech: "bg-violet-100 text-violet-700",
  "Self-Help": "bg-amber-100 text-amber-700",
  Mystery: "bg-slate-100 text-slate-700",
  History: "bg-orange-100 text-orange-700",
};

export default async function FeatureBook() {
  const allBooks = await GetAllBooks();
  // prefer is_featured:true books, fill up to 4 with random others if needed
  const featured = allBooks.filter((b) => b.is_featured);
  const others = allBooks.filter((b) => !b.is_featured);
  const pool = featured.length >= 4 ? featured : [...featured, ...others];
  const books = [...pool].sort(() => Math.random() - 0.5).slice(0, 4);

  return (
    <section className="my-8">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="font-heading text-2xl font-semibold text-[#1f1a14]">
            Featured Books
          </h2>
          <p className="mt-0.5 text-sm text-[#7a7069]">
            Hand-picked titles for you
          </p>
        </div>
        <Link
          href="/all-books"
          className="flex items-center gap-1 text-sm font-medium text-[#314f36] transition hover:underline"
        >
          View all books <FiArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {books.map((book) => {
          const colorClass =
            categoryColors[book.category] ?? "bg-gray-100 text-gray-600";
          return (
            <div
              key={book.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#ede5d8] bg-white shadow-sm"
            >
              {/* Cover */}
              <div className="bg-[#f5f0e8] px-3 py-3">
                <div className="relative h-35 w-full overflow-hidden rounded-xl bg-[#f5f0e8]">
                  {book.image_url ? (
                    <Image
                      src={book.image_url}
                      alt={book.title}
                      fill
                      sizes="(max-width:640px) 50vw, 25vw"
                      className="object-contain"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <FiBookOpen className="h-8 w-8 text-[#c8bfb0]" />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 p-3">
                {/* Category badge */}
                <span
                  className={`w-fit rounded-full px-2 py-0.5 text-[10px] font-semibold ${colorClass}`}
                >
                  {book.category}
                </span>

                <p className="line-clamp-2 text-[13px] font-semibold leading-snug text-[#1f1a14]">
                  {book.title}
                </p>
                <p className="text-[11px] text-[#7a7069]">{book.author}</p>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <FiStar className="h-3 w-3 fill-[#f59e0b] text-[#f59e0b]" />
                  <span className="text-[11px] font-semibold text-[#1f1a14]">
                    {book.rating?.toFixed(1)}
                  </span>
                  {book.total_reviews && (
                    <span className="text-[10px] text-[#a89e92]">
                      ({(book.total_reviews / 1000).toFixed(1)}k)
                    </span>
                  )}
                </div>

                {/* View Details button */}
                <Link
                  href={`/books/${book.id}`}
                  className="mt-auto rounded-lg border border-[#314f36] px-3 py-1.5 text-center text-[11px] font-semibold text-[#314f36] transition hover:bg-[#314f36] hover:text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
