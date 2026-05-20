"use client";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FiBookOpen, FiLogOut, FiMenu, FiUser, FiX } from "react-icons/fi";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "All Books", href: "/all-books" },
  { label: "Categories", href: "/categories" },
  // { label: "Membership", href: "/#membership" },

  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact-us" },
];

function isActivePath(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navigateTo = (href) => {
    setIsOpen(false);
    router.push(href);
  };

  const { session, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[linear-gradient(180deg,rgba(255,254,250,0.98),rgba(250,246,239,0.94))] backdrop-blur">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 py-4">
          <Button
            variant="light"
            onPress={() => navigateTo("/")}
            className="h-auto shrink-0 gap-3 px-0 hover:bg-transparent"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d8ccb8] bg-[#faf4e8] text-[#39573e] shadow-[0_10px_30px_rgba(57,87,62,0.08)]">
              <FiBookOpen className="h-5 w-5" />
            </span>
            <span className="font-heading text-[1.7rem] leading-none tracking-tight text-[#1f1a14]">
              Readora
            </span>
          </Button>

          <nav className="hidden flex-1 justify-center lg:flex">
            <ul className="flex items-center gap-1 rounded-full border border-black/5 bg-white/75 px-2 py-2 shadow-[0_12px_32px_rgba(26,26,26,0.05)]">
              {menuItems.map((item) => {
                const isActive = isActivePath(pathname, item.href);

                return (
                  <li key={item.label}>
                    <Button
                      variant="light"
                      onPress={() => navigateTo(item.href)}
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
                    </Button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="solid"
              onPress={() => navigateTo("/all-books")}
              className="hidden h-11 items-center gap-2 rounded-full border border-[#314f36] bg-transparent px-4 text-sm font-medium text-[#314f36] transition hover:-translate-y-0.5 hover:bg-[#314f36] hover:text-white sm:inline-flex"
            >
              Browse Now
            </Button>
            {session ? (
              <>
                <Button
                  variant="light"
                  onPress={() => navigateTo("/dashboard")}
                  className="flex h-11 items-center gap-2.5 rounded-full border border-[#e0d8cc] bg-white pl-1.5 pr-4 text-sm font-medium text-[#1f1a14] shadow-sm transition hover:-translate-y-0.5 hover:border-[#314f36]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#314f36] text-xs font-semibold text-white">
                    {session.user.name?.charAt(0).toUpperCase()}
                  </span>
                  <span className="hidden max-w-30 truncate sm:inline">
                    {session.user.name}
                  </span>
                </Button>
                <Button
                  isIconOnly
                  variant="light"
                  onPress={signOut}
                  aria-label="Sign out"
                  className="h-11 w-11 rounded-full border border-[#e8ddcd] bg-white text-[#6c6459] shadow-sm transition hover:border-[#314f36] hover:text-[#314f36]"
                >
                  <FiLogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <Button
                variant="solid"
                onPress={() => navigateTo("/login")}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#314f36] px-4 text-sm font-medium text-white shadow-[0_12px_24px_rgba(49,79,54,0.22)] transition hover:-translate-y-0.5 hover:bg-[#27412b]"
              >
                <FiUser className="h-4 w-4" />
                <span className="hidden sm:inline">Sign In</span>
              </Button>
            )}

            <Button
              isIconOnly
              variant="light"
              aria-label="Open menu"
              aria-expanded={isOpen}
              onPress={() => setIsOpen((open) => !open)}
              className="h-11 w-11 rounded-full border border-black/8 bg-white text-[#2b2a26] shadow-sm transition hover:-translate-y-0.5 hover:border-black/15 hover:bg-[#fcfaf6] lg:hidden"
            >
              {isOpen ? (
                <FiX className="h-5 w-5" />
              ) : (
                <FiMenu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {isOpen ? (
          <div className="border-t border-black/5 pb-4 pt-3 lg:hidden">
            <nav className="flex flex-col gap-1">
              {menuItems.map((item) => {
                const isActive = isActivePath(pathname, item.href);

                return (
                  <Button
                    key={item.label}
                    variant="light"
                    onPress={() => navigateTo(item.href)}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#f4ecdf] text-[#1f1a14]"
                        : "text-[#5f584f] hover:bg-white/80 hover:text-[#1f1a14]"
                    }`}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
