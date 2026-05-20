"use client";

import Marquee from "react-fast-marquee";

const items = [
  { label: "New Arrivals", text: "The Silent Forest by John Wilson" },
  { label: "Special Offer", text: "50% Off Premium Membership This Month" },
  { label: "New Arrivals", text: "Atomic Habits by James Clear" },
  { label: "Did You Know", text: "Borrow Up to 5 Books at Once" },
  { label: "New Arrivals", text: "The Midnight Library by Matt Haig" },
  { label: "Reminder", text: "Return Borrowed Books Before Your Due Date" },
  { label: "New Arrivals", text: "Sapiens by Yuval Noah Harari" },
  { label: "Tip", text: "Join the 21-Day Reading Challenge — It's Free!" },
];

export default function Marque() {
  return (
    <div className="container mx-auto rounded-2xl my-5 bg-[#314f36] py-2.5">
      <Marquee
        speed={50}
        pauseOnHover
        gradient
        gradientColor="#314f36"
        gradientWidth={80}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-6 inline-flex items-center gap-2 whitespace-nowrap"
          >
            <span className="rounded-sm bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#c8dfc2]">
              {item.label}
            </span>
            <span className="text-[13px] text-[#e8f0e5]">{item.text}</span>
            <span className="ml-4 text-[#8aaf8e]" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
