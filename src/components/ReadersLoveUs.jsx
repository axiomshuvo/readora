import { Card } from "@heroui/react";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Ayesha Rahman",
    quote: "So many great books, so easy to use!",
    rating: 5,
  },
  {
    name: "Imran Hossain",
    quote: "Smooth borrowing, amazing collection.",
    rating: 5,
  },
  {
    name: "Farida Sultana",
    quote: "Great variety and timely returns!",
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

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {testimonials.map((t) => (
          <Card
            key={t.name}
            className="rounded-xl border border-[#ede5d8] bg-white"
          >
            <Card.Content className="flex flex-col gap-2">
              {/* Quote */}
              <p className="text-[11px] leading-[1.6] text-[#3d3730]">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Name */}
              <p className="text-[11px] font-medium text-[#6c6459]">
                — {t.name}
              </p>

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FiStar
                    key={i}
                    className="h-3 w-3 fill-[#f59e0b] text-[#f59e0b]"
                  />
                ))}
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
    </section>
  );
}
