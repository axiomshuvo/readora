"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Checkbox,
  FieldError,
  Fieldset,
  Form,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import {
  FiEye,
  FiEyeOff,
  FiImage,
  FiLock,
  FiMail,
  FiUser,
} from "react-icons/fi";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (data.password !== data.confirmPassword) return;
    setLoading(true);
    const { data: res, error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      image: data.image || undefined,
    });

    setTimeout(() => setLoading(false), 200);
    if (error) {
      toast.error(error.message ?? "Registration failed. Please try again.");
      return;
    }

    toast.success(
      `Welcome aboard, ${res.user.name}! Your account has been created.`,
    );

    router.push("/login");
  }

  return (
    <div className="flex min-h-[calc(100vh-140px)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl">
        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-[#1f1a14]">
            Create your account
          </h1>
          <p className="mt-1.5 text-sm text-[#6c6459]">
            Join Readora and start borrowing today
          </p>
        </div>

        {/* Card */}
        <Card className="border border-[#e8e0d4] shadow-sm">
          <Card.Content className="p-6">
            <Form validationBehavior="native" onSubmit={handleSubmit}>
              <Fieldset>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Full Name */}
                  <TextField name="name" type="text" isRequired>
                    <Label>Full Name</Label>
                    <InputGroup fullWidth>
                      <InputGroup.Prefix className="border-r-0">
                        <FiUser className="h-4 w-4" />
                      </InputGroup.Prefix>
                      <InputGroup.Input placeholder="Jane Doe" />
                    </InputGroup>
                    <FieldError />
                  </TextField>

                  {/* Email */}
                  <TextField name="email" type="email" isRequired>
                    <Label>Email</Label>
                    <InputGroup fullWidth>
                      <InputGroup.Prefix className="border-r-0">
                        <FiMail className="h-4 w-4" />
                      </InputGroup.Prefix>
                      <InputGroup.Input placeholder="you@example.com" />
                    </InputGroup>
                    <FieldError />
                  </TextField>

                  {/* Password */}
                  <TextField
                    name="password"
                    type={showPassword ? "text" : "password"}
                    isRequired
                    minLength={8}
                    value={password}
                    onChange={setPassword}
                  >
                    <Label>Password</Label>
                    <InputGroup fullWidth>
                      <InputGroup.Prefix className="border-r-0">
                        <FiLock className="h-4 w-4" />
                      </InputGroup.Prefix>
                      <InputGroup.Input placeholder="Min. 8 characters" />
                      <InputGroup.Suffix className="border-l-0">
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
                      </InputGroup.Suffix>
                    </InputGroup>
                    <FieldError />
                  </TextField>

                  {/* Confirm Password */}
                  <TextField
                    name="confirmPassword"
                    type={showConfirm ? "text" : "password"}
                    isRequired
                    validate={(val) =>
                      val !== password ? "Passwords do not match" : null
                    }
                  >
                    <Label>Confirm Password</Label>
                    <InputGroup fullWidth>
                      <InputGroup.Prefix className="border-r-0">
                        <FiLock className="h-4 w-4" />
                      </InputGroup.Prefix>
                      <InputGroup.Input placeholder="Repeat your password" />
                      <InputGroup.Suffix className="border-l-0">
                        <button
                          type="button"
                          onClick={() => setShowConfirm((v) => !v)}
                          className="text-[#a89e92] transition hover:text-[#6c6459]"
                          aria-label={
                            showConfirm
                              ? "Hide confirm password"
                              : "Show confirm password"
                          }
                        >
                          {showConfirm ? (
                            <FiEyeOff className="h-4 w-4" />
                          ) : (
                            <FiEye className="h-4 w-4" />
                          )}
                        </button>
                      </InputGroup.Suffix>
                    </InputGroup>
                    <FieldError />
                  </TextField>

                  {/* Profile Image URL optional full width */}
                  <div className="col-span-full">
                    <TextField name="image" type="url">
                      <Label>
                        Profile Image URL{" "}
                        <span className="text-xs font-normal text-[#a89e92]">
                          (optional)
                        </span>
                      </Label>
                      <InputGroup fullWidth>
                        <InputGroup.Prefix className="border-r-0">
                          <FiImage className="h-4 w-4" />
                        </InputGroup.Prefix>
                        <InputGroup.Input placeholder="https://example.com/avatar.png" />
                      </InputGroup>
                      <FieldError />
                    </TextField>
                  </div>

                  {/* Terms spans both columns left-aligned */}
                  <div className="col-span-full flex justify-center mt-5">
                    <Checkbox name="terms" isRequired value="agreed">
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                      <Checkbox.Content>
                        <Label className="cursor-pointer text-sm font-normal text-[#6c6459]">
                          I agree to the Terms of Service and Privacy Policy
                        </Label>
                      </Checkbox.Content>
                    </Checkbox>
                  </div>
                </div>

                <Fieldset.Actions className="justify-center">
                  <Button
                    type="submit"
                    variant="primary"
                    isPending={loading}
                    className="min-w-48 rounded-xl bg-[#314f36] px-8 font-semibold text-white shadow-[0_8px_20px_rgba(49,79,54,0.2)] hover:bg-[#27412b]"
                  >
                    {loading ? "Creating account…" : "Create Account"}
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
            <div className="flex justify-center">
              <Button
                type="button"
                variant="outline"
                className="min-w-48 border-[#e0d8cc] px-8 text-[#1f1a14] hover:border-[#c0b8b0] hover:bg-[#fafaf8]"
              >
                <FcGoogle className="h-[18px] w-[18px]" />
                Continue with Google
              </Button>
            </div>
          </Card.Content>
        </Card>

        {/* Login link */}
        <p className="mt-6 text-center text-sm text-[#6c6459]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-[#314f36] hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
