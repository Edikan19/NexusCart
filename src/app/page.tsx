import Link from "next/link";

import { Navbar } from "@/components/layout/navbar";
import { ProblemSearch } from "@/components/ui/problem-search";

const popularServices = [
  "Plumbing",
  "Electrical",
  "Generator Repair",
  "AC Repair",
  "Phone Repair",
  "Cleaning",
];

const services = [
  {
    name: "Plumbing",
    description: "Leaks, blocked drains, taps, pipes, and water problems.",
    icon: "⌁",
  },
  {
    name: "Electrical",
    description: "Electrical faults, installations, switches, and repairs.",
    icon: "ϟ",
  },
  {
    name: "Generator Repair",
    description: "Troubleshoot starting, power, servicing, and generator faults.",
    icon: "◈",
  },
  {
    name: "AC Repair",
    description: "Cooling problems, servicing, installations, and repairs.",
    icon: "❄",
  },
  {
    name: "Phone Repair",
    description: "Screen, battery, charging, software, and device issues.",
    icon: "▣",
  },
  {
    name: "Cleaning",
    description: "Reliable help for homes, offices, move-ins, and deep cleaning.",
    icon: "✦",
  },
  {
    name: "Laptop Repair",
    description: "Hardware, software, performance, and troubleshooting.",
    icon: "▤",
  },
  {
    name: "Car Repair",
    description: "Find help with maintenance, diagnostics, and repairs.",
    icon: "⌂",
  },
];

const steps = [
  {
    number: "01",
    title: "Describe the problem",
    description:
      "Tell us what is wrong in your own words. You don't need to know the technical name or the right service category.",
  },
  {
    number: "02",
    title: "Find the right solution",
    description:
      "Explore relevant services, trusted providers, and products that can help solve the problem.",
  },
  {
    number: "03",
    title: "Get it solved",
    description:
      "Choose a provider, request a booking, and move the problem from discovery to completion.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute right-[-10rem] top-32 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pb-24 sm:pt-24 lg:px-8 lg:pb-28 lg:pt-28">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-muted px-3 py-1.5 text-xs font-semibold text-primary">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                />
                Local solutions, made simple
              </div>

              <h1 className="mt-7 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                Tell us what&apos;s wrong.
                <span className="block text-primary">
                  We&apos;ll help you solve it.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
                Find trusted local service providers, products, and practical
                solutions for everyday problems — without needing to know what
                service you need first.
              </p>

              <div className="mx-auto mt-9 max-w-2xl">
                <ProblemSearch />

                <p className="mt-3 text-xs text-text-muted">
                  Describe the problem in your own words. We&apos;ll help you
                  figure out what to do next.
                </p>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="#services"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-primary transition-transform hover:-translate-y-0.5"
                >
                  Browse services
                </Link>

                <Link
                  href="#provider"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-surface px-5 text-sm font-semibold text-text-primary transition-colors hover:bg-surface-muted"
                >
                  Become a provider
                </Link>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-5xl">
              <div className="rounded-2xl border border-border bg-surface/80 p-4 shadow-xl shadow-black/[0.04] backdrop-blur-sm sm:p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="mr-1 text-xs font-semibold text-text-muted">
                    Popular:
                  </span>

                  {popularServices.map((service) => (
                    <Link
                      key={service}
                      href="#services"
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-primary/30 hover:bg-primary-muted hover:text-primary"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="border-t border-border bg-surface"
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-primary">
                How NexusCart works
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                From a problem to a practical solution.
              </h2>

              <p className="mt-4 text-text-secondary">
                You don&apos;t need to figure everything out before asking for
                help. Start with the problem and let NexusCart guide you.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <span className="text-sm font-bold text-primary">
                    {step.number}
                  </span>

                  <h3 className="mt-6 text-lg font-bold text-text-primary">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-text-secondary">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold text-primary">
                  Explore services
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                  Help for everyday problems.
                </h2>

                <p className="mt-4 text-text-secondary">
                  Browse common categories or describe your problem and let us
                  help you find the right direction.
                </p>
              </div>

              <Link
                href="#services"
                className="text-sm font-semibold text-primary hover:underline"
              >
                View all services →
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href="#services"
                  className="group rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-black/[0.04]"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-muted text-lg text-primary"
                  >
                    {service.icon}
                  </span>

                  <h3 className="mt-5 font-bold text-text-primary">
                    {service.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {service.description}
                  </p>

                  <span className="mt-5 inline-block text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Explore →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

                <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold text-primary">
                  Built around trust
                </p>

                <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                  Finding help should feel safer and simpler.
                </h2>

                <p className="mt-5 max-w-2xl text-text-secondary">
                  NexusCart is designed to help customers make better
                  decisions when choosing local service providers.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-background p-5">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-success-soft text-success"
                    >
                      ✓
                    </span>

                    <h3 className="mt-4 font-bold text-text-primary">
                      Verification
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      Clear verification signals help customers understand
                      which providers have been checked by the platform.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-5">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-muted text-primary"
                    >
                      ★
                    </span>

                    <h3 className="mt-4 font-bold text-text-primary">
                      Real reviews
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      Reviews are designed around completed jobs so customers
                      can learn from real experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-primary/10 bg-primary-muted p-8 sm:p-10">
                <span className="text-sm font-semibold text-primary">
                  One platform
                </span>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-text-primary">
                  Services, products, and guidance in one place.
                </h3>

                <p className="mt-4 text-sm leading-6 text-text-secondary">
                  Start with a problem. NexusCart can eventually help you
                  discover the service, provider, or product that makes sense
                  for the situation.
                </p>

                <Link
                  href="/dashboard"
                  className="mt-7 inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-primary transition-transform hover:-translate-y-0.5"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="provider"
          className="border-t border-border"
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="relative overflow-hidden rounded-3xl bg-text-primary px-6 py-12 sm:px-10 lg:px-14 lg:py-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl"
              />

              <div className="relative max-w-2xl">
                <p className="text-sm font-semibold text-primary-muted">
                  For service providers
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Turn your skills into trusted local opportunities.
                </h2>

                <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">
                  Build your provider profile, receive relevant customer
                  requests, manage jobs, and grow your reputation on NexusCart.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/dashboard"
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-text-primary transition-transform hover:-translate-y-0.5"
                  >
                    Become a provider
                  </Link>

                  <Link
                    href="#how-it-works"
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    See how it works
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-sm">
              <Link
                href="/"
                className="flex items-center gap-2.5"
                aria-label="NexusCart home"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                  N
                </span>

                <span className="font-bold tracking-tight text-text-primary">
                  NexusCart
                </span>
              </Link>

              <p className="mt-4 text-sm leading-6 text-text-secondary">
                A trusted local marketplace for solving everyday problems.
              </p>
            </div>

            <nav
              aria-label="Footer navigation"
              className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm"
            >
              <Link
                href="#how-it-works"
                className="text-text-secondary hover:text-text-primary"
              >
                How it works
              </Link>

              <Link
                href="#services"
                className="text-text-secondary hover:text-text-primary"
              >
                Services
              </Link>

              <Link
                href="#provider"
                className="text-text-secondary hover:text-text-primary"
              >
                Become a provider
              </Link>

              <Link
                href="/dashboard"
                className="text-text-secondary hover:text-text-primary"
              >
                Dashboard
              </Link>
            </nav>
          </div>

          <div className="mt-10 border-t border-border pt-6">
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} NexusCart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}