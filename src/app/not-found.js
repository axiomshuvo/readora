"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FiArrowLeft,
  FiBookOpen,
  FiGrid,
  FiHome,
  FiMail,
  FiSearch,
} from "react-icons/fi";

const quickLinks = [
  { label: "Home", href: "/", icon: FiHome },
  { label: "All Books", href: "/all-books", icon: FiBookOpen },
  { label: "Categories", href: "/categories", icon: FiGrid },
  { label: "Contact", href: "/contact-us", icon: FiMail },
];

const books = [
  { h: 72, w: 26, bg: "#4a7c59" },
  { h: 96, w: 32, bg: "#314f36" },
  { h: 128, w: 42, bg: "#2c3d5a" },
  { h: 104, w: 34, bg: "#c9a55a" },
  { h: 80, w: 28, bg: "#8b6f52" },
  { h: 60, w: 22, bg: "#314f36" },
];

export default function NotFound() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim())
      router.push(`/all-books?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#faf4e8]">
      {/* Mini navbar */}
      <div className="border-b border-[#e8e0d4] bg-white/80 px-6 py-4 backdrop-blur">
        <Link
          href="/"
          className="inline-flex items-center gap-3 transition-opacity hover:opacity-75"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#d8ccb8] bg-[#faf4e8] text-[#39573e]">
            <FiBookOpen className="h-4 w-4" />
          </span>
          <span className="font-heading text-[1.4rem] leading-none tracking-tight text-[#1f1a14]">
            Readora
          </span>
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="mx-auto w-full max-w-md text-center">
          {/* Book stack illustration */}
          <div className="mb-8 flex items-end justify-center gap-1.5">
            {books.map((b, i) => (
              <div
                key={i}
                className="rounded-t-sm"
                style={{
                  height: b.h,
                  width: b.w,
                  backgroundColor: b.bg,
                  opacity: i === 2 ? 1 : 0.55,
                }}
              />
            ))}
          </div>

          {/* Badge + heading */}
          <span className="mb-5 inline-block rounded-full border border-[#d8ccb8] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#6c6459]">
            Error 404
          </span>
          <h1 className="font-heading mb-3 text-5xl leading-tight tracking-tight text-[#1f1a14] sm:text-6xl">
            This page went missing
          </h1>
          <p className="mb-8 text-sm leading-relaxed text-[#6c6459]">
            Looks like this page was borrowed and never returned. Search for
            what you need or pick a destination below.
          </p>

          {/* Search bar */}
          <form
            onSubmit={handleSearch}
            className="mb-5 flex overflow-hidden rounded-2xl border border-[#e0d8cc] bg-white shadow-sm"
          >
            <FiSearch className="my-auto ml-4 h-4 w-4 shrink-0 text-[#a89e92]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search books, authors, titles..."
              className="flex-1 bg-transparent px-3 py-3.5 text-sm text-[#1f1a14] outline-none placeholder:text-[#a89e92]"
              autoFocus
            />
            <button
              type="submit"
              className="m-1.5 rounded-xl bg-[#314f36] px-4 text-sm font-medium text-white transition hover:bg-[#27412b] disabled:opacity-40"
              disabled={!query.trim()}
            >
              Search
            </button>
          </form>

          {/* Primary CTAs */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#314f36] px-5 text-sm font-medium text-white shadow-[0_12px_24px_rgba(49,79,54,0.22)] transition hover:-translate-y-0.5 hover:bg-[#27412b]"
            >
              <FiArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <Link
              href="/all-books"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-[#d8ccb8] bg-white px-5 text-sm font-medium text-[#314f36] transition hover:-translate-y-0.5 hover:border-[#314f36]"
            >
              Browse Collection
            </Link>
          </div>

          {/* Quick links */}
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-[#b0a89e]">
            Jump to
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {quickLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#e0d8cc] bg-white px-4 py-2 text-sm text-[#5f584f] transition hover:border-[#314f36] hover:text-[#314f36]"
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
