import { Button } from "@heroui/react";
import { FiArrowRight, FiBookOpen, FiUsers } from "react-icons/fi";

const stats = [
  { value: "3,450+", label: "Participants", icon: FiUsers },
  { value: "18,230", label: "Books Read", icon: FiBookOpen },
];

export default function Challenge() {
  return (
    <section className="container mx-auto py-6 sm:py-8">
      <div className="overflow-hidden rounded-3xl border border-[#e5d8c5] bg-[linear-gradient(135deg,#faf5ec_0%,#f2e8d5_100%)]">
        <div className="flex min-h-[132px] items-stretch">
          {/* ─────────────────────────────────────────────
              LEFT COLUMN — plant + stacked books + calendar
          ───────────────────────────────────────────── */}
          <div className="relative hidden w-64 shrink-0 overflow-hidden lg:block">
            {/* Soft green glow behind the plant */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(80,110,75,0.14),transparent_65%)]" />
            {/* Ground shadow */}
            <div className="absolute bottom-0 left-4 right-4 h-2 rounded-full bg-[#c9b090]/40 blur-md" />

            {/* Plant pot — vase silhouette */}
            <div
              className="absolute bottom-4 left-6 h-[3.4rem] w-[3.8rem]"
              style={{
                background: "linear-gradient(180deg,#ede5d8,#d4c5ae)",
                borderRadius: "50% 50% 38% 38% / 28% 28% 72% 72%",
              }}
            />

            {/* Plant leaves — five ovals fanning up from the pot rim */}
            {[
              "-rotate-[52deg] -translate-x-5 w-7 h-[4.5rem]",
              "-rotate-[28deg] -translate-x-2 w-8 h-[5rem]",
              "-rotate-[5deg]   translate-x-2  w-9 h-[5.2rem]",
              "rotate-[20deg]  translate-x-6  w-7 h-[4.5rem]",
              "rotate-[44deg]  translate-x-9  w-6 h-16",
            ].map((cls, i) => (
              <span
                key={i}
                className={`absolute bottom-[4.2rem] left-[2.1rem] origin-bottom rounded-[50%] bg-[linear-gradient(160deg,#8ab07e,#4f7248)] ${cls}`}
              />
            ))}

            {/* Horizontal stacked books beside the pot */}
            <div className="absolute bottom-[1.35rem] left-[4.8rem] flex flex-col-reverse gap-px">
              {[
                { w: "w-[4.8rem]", color: "#c5aa84" },
                { w: "w-[4rem]", color: "#a88a6c" },
                { w: "w-[5.2rem]", color: "#baa98e" },
              ].map((b, i) => (
                <div
                  key={i}
                  className={`h-[5px] rounded-[1px] ${b.w}`}
                  style={{ backgroundColor: b.color }}
                />
              ))}
            </div>

            {/* Flip calendar card — slightly tilted */}
            <div
              className="absolute bottom-4 right-4 w-[5.4rem] rounded-[14px] border border-[#dccdb8] bg-[linear-gradient(180deg,#fffaf3,#f5e9d5)] shadow-[0_10px_28px_rgba(74,60,43,0.18)]"
              style={{ transform: "rotate(4deg)" }}
            >
              {/* Spiral ring row */}
              <div className="flex items-center justify-around px-1.5 pt-2 pb-0.5">
                {Array.from({ length: 7 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-[9px] w-[6px] rounded-full border border-[#a89070] bg-[#ede1ce]"
                  />
                ))}
              </div>
              {/* Number + label */}
              <div className="flex flex-col items-center pb-3 pt-1">
                <span className="font-heading text-[2.9rem] leading-none text-[#3b3128]">
                  21
                </span>
                <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.22em] text-[#6e6254]">
                  Days
                </span>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────
              CENTER COLUMN — heading, description, CTA
          ───────────────────────────────────────────── */}
          <div className="flex flex-1 flex-col justify-center gap-2.5 px-8 py-8">
            <h2 className="font-heading text-[1.55rem] font-semibold leading-snug text-[#1f1a14]">
              Join the 21-Day Reading Challenge
            </h2>
            <p className="text-sm text-[#6c6459]">
              Build a reading habit. Win rewards. Be part of a community.
            </p>
            <div className="mt-1">
              <Button className="h-9 rounded-full bg-[#314f36] px-5 text-sm font-medium text-white hover:bg-[#29412d]">
                Join Challenge
                <FiArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </div>
          </div>

          {/* ─────────────────────────────────────────────
              RIGHT COLUMN — side-by-side stats, leaves, book spines
          ───────────────────────────────────────────── */}
          <div className="relative hidden w-72 shrink-0 overflow-hidden lg:flex lg:items-center">
            {/* Warm amber glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_0%,rgba(149,122,88,0.1),transparent_65%)]" />

            {/* Stats — side by side, no card background */}
            <div className="relative z-10 flex gap-5 pl-5">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f4e8d8]">
                      <Icon className="h-[15px] w-[15px] text-[#b2764d]" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#2a241d]">
                        {stat.value}
                      </p>
                      <p className="text-[11px] text-[#74695d]">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Leaf decorations — top-right corner */}
            {[
              "right-14 top-1 h-12 w-6 rotate-[18deg]",
              "right-7  top-4 h-16 w-8 rotate-[36deg]",
              "right-0  top-0 h-14 w-6 rotate-[58deg]",
            ].map((cls, i) => (
              <span
                key={i}
                className={`absolute rounded-full bg-[linear-gradient(180deg,#c8d4be,#8da882)] opacity-80 ${cls}`}
              />
            ))}

            {/* Book spines — bottom-right corner */}
            <div className="absolute bottom-0 right-0 flex items-end gap-1">
              {[
                { h: "h-14", color: "#d7c1a0" },
                { h: "h-[4.5rem]", color: "#b98d67" },
                { h: "h-16", color: "#9f8772" },
                { h: "h-20", color: "#8ba08c" },
                { h: "h-[5.5rem]", color: "#d3c3ac" },
                { h: "h-[4.5rem]", color: "#7c6a57" },
              ].map((b, i) => (
                <span
                  key={i}
                  className={`w-5 rounded-t-[3px] ${b.h}`}
                  style={{ backgroundColor: b.color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
