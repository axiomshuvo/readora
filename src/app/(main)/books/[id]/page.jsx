import { BookDetails } from "@/lib/dataFetch";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiBarChart2,
  FiBook,
  FiBookOpen,
  FiCalendar,
  FiChevronRight,
  FiClock,
  FiGlobe,
  FiHash,
  FiStar,
  FiUsers,
} from "react-icons/fi";

export default async function SingleBookDetails({ params }) {
  const { id } = await params;
  const book = await BookDetails({ bookId: id });

  const availabilityPct = Math.round(
    (book.available_quantity / book.total_quantity) * 100,
  );

  return (
    <div className="min-h-screen bg-[#faf4e8]">
      {/* ════════════════════════════════════
          IMMERSIVE BANNER
      ════════════════════════════════════ */}
      <div className="relative overflow-hidden">
        {/* Blurred cover as background */}
        {book.image_url && (
          <div className="absolute inset-0 scale-125">
            <Image
              src={book.image_url}
              alt=""
              fill
              sizes="100vw"
              className="object-cover blur-[72px]"
              priority
            />
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-[#1a1208]/90 via-[#1a1208]/85 to-[#1a1208]/95" />
        {/* Bottom bleed into page */}
        <div className="absolute right-0 bottom-0 left-0 h-40 bg-linear-to-t from-[#3d270d] via-[#1a1208]/40 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pb-32">
          {/* Back */}
          <Link
            href="/all-books"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm transition hover:bg-white/20"
          >
            <FiArrowLeft className="h-3.5 w-3.5" />
            All books
          </Link>

          {/* Cover + Info */}
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-10">
            {/* Cover */}
            <div className="mx-auto w-44 shrink-0 sm:mx-0 sm:w-56 lg:w-64">
              <div className="relative aspect-2/3 w-full overflow-hidden rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.7)] ring-1 ring-white/20">
                {book.image_url ? (
                  <Image
                    src={book.image_url}
                    alt={book.title}
                    fill
                    sizes="208px"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[#2a2318]">
                    <FiBookOpen className="h-12 w-12 text-white/30" />
                  </div>
                )}
              </div>
            </div>

            {/* Metadata */}
            <div className="flex flex-col gap-4 text-center sm:text-left">
              {/* Badge row */}
              <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                {book.is_featured && (
                  <span className="rounded-full bg-[#314f36] px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white">
                    Featured
                  </span>
                )}
                {book.is_new_arrival && (
                  <span className="rounded-full bg-blue-500 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white">
                    New
                  </span>
                )}
                {book.is_popular && (
                  <span className="rounded-full bg-amber-400 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#1a1208]">
                    Popular
                  </span>
                )}
                <span className="rounded-full border border-white/20 px-3 py-0.5 text-[10px] font-medium text-white/60">
                  {book.category}
                </span>
                <span className="rounded-full border border-white/20 px-3 py-0.5 text-[10px] font-medium text-white/60">
                  {book.genre}
                </span>
              </div>

              <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {book.title}
              </h1>

              <p className="text-sm text-white/60">
                by{" "}
                <span className="font-semibold text-white/90">
                  {book.author}
                </span>
              </p>

              {/* Rating row */}
              <div className="flex items-center justify-center gap-2.5 sm:justify-start">
                <StarRating rating={book.rating} size="md" />
                <span className="text-sm font-bold text-white">
                  {book.rating.toFixed(1)}
                </span>
                <span className="flex items-center gap-1 text-xs text-white/50">
                  <FiUsers className="h-3.5 w-3.5" />
                  {book.total_reviews.toLocaleString()} reviews
                </span>
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
                {[
                  { Icon: FiClock, label: book.estimated_read_time },
                  { Icon: FiBarChart2, label: book.reading_level },
                  { Icon: FiBook, label: `${book.pages} pages` },
                  { Icon: FiGlobe, label: book.language },
                ].map(({ Icon, label }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 text-xs text-white/60"
                  >
                    <Icon className="h-3.5 w-3.5 text-white/40" />
                    {label}
                  </span>
                ))}
              </div>

              {/* Description */}
              {book.description && (
                <p className="max-w-xl text-sm leading-7 text-white/70">
                  {book.description}
                </p>
              )}

              {/* Availability */}
              <div className="w-full max-w-xs mx-auto sm:mx-0">
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="font-medium text-white/50">
                    Availability
                  </span>
                  <span className="font-semibold text-[#6db87a]">
                    {book.available_quantity}/{book.total_quantity} Copies Left
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#314f36] transition-all"
                    style={{ width: `${availabilityPct}%` }}
                  />
                </div>
              </div>

              {/* Borrow button */}
              <div className="flex justify-center sm:justify-start">
                <button
                  disabled={book.available_quantity === 0}
                  className={`flex items-center gap-2 rounded-xl px-8 py-3 text-sm font-semibold transition ${
                    book.available_quantity > 0
                      ? "cursor-pointer bg-[#08440d] text-white shadow-[0_4px_20px_rgba(30,53,36,0.5)] hover:bg-[#263f2c] hover:shadow-[0_6px_24px_rgba(30,53,36,0.6)] active:scale-95"
                      : "cursor-not-allowed bg-white/10 text-white/40"
                  }`}
                >
                  {book.available_quantity > 0 ? (
                    <>
                      Borrow This Book
                      <FiChevronRight className="h-4 w-4" />
                    </>
                  ) : (
                    "Currently Unavailable"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          CONTENT
      ════════════════════════════════════ */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_280px]">
          {/* ── Left: About + Reviews ── */}
          <div className="flex flex-col gap-8">
            {/* About */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#e8e0d4]">
              <SectionHeading>About this book</SectionHeading>
              <p className="border-l-2 border-[#314f36]/40 pl-4 text-[15px] leading-8 text-[#4a4236]">
                {book.details_description || book.description}
              </p>
            </div>

            {/* Reviews */}
            {book.reviews?.length > 0 && (
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#e8e0d4]">
                <SectionHeading>
                  Reader reviews ({book.reviews.length})
                </SectionHeading>
                <div className="flex flex-col divide-y divide-[#f5f0e8]">
                  {book.reviews.map((review, i) => (
                    <div
                      key={i}
                      className="border-l-2 border-[#314f36]/20 pl-3 py-4 first:pt-0 last:pb-0"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#314f36] text-xs font-bold text-white">
                            {review.user.charAt(0).toUpperCase()}
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-[#1f1a14]">
                              {review.user}
                            </p>
                            <p className="text-xs text-[#a89e92]">
                              {review.date}
                            </p>
                          </div>
                        </div>
                        <StarRating rating={review.rating} size="sm" />
                      </div>
                      <p className="text-sm leading-relaxed text-[#6c6459]">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── Right: Publication + Tags ── */}
          <div className="flex flex-col gap-6">
            {/* Publication details */}
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#e8e0d4]">
              <SectionHeading>Details</SectionHeading>
              <dl className="flex flex-col gap-3">
                {[
                  { Icon: FiHash, label: "ISBN", value: book.isbn },
                  {
                    Icon: FiCalendar,
                    label: "Published",
                    value: new Date(book.published_date).getFullYear(),
                  },
                  {
                    Icon: FiBookOpen,
                    label: "Publisher",
                    value: book.publisher,
                  },
                  { Icon: FiBook, label: "Pages", value: book.pages },
                  { Icon: FiGlobe, label: "Language", value: book.language },
                ].map(({ Icon, label, value }) => (
                  <div
                    key={label}
                    className="-mx-5 flex items-center justify-between gap-3 px-5 py-2.5 transition hover:bg-[#faf8f4] last:rounded-b-2xl"
                  >
                    <dt className="flex items-center gap-2 text-[15px] text-[#6c6459]">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#f5f0e8]">
                        <Icon className="h-3 w-3 text-[#6c6459]" />
                      </span>
                      {label}
                    </dt>
                    <dd className="text-right text-[15px] font-semibold text-[#1f1a14]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Tags */}
            {book.tags?.length > 0 && (
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#e8e0d4]">
                <SectionHeading>Tags</SectionHeading>
                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#314f36]/30 bg-[#314f36]/10 px-3.5 py-1.5 text-xs font-medium text-[#314f36] transition hover:bg-[#314f36]/20"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <div className="mb-5 flex items-center gap-2.5">
      <span className="h-4 w-1 rounded-full bg-[#314f36]" />
      <h2 className="text-sm font-semibold tracking-wide text-[#1f1a14]">
        {children}
      </h2>
    </div>
  );
}

function StarRating({ rating, size = "md" }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const cls = size === "sm" ? "h-3 w-3" : "h-4 w-4";
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <FiStar
          key={i}
          className={`${cls} ${
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
