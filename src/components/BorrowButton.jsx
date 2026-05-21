"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const LS_KEY = "readora_borrows";

export default function BorrowButton({
  bookId,
  bookTitle,
  bookImage,
  available,
}) {
  const [borrowed, setBorrowed] = useState(false);

  useEffect(() => {
    const borrows = JSON.parse(localStorage.getItem(LS_KEY) ?? "[]");
    setBorrowed(borrows.some((b) => b.bookId === bookId));
  }, [bookId]);

  function handleBorrow() {
    const borrows = JSON.parse(localStorage.getItem(LS_KEY) ?? "[]");
    borrows.push({
      bookId,
      bookTitle,
      bookImage,
      borrowedAt: new Date().toISOString(),
      status: "active",
    });
    localStorage.setItem(LS_KEY, JSON.stringify(borrows));
    setBorrowed(true);
    toast.success(`"${bookTitle}" borrowed successfully!`);
  }

  if (available === 0) {
    return (
      <button
        variant="primary"
        disabled
        className="w-52 cursor-not-allowed rounded-xl bg-white/10 px-8 py-3 text-sm font-semibold text-white/40"
      >
        Currently Unavailable
      </button>
    );
  }

  return (
    <button
      variant="primary"
      onClick={handleBorrow}
      disabled={borrowed}
      className={`w-52 rounded-xl px-8 py-3 text-sm font-semibold transition ${
        borrowed
          ? "cursor-not-allowed bg-white/10 text-white/40"
          : "cursor-pointer bg-[#08440d] text-white hover:bg-[#263f2c] active:scale-95"
      }`}
    >
      {borrowed ? (
        <span className="flex items-center justify-between gap-2">
          Already Borrowed <span>✓</span>
        </span>
      ) : (
        "Borrow This Book"
      )}
    </button>
  );
}
