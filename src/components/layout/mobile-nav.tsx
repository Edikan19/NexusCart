"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Find services", href: "#services" },
  { label: "Become a provider", href: "#provider" },
];

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  React.useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  React.useEffect(() => {
    if (!open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.aside
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="absolute right-0 top-0 flex h-full w-[min(88vw,24rem)] flex-col border-l border-border bg-surface p-5 shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 30,
            }}
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center gap-2.5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-primary">
                  N
                </span>

                <span className="font-bold tracking-tight text-text-primary">
                  NexusCart
                </span>
              </Link>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-xl text-text-secondary hover:bg-surface-muted hover:text-text-primary"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <nav
              aria-label="Mobile navigation"
              className="mt-10 flex flex-col gap-2"
            >
              {navigation.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="rounded-xl px-4 py-3.5 text-base font-semibold text-text-secondary hover:bg-surface-muted hover:text-text-primary"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05 + 0.08,
                    duration: 0.2,
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto space-y-3 border-t border-border pt-5">
              <Button variant="outline" className="w-full">
                Sign in
              </Button>

              <Button className="w-full">Get started</Button>
            </div>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
}