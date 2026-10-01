import { DashboardHeader } from "@/components/layout/dashboard-header";
import { DashboardMobileHeader } from "@/components/layout/dashboard-mobile-header";
import { Sidebar } from "@/components/layout/sidebar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <DashboardMobileHeader />

      <div className="flex min-h-[calc(100vh-4rem)]">
        <Sidebar />

        <div className="min-w-0 flex-1">
          <DashboardHeader />

          <main>
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-2">
                <Badge variant="primary" dot>
                  Application
                </Badge>

                <h1 className="text-3xl font-bold tracking-tight text-text-primary">
                  Dashboard
                </h1>

                <p className="max-w-2xl text-text-secondary">
                  Your NexusCart workspace will live here.
                </p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <Card className="p-6">
                  <p className="text-sm font-medium text-text-muted">
                    Upcoming
                  </p>

                  <p className="mt-2 text-3xl font-bold text-text-primary">
                    0
                  </p>
                </Card>

                <Card className="p-6">
                  <p className="text-sm font-medium text-text-muted">
                    Active jobs
                  </p>

                  <p className="mt-2 text-3xl font-bold text-text-primary">
                    0
                  </p>
                </Card>

                <Card className="p-6">
                  <p className="text-sm font-medium text-text-muted">
                    Completed
                  </p>

                  <p className="mt-2 text-3xl font-bold text-text-primary">
                    0
                  </p>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}