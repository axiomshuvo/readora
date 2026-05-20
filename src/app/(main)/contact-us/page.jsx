import Link from "next/link";
import { FiArrowRight, FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
const contactItems = [
  {
    label: "Email",
    value: "hello@readora.app",
    href: "mailto:hello@readora.app",
    icon: FiMail,
  },
  {
    label: "Call Us",
    value: "+880 1700-000000",
    href: "tel:+8801700000000",
    icon: FiPhoneCall,
  },
  {
    label: "Visit",
    value: "Dhanmondi, Dhaka 1209",
    href: "https://maps.google.com/?q=Dhanmondi,Dhaka",
    icon: FiMapPin,
  },
];

export default function ContactUsPage() {
  return (
    <>
      <section
        id="contact"
        className=" container mx-auto rounded-[1.75rem]  p-6 "
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6f665c]">
          Contact Us
        </p>
        <h3 className="font-heading mt-3 text-2xl leading-none text-[#1f1a14]">
          Let&apos;s find your next favorite read.
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#6d655b]">
          Reach out for borrowing help, membership questions, or curated reading
          suggestions from the Readora team.
        </p>

        <div className="mt-6 space-y-3">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-start gap-3 rounded-2xl border border-[#eee2d1] bg-[#fbf7f0] px-4 py-3 transition hover:border-[#d9c4a1] hover:bg-white"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#edf3ea] text-[#315036]">
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8b8175]">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-[#2a241d]">
                    {item.value}
                  </span>
                </span>
              </a>
            );
          })}
        </div>

        <Link
          href="mailto:hello@readora.app"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#315036] transition hover:text-[#203224]"
        >
          Send us a message
          <FiArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
