"use client";

import { Chip, Dropdown, Label, Link } from "@heroui/react";
import {
  FiBookOpen,
  FiChevronDown,
  FiHeadphones,
  FiPackage,
  FiShield,
  FiStar,
} from "react-icons/fi";

const benefitItems = [
  {
    label: "Free 7-day membership trial",
    icon: FiStar,
  },
  {
    label: "Cancel anytime",
    icon: FiShield,
  },
  {
    label: "Thousands of books",
    icon: FiBookOpen,
  },
];

const supportLinks = [
  {
    label: "Help Center",
    href: "/#help-center",
    icon: FiHeadphones,
  },
  {
    label: "Track Order",
    href: "/#track-order",
    icon: FiPackage,
  },
];

export default function TopBar() {
  return (
    <div className="border-b border-black/5 bg-[#fbf8f2] text-[#6b655d]">
      <div className="mx-auto flex container items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <div className="scrollbar-none flex min-w-0 items-center gap-2 overflow-x-auto [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {benefitItems.map((item) => {
            const Icon = item.icon;

            return (
              <Chip
                key={item.label}
                variant="bordered"
                className="shrink-0 border-[#e7ddcd] bg-white/80 px-2.5 py-1 text-[11px] font-medium whitespace-nowrap text-[#5f584f] shadow-[0_8px_20px_rgba(35,31,24,0.03)]"
              >
                <span className="mr-1.5 text-[#39573e]">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <Chip.Label>{item.label}</Chip.Label>
              </Chip>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          {supportLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className="hidden items-center gap-2 rounded-full px-2 py-1 text-xs font-medium text-[#665f56] transition hover:bg-white/70 hover:text-[#1f1a14] md:inline-flex"
                underline="none"
              >
                <Icon className="h-3.5 w-3.5 text-[#39573e]" />
                <span>{item.label}</span>
              </Link>
            );
          })}

          <Dropdown placement="bottom-end">
            <Dropdown.Trigger className="h-8 min-w-0 rounded-full border border-[#e7ddcd] bg-white/85 px-3 text-xs font-semibold text-[#3f3a33] shadow-sm transition hover:bg-white">
              <span className="inline-flex items-center gap-1.5">
                EN
                <FiChevronDown className="h-3.5 w-3.5" />
              </span>
            </Dropdown.Trigger>

            <Dropdown.Popover>
              <Dropdown.Menu
                aria-label="Language options"
                onAction={(key) => console.log(key)}
              >
                <Dropdown.Item id="en" textValue="EN">
                  <Label>EN</Label>
                </Dropdown.Item>
                <Dropdown.Item id="bn" textValue="BN">
                  <Label>BN</Label>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
