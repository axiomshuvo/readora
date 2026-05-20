import Link from "next/link";
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiHeart,
  FiShield,
  FiStar,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const stats = [
  { value: "12,000+", label: "Books Available" },
  { value: "48,000+", label: "Active Members" },
  { value: "320+", label: "Authors Featured" },
  { value: "4.9★", label: "Average Rating" },
];

const values = [
  {
    icon: FiBookOpen,
    title: "Reading for Everyone",
    description:
      "We believe great books should be accessible to all — not locked behind high purchase prices.",
  },
  {
    icon: FiHeart,
    title: "Community First",
    description:
      "Readora is built around readers who share, recommend, and celebrate the books they love.",
  },
  {
    icon: FiZap,
    title: "Effortless Borrowing",
    description:
      "From browse to borrow in seconds. No queues, no late fees anxiety — just seamless reading.",
  },
  {
    icon: FiShield,
    title: "Trusted & Secure",
    description:
      "Your data and reading habits are yours. We never sell your information to third parties.",
  },
  {
    icon: FiStar,
    title: "Curated Quality",
    description:
      "Every title in our library is hand-reviewed to ensure you always find something worth your time.",
  },
  {
    icon: FiAward,
    title: "Author Partnerships",
    description:
      "We work directly with authors and publishers to bring you exclusive titles and early releases.",
  },
];

const team = [
  {
    initials: "AS",
    name: "Amara Singh",
    role: "Co-founder & CEO",
    color: "#4a7c59",
  },
  {
    initials: "RK",
    name: "Reza Karim",
    role: "Head of Curation",
    color: "#c9a55a",
  },
  {
    initials: "LP",
    name: "Lena Park",
    role: "Engineering Lead",
    color: "#2c3d5a",
  },
  {
    initials: "FN",
    name: "Fatima Noor",
    role: "Community Manager",
    color: "#8b6f52",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="py-16 text-center sm:py-24">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d8ccb8] bg-[#f5f0e8] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#6c6459]">
          <FiUsers className="h-3.5 w-3.5" />
          Our Story
        </span>
        <h1 className="font-heading mx-auto mt-4 max-w-3xl text-5xl leading-tight tracking-tight text-[#1f1a14] sm:text-6xl">
          A Library in Your Pocket,{" "}
          <span className="text-[#314f36]">A World in Every Page</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6c6459]">
          Readora started with a simple idea — what if borrowing a book was as
          easy as streaming a song? We set out to build the most thoughtful
          online book-borrowing platform for curious minds everywhere.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/all-books"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#314f36] px-5 text-sm font-medium text-white shadow-[0_12px_24px_rgba(49,79,54,0.22)] transition hover:-translate-y-0.5 hover:bg-[#27412b]"
          >
            Browse Collection
            <FiArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/register"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-[#d8ccb8] bg-white px-5 text-sm font-medium text-[#314f36] transition hover:-translate-y-0.5 hover:border-[#314f36]"
          >
            Join Free
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-[#e8e0d4] bg-white p-6 text-center shadow-sm"
          >
            <p className="font-heading text-3xl font-bold text-[#314f36]">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-[#6c6459]">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Our Mission */}
      <section className="mb-16 overflow-hidden rounded-3xl bg-[#314f36] px-8 py-14 sm:px-14">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#c8dfc2]">
            Our Mission
          </span>
          <h2 className="font-heading mt-3 text-4xl leading-tight text-white sm:text-5xl">
            Make reading a habit, not a luxury
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#b8d4be]">
            We remove the barriers between readers and great literature. Whether
            you&apos;re a student, a professional, or a lifelong bibliophile —
            Readora ensures the next book you need is always within reach,
            affordable, and ready when you are.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mb-16">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#6c6459]">
            What We Stand For
          </span>
          <h2 className="font-heading text-4xl text-[#1f1a14]">Our Values</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-[#e8e0d4] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#e0d8cc] bg-[#f5f0e8]">
                <v.icon className="h-5 w-5 text-[#314f36]" />
              </span>
              <h3 className="mb-2 font-semibold text-[#1f1a14]">{v.title}</h3>
              <p className="text-sm leading-relaxed text-[#6c6459]">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mb-16">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#6c6459]">
            The People Behind It
          </span>
          <h2 className="font-heading text-4xl text-[#1f1a14]">
            Meet the Team
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-[#e8e0d4] bg-white p-6 text-center shadow-sm"
            >
              <div
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-lg font-bold text-white"
                style={{ backgroundColor: member.color }}
              >
                {member.initials}
              </div>
              <p className="font-semibold text-[#1f1a14]">{member.name}</p>
              <p className="mt-1 text-xs text-[#6c6459]">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16 rounded-3xl border border-[#e8e0d4] bg-[#faf4e8] px-8 py-14 text-center">
        <h2 className="font-heading mb-4 text-4xl text-[#1f1a14] sm:text-5xl">
          Ready to start reading?
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-[#6c6459]">
          Join thousands of readers who borrow smarter with Readora. Sign up
          free and get your first 30 days of unlimited borrowing.
        </p>
        <Link
          href="/register"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-[#314f36] px-6 text-sm font-medium text-white shadow-[0_12px_24px_rgba(49,79,54,0.22)] transition hover:-translate-y-0.5 hover:bg-[#27412b]"
        >
          Create Free Account
          <FiArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
