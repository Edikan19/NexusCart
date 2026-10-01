"use client";

import { useState } from "react";
import { ProblemSearch } from "@/components/ui/problem-search";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";


const problems = [
  {
    icon: "⚡",
    title: "Electrical",
    description: "Power, wiring and electrical problems",
  },
  {
    icon: "🔧",
    title: "Repairs",
    description: "Fix something that's broken",
  },
  {
    icon: "🚿",
    title: "Plumbing",
    description: "Leaks, pipes and water problems",
  },
  {
    icon: "💻",
    title: "Technology",
    description: "Computers, phones and devices",
  },
];

const providers = [
  {
    initials: "AO",
    name: "Apex Home Services",
    category: "Electrical & Repairs",
    rating: "4.9",
    jobs: "126 jobs",
    verified: true,
  },
  {
    initials: "PM",
    name: "Prime Maintenance",
    category: "Plumbing & Maintenance",
    rating: "4.8",
    jobs: "94 jobs",
    verified: true,
  },
  {
    initials: "TS",
    name: "TechSolve",
    category: "Computer Repairs",
    rating: "4.9",
    jobs: "81 jobs",
    verified: true,
  },
];

export default function DesignSystemPage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-background">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white shadow-primary">
            N
          </div>

          <span className="text-lg font-bold tracking-tight text-text-primary">
            NexusCart
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium text-text-secondary md:flex">
          <a href="#" className="hover:text-text-primary">
            How it works
          </a>
          <a href="#" className="hover:text-text-primary">
            Find services
          </a>
          <a href="#" className="hover:text-text-primary">
            Become a provider
          </a>
        </div>

        <Button variant="outline" size="sm">
          Sign in
        </Button>
      </nav>

      {/* Hero */}
      <section className="relative px-6 pb-20 pt-16">
        <div className="absolute left-1/2 top-0 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="primary" dot>
            Trusted local solutions
          </Badge>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-text-primary sm:text-6xl">
            What problem are you trying to solve?
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
            Tell us what you need in your own words. NexusCart helps you find
            trusted local providers and the products you need to get it solved.
          </p>

        <div className="mx-auto mt-9 max-w-2xl">
            <ProblemSearch />

            <p className="mt-3 text-xs text-text-muted">
                Describe the problem. You don&apos;t need to know what service you need.
            </p>
        </div>
        <div className="mx-auto mt-9 max-w-2xl">
            <ProblemSearch />

            <p className="mt-3 text-xs text-text-muted">
                Describe the problem. You don&apos;t need to know what service you need.
            </p>
        </div>
        </div>
      </section>

      {/* Problem categories */}
      <section className="border-y border-border/70 bg-white/70 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-primary">
                START HERE
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-text-primary">
                Common problems
              </h2>
            </div>

            <button className="hidden text-sm font-semibold text-primary md:block">
              Explore all
            </button>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem) => (
              <Card
                key={problem.title}
                interactive
                className="group border-transparent p-5 shadow-sm hover:bg-white"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-muted text-2xl transition-transform duration-200 group-hover:scale-105">
                  {problem.icon}
                </div>

                <h3 className="mt-5 font-semibold text-text-primary">
                  {problem.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {problem.description}
                </p>

                <div className="mt-5 text-sm font-semibold text-primary">
                  Explore →
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <Badge variant="success" dot>
              Built around trust
            </Badge>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary">
              Find people you can trust to get the job done.
            </h2>

            <p className="mt-3 text-text-secondary">
              See verification, experience, completed jobs and customer
              feedback before you book.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {providers.map((provider) => (
              <Card
                key={provider.name}
                interactive
                className="overflow-hidden p-0"
              >
                <div className="h-28 bg-gradient-to-br from-primary-muted via-white to-accent-muted" />

                <div className="-mt-10 px-5 pb-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-white bg-primary text-xl font-bold text-white shadow-md">
                    {provider.initials}
                  </div>

                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-text-primary">
                        {provider.name}
                      </h3>

                      <p className="mt-1 text-sm text-text-secondary">
                        {provider.category}
                      </p>
                    </div>

                    {provider.verified ? (
                      <Badge variant="success" dot>
                        Verified
                      </Badge>
                    ) : null}
                  </div>

                  <div className="mt-5 flex items-center gap-4 text-sm">
                    <span className="font-semibold text-text-primary">
                      ★ {provider.rating}
                    </span>

                    <span className="text-text-muted">
                      {provider.jobs}
                    </span>
                  </div>

                  <Button
                    variant="outline"
                    className="mt-5 w-full"
                    onClick={() => setDialogOpen(true)}
                  >
                    View provider
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-4 rounded-3xl bg-primary p-8 text-white shadow-primary md:grid-cols-3 md:p-10">
          {[
            ["✓", "Verified providers", "Know who you're booking."],
            ["★", "Real customer reviews", "Learn from completed jobs."],
            ["↗", "Complete solutions", "Services and products together."],
          ].map(([icon, title, description]) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg">
                {icon}
              </div>

              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-indigo-100">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title="Provider preview"
        description="This will eventually contain the provider's complete profile."
      >
        <div className="space-y-4">
          <Badge variant="success" dot>
            Verified provider
          </Badge>

          <p className="text-sm leading-6 text-text-secondary">
            Provider profiles will show services, experience, availability,
            reviews, completed jobs and relevant trust information.
          </p>

          <Button
            className="w-full"
            onClick={() => setDialogOpen(false)}
          >
            Close preview
          </Button>
        </div>
      </Dialog>
    </main>
  );
}