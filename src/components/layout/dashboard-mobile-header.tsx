"use client";

import Link from "next/link";
import { useState } from "react";

import { MobileNav } from "@/components/layout/mobile-nav";
import { NotificationMenu } from "@/components/layout/notification-menu";
import { UserMenu } from "@/components/layout/user-menu";

export function DashboardMobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex h-16 items-center justify-between border-b border-border bg-surface px-4 lg:hidden">
        <Link
          href="/dashboard"
          className="flex items-center gap-2.5"
          aria-label="NexusCart dashboard"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-primary">
            N
          </span>

          <span className="font-bold tracking-tight text-text-primary">
            NexusCart
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <NotificationMenu />

          <UserMenu />

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open dashboard navigation"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-surface-muted hover:text-text-primary"
          >
            <span className="sr-only">Open dashboard navigation</span>

            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  );
}