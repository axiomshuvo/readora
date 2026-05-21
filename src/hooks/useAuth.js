"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

// Module-level flag — shared across every useAuth() call in the same page
let isSigningOut = false;

export function useAuth() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  async function signOut() {
    isSigningOut = true;
    await authClient.signOut();
    toast.success("Signed out successfully.");
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
