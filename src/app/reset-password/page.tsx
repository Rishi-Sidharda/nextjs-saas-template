"use client";

// ADD THE DEFAULT URL IN FIREBASE AUTHENTICATION RESET-PASSWORD TEMPLATE

import { useState, useEffect, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { auth } from "@/lib/firebase";
import { verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react"; // assuming lucide-react is installed

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const oobCode = searchParams.get("oobCode");

  const [email, setEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Verify the reset code on load
  useEffect(() => {
    if (!oobCode) return;

    verifyPasswordResetCode(auth, oobCode)
      .then((email) => setEmail(email))
      .catch(() => setStatus("Invalid or expired reset link."));
  }, [oobCode]);

  const handleReset = async (e: FormEvent) => {
    e.preventDefault();
    if (!oobCode) {
      setStatus("Missing reset code.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setStatus("Passwords do not match.");
      return;
    }

    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setStatus("Password has been reset successfully!");
      setTimeout(() => router.push("/login"), 2000); // redirect to login
    } catch (error: any) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
        </CardHeader>
        <CardContent>
          {status && <p className="mb-4 text-sm text-center">{status}</p>}
          {email && (
            <form onSubmit={handleReset} className="space-y-4">
              <div className="relative">
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter your new password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-9"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="relative">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your new password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-9"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <Button type="submit" className="w-full">
                Reset Password
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
