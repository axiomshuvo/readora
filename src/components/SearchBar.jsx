"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ basePath = "/books" }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch() {
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`${basePath}?search=${encodeURIComponent(trimmed)}`);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <div className="flex flex-1 items-center gap-3 px-5">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search by title, author or keyword..."
        className="flex-1 bg-transparent text-sm text-[#1f1a14] outline-none placeholder:text-[#a89e92]"
      />
      <button
        onClick={handleSearch}
        aria-label="Search"
        className="flex h-9 w-9 shrink-0 items-center cursor-pointer justify-center rounded-full bg-[#314f36] text-white transition-colors hover:bg-[#263f2b]"
      >
        <FiSearch className="h-4 w-4" />
      </button>
    </div>
  );
}
