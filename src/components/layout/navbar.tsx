"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MobileNav } from "@/components/layout/mobile-nav";


const navigation = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Find services", href: "#services" },
  { label: "Become a provider", href: "#provider" },
];

export function Navbar() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label="NexusCart home"
        >
            <motion.span
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.96 }}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-primary"
            >
                N
            </motion.span>

            <span className="text-lg font-bold tracking-tight text-text-primary">
                NexusCart
            </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign in
          </Button>

          <Button size="sm">Get started</Button>

            <button
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={mobileNavOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMobileNavOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary hover:bg-surface-muted hover:text-text-primary md:hidden"
            >
                <span className="sr-only">Open navigation menu</span>

                    <span className="flex flex-col gap-1.5" aria-hidden="true">
                    <span className="h-0.5 w-5 rounded-full bg-current" />
                    <span className="h-0.5 w-5 rounded-full bg-current" />
                    <span className="h-0.5 w-5 rounded-full bg-current" />
                </span>
            </button>
        </div>
      </div>

        <MobileNav
            open={mobileNavOpen}
            onClose={() => setMobileNavOpen(false)}
        />

    </header>
  );
}