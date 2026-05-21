import { BookCategory } from "@/lib/dataFetch";
import Image from "next/image";
import Link from "next/link";
import {
  FiAward,
  FiBook,
  FiBookmark,
  FiChevronRight,
  FiClock,
  FiCompass,
  FiGrid,
  FiHeart,
  FiMoon,
  FiStar,
  FiTrendingUp,
  FiUser,
  FiZap,
} from "react-icons/fi";

const ICON_MAP = {
  Story: FiBook,
  Tech: FiZap,
  Science: FiCompass,
  Fantasy: FiStar,
  Mystery: FiMoon,
  History: FiClock,
  Biography: FiUser,
  Business: FiTrendingUp,
  "Self-Help": FiAward,
  Health: FiHeart,
};

export default async function CategoriesPage() {
  const categories = await BookCategory();
  const totalBooks = categories.reduce(
    (sum, cat) => sum + (cat.total_books ?? 0),
    0,
  );

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-[#314f36]">
            Library
          </p>
          <h1 className="font-heading text-3xl font-bold text-[#1f1a14] sm:text-4xl">
            Browse by Category
          </h1>
          <p className="mt-2 text-sm text-[#6c6459]">
            {categories.length} categories &middot; {totalBooks} books total
          </p>
        </div>
        <div className="hidden items-center gap-1.5 rounded-full border border-[#e8e0d4] bg-white px-4 py-2 text-sm text-[#6c6459] sm:flex">
          <FiGrid className="h-3.5 w-3.5" />
          All genres
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat) => {
          const Icon = ICON_MAP[cat.name] ?? FiBookmark;
          return (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="group"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8e0d4] bg-white shadow-[0_2px_8px_rgba(26,26,26,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#314f36]/30 hover:shadow-[0_12px_32px_rgba(49,79,54,0.12)]">
                {/* Cover image from API */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#f5f0e8]">
                  {cat.image_url && (
                    <Image
                      src={cat.image_url}
                      alt={cat.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
                  {/* Icon badge — color from API theme_color */}
                  <div
                    className="absolute bottom-3 left-3 flex items-center justify-center rounded-xl p-2.5 shadow-lg"
                    style={{ backgroundColor: cat.theme_color ?? "#314f36" }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="font-semibold leading-snug text-[#1f1a14]">
                      {cat.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-[#6c6459]">
                      {cat.total_books ?? 0}{" "}
                      {(cat.total_books ?? 0) === 1 ? "book" : "books"}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-xs font-medium text-[#314f36] transition-all duration-200 group-hover:gap-2">
                    Browse
                    <FiChevronRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
