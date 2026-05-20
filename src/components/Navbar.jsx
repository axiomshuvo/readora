"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Collection", href: "/all-books" },
  { label: "Categories", href: "/#categories" },
  { label: "Membership", href: "/#membership" },
  { label: "Community", href: "/#community" },
  { label: "About", href: "/#about" },
];

const iconButtonClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white text-[#2b2a26] shadow-sm transition hover:-translate-y-0.5 hover:border-black/15 hover:bg-[#fcfaf6]";

function isActivePath(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href.startsWith("/#")) {
    return false;
  }

  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[linear-gradient(180deg,rgba(255,254,250,0.98),rgba(250,246,239,0.94))] backdrop-blur">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 py-4">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d8ccb8] bg-[#faf4e8] text-[#39573e] shadow-[0_10px_30px_rgba(57,87,62,0.08)]">
              <BookLogoIcon />
            </span>
            <span
              className="text-[1.7rem] leading-none tracking-tight text-[#1f1a14]"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              Readora
            </span>
          </Link>

          <nav className="hidden flex-1 justify-center lg:flex">
            <ul className="flex items-center gap-1 rounded-full border border-black/5 bg-white/75 px-2 py-2 shadow-[0_12px_32px_rgba(26,26,26,0.05)]">
              {menuItems.map((item) => {
                const isActive = isActivePath(pathname, item.href);

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition ${
                        isActive
                          ? "bg-[#f6efe4] text-[#1f1a14]"
                          : "text-[#5f584f] hover:bg-[#faf6ef] hover:text-[#1f1a14]"
                      }`}
                    >
                      {item.label}
                      {isActive ? (
                        <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-[#3d5f42]" />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              aria-label="Search"
              className="hidden sm:inline-flex"
            >
              <span className={iconButtonClass}>
                <SearchIcon />
              </span>
            </button>

            <button
              type="button"
              aria-label="Saved books"
              className="hidden sm:inline-flex"
            >
              <span className={iconButtonClass}>
                <BookmarkIcon />
              </span>
            </button>

            <Link
              href="/login"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#314f36] px-4 text-sm font-medium text-white shadow-[0_12px_24px_rgba(49,79,54,0.22)] transition hover:-translate-y-0.5 hover:bg-[#27412b]"
            >
              <UserIcon />
              <span className="hidden sm:inline">Sign In</span>
            </Link>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
              className={`lg:hidden ${iconButtonClass}`}
            >
              <MenuIcon />
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="border-t border-black/5 pb-4 pt-3 lg:hidden">
            <nav className="flex flex-col gap-1">
              {menuItems.map((item) => {
                const isActive = isActivePath(pathname, item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#f4ecdf] text-[#1f1a14]"
                        : "text-[#5f584f] hover:bg-white/80 hover:text-[#1f1a14]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}

function BookLogoIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.75 5.75A2.75 2.75 0 0 1 7.5 3h10.25v15.25H7.5A2.75 2.75 0 0 0 4.75 21V5.75Z" />
      <path d="M7.5 3A2.75 2.75 0 0 0 4.75 5.75V21" />
      <path d="M9.5 7.25h5.75" />
      <path d="M9.5 10.5h4.5" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.75 4.75h8.5a1 1 0 0 1 1 1v13.5l-5.25-3-5.25 3V5.75a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 20a6 6 0 0 0-12 0" />
      <circle cx="12" cy="9" r="3.25" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}
