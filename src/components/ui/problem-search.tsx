"use client";

import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ProblemSearchProps = {
  placeholder?: string;
};

export function ProblemSearch({
  placeholder = "e.g. My generator isn't starting...",
}: ProblemSearchProps) {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <motion.div
        aria-hidden="true"
        className="absolute -inset-px rounded-[1.05rem] opacity-80"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, rgb(79 70 229 / 0.9) 285deg, rgb(245 158 11 / 0.9) 320deg, transparent 355deg)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="relative flex items-center gap-3 rounded-2xl border border-border bg-surface p-2 shadow-lg shadow-black/[0.06]"
        animate={{
          boxShadow: [
            "0 10px 30px rgb(15 23 42 / 0.06)",
            "0 14px 38px rgb(79 70 229 / 0.12)",
            "0 10px 30px rgb(15 23 42 / 0.06)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-muted text-xl">
          <span aria-hidden="true">⌕</span>
        </div>

        <Input
          aria-label="Describe your problem"
          className="min-h-12 border-0 bg-transparent px-1 shadow-none focus:border-0 focus:bg-transparent focus:ring-0"
          placeholder={placeholder}
        />

        <Button size="lg">Find a solution</Button>
      </motion.div>
    </div>
  );
}