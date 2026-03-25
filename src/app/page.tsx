"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      await authClient.signUp.email(
        { email, name, password },
        {
          onError: () => alert("Something went wrong ❌"),
          onSuccess: () => alert("Account created ✅"),
        }
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 
      bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white">

      {/* Card */}
      <div className="w-full max-w-md p-8 rounded-3xl 
        bg-white/5 backdrop-blur-2xl 
        border border-white/10 
        shadow-[0_0_40px_rgba(255,255,255,0.05)] 
        space-y-6">

        {/* Heading */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Create Account 🚀
          </h1>
          <p className="text-gray-400 text-sm">
            Join us and start your journey
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-4">

          {/* Name */}
          <div className="space-y-1">
            <label className="text-sm text-gray-300">Name</label>
            <Input
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-11 rounded-xl bg-white/10 border-white/10 
              focus:ring-2 focus:ring-white/40 
              placeholder:text-gray-500"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm text-gray-300">Email</label>
            <Input
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 rounded-xl bg-white/10 border-white/10 
              focus:ring-2 focus:ring-white/40 
              placeholder:text-gray-500"
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-sm text-gray-300">Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-11 rounded-xl bg-white/10 border-white/10 
              focus:ring-2 focus:ring-white/40 
              placeholder:text-gray-500"
            />
          </div>

        </div>

        {/* Button */}
        <Button
          onClick={onSubmit}
          disabled={loading}
          className="w-full h-11 mt-2 rounded-xl 
          bg-white text-black font-semibold 
          hover:bg-gray-200 
          transition-all duration-200 
          hover:scale-[1.02] active:scale-[0.98]"
        >
          {loading ? "Creating..." : "Create account"}
        </Button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <span className="text-white hover:underline cursor-pointer">
            Sign in
          </span>
        </p>

      </div>
    </div>
  );
}