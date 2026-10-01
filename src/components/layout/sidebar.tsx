"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: "⌂",
  },
  {
    label: "Bookings",
    href: "/dashboard/bookings",
    icon: "▣",
  },
  {
    label: "Messages",
    href: "/dashboard/messages",
    icon: "◌",
  },
  {
    label: "Notifications",
    href: "/dashboard/notifications",
    icon: "◉",
  },
];

const secondaryNavigation = [
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: "⚙",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-border bg-surface lg:flex lg:flex-col">
      <div className="flex h-full min-h-[calc(100vh-4rem)] flex-col p-4">
        <nav aria-label="Dashboard navigation" className="space-y-1">
          {navigation.map((item) => {
            const active =
              item.href === "/dashboard"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary-muted text-primary"
                    : "text-text-secondary hover:bg-surface-muted hover:text-text-primary",
                ].join(" ")}
                aria-current={active ? "page" : undefined}
              >
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-base"
                >
                  {item.icon}
                </span>

                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="my-5 border-t border-border" />

        <nav aria-label="Dashboard settings">
          {secondaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                pathname.startsWith(item.href)
                  ? "bg-primary-muted text-primary"
                  : "text-text-secondary hover:bg-surface-muted hover:text-text-primary",
              ].join(" ")}
            >
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-base"
              >
                {item.icon}
              </span>

              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto rounded-xl bg-primary-muted p-4">
          <p className="text-sm font-semibold text-text-primary">
            Need a solution?
          </p>

          <p className="mt-1 text-xs leading-5 text-text-secondary">
            Describe your problem and NexusCart can help you find the right
            local solution.
          </p>

          <Link
            href="/"
            className="mt-3 inline-flex text-xs font-semibold text-primary hover:underline"
          >
            Find a solution →
          </Link>
        </div>
      </div>
    </aside>
  );
}