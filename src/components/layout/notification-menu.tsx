"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function NotificationMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Notifications"
        aria-haspopup="menu"
        aria-expanded={open}
        className="relative flex h-10 w-10 items-center justify-center rounded-xl text-text-secondary transition-colors hover:bg-surface-muted hover:text-text-primary"
      >
        <span aria-hidden="true" className="text-lg">
          ◉
        </span>

        <span
          aria-hidden="true"
          className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent ring-2 ring-surface"
        />
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="Notifications"
          className="absolute right-0 top-full z-50 mt-2 w-[min(22rem,calc(100vw-2rem))] rounded-xl border border-border bg-surface p-1.5 shadow-xl"
        >
          <div className="flex items-center justify-between px-3 py-2.5">
            <p className="text-sm font-semibold text-text-primary">
              Notifications
            </p>

            <Link
              href="/dashboard/notifications"
              onClick={() => setOpen(false)}
              className="text-xs font-semibold text-primary hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="border-t border-border px-3 py-8 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-text-muted">
              ◉
            </div>

            <p className="mt-3 text-sm font-semibold text-text-primary">
              You&apos;re all caught up
            </p>

            <p className="mt-1 text-xs leading-5 text-text-muted">
              New booking updates and messages will appear here.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}