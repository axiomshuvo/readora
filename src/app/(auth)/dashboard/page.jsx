"use client";

import { useAuth } from "@/hooks/useAuth";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";
import toast from "react-hot-toast";
import {
  FiBook,
  FiBookmark,
  FiBookOpen,
  FiCalendar,
  FiClock,
  FiLogOut,
  FiMail,
} from "react-icons/fi";

const EMPTY_BORROW = [];
const EMPTY_READING = [];

function DashboardContent() {
  const { session, isPending, signOut, isSigningOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (session?.user && sessionStorage.getItem("googleWelcomePending")) {
      sessionStorage.removeItem("googleWelcomePending");
      toast.success(
        `Welcome, ${session.user.name}! You have successfully signed in.`,
      );
    }
  }, [session]);

  if (isPending) {
    return (
      <main className="flex min-h-[calc(100vh-140px)] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#314f36] border-t-transparent" />
      </main>
    );
  }

  if (!isPending && !session) {
    if (!isSigningOut) router.replace("/login");
    return null;
  }

  const user = session.user;
  const initials = (user.name ?? "?")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  const memberSince = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "—";

  const stats = [
    { label: "Total Borrowed", value: EMPTY_BORROW.length, icon: FiBook },
    {
      label: "Currently Reading",
      value: EMPTY_BORROW.filter((b) => b.status === "active").length,
      icon: FiClock,
    },
    { label: "Reading List", value: EMPTY_READING.length, icon: FiBookmark },
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* ── Profile Card ── */}
      <Card className="mb-6 border border-[#e8e0d4] shadow-sm">
        <Card.Content className="p-6 sm:p-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            {/* Avatar */}
            <div className="relative shrink-0">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name ?? "Avatar"}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full object-cover ring-2 ring-[#e8e0d4]"
                />
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#314f36] text-2xl font-semibold text-white ring-2 ring-[#e8e0d4]">
                  {initials}
                </div>
              )}
              <span className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400" />
            </div>

            {/* Info */}
            <div className="flex-1 space-y-1">
              <h1 className="font-heading text-2xl font-semibold text-[#1f1a14]">
                {user.name}
              </h1>
              <p className="flex items-center gap-1.5 text-sm text-[#6c6459]">
                <FiMail className="h-3.5 w-3.5 shrink-0" />
                {user.email}
              </p>
              <p className="flex items-center gap-1.5 text-sm text-[#6c6459]">
                <FiCalendar className="h-3.5 w-3.5 shrink-0" />
                Member since {memberSince}
              </p>
            </div>

            {/* Sign out */}
            <Button
              variant="outline"
              onPress={signOut}
              className="flex items-center gap-2 rounded-full border border-[#e8ddcd] px-5 py-2.5 text-sm font-medium text-[#6c6459] transition hover:border-[#314f36] hover:text-[#1f1a14]"
            >
              <FiLogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </Card.Content>
      </Card>

      {/* ── Stats Row ── */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map(({ label, value, icon: Icon }) => (
          <Card key={label} className="border border-[#e8e0d4] shadow-sm">
            <Card.Content className="flex items-center justify-center gap-4 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4ede0] text-[#314f36]">
                <Icon className="h-5 w-5" />
              </span>
              <div className="text-center">
                <p className="text-2xl font-semibold text-[#1f1a14]">{value}</p>
                <p className="text-xs text-[#6c6459]">{label}</p>
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>

      {/* ── Active Borrows ── */}
      <section className="mb-8">
        <h2 className="mb-4 font-heading text-xl font-semibold text-[#1f1a14]">
          Active Borrows
        </h2>
        {EMPTY_BORROW.length === 0 ? (
          <Card className="border border-dashed border-[#e0d8cc] shadow-none">
            <Card.Content className="flex flex-col items-center gap-3 py-12 text-center">
              <FiBookOpen className="h-10 w-10 text-[#c8bfb0]" />
              <p className="text-sm font-medium text-[#6c6459]">
                No active borrows
              </p>
              <p className="text-xs text-[#a89e92]">
                Browse our collection and borrow a book to get started.
              </p>
              <Button
                variant="outline"
                onPress={() => router.push("/all-books")}
                className="mt-1 rounded-full border border-[#314f36] px-5 text-sm font-medium text-[#314f36] transition hover:bg-[#314f36] hover:text-white"
              >
                Browse Books
              </Button>
            </Card.Content>
          </Card>
        ) : null}
      </section>

      {/* ── Reading List ── */}
      <section>
        <h2 className="mb-4 font-heading text-xl font-semibold text-[#1f1a14]">
          Reading List
        </h2>
        {EMPTY_READING.length === 0 ? (
          <Card className="border border-dashed border-[#e0d8cc] shadow-none">
            <Card.Content className="flex flex-col items-center gap-3 py-12 text-center">
              <FiBookmark className="h-10 w-10 text-[#c8bfb0]" />
              <p className="text-sm font-medium text-[#6c6459]">
                Your reading list is empty
              </p>
              <p className="text-xs text-[#a89e92]">
                Save books you want to read later.
              </p>
              <Button
                variant="outline"
                onPress={() => router.push("/all-books")}
                className="mt-1 rounded-full border border-[#314f36] px-5 text-sm font-medium text-[#314f36] transition hover:bg-[#314f36] hover:text-white"
              >
                Browse Books
              </Button>
            </Card.Content>
          </Card>
        ) : null}
      </section>
    </main>
  );
}

export default function DashboardPage() {
  return (
    <Suspense>
      <DashboardContent />
    </Suspense>
  );
}
