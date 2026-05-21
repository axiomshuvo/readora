import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { FiBookmark, FiGrid } from "react-icons/fi";

export default function Browse() {
  return (
    <div className="flex items-center overflow-hidden rounded-2xl border border-[#e8e0d4] bg-white shadow-sm">
      {/* Left — tagline */}
      <div className="flex shrink-0 items-center gap-3 px-5 py-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#e0d8cc] bg-[#f5f0e8]">
          <FiBookmark className="h-4 w-4 text-[#314f36]" />
        </span>
        <p className="text-sm font-semibold leading-tight text-[#1f1a14]">
          Find your
          <br />
          next read
        </p>
      </div>

      {/* Divider */}
      <div className="h-10 w-px shrink-0 bg-[#e8e0d4]" />

      {/* Search input */}
      <SearchBar />

      {/* Divider */}
      <div className="h-10 w-px shrink-0 bg-[#e8e0d4]" />

      {/* Right actions */}
      <div className="flex shrink-0 items-center px-2 py-2">
        <Link href="/categories">
          <button className="flex cursor-pointer  items-center gap-3 rounded-xl px-4 py-2 transition-colors hover:bg-[#f5f0e8]">
            <FiGrid className="h-5 w-5 shrink-0 text-[#314f36]" />
            <div className="text-left">
              <p className="text-sm font-semibold text-[#1f1a14]">Browse</p>
              <p className="text-xs text-[#6c6459]">Categories</p>
            </div>
          </button>
        </Link>
        <Link href="/#my-borrowings">
          <button className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-2 transition-colors hover:bg-[#f5f0e8]">
            <FiBookmark className="h-5 w-5 shrink-0 text-[#314f36]" />
            <div className="text-left">
              <p className="text-sm font-semibold text-[#1f1a14]">
                My Borrowings
              </p>
              <p className="text-xs text-[#6c6459]">View Status</p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
