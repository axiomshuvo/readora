"use client";

import { useRef, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "@heroui/react";
import { FiArrowRight, FiAward, FiBookOpen, FiUsers } from "react-icons/fi";

// ── Data ───────────────────────────────────────────────────────────────────────

const stats = [
  { icon: FiBookOpen, value: "25K+", label: "Books" },
  { icon: FiUsers, value: "12K+", label: "Active Readers" },
  { icon: FiAward, value: "98%", label: "Happy Members" },
];

// Single source of truth — the same 3 books drive both the slider and the right panel
const books = [
  {
    n: "01",
    tag: "Mystery that stays with you",
    title: "The Silent\nForest",
    lines: ["THE", "SILENT", "FOREST"],
    author: "JOHN WILSON",
    bg: "#3d5c3a",
    fg: "#d4e8cc",
  },
  {
    n: "02",
    tag: "Ideas that shape the future",
    title: "Atomic\nHabits",
    lines: ["ATOMIC", "HABITS"],
    author: "JAMES CLEAR",
    bg: "#c9a55a",
    fg: "#fff8e8",
  },
  {
    n: "03",
    tag: "Stories that feel like home",
    title: "The Midnight\nLibrary",
    lines: ["THE", "MIDNIGHT", "LIBRARY"],
    author: "MATT HAIG",
    bg: "#2c3d5a",
    fg: "#d0dce8",
  },
];

// CSS leaf classes for the decorative plant
const plantLeaves = [
  "-rotate-[45deg] -translate-x-3 w-4 h-14 origin-bottom",
  "-rotate-[22deg] -translate-x-1 w-5 h-[4.5rem] origin-bottom",
  "rotate-[4deg]   translate-x-1  w-5 h-[4.8rem] origin-bottom",
  "rotate-[28deg]  translate-x-4  w-4 h-14 origin-bottom",
];

// ── Component ──────────────────────────────────────────────────────────────────

export default function Hero() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className=" container mx-auto my-5 relative overflow-hidden rounded-2xl border border-[#e8e0d0] bg-white shadow-sm">
      {/* ── Swiper — one slide per book ── */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {books.map((book, i) => (
          <SwiperSlide key={book.n}>
            <div className="grid min-h-95 lg:grid-cols-[44%_1fr]">
              {/* ── LEFT: Text content (same structure every slide) ── */}
              <div className="flex flex-col justify-center gap-4 px-8 py-10 lg:px-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#7a7069]">
                  Your Digital Library
                </p>

                <div>
                  <h1
                    className="text-[3rem] font-bold leading-tight text-[#1a1510] sm:text-[3.4rem]"
                    style={{ fontFamily: "var(--font-heading), serif" }}
                  >
                    Read Smarter.
                  </h1>
                  <h1
                    className="text-[3rem] font-bold italic leading-tight text-[#314f36] sm:text-[3.4rem]"
                    style={{ fontFamily: "var(--font-heading), serif" }}
                  >
                    Borrow Better.
                  </h1>
                </div>

                <p className="max-w-xs text-sm leading-7 text-[#6c6459]">
                  Explore a world of knowledge and stories.
                  <br />
                  Borrow your favorite books, anytime, anywhere.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button className="h-10 rounded-full bg-[#314f36] px-5 text-sm font-medium text-white hover:bg-[#29412d]">
                    Browse Collection
                    <FiArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="bordered"
                    className="h-10 rounded-full border-[#d0c8bc] bg-transparent px-5 text-sm font-medium text-[#3d3730]"
                  >
                    How it Works
                    <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#3d3730] text-[9px] text-white">
                      ▶
                    </span>
                  </Button>
                </div>

                <div className="flex gap-5">
                  {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-[#b07d3e]" />
                        <div>
                          <p className="text-sm font-semibold text-[#1a1510]">
                            {stat.value}
                          </p>
                          <p className="text-[11px] text-[#7a7069]">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Slide counter: "01 ——— 03" + clickable dots */}
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-semibold text-[#5a5146]">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px w-10 bg-[#c0b8ac]" />
                  <span className="text-xs text-[#a09890]">
                    {String(books.length).padStart(2, "0")}
                  </span>
                  <div className="ml-1 flex gap-1.5">
                    {books.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => swiperRef.current?.slideToLoop(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`rounded-full transition-all duration-300 ${
                          idx === activeIndex
                            ? "h-2 w-5 bg-[#314f36]"
                            : "h-2 w-2 bg-[#d0c8bc] hover:bg-[#a0988c]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* ── RIGHT: Visual area ── */}
              <div className="relative hidden overflow-hidden lg:block">
                {/* Warm cream gradient background */}
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#f5ede0_0%,#ede0cc_55%,#e0d0b4_100%)]" />

                {/* Decorative plant */}
                <div className="absolute left-10 top-8">
                  <div
                    className="absolute bottom-0 h-12 w-12"
                    style={{
                      background: "linear-gradient(180deg,#e8dfd0,#d0c4aa)",
                      borderRadius: "50% 50% 40% 40% / 30% 30% 70% 70%",
                    }}
                  />
                  {plantLeaves.map((cls, idx) => (
                    <span
                      key={idx}
                      className={`absolute bottom-10 left-3 rounded-[50%] bg-[linear-gradient(160deg,#9aba8e,#5a7a54)] ${cls}`}
                    />
                  ))}
                </div>

                {/* Wooden tray + featured book cover */}
                <div className="absolute bottom-14 left-[32%] -translate-x-1/2">
                  <div className="h-3 w-44 rounded-full bg-[linear-gradient(180deg,#c9a87a,#a87a50)] shadow-md" />
                  <div
                    className="absolute -top-40 left-1/2 -translate-x-1/2 flex h-40 w-[4.5rem] flex-col items-center justify-center gap-1 rounded-sm px-2 shadow-[0_20px_48px_rgba(0,0,0,0.22)] transition-colors duration-700"
                    style={{ backgroundColor: book.bg }}
                  >
                    {book.lines.map((line, idx) => (
                      <span
                        key={idx}
                        className="block text-center text-[11px] font-bold leading-tight"
                        style={{ color: book.fg }}
                      >
                        {line}
                      </span>
                    ))}
                    <div
                      className="mt-2 h-px w-12 opacity-40"
                      style={{ backgroundColor: book.fg }}
                    />
                    <span
                      className="mt-1 text-[8px] tracking-widest opacity-75"
                      style={{ color: book.fg }}
                    >
                      {book.author}
                    </span>
                  </div>
                </div>

                {/*
                  Right panel: all 3 books always visible.
                  Active book (current slide) is highlighted.
                  Clicking navigates to that slide.
                */}
                <div className="absolute right-0 top-0 flex h-full w-52 flex-col justify-center gap-2.5 bg-white/25 px-4 backdrop-blur-sm">
                  {books.map((b, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={b.n}
                        onClick={() => swiperRef.current?.slideToLoop(idx)}
                        className={`flex items-center gap-3 rounded-xl p-2.5 text-left transition-all duration-300 ${
                          isActive
                            ? "bg-white shadow-md ring-1 ring-[#e0d4c0]"
                            : "bg-white/60 shadow-sm hover:bg-white/85"
                        }`}
                      >
                        <div
                          className={`flex h-[3.8rem] w-9 shrink-0 items-center justify-center rounded-sm shadow-sm transition-opacity duration-300 ${
                            isActive ? "opacity-100" : "opacity-60"
                          }`}
                          style={{ backgroundColor: b.bg }}
                        >
                          <span
                            className="whitespace-pre-wrap text-center text-[7px] font-bold leading-tight"
                            style={{ color: b.fg }}
                          >
                            {b.title}
                          </span>
                        </div>
                        <div>
                          <p
                            className={`text-[10px] font-medium transition-colors duration-300 ${
                              isActive ? "text-[#314f36]" : "text-[#a09068]"
                            }`}
                          >
                            {b.n}
                          </p>
                          <p
                            className={`text-[11px] font-medium leading-snug transition-colors duration-300 ${
                              isActive ? "text-[#1a1510]" : "text-[#5a5146]"
                            }`}
                          >
                            {b.tag}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Navigation arrows ── */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-sm text-[#3d3730] shadow-sm backdrop-blur-sm hover:bg-white"
      >
        ←
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-sm text-[#3d3730] shadow-sm backdrop-blur-sm hover:bg-white"
      >
        →
      </button>
    </section>
  );
}
