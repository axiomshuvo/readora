import { Button, Input, TextArea } from "@heroui/react";
import { FiMail, FiMapPin, FiPhoneCall, FiSend } from "react-icons/fi";

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

export default function ContactUs() {
  return (
    <section id="contact" className="py-10">
      <div className="grid gap-10 rounded-[1.75rem] border border-[#eee2d1] bg-[#fbf7f0] p-8 lg:grid-cols-2">
        {/* Left — contact info */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6f665c]">
            Contact Us
          </p>
          <h3 className="font-heading mt-3 text-2xl leading-snug text-[#1f1a14]">
            Let&apos;s find your next favorite read.
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#6d655b]">
            Reach out for borrowing help, membership questions, or curated
            reading suggestions from the Readora team.
          </p>

          <div className="mt-7 space-y-3">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-start gap-3 rounded-2xl border border-[#eee2d1] bg-white px-4 py-3 transition hover:border-[#d9c4a1] hover:shadow-sm"
                >
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf3ea] text-[#315036]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8b8175]">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-sm font-medium text-[#2a241d]">
                      {item.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Right — placeholder form */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6f665c]">
            Send a Message
          </p>
          <h3 className="font-heading mt-3 text-2xl leading-snug text-[#1f1a14]">
            We&apos;d love to hear from you.
          </h3>

          <form className="mt-6 space-y-4">
            <div className="space-y-1">
              <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#8b8175]">
                Full Name
              </label>
              <Input
                placeholder="Your full name"
                className="w-full rounded-xl border border-[#eee2d1] bg-white px-4 py-2.5 text-sm text-[#2a241d] placeholder:text-[#b5a99a] focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#8b8175]">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[#eee2d1] bg-white px-4 py-2.5 text-sm text-[#2a241d] placeholder:text-[#b5a99a] focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#8b8175]">
                Message
              </label>
              <TextArea
                placeholder="Write your message here…"
                rows={4}
                className="w-full rounded-xl border border-[#eee2d1] bg-white px-4 py-2.5 text-sm text-[#2a241d] placeholder:text-[#b5a99a] focus:outline-none"
              />
            </div>

            <Button
              variant="primary"
              className="mt-2 flex w-full items-center justify-center gap-2"
            >
              <FiSend className="h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
