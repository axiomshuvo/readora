"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
    });
    setLoading(false);

    if (error) {
      toast.error(error.message ?? "Login failed. Please try again.");
      return;
    }
    toast.success(
      `Welcome back! ${res.user.name} You have successfully signed in.`,
    );
    console.log("Login successful:", res);

    router.push("/dashboard");
  }

  return (
    <div className="flex min-h-[calc(100vh-140px)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-[#1f1a14]">
            Welcome back
          </h1>
          <p className="mt-1.5 text-sm text-[#6c6459]">
            Sign in to continue reading
          </p>
        </div>

        {/* Card */}
        <Card className="border border-[#e8e0d4] shadow-sm">
          <Card.Content className="p-6">
            <Form validationBehavior="native" onSubmit={handleSubmit}>
              <Fieldset>
                <Fieldset.Group className="gap-4">
                  {/* Email */}
                  <TextField name="email" type="email" isRequired>
                    <Label>Email</Label>
                    <Input
                      placeholder="you@example.com"
                      variant="bordered"
                      startContent={
                        <FiMail className="h-4 w-4 shrink-0 text-[#a89e92]" />
                      }
                      classNames={{
                        inputWrapper:
                          "border-[#e0d8cc] hover:border-[#314f36] focus-within:!border-[#314f36]",
                      }}
                    />
                    <FieldError />
                  </TextField>

                  {/* Password */}
                  <TextField
                    name="password"
                    type={showPassword ? "text" : "password"}
                    isRequired
                  >
                    <Label>Password</Label>
                    <Input
                      placeholder="Enter your password"
                      variant="bordered"
                      startContent={
                        <FiLock className="h-4 w-4 shrink-0 text-[#a89e92]" />
                      }
                      endContent={
                        <button
                          type="button"
                          onClick={() => setShowPassword((v) => !v)}
                          className="text-[#a89e92] transition hover:text-[#6c6459]"
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                        >
                          {showPassword ? (
                            <FiEyeOff className="h-4 w-4" />
                          ) : (
                            <FiEye className="h-4 w-4" />
                          )}
                        </button>
                      }
                      classNames={{
                        inputWrapper:
                          "border-[#e0d8cc] hover:border-[#314f36] focus-within:!border-[#314f36]",
                      }}
                    />

                    <FieldError />
                  </TextField>
                </Fieldset.Group>

                <Fieldset.Actions className="flex-col">
                  <Button
                    type="submit"
                    isPending={loading}
                    className="w-full rounded-xl bg-[#314f36] font-semibold text-white shadow-[0_8px_20px_rgba(49,79,54,0.2)] hover:bg-[#27412b]"
                  >
                    {loading ? "Signing in…" : "Sign In"}
                  </Button>
                </Fieldset.Actions>
              </Fieldset>
            </Form>

            {/* Divider */}
            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#e8e0d4]" />
              <span className="text-xs text-[#b0a89e]">or continue with</span>
              <div className="h-px flex-1 bg-[#e8e0d4]" />
            </div>

            {/* Google */}

            <Button
              type="button"
              variant="outline"
              className="w-full  font-medium text-[#1f1a14] hover:border-[#c0b8b0] hover:bg-[#fafaf8]"
            >
              <FcGoogle className="h-4.5 w-4.5" />
              Continue with Google
            </Button>
          </Card.Content>
        </Card>

        {/* Register link */}
        <p className="mt-6 text-center text-sm text-[#6c6459]">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-[#314f36] hover:underline"
          >
            Create one free
          </Link>
        </p>
      </div>
    </div>
  );
}
