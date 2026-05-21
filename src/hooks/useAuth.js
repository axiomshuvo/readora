"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export function useAuth() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  async function signOut() {
    setIsSigningOut(true);
    await authClient.signOut();
    toast.success("Signed out successfully.");
    setIsSigningOut(false);
    router.refresh();
    router.push("/");
  }

  async function signInWithGoogle() {
    try {
      sessionStorage.setItem("googleWelcomePending", "1");
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      sessionStorage.removeItem("googleWelcomePending");
      toast.error(err?.message ?? "Google sign-in failed. Please try again.");
    }
  }

  return { session, isPending, signOut, isSigningOut, signInWithGoogle };
}
