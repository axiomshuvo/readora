import { BookCategory } from "@/lib/dataFetch";
import { Card } from "@heroui/react";
import Link from "next/link";
import {
  FiAlertTriangle,
  FiAward,
  FiBook,
  FiBookmark,
  FiBookOpen,
  FiChevronRight,
  FiClock,
  FiCompass,
  FiEdit,
  FiFeather,
  FiHeart,
  FiMoon,
  FiSearch,
  FiStar,
  FiSun,
  FiTrendingUp,
  FiUser,
  FiZap,
} from "react-icons/fi";

const CATEGORY_CONFIG = {
  Fiction: { icon: FiBook, bg: "bg-blue-50", text: "text-blue-500" },
  "Non-Fiction": {
    icon: FiBookOpen,
    bg: "bg-amber-50",
    text: "text-amber-600",
  },
  Romance: { icon: FiHeart, bg: "bg-rose-50", text: "text-rose-500" },
  "Science Fiction": { icon: FiZap, bg: "bg-cyan-50", text: "text-cyan-600" },
  Fantasy: { icon: FiStar, bg: "bg-purple-50", text: "text-purple-500" },
  Mystery: { icon: FiSearch, bg: "bg-slate-100", text: "text-slate-500" },
  Biography: { icon: FiUser, bg: "bg-teal-50", text: "text-teal-600" },
  History: { icon: FiClock, bg: "bg-orange-50", text: "text-orange-500" },
  Classic: { icon: FiAward, bg: "bg-yellow-50", text: "text-yellow-600" },
  Horror: { icon: FiMoon, bg: "bg-gray-100", text: "text-gray-500" },
  Thriller: { icon: FiAlertTriangle, bg: "bg-red-50", text: "text-red-500" },
  Adventure: { icon: FiCompass, bg: "bg-emerald-50", text: "text-emerald-600" },
  "Self-Help": {
    icon: FiTrendingUp,
    bg: "bg-green-50",
    text: "text-green-600",
  },
  Philosophy: { icon: FiFeather, bg: "bg-indigo-50", text: "text-indigo-500" },
  Poetry: { icon: FiEdit, bg: "bg-pink-50", text: "text-pink-500" },
  Children: { icon: FiSun, bg: "bg-yellow-50", text: "text-yellow-500" },
};
const DEFAULT_CONFIG = {
  icon: FiBookmark,
  bg: "bg-[#eef4ef]",
  text: "text-[#314f36]",
};

export default async function CategoriesPage() {
  const categories = await BookCategory();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-heading text-3xl font-semibold text-[#1f1a14]">
          Browse by Category
        </h1>
        <p className="mt-1.5 text-sm text-[#6c6459]">
          {categories.length} categories &middot; {books.length} books total
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {categories.map(([cat, count]) => {
          const config = CATEGORY_CONFIG[cat] ?? DEFAULT_CONFIG;
          const Icon = config.icon;
          return (
            <Link
              key={cat}
              href={`/categories/${encodeURIComponent(cat)}`}
              className="group"
            >
              <Card
                variant="transparent"
                className="h-full cursor-pointer overflow-hidden rounded-2xl border border-[#e8e0d4] bg-white shadow-[0_2px_8px_rgba(26,26,26,0.04)] transition hover:-translate-y-1 hover:border-[#314f36]/30 hover:shadow-[0_8px_24px_rgba(49,79,54,0.10)]"
              >
                <Card.Content className="p-6">
                  <div
                    className={`mb-4 inline-flex rounded-xl p-3 ${config.bg}`}
                  >
                    <Icon className={`h-6 w-6 ${config.text}`} />
                  </div>
                  <Card.Title className="text-[15px] font-semibold text-[#1f1a14]">
                    {cat}
                  </Card.Title>
                  <p className="mt-1 text-sm text-[#6c6459]">
                    {count} {count === 1 ? "book" : "books"}
                  </p>
                </Card.Content>
                <Card.Footer className="border-t border-[#e8e0d4] px-6 py-3">
                  <span className="flex items-center gap-1 text-xs font-medium text-[#314f36] transition-all group-hover:gap-2">
                    Browse collection
                    <FiChevronRight className="h-3.5 w-3.5" />
                  </span>
                </Card.Footer>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
