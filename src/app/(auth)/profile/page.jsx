"use client";

import { useAuth } from "@/hooks/useAuth";
import { authClient } from "@/lib/auth-client";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  FiBook,
  FiBookmark,
  FiBookOpen,
  FiCalendar,
  FiClock,
  FiEdit2,
  FiEye,
  FiEyeOff,
  FiLink,
  FiLock,
  FiLogOut,
  FiMail,
  FiUser,
  FiX,
} from "react-icons/fi";

const LS_KEY = (userId) =>
  userId ? `readora_borrows_${userId}` : "readora_borrows_guest";

function ProfileContent() {
  const { session, isPending, signOut, isSigningOut } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    image: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [borrows, setBorrows] = useState([]);

  useEffect(() => {
    if (!session?.user?.id) return;
    try {
      setBorrows(
        JSON.parse(localStorage.getItem(LS_KEY(session.user.id)) ?? "[]"),
      );
    } catch {
      setBorrows([]);
    }
  }, [session?.user?.id]);
  const [showPasswords, setShowPasswords] = useState({
    new: false,
    confirm: false,
  });

  function toggleShow(key) {
    setShowPasswords((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function setField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

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

  async function handleUpdate() {
    if (form.newPassword && form.newPassword !== form.confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }

    setIsUpdating(true);
    let hasError = false;

    const profileUpdates = {};
    if (form.name.trim() && form.name !== user.name)
      profileUpdates.name = form.name.trim();
    if (form.email.trim() && form.email !== user.email)
      profileUpdates.email = form.email.trim();
    if (form.image.trim() !== (user.image ?? ""))
      profileUpdates.image = form.image.trim() || null;

    if (Object.keys(profileUpdates).length > 0) {
      const { error } = await authClient.updateUser(profileUpdates);
      if (error) {
        toast.error("Profile update failed: " + error.message);
        hasError = true;
      } else {
        toast.success("Profile info updated!");
      }
    }

    if (!hasError && form.newPassword) {
      const { error } = await authClient.changePassword({
        newPassword: form.newPassword,
        revokeOtherSessions: false,
      });
      if (error) {
        toast.error("Password change failed: " + error.message);
        hasError = true;
      } else {
        toast.success("Password changed successfully!");
      }
    }

    setIsUpdating(false);
    if (!hasError) {
      setIsEditing(false);
    }
  }

  const stats = [
    { label: "Total Borrowed", value: borrows.length, icon: FiBook },
    {
      label: "Currently Reading",
      value: borrows.filter((b) => b.status === "active").length,
      icon: FiClock,
    },
    { label: "Reading List", value: 0, icon: FiBookmark },
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

            {/* Actions */}
            <div className="flex flex-col items-end gap-2">
              <Button
                variant="outline"
                onPress={signOut}
                className="border-[#314f36] px-5 py-2.5 text-[#314f36] transition hover:bg-[#314f36] hover:text-white"
              >
                <FiLogOut className="h-4 w-4" />
                Sign Out
              </Button>
              <Button
                variant="outline"
                size="sm"
                onPress={() => {
                  setForm({
                    name: user.name ?? "",
                    email: user.email ?? "",
                    image: user.image ?? "",
                    newPassword: "",
                    confirmPassword: "",
                  });
                  setIsEditing((v) => !v);
                }}
                className="border-[#314f36] px-5 py-2.5 text-[#314f36] transition hover:bg-[#314f36] hover:text-white"
              >
                <FiEdit2 className="h-4 w-4" />
                Update Profile
              </Button>
            </div>
          </div>
        </Card.Content>
      </Card>

      {/* ── Edit Form ── */}
      {isEditing && (
        <Card className="mb-6 border border-[#e8e0d4] shadow-sm">
          <Card.Content className="p-6 sm:p-8">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-heading text-lg font-semibold text-[#1f1a14]">
                Edit Profile
              </h2>
              <button
                onClick={() => setIsEditing(false)}
                className="text-[#6c6459] transition hover:text-[#1f1a14]"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Name */}
              <div className="space-y-1">
                <label className="flex items-center gap-1.5 text-xs font-medium text-[#6c6459]">
                  <FiUser className="h-3.5 w-3.5" /> Name
                </label>
                <input
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-[#e8e0d4] px-3 py-2 text-sm text-[#1f1a14] outline-none focus:border-[#314f36]"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="flex items-center gap-1.5 text-xs font-medium text-[#6c6459]">
                  <FiMail className="h-3.5 w-3.5" /> Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  placeholder="Your email"
                  className="w-full rounded-lg border border-[#e8e0d4] px-3 py-2 text-sm text-[#1f1a14] outline-none focus:border-[#314f36]"
                />
              </div>

              {/* Image URL */}
              <div className="space-y-1 sm:col-span-2">
                <label className="flex items-center gap-1.5 text-xs font-medium text-[#6c6459]">
                  <FiLink className="h-3.5 w-3.5" /> Profile Image URL
                </label>
                <input
                  value={form.image}
                  onChange={(e) => setField("image", e.target.value)}
                  placeholder="https://example.com/avatar.jpg"
                  className="w-full rounded-lg border border-[#e8e0d4] px-3 py-2 text-sm text-[#1f1a14] outline-none focus:border-[#314f36]"
                />
              </div>

              {/* Divider */}
              <div className="sm:col-span-2">
                <p className="flex items-center gap-2 text-xs font-medium text-[#6c6459]">
                  <FiLock className="h-3.5 w-3.5" /> Change Password{" "}
                  <span className="text-[#a89e92]">
                    (leave blank to keep current)
                  </span>
                </p>
                <hr className="mt-1.5 border-[#e8e0d4]" />
              </div>

              {/* New Password */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#6c6459]">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.new ? "text" : "password"}
                    value={form.newPassword}
                    onChange={(e) => setField("newPassword", e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-[#e8e0d4] px-3 py-2 pr-9 text-sm text-[#1f1a14] outline-none focus:border-[#314f36]"
                  />
                  <button
                    type="button"
                    onClick={() => toggleShow("new")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#a89e92] hover:text-[#314f36]"
                  >
                    {showPasswords.new ? (
                      <FiEyeOff className="h-4 w-4" />
                    ) : (
                      <FiEye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-1 ">
                <label className="text-xs font-medium text-[#6c6459]">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.confirm ? "text" : "password"}
                    value={form.confirmPassword}
                    onChange={(e) =>
                      setField("confirmPassword", e.target.value)
                    }
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-[#e8e0d4] px-3 py-2 pr-9 text-sm text-[#1f1a14] outline-none focus:border-[#314f36]"
                  />
                  <button
                    type="button"
                    onClick={() => toggleShow("confirm")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#a89e92] hover:text-[#314f36]"
                  >
                    {showPasswords.confirm ? (
                      <FiEyeOff className="h-4 w-4" />
                    ) : (
                      <FiEye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Save / Cancel */}
            <div className="mt-6 flex justify-end gap-3">
              <Button
                variant="outline"
                onPress={() => setIsEditing(false)}
                className="rounded-full border border-[#e8ddcd] px-5 text-[#6c6459] transition hover:border-[#314f36] hover:text-[#1f1a14]"
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                onPress={handleUpdate}
                isPending={isUpdating}
                className="rounded-full bg-[#314f36] px-5 text-white transition hover:bg-[#263f2b]"
              >
                Save Changes
              </Button>
            </div>
          </Card.Content>
        </Card>
      )}

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
        {borrows.length === 0 ? (
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
                className="mt-1 rounded-full border border-[#314f36] px-5 text-[#314f36] transition hover:bg-[#314f36] hover:text-white"
              >
                Browse Books
              </Button>
            </Card.Content>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {borrows.map((b) => (
              <Card
                key={b.bookId}
                className="border border-[#e8e0d4] shadow-sm"
              >
                <Card.Content className="flex items-center gap-3 p-3">
                  {b.bookImage && (
                    <Image
                      src={b.bookImage}
                      alt={b.bookTitle}
                      width={48}
                      height={64}
                      className="h-16 w-12 shrink-0 rounded-lg object-cover"
                    />
                  )}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-[#1f1a14]">
                      {b.bookTitle}
                    </p>
                    <p className="mt-0.5 text-xs text-[#a89e92]">
                      {new Date(b.borrowedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <span className="mt-1 inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                      Active
                    </span>
                  </div>
                </Card.Content>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* ── Reading List ── */}
      <section>
        <h2 className="mb-4 font-heading text-xl font-semibold text-[#1f1a14]">
          Reading List
        </h2>
        {true ? (
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
                className="mt-1 rounded-full border border-[#314f36] px-5 text-[#314f36] transition hover:bg-[#314f36] hover:text-white"
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

export default function ProfilePage() {
  return (
    <Suspense>
      <ProfileContent />
    </Suspense>
  );
}
