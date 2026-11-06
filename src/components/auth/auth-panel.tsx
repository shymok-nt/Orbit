"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, LockKeyhole, Mail, UserRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type AuthMode = "signup" | "signin";

export function AuthPanel() {
  const [mode, setMode] = useState<AuthMode>("signup");
  const [notice, setNotice] = useState(false);

  function switchMode(nextMode: AuthMode) {
    setMode(nextMode);
    setNotice(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(true);
  }

  return (
    <section aria-label="Join ORBIT" className="flex min-h-screen items-center justify-center bg-surface px-6 py-12 sm:px-10 lg:px-12">
      <div className="w-full max-w-[420px]">
        <p className="mb-10 text-2xl font-black tracking-[-0.09em] lg:hidden">ORBIT<span className="text-coral">.</span></p>
        <div className="mb-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-coral">Welcome to your universe</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.055em] sm:text-4xl">{mode === "signup" ? "Create your orbit." : "Welcome back."}</h2>
          <p className="mt-3 text-sm leading-7 text-muted">{mode === "signup" ? "Join the community, find your people, and share what inspires you." : "Your people and your worlds are waiting for you."}</p>
        </div>

        <div role="tablist" aria-label="Account access" className="mb-7 grid grid-cols-2 rounded-2xl bg-sand p-1">
          <button type="button" role="tab" aria-selected={mode === "signup"} onClick={() => switchMode("signup")} className={cn("min-h-11 rounded-xl text-sm font-bold transition-colors", mode === "signup" ? "bg-surface text-ink shadow-sm" : "text-muted hover:text-ink")}>Sign Up</button>
          <button type="button" role="tab" aria-selected={mode === "signin"} onClick={() => switchMode("signin")} className={cn("min-h-11 rounded-xl text-sm font-bold transition-colors", mode === "signin" ? "bg-surface text-ink shadow-sm" : "text-muted hover:text-ink")}>Sign In</button>
        </div>

        <form key={mode} onSubmit={handleSubmit} className="space-y-5">
          {mode === "signup" ? <div className="relative"><UserRound aria-hidden="true" size={17} className="pointer-events-none absolute right-4 top-[42px] text-muted" /><Input label="Display name" name="displayName" autoComplete="name" placeholder="What should we call you?" required maxLength={80} /></div> : null}
          <div className="relative"><Mail aria-hidden="true" size={17} className="pointer-events-none absolute right-4 top-[42px] text-muted" /><Input label="Email address" type="email" name="email" autoComplete="email" placeholder="you@example.com" required /></div>
          <div className="relative"><LockKeyhole aria-hidden="true" size={17} className="pointer-events-none absolute right-4 top-[42px] text-muted" /><Input label="Password" type="password" name="password" autoComplete={mode === "signup" ? "new-password" : "current-password"} placeholder="Enter your password" required minLength={8} /></div>
          <button type="submit" className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-ink px-5 py-3 font-bold text-white transition-colors hover:bg-ink/90">
            {mode === "signup" ? "Create account" : "Sign in"} <ArrowRight aria-hidden="true" size={18} />
          </button>
        </form>

        {notice ? <p role="status" className="mt-4 rounded-xl bg-lavender/20 p-4 text-sm leading-6 text-ink">This is a design preview. Account creation and sign-in are not connected yet. No information was submitted.</p> : null}
        <p className="mt-6 text-center text-xs leading-6 text-muted">Account access is a visual preview. Please do not enter real passwords yet.</p>
      </div>
    </section>
  );
}
