"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function UserMenu() {
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
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-xl p-1.5 transition-colors hover:bg-surface-muted"
      >
        <span
          className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-muted text-sm font-bold text-primary"
          aria-hidden="true"
        >
          U
        </span>

        <span className="hidden text-left sm:block">
          <span className="block text-sm font-semibold text-text-primary">
            User
          </span>
          <span className="block text-xs text-text-muted">Customer</span>
        </span>

        <span
          className="hidden text-text-muted sm:block"
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="User menu"
          className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-border bg-surface p-1.5 shadow-xl"
        >
          <div className="border-b border-border px-3 py-2.5">
            <p className="text-sm font-semibold text-text-primary">User</p>
            <p className="text-xs text-text-muted">Customer account</p>
          </div>

          <div className="py-1">
            <Link
              href="/dashboard/settings"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm text-text-secondary hover:bg-surface-muted hover:text-text-primary"
            >
              Account settings
            </Link>

            <Link
              href="/dashboard"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm text-text-secondary hover:bg-surface-muted hover:text-text-primary"
            >
              Dashboard
            </Link>
          </div>

          <div className="border-t border-border pt-1">
            <button
              type="button"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-danger hover:bg-danger-soft"
            >
              Sign out
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}