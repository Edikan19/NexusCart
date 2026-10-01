import * as React from "react";

import { Navbar } from "@/components/layout/navbar";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">{children}</main>
    </div>
  );
}