import { Card } from "@heroui/react";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Ayesha Rahman",
    initials: "AR",
    avatarColor: "#b87c5a",
    quote:
      "BookHaven has changed the way I read. So many great books, so easy to use!",
    rating: 5,
  },
  {
    name: "Imran Hossain",
    initials: "IH",
    avatarColor: "#6b8f7e",
    quote: "The borrowing process is smooth and the collection is amazing.",
    rating: 5,
  },
  {
    name: "Farida Sultana",
    initials: "FS",
    avatarColor: "#c09070",
    quote: "I love the variety and the timely returns. Excellent platform!",
    rating: 5,
  },
];

export default function ReadersLoveUs() {
  return (
    <section>
      <h2 className="font-heading text-2xl font-semibold text-[#1f1a14]">
        Readers Love Us
      </h2>
      <p className="mt-1 text-sm text-[#7a7069]">See what our community says</p>

      {/* Three testimonial cards */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {testimonials.map((t) => (
          <Card
            key={t.name}
            shadow="none"
            className="rounded-2xl border border-[#ede5d8] bg-white"
          >
            <Card.Content className="flex flex-col gap-3 p-4">
              {/* Avatar + quote row */}
              <div className="flex items-start gap-3">
                {/* Avatar circle with initials (no real photo needed) */}
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                  style={{ backgroundColor: t.avatarColor }}
                >
                  {t.initials}
                </div>

                {/* Quote */}
                <p className="text-[13px] leading-[1.6] text-[#3d3730]">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Name */}
              <p className="text-xs text-[#6c6459]">— {t.name}</p>

              {/* Star rating */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FiStar
                    key={i}
                    className="h-3.5 w-3.5 fill-[#f59e0b] text-[#f59e0b]"
                  />
                ))}
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>

      {/* Carousel pagination dots (decorative) — matches reference indicator */}
      <div className="mt-5 flex items-center gap-2">
        <span className="h-2 w-6 rounded-full bg-[#314f36]" />
        <span className="h-2 w-2 rounded-full bg-[#d0c8bc]" />
        <span className="h-2 w-2 rounded-full bg-[#d0c8bc]" />
        <span className="h-2 w-2 rounded-full bg-[#d0c8bc]" />
      </div>
    </section>
  );
}
