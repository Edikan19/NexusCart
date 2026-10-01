import { NotificationMenu } from "@/components/layout/notification-menu";
import { UserMenu } from "@/components/layout/user-menu";

export function DashboardHeader() {
  return (
    <header className="hidden h-16 items-center justify-between border-b border-border bg-surface px-6 lg:flex">
      <div>
        <p className="text-sm font-semibold text-text-primary">
          Dashboard
        </p>

        <p className="text-xs text-text-muted">
          Manage your NexusCart activity
        </p>
      </div>

      <div className="flex items-center gap-2">
        <NotificationMenu />
        <UserMenu />
      </div>
    </header>
  );
}