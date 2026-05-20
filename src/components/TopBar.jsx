"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@heroui/react";
import { useState } from "react";
import {
  FiBookOpen,
  FiChevronDown,
  FiHeadphones,
  FiPackage,
  FiShield,
  FiSparkles,
} from "react-icons/fi";

const benefitItems = [
  {
    label: "Free 7-day membership trial",
    icon: FiSparkles,
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

const languageOptions = [
  { key: "en", label: "EN" },
  { key: "bn", label: "BN" },
];

export default function TopBar() {
  const [language, setLanguage] = useState("en");
  const selectedLanguageLabel =
    languageOptions.find((item) => item.key === language)?.label ?? "EN";

  return (
    <div className="border-b border-black/5 bg-[#fbf8f2] text-[#6b655d]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <div className="scrollbar-none flex min-w-0 items-center gap-2 overflow-x-auto [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {benefitItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#e7ddcd] bg-white/80 px-3 py-1.5 text-[11px] font-medium whitespace-nowrap text-[#5f584f] shadow-[0_8px_20px_rgba(35,31,24,0.03)]"
              >
                <span className="text-[#39573e]">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span>{item.label}</span>
              </div>
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
            <DropdownTrigger>
              <Button
                radius="full"
                variant="light"
                className="h-8 min-w-0 border border-[#e7ddcd] bg-white/85 px-3 text-xs font-semibold text-[#3f3a33] shadow-sm"
              >
                {selectedLanguageLabel}
                <FiChevronDown className="h-3.5 w-3.5" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Language selection"
              disallowEmptySelection
              selectedKeys={new Set([language])}
              selectionMode="single"
              onSelectionChange={(keys) => {
                if (keys === "all") {
                  return;
                }

                const [nextLanguage] = Array.from(keys);
                if (typeof nextLanguage === "string") {
                  setLanguage(nextLanguage);
                }
              }}
            >
              {languageOptions.map((item) => (
                <DropdownItem key={item.key}>{item.label}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
