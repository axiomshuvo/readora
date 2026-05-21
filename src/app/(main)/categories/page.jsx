import { BookCategory } from "@/lib/dataFetch";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import {
  FiAward,
  FiBook,
  FiBookmark,
  FiChevronRight,
  FiClock,
  FiCompass,
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
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-semibold text-[#1f1a14]">
          Browse by Category
        </h1>
        <p className="mt-1.5 text-sm text-[#6c6459]">
          {categories.length} categories &middot; {totalBooks} books total
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat) => {
          const Icon = ICON_MAP[cat.name] ?? FiBookmark;
          const color = cat.theme_color ?? "#314f36";
          return (
            <Link
              key={cat.id}
              href={`/all-books?category=${encodeURIComponent(cat.name)}`}
              className="group"
            >
              <Card
                className="h-full overflow-hidden rounded-2xl shadow-[0_2px_8px_rgba(26,26,26,0.06)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.14)]"
                style={{
                  backgroundColor: color + "18",
                  borderColor: color + "55",
                }}
              >
                {/* Cover image */}
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  {cat.image_url && (
                    <Image
                      src={cat.image_url}
                      alt={cat.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                <Card.Content className="flex flex-col gap-3 p-3">
                  {/* Icon left + name right */}
                  <div className="flex items-center gap-3">
                    <div
                      className="flex shrink-0 items-center justify-center rounded-xl p-2.5 shadow-md"
                      style={{ backgroundColor: color }}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="truncate text-base font-bold leading-snug text-[#1f1a14]">
                        {cat.name}
                      </h2>
                      <p className="text-xs text-[#6c6459]">
                        {cat.total_books ?? 0}{" "}
                        {(cat.total_books ?? 0) === 1 ? "book" : "books"}
                      </p>
                    </div>
                  </div>

                  {/* Browse button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full rounded-xl text-xs font-semibold text-white active:scale-95"
                    style={{ backgroundColor: color }}
                  >
                    Browse
                    <FiChevronRight className="h-3.5 w-3.5" />
                  </Button>
                </Card.Content>
              </Card>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
