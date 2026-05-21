import { FiBookOpen, FiClock, FiDownload, FiTag } from "react-icons/fi";

const benefits = [
  {
    icon: FiBookOpen,
    title: "Unlimited Borrowing",
    desc: "Borrow as many books as you want.",
  },
  {
    icon: FiClock,
    title: "Early Access",
    desc: "Be the first to read new arrivals.",
  },
  {
    icon: FiTag,
    title: "Member Discounts",
    desc: "Enjoy exclusive offers and events.",
  },
  {
    icon: FiDownload,
    title: "Offline Reading",
    desc: "Read anytime, anywhere.",
  },
];

export default function Membership() {
  return (
    <div className="my-8 flex flex-col overflow-hidden rounded-2xl bg-[#263f2c] sm:flex-row">
      {/* Left — label */}
      <div className="flex shrink-0 flex-col justify-center gap-1.5 px-7 py-6 sm:w-52">
        <h3 className="font-heading text-lg font-semibold leading-tight text-white">
          Membership Benefits
        </h3>
        <p className="text-xs text-white/60">More perks. More reading.</p>
      </div>

      {/* Divider */}
      <div className="hidden w-px self-stretch bg-white/10 sm:block" />

      {/* Benefits row */}
      <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4 sm:bg-transparent sm:gap-0">
        {benefits.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="flex items-start gap-3 bg-[#263f2c] px-5 py-6 sm:border-l sm:border-white/10"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
              <Icon className="h-4.5 w-4.5 text-[#263f2c]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-white/55">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
