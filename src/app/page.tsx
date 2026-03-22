"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    try {
      await authClient.signUp.email(
        {
          email,
          name,
          password,
        },
        {
          onError: () => {
            alert("Something went wrong");
          },
          onSuccess: () => {
            alert("Success ✅");
          },
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md space-y-4 p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
        
        <h1 className="text-2xl font-semibold text-center mb-4">
          Create User
        </h1>

        <Input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={onSubmit} className="w-full mt-2">
          Create user
        </Button>

      </div>
    </div>
  );
}