import React from "react";
import { FiBookOpen, FiRotateCcw, FiUser } from "react-icons/fi";

// Icon circle is h-[3.2rem] = 51.2px → center at 1.6rem → connector mt-[1.6rem]
const steps = [
  {
    step: "1",
    icon: FiUser,
    title: "Create Account",
    description: "Sign up in minutes and get started.",
  },
  {
    step: "2",
    icon: FiBookOpen,
    title: "Browse & Borrow",
    description: "Find books you love and borrow instantly.",
    highlight: true, // warm amber tint, matches the ref
  },
  {
    step: "3",
    icon: FiRotateCcw,
    title: "Read & Return",
    description: "Enjoy reading and return easily.",
  },
];

export default function HowItWorks() {
  return (
    <section>
      <h2
        className="text-2xl font-semibold text-[#1f1a14]"
        style={{ fontFamily: "var(--font-heading), serif" }}
      >
        How It Works
      </h2>
      <p className="mt-1 text-sm text-[#7a7069]">It's simple and seamless</p>

      {/*
        Outer flex row:  [step] [connector] [step] [connector] [step]
        Steps are shrink-0; connectors are flex-1 (fill remaining space).
        mt-[1.6rem] on connector aligns it with the vertical center of the icon circle.
      */}
      <div className="mt-8 flex items-start">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;
          return (
            <React.Fragment key={step.step}>
              {/* ── Step block ── */}
              <div className="flex shrink-0 items-start gap-3">
                {/* Icon circle + number badge */}
                <div className="relative">
                  <div
                    className={`flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full border-2 ${
                      step.highlight
                        ? "border-[#e8d0a8] bg-[#fef0d8]"
                        : "border-[#e0d8cf] bg-[#faf7f4]"
                    }`}
                  >
                    <Icon
                      className={`h-[1.3rem] w-[1.3rem] ${
                        step.highlight ? "text-[#c0832f]" : "text-[#5a5146]"
                      }`}
                    />
                  </div>
                  {/* Small numbered badge overlapping bottom-left */}
                  <span className="absolute -bottom-1.5 -left-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#2c2820] text-[10px] font-bold leading-none text-white">
                    {step.step}
                  </span>
                </div>

                {/* Title + description */}
                <div className="max-w-[7.5rem] pt-0.5">
                  <p className="text-sm font-semibold text-[#1f1a14]">
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs leading-[1.65] text-[#7a7069]">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* ── Connector line between steps ── */}
              {!isLast && (
                <div className="mx-3 mt-[1.6rem] flex-1 border-t border-dashed border-[#d9cfc3]" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
