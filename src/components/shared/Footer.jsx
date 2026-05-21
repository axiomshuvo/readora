import { Button, Card, Input, Link } from "@heroui/react";
import { Separator } from "@heroui/react/separator";
import {
  FiBookOpen,
  FiChevronDown,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

const navigationGroups = [
  {
    title: "Quick Links",
    links: [
      { label: "Collection", href: "/all-books" },
      { label: "Categories", href: "/categories" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Membership", href: "/#membership" },
      { label: "New Arrivals", href: "/#new-arrivals" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/#help-center" },
      { label: "FAQs", href: "/#faqs" },
      { label: "Track Order", href: "/#track-order" },
      { label: "Returns", href: "/#returns" },
      { label: "Contact Us", href: "/#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/#careers" },
      { label: "Press", href: "/#press" },
      { label: "Blog", href: "/#blog" },
      { label: "Privacy Policy", href: "/#privacy" },
    ],
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: FiFacebook,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FiInstagram,
  },
  {
    label: "Twitter",
    href: "#",
    icon: FiTwitter,
  },
  {
    label: "YouTube",
    href: "#",
    icon: FiYoutube,
  },
];

const legalLinks = [
  { label: "Terms of Service", href: "/#terms" },
  { label: "Privacy Policy", href: "/#privacy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" border-t border-black/5 bg-[linear-gradient(180deg,#fbf7f1_0%,#f6efe4_100%)] text-[#1f1a14]">
      <div className="container mx-auto py-12 ">
        <Card
          shadow="none"
          className="overflow-hidden rounded-[2rem] border border-[#eadfce] bg-white/70 backdrop-blur-sm"
        >
          <Card.Content className="p-0">
            <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.15fr_.75fr_.75fr_.75fr_1.1fr] lg:gap-0 lg:py-10">
              <div className="lg:border-r lg:border-[#eee4d6] lg:pr-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d8ccb8] bg-[#faf4e8] text-[#39573e] shadow-[0_10px_28px_rgba(57,87,62,0.08)]">
                    <FiBookOpen className="h-5 w-5" />
                  </span>
                  <div>
                    <h1 className="font-heading text-[1.8rem] leading-none tracking-tight">
                      Readora
                    </h1>
                  </div>
                </div>

                <p className="mt-4 max-w-[18rem] text-sm leading-7 text-[#6c6458]">
                  Your trusted digital library for endless knowledge and
                  inspiration.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.label}
                        underline="none"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e8ddcd] bg-white text-[#433c34] opacity-100 shadow-sm transition hover:-translate-y-0.5 hover:border-[#ccb99a] hover:text-[#1f1a14] hover:opacity-100"
                      >
                        <Icon className="h-4 w-4" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {navigationGroups.map((group) => (
                <div
                  key={group.title}
                  className="lg:border-r lg:border-[#eee4d6] lg:px-8"
                >
                  <h2 className="text-base font-semibold text-[#251f19]">
                    {group.title}
                  </h2>
                  <ul className="mt-4 space-y-2.5">
                    {group.links.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          underline="none"
                          className="text-sm no-underline hover:underline text-[#6c6458] opacity-100 transition hover:text-[#1f1a14] hover:opacity-100"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="lg:pl-8">
                <p className="text-base font-semibold text-[#251f19]">
                  Stay in the Loop
                </p>
                <p className="mt-4 max-w-[18rem] text-sm leading-7 text-[#6c6458]">
                  Subscribe to get updates on new books, offers, and more.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <Input
                    aria-label="Email address"
                    type="email"
                    placeholder="Enter your email"
                    className="h-11 min-w-0 flex-1 rounded-full border border-[#e8ddcc] bg-white px-4 text-sm text-[#1f1a14] placeholder:text-[#a19587] focus:border-[#d1c1a6]"
                  />
                  <Button
                    type="button"
                    className="h-11 rounded-full bg-[#314f36] px-5 text-sm font-medium text-white shadow-[0_12px_24px_rgba(49,79,54,0.18)] transition hover:bg-[#27422c]"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            <Separator className="bg-[#ece1d0]" />

            <div className="flex flex-col gap-3 px-6 py-4 text-xs text-[#746a5d] sm:px-8 lg:flex-row lg:items-center lg:justify-between">
              <p>&copy; {year} Readora. All rights reserved.</p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                {legalLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    underline="none"
                    className="text-[#746a5d] opacity-100 transition hover:text-[#1f1a14] hover:opacity-100"
                  >
                    {item.label}
                  </Link>
                ))}

                <Button
                  type="button"
                  variant="light"
                  className="h-auto min-w-0 gap-1 rounded-full px-0 py-0 text-xs font-medium text-[#5f584f] hover:bg-transparent"
                >
                  EN
                  <FiChevronDown className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </Card.Content>
        </Card>
      </div>
    </footer>
  );
}
