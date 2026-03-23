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
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white px-4">
      
      <div className="w-full max-w-md space-y-5 p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg">
        
        {/* Heading */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-semibold">Create account</h1>
          <p className="text-sm text-gray-400">
            Get started in seconds
          </p>
        </div>

        {/* Name */}
        <div className="space-y-1">
          <label className="text-sm text-gray-300">Name</label>
          <Input
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white/10 border-white/10 focus:ring-1 focus:ring-white"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-sm text-gray-300">Email</label>
          <Input
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-white/10 focus:ring-1 focus:ring-white"
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
            className="bg-white/10 border-white/10 focus:ring-1 focus:ring-white"
          />
        </div>

        {/* Button */}
        <Button
          onClick={onSubmit}
          disabled={loading}
          className="w-full mt-2 bg-white text-black hover:bg-gray-200"
        >
          {loading ? "Creating..." : "Create account"}
        </Button>

      </div>
    </div>
  );
}